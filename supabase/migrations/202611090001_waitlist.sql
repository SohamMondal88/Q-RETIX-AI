create table if not exists public.waitlist_entries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null unique check (email = lower(email)),
  purpose text check (purpose is null or char_length(purpose) <= 1000),
  verified_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.waitlist_otp_challenges (
  email text primary key check (email = lower(email)),
  name text not null,
  purpose text,
  code_hash text not null,
  expires_at timestamptz not null,
  attempts integer not null default 0 check (attempts >= 0),
  last_sent_at timestamptz not null default now()
);

alter table public.waitlist_entries enable row level security;
alter table public.waitlist_otp_challenges enable row level security;

create or replace function public.prepare_waitlist_otp(
  p_name text,
  p_email text,
  p_purpose text,
  p_code_hash text
) returns void
language plpgsql security definer set search_path = public as $$
begin
  if exists (select 1 from public.waitlist_entries where email = p_email) then
    raise exception 'This email is already confirmed on the waitlist';
  end if;

  if exists (
    select 1 from public.waitlist_otp_challenges
    where email = p_email and last_sent_at > now() - interval '60 seconds'
  ) then
    raise exception 'Please wait before requesting another code';
  end if;

  insert into public.waitlist_otp_challenges (email, name, purpose, code_hash, expires_at, attempts, last_sent_at)
  values (p_email, p_name, p_purpose, p_code_hash, now() + interval '10 minutes', 0, now())
  on conflict (email) do update set
    name = excluded.name,
    purpose = excluded.purpose,
    code_hash = excluded.code_hash,
    expires_at = excluded.expires_at,
    attempts = 0,
    last_sent_at = excluded.last_sent_at;
end;
$$;

create or replace function public.verify_waitlist_otp(
  p_email text,
  p_code_hash text
) returns table (verified boolean, name text)
language plpgsql security definer set search_path = public as $$
declare
  challenge public.waitlist_otp_challenges%rowtype;
begin
  select * into challenge from public.waitlist_otp_challenges where email = p_email for update;
  if not found or challenge.expires_at < now() or challenge.attempts >= 5 then
    return query select false, null::text;
    return;
  end if;

  if challenge.code_hash <> p_code_hash then
    update public.waitlist_otp_challenges set attempts = attempts + 1 where email = p_email;
    return query select false, null::text;
    return;
  end if;

  insert into public.waitlist_entries (name, email, purpose, verified_at, updated_at)
  values (challenge.name, challenge.email, challenge.purpose, now(), now())
  on conflict (email) do update set
    name = excluded.name,
    purpose = excluded.purpose,
    verified_at = excluded.verified_at,
    updated_at = excluded.updated_at;

  delete from public.waitlist_otp_challenges where email = p_email;
  return query select true, challenge.name;
end;
$$;

revoke all on function public.prepare_waitlist_otp(text, text, text, text) from public;
revoke all on function public.verify_waitlist_otp(text, text) from public;
grant execute on function public.prepare_waitlist_otp(text, text, text, text) to service_role;
grant execute on function public.verify_waitlist_otp(text, text) to service_role;
