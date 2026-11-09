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
