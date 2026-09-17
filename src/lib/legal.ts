import type { Metadata } from "next";

export const LEGAL_LAST_UPDATED = "September 17, 2026";
export const LEGAL_CONTACT = "contact@qretix.ai";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};

export type LegalDocument = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  sections: LegalSection[];
  references?: { label: string; href: string }[];
};

export const legalDocuments = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    shortTitle: "Privacy",
    description: "How Q-RETIX AI collects, uses, discloses, and protects personal information.",
    intro: "This policy explains the personal information Q-RETIX AI may handle through this public website, direct communications, and any services that link to this policy. It applies where Q-RETIX AI determines how and why personal information is processed.",
    sections: [
      { title: "Scope and who we are", paragraphs: [
        "Q-RETIX AI develops research-oriented artificial-intelligence concepts and content for pharmaceutical and life-sciences discovery. This public website currently presents company, research, blog, career, and contact information. It does not currently provide public user accounts, payment processing, or an authenticated research-data upload workflow.",
        "A separate signed agreement or product-specific notice may govern a future or private service. If that notice conflicts with this policy for that service, the more specific notice controls."
      ] },
      { title: "Information we may collect", bullets: [
        "Information you choose to send, such as your name, email address, organization, role, inquiry, résumé, or other message content.",
        "Basic technical and security data that hosting and network providers ordinarily generate, such as IP address, browser and device type, request time, referring page, and diagnostic logs.",
        "Preference data stored on your device if a feature needs it. See the Cookie Policy for the current cookie position.",
        "Public or professional information when you interact with Q-RETIX AI through social media, events, or business correspondence."
      ], note: "Do not send patient records, protected health information, genetic data, unpublished clinical data, trade secrets, or other sensitive research material through public email links or website forms unless Q-RETIX AI has expressly authorized a secure channel and appropriate agreement." },
      { title: "How and why we use information", bullets: [
        "Respond to inquiries, evaluate collaboration or employment interest, and take steps requested before entering a contract.",
        "Operate, maintain, secure, troubleshoot, and improve the website.",
        "Send updates you request and honor any unsubscribe or withdrawal request.",
        "Protect rights, investigate misuse, comply with law, and establish or defend legal claims."
      ], paragraphs: ["Where applicable, legal bases may include consent, steps requested before a contract, performance of a contract, legitimate interests in operating and securing the website, and compliance with legal obligations. We do not use public website submissions to train a shared AI model unless a specific notice or agreement clearly says so."] },
      { title: "Disclosure and service providers", paragraphs: [
        "We may disclose information to hosting, security, communications, professional-advisory, and other service providers only as reasonably needed for their services; to a successor in a genuine corporate transaction; or when required to comply with law or protect people, rights, and systems. We do not sell personal information or share it for cross-context behavioral advertising based on the website configuration represented by this notice.",
        "Links to third-party sites and social networks are governed by those parties’ own policies. Opening an email link uses your chosen email provider."
      ] },
      { title: "Retention, security, and international processing", paragraphs: [
        "We retain personal information only for as long as reasonably needed for the purpose collected, legitimate operational records, dispute resolution, security, and legal obligations. Retention depends on the information and context rather than one universal period.",
        "We use reasonable administrative, technical, and organizational safeguards appropriate to the information and service. No internet transmission or storage method is completely secure, and this policy does not claim a certification that has not been independently verified.",
        "Providers may process information in countries other than your own. Where law requires a transfer mechanism or additional safeguards, we will use an appropriate mechanism for the relevant processing."
      ] },
      { title: "Your choices and privacy rights", paragraphs: [
        "Depending on where you live and whether a law applies, you may have rights to request access, correction, deletion, portability, restriction, objection, withdrawal of consent, or information about disclosures. You may also have a right to appeal a decision or complain to a regulator. These rights can be subject to verification and legal exceptions.",
        `Use the Data Rights page or email ${LEGAL_CONTACT}. We may request information needed to verify identity and authority, and will use it only for the request and related records. We will not discriminate against you for exercising an applicable privacy right.`
      ] },
      { title: "Children and policy changes", paragraphs: [
        "The website is intended for professional and general audiences and is not directed to children. We do not knowingly request personal information from children through this website. If you believe a child submitted information, contact us so we can assess and delete it where appropriate.",
        "We may update this policy as the website, services, or law changes. The date above identifies the current version. Material changes will be presented through an appropriate website or service notice."
      ] }
    ],
    references: [
      { label: "EU General Data Protection Regulation", href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
      { label: "California Attorney General — CCPA", href: "https://oag.ca.gov/privacy/ccpa" }
    ]
  },
  terms: {
    slug: "terms", title: "Website Terms of Use", shortTitle: "Terms",
    description: "The terms that govern access to and use of the Q-RETIX AI public website.",
    intro: "These terms govern the public Q-RETIX AI website. By accessing or using it, you agree to these terms. If you use the website for an organization, you represent that you may bind that organization.",
    sections: [
      { title: "Website purpose and eligibility", paragraphs: [
        "The website provides general information about Q-RETIX AI, its research interests, publications, and potential offerings. It is not an authenticated software platform, subscription service, clinical system, laboratory service, or regulated medical product unless a separate signed agreement expressly says otherwise.",
        "You must be legally able to enter these terms. If you do not agree, do not use the website."
      ] },
      { title: "Permitted use", paragraphs: ["You may view and use the website for lawful personal, professional, informational, and evaluation purposes. You must also follow the Acceptable Use Policy."], bullets: [
        "Do not interfere with security, availability, or other users.",
        "Do not misrepresent your identity or affiliation.",
        "Do not use content or outputs as the sole basis for medical, clinical, regulatory, safety-critical, or patient-care decisions.",
        "Do not remove ownership notices or imply Q-RETIX AI endorses a product, study, or conclusion without written permission."
      ] },
      { title: "Research and AI information", paragraphs: ["Scientific articles, candidate targets, rankings, model descriptions, and AI-assisted material are hypotheses and informational research content. They may be incomplete, outdated, or incorrect and require independent review, experimental validation, and qualified professional judgment. Read the Research & Medical Disclaimer and AI Transparency Notice before relying on this content."] },
      { title: "Intellectual property and feedback", paragraphs: [
        "The website, brand, visual design, code, and original content are owned by Q-RETIX AI or its licensors and are protected by applicable intellectual-property laws. Third-party names, papers, data, and marks remain the property of their respective owners.",
        "Unless a page states otherwise, these terms do not grant a license to reproduce, distribute, commercialize, train models on, or create derivative works from website content. If you send non-confidential feedback, you permit Q-RETIX AI to use it without restriction or compensation. Do not submit confidential feedback."
      ] },
      { title: "Third-party content and links", paragraphs: ["The website may link to articles, databases, notebooks, social platforms, or other third-party resources. Links do not imply endorsement. Q-RETIX AI does not control and is not responsible for third-party availability, accuracy, security, terms, or privacy practices."] },
      { title: "Disclaimers", paragraphs: ["To the maximum extent permitted by law, the website and content are provided “as is” and “as available.” Q-RETIX AI disclaims implied warranties, including merchantability, fitness for a particular purpose, title, non-infringement, accuracy, and uninterrupted availability. Nothing here excludes a warranty that cannot legally be excluded."] },
      { title: "Limitation of liability", paragraphs: [
        "To the maximum extent permitted by law, Q-RETIX AI and its contributors will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, data, goodwill, research opportunity, or business interruption arising from the public website. Where liability cannot be excluded, it is limited to the minimum amount permitted by law.",
        "Some jurisdictions do not allow certain exclusions or limitations, so portions of this section may not apply to you."
      ] },
      { title: "Changes, suspension, and governing terms", paragraphs: [
        "We may change or discontinue website content and may update these terms. The date above identifies the current version; continued use after an update means you accept the revised terms where permitted by law.",
        "Any signed agreement governing a Q-RETIX AI product or collaboration takes priority for that relationship. Otherwise, applicable law and courts are determined by the operator’s principal place of business, subject to mandatory consumer protections and conflict-of-law rules."
      ] }
    ]
  },
  cookies: {
    slug: "cookies", title: "Cookie Policy", shortTitle: "Cookies",
    description: "The current use of cookies, local storage, and similar technologies on Q-RETIX AI.",
    intro: "This policy explains cookies and similar browser technologies. It is deliberately based on the current public website configuration rather than listing advertising or analytics technologies that are not presently implemented.",
    sections: [
      { title: "Current position", paragraphs: [
        "The Q-RETIX AI public website does not currently configure advertising cookies, cross-site behavioral advertising, or a third-party analytics platform. Essential infrastructure providers may still process request data or use strictly necessary technologies to deliver, protect, and balance website traffic.",
        "If non-essential analytics, personalization, or advertising technologies are added, this policy and any legally required consent controls will be updated before or when those technologies are enabled."
      ] },
      { title: "What these technologies are", paragraphs: ["Cookies are small text files stored by a browser. Local storage, pixels, software-development kits, and similar technologies can remember information or communicate events. Session technologies expire when a session ends; persistent technologies remain until their expiry or removal."] },
      { title: "Strictly necessary uses", bullets: [
        "Deliver pages and static assets, route traffic, and maintain network reliability.",
        "Prevent abuse, detect malicious requests, and protect website infrastructure.",
        "Remember a choice only when a requested feature cannot reasonably work without it."
      ], note: "Strictly necessary technologies generally cannot be disabled through a consent banner because the requested website function depends on them, but browser settings may still block them and cause features to fail." },
      { title: "Your controls", paragraphs: ["You can inspect, block, or delete browser storage through your browser or device settings. Blocking all cookies may affect security or functionality. Global Privacy Control signals are relevant to sale or sharing for targeted advertising; the current website does not sell or share personal information for that purpose."] },
      { title: "Third-party destinations", paragraphs: ["Following a link to a social network, publication, or other website may allow that party to use its own cookies. Those technologies are controlled by the third party and covered by its notices, not this policy."] }
    ]
  },
  gdpr: {
    slug: "gdpr", title: "EEA, UK & Swiss Privacy Notice", shortTitle: "European Privacy",
    description: "Additional information for people in the EEA, United Kingdom, and Switzerland.",
    intro: "This notice supplements the Privacy Policy for processing subject to European data-protection law. It describes Q-RETIX AI’s intended approach without claiming certifications, registrations, appointments, or establishment that have not been verified.",
    sections: [
      { title: "Controller and scope", paragraphs: [`For public website interactions, the relevant Q-RETIX AI operating entity acts as controller when it determines the purposes and means of processing. Contact ${LEGAL_CONTACT} to identify the entity relevant to your interaction. A signed service agreement may separately identify controller and processor roles.`] },
      { title: "Legal bases", bullets: [
        "Consent, for optional communications or another purpose presented when requested.",
        "Contract or pre-contractual steps, when you ask about a service, role, or collaboration.",
        "Legitimate interests, such as operating, securing, improving, and understanding the website or managing professional relationships, balanced against your rights.",
        "Legal obligation and legal claims, when processing is necessary to comply with law or protect rights."
      ] },
      { title: "Your rights", bullets: [
        "Access, correction, erasure, restriction, and data portability where their legal conditions apply.",
        "Object to processing based on legitimate interests or direct marketing.",
        "Withdraw consent at any time without affecting earlier lawful processing.",
        "Complain to the data-protection authority where you live, work, or believe an infringement occurred."
      ], paragraphs: ["These rights are not absolute. We may need to verify identity, preserve records required by law, protect others’ rights, or explain why an exception applies."] },
      { title: "Automated decisions and sensitive data", paragraphs: ["The public website does not currently make decisions producing legal or similarly significant effects about visitors using solely automated processing. Do not submit special-category data, patient data, or criminal-offence data through public website channels unless expressly requested through an approved process."] },
      { title: "International transfers and representatives", paragraphs: [
        "If covered personal data is transferred to a country without an adequacy decision, the relevant service or agreement will use a legally recognized safeguard where required, such as standard contractual clauses, together with supplementary measures where appropriate.",
        "Q-RETIX AI does not state in this notice that it has appointed a data protection officer or EU/UK representative. If an appointment becomes legally required, current contact details will be published here."
      ] },
      { title: "Requests", paragraphs: [`Submit a request through the Data Rights page or email ${LEGAL_CONTACT}. Please state your country and the nature of your relationship with Q-RETIX AI so the request can be routed correctly.`] }
    ],
    references: [{ label: "EU General Data Protection Regulation", href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" }]
  },
  disclaimer: {
    slug: "disclaimer", title: "Research & Medical Disclaimer", shortTitle: "Disclaimer",
    description: "Important limits on scientific, medical, regulatory, and AI-assisted website content.",
    intro: "Q-RETIX AI explores computational approaches to pharmaceutical and biological research. The website communicates research concepts—not medical care, validated clinical conclusions, or regulatory approval.",
    sections: [
      { title: "Research and education only", paragraphs: ["Website content is provided for general informational, educational, and research-discussion purposes. It is not medical advice, a diagnosis, treatment, prescription, clinical recommendation, regulatory submission, laboratory result, or substitute for qualified professional judgment."] },
      { title: "AI and computational outputs", paragraphs: ["Generative models and computational pipelines can produce incomplete, biased, outdated, irreproducible, or incorrect outputs. A target ranking, novelty score, mechanism, citation, compound suggestion, or model narrative should be treated as a hypothesis until independently checked against primary sources and validated through appropriate experiments."], bullets: [
        "Verify citations, datasets, identifiers, model versions, assumptions, and units.",
        "Use qualified human review and suitable controls before drawing conclusions.",
        "Complete laboratory, ethics, safety, clinical, legal, and regulatory review appropriate to the use.",
        "Do not use website content as the sole basis for patient care or safety-critical decisions."
      ] },
      { title: "No therapeutic or regulatory claim", paragraphs: ["Discussion of a gene, protein, pathway, compound, intervention, or disease does not establish safety, efficacy, causation, novelty, patentability, freedom to operate, clinical utility, or approval by any regulator. Terms such as “candidate,” “target,” “promising,” or “disease-modifying” describe a research hypothesis unless an authoritative cited source clearly establishes otherwise."] },
      { title: "Scientific currency and external sources", paragraphs: ["Science changes quickly. Publication dates indicate when content was prepared, not that it is continuously reviewed. External papers, databases, notebooks, and links may change, contain errors, or be retracted. Users are responsible for checking the latest primary evidence."] },
      { title: "Emergencies and professional advice", paragraphs: ["Do not use this website for a medical emergency. Contact local emergency services and a qualified healthcare professional. Seek appropriate medical, scientific, regulatory, legal, intellectual-property, and biosafety advice for your circumstances."] }
    ]
  },
  acceptableUse: {
    slug: "acceptable-use", title: "Acceptable Use Policy", shortTitle: "Acceptable Use",
    description: "Rules designed to protect Q-RETIX AI, its users, research integrity, and public safety.",
    intro: "This policy applies to the public website and any Q-RETIX AI service that incorporates it. A signed agreement may impose additional restrictions.",
    sections: [
      { title: "Lawful and authorized use", bullets: [
        "Use the website only for lawful purposes and within your authority.",
        "Do not infringe privacy, confidentiality, intellectual property, publicity, contractual, or other rights.",
        "Do not submit data you lack permission to use, including patient, clinical, genetic, or proprietary data."
      ] },
      { title: "Security and platform integrity", bullets: [
        "Do not introduce malware, exploit vulnerabilities, bypass access controls, evade rate limits, or interfere with availability.",
        "Do not perform denial-of-service testing, destructive testing, credential attacks, social engineering, or unauthorized scanning.",
        "Do not scrape or automate access in a way that burdens the service, violates access instructions, or circumvents technical controls."
      ] },
      { title: "Scientific and AI misuse", bullets: [
        "Do not represent unvalidated output as clinical evidence, regulatory approval, or a proven therapeutic result.",
        "Do not use outputs to make autonomous medical or other high-impact decisions about a person.",
        "Do not use the service to facilitate biological harm, unsafe wet-lab activity, illegal drug development, or evasion of safety oversight.",
        "Do not fabricate research, citations, data, authorship, peer review, or provenance."
      ] },
      { title: "Abusive or deceptive conduct", bullets: [
        "Do not impersonate Q-RETIX AI, another person, or an institution.",
        "Do not distribute fraud, harassment, hateful abuse, unlawful discrimination, or misleading claims about affiliation or endorsement.",
        "Do not use the website to send spam or harvest contact information."
      ] },
      { title: "Enforcement and reporting", paragraphs: [`We may investigate suspected violations, preserve relevant records, restrict access, or report unlawful conduct where appropriate. Report abuse to ${LEGAL_CONTACT}. Good-faith security research should follow the Security & Responsible Disclosure page.`] }
    ]
  },
  accessibility: {
    slug: "accessibility", title: "Accessibility Statement", shortTitle: "Accessibility",
    description: "Q-RETIX AI’s accessibility goals, feedback process, and known limitations.",
    intro: "Q-RETIX AI wants its public website to be usable by as many people as reasonably possible, including people who use assistive technologies.",
    sections: [
      { title: "Our target", paragraphs: ["We use the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA as an improvement target. This is a goal, not a claim that every page or third-party asset currently conforms. We aim to use semantic structure, keyboard-accessible controls, visible focus states, meaningful labels, adequate contrast, and alternative text where appropriate."] },
      { title: "Known limitations", paragraphs: ["Older content, complex scientific graphics, embedded or linked third-party material, and documents supplied in fixed formats may have accessibility limitations. Scientific images may require longer descriptions that are not yet available. Third-party destinations are outside Q-RETIX AI’s control."] },
      { title: "Feedback and accommodation", paragraphs: [`If you encounter a barrier, email ${LEGAL_CONTACT} with the page URL, a description of the issue, the browser or assistive technology used if you are comfortable sharing it, and the format or accommodation that would help. We will review the request and aim to provide a reasonable alternative.`] },
      { title: "Ongoing work", paragraphs: ["Accessibility is an ongoing process. We consider accessibility when changing components and content, and will prioritize issues that block access to essential information or actions."] }
    ],
    references: [{ label: "W3C Web Content Accessibility Guidelines 2.2", href: "https://www.w3.org/TR/WCAG22/" }]
  },
  security: {
    slug: "security", title: "Security & Responsible Disclosure", shortTitle: "Security",
    description: "Security practices and how to report a suspected vulnerability responsibly.",
    intro: "Security is a shared responsibility. This page describes Q-RETIX AI’s public reporting channel and safe-harbor expectations without making an unsupported certification or audit claim.",
    sections: [
      { title: "Security approach", paragraphs: ["We seek to apply risk-appropriate safeguards across development, hosting, access, updates, and incident handling. Controls may change with the architecture and sensitivity of information. No system is perfectly secure, and publication of this page is not a representation of SOC 2, ISO 27001, HIPAA, or other certification."] },
      { title: "Report a vulnerability", paragraphs: [`Email ${LEGAL_CONTACT} with “Security report” in the subject. Include the affected URL or component, reproduction steps, impact, relevant screenshots or logs with secrets removed, and a safe way to contact you. Do not send live credentials, patient information, or unnecessary personal data.`] },
      { title: "Good-faith research guidelines", bullets: [
        "Avoid privacy violations, persistence, data destruction, service degradation, and access to data beyond what is needed to demonstrate the issue.",
        "Do not use denial of service, social engineering, phishing, credential stuffing, physical attacks, or third-party account compromise.",
        "Stop testing and report promptly if you encounter sensitive data or gain unintended access.",
        "Allow reasonable time to investigate and remediate before public disclosure."
      ] },
      { title: "What to expect", paragraphs: ["We will aim to acknowledge actionable reports and communicate when practical, but do not promise a particular response or remediation time. This policy does not create a bug bounty, employment, or payment obligation. Good-faith activity that follows this policy will not be intentionally pursued by Q-RETIX AI as malicious access, subject to applicable law and third-party rights."] },
      { title: "Security incidents", paragraphs: ["If a confirmed incident triggers legal notification duties, Q-RETIX AI will make notifications in the manner and timeframe required for the affected processing. Do not use general website content as a substitute for a product-specific security addendum or incident plan."] }
    ]
  },
  aiTransparency: {
    slug: "ai-transparency", title: "AI Transparency Notice", shortTitle: "AI Transparency",
    description: "How AI-assisted content and computational research claims should be understood.",
    intro: "This notice explains the role and limits of AI in Q-RETIX AI’s public research communications. It should be read with the Research & Medical Disclaimer.",
    sections: [
      { title: "Where AI may be used", paragraphs: ["Q-RETIX AI may use language models or other computational tools to assist with research ideation, target prioritization, synthesis, drafting, classification, or presentation. Human contributors may select prompts, constraints, sources, scoring methods, and final content. A reference to AI does not mean the output was independently discovered, experimentally validated, or generated without human involvement."] },
      { title: "Material limitations", bullets: [
        "Outputs can hallucinate facts or citations and can conflate genes, proteins, pathways, compounds, and clinical claims.",
        "Scores and rankings depend on the prompt, dataset, model version, assumptions, and evaluation design.",
        "Training and source data can be incomplete, outdated, biased, duplicated, or unavailable for audit.",
        "Fluent explanations do not establish causality, novelty, druggability, safety, efficacy, or regulatory acceptability."
      ] },
      { title: "Human oversight and validation", paragraphs: ["Meaningful research use requires independent source checking, domain-expert review, uncertainty documentation, reproducible methods, and appropriate experimental validation. High-impact decisions must remain with qualified people who can consider context, alternatives, and consequences."] },
      { title: "Data and confidentiality", paragraphs: ["The public website does not currently provide an authenticated workflow for uploading research datasets to an AI model. Do not place personal, patient, regulated, confidential, or proprietary data into public contact channels. Data use for any future or private platform must be described in the applicable product notice and agreement."] },
      { title: "Questions and corrections", paragraphs: [`If you believe content materially misstates a source, method, limitation, or AI role, contact ${LEGAL_CONTACT} with the page and correction. We may update, annotate, or remove content after review.`] }
    ],
    references: [{ label: "EU Artificial Intelligence Act", href: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" }]
  },
  dataRights: {
    slug: "data-rights", title: "Data Rights Request", shortTitle: "Data Rights",
    description: "How to submit and manage an applicable personal-data request.",
    intro: "Use this process to ask about personal information Q-RETIX AI may control. Your rights depend on your location, relationship with Q-RETIX AI, and the law that applies.",
    sections: [
      { title: "Requests you can make", bullets: [
        "Know or access personal information and information about its use or disclosure.",
        "Correct inaccurate personal information.",
        "Delete personal information, subject to legal exceptions.",
        "Receive portable data, restrict or object to processing, or withdraw consent where applicable.",
        "Opt out of sale, targeted-advertising sharing, or certain profiling where applicable. The current public website is not configured for those activities.",
        "Appeal a request decision where applicable law provides that right."
      ] },
      { title: "How to submit", paragraphs: [`Email ${LEGAL_CONTACT} with “Data rights request” in the subject. Include your name, contact email, country or state, relationship with Q-RETIX AI, the right you want to exercise, and enough detail to locate the relevant records. Do not send government identification unless specifically requested through a secure method.`] },
      { title: "Verification and authorized agents", paragraphs: ["We may verify a request using information already associated with the relevant interaction and may ask for additional information proportionate to the request. An authorized agent may submit a request where permitted, but we may require proof of authority and direct confirmation from the individual."] },
      { title: "Response and exceptions", paragraphs: ["We will respond within the period required by applicable law after receiving a verifiable request. Complex or numerous requests may qualify for a lawful extension. We may deny or limit a request when identity cannot be verified, an exception applies, another person’s rights would be affected, or the request is manifestly unfounded or excessive. We will explain the basis where required."] },
      { title: "No discrimination and complaints", paragraphs: ["Q-RETIX AI will not unlawfully discriminate against you for exercising an applicable privacy right. If you disagree with a response, reply with “Privacy appeal” and explain the concern. You may also have a right to complain to your local privacy regulator."] }
    ]
  }
} satisfies Record<string, LegalDocument>;

export const legalDocumentList = Object.values(legalDocuments);

export function legalMetadata(document: LegalDocument): Metadata {
  return {
    title: document.title,
    description: document.description,
    alternates: { canonical: `/legal/${document.slug}` },
    openGraph: {
      title: `${document.title} | Q-RETIX AI`,
      description: document.description,
      type: "website",
      url: `/legal/${document.slug}`,
    },
  };
}
