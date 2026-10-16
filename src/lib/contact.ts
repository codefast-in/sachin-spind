import { DATA } from "@/data/resume";

const EMAIL_SUBJECT = "Freelance project enquiry";
const EMAIL_BODY = `Hi Sachin,

I'd like to talk about a project.

What I need:
Timeline:
Budget:

Thanks,`;

// Opens the visitor's mail app with the subject and a short brief already filled in.
export const freelanceMailto = `mailto:${DATA.contact.email}?subject=${encodeURIComponent(
  EMAIL_SUBJECT
)}&body=${encodeURIComponent(EMAIL_BODY)}`;
