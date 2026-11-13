/**
 * Contact section content — header, availability chips, info rail, intent
 * chips, form labels/placeholders, feedback messages, and shared field styles.
 *
 * Consumed by `sections/contact/component.tsx`.
 * Shared email/phone/location and the Web3Forms key live in `content/site.ts`.
 */

import { Briefcase, MessageCircle, Users, type LucideIcon } from "lucide-react";

// ================= TYPES ===============

/** A quick-reply chip that pre-fills the subject field. */
export type ContactIntent = {
  label: string;
  subject: string;
  Icon: LucideIcon;
};

/** The shape of the contact content object. */
export type ContactContent = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  availability: {
    open: string;
    openLabel: string;
    replyTime: string;
    replyLabel: string;
  };
  rail: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    socialsLabel: string;
    copyEmailLabel: string;
  };
  form: {
    intentLabel: string;
    onlineLabel: string;
    intents: readonly ContactIntent[];
    labels: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    replyNote: string;
    sendLabel: string;
    sendingLabel: string;
    characterSuffix: string;
    successMessage: string;
    failureMessage: string;
    connectionErrorMessage: string;
    copySuccessMessage: string;
    copyErrorMessage: string;
  };
};

// ================= CONTENT ===============

export const CONTACT = {
  id: "contact",
  eyebrow: "Contact",
  title: "Let's build something great",
  subtitle:
    "Have a project, hackathon, or role in mind? Tell me what you're building — I read every message.",

  availability: {
    open: "Open",
    openLabel: "To opportunities",
    replyTime: "24h",
    replyLabel: "Reply time",
  },

  rail: {
    eyebrow: "Start a conversation",
    title: "Tell me what you're building.",
    description:
      "Internship, hackathon team, or a product you want to ship — my inbox is always open.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    socialsLabel: "Find me online",
    copyEmailLabel: "Copy email address",
  },

  form: {
    intentLabel: "I'm reaching out about",
    onlineLabel: "Online",

    intents: [
      {
        label: "Internship",
        subject: "Internship Opportunity",
        Icon: Briefcase,
      },
      {
        label: "Project collaboration",
        subject: "Project Collaboration",
        Icon: Users,
      },
      {
        label: "Just saying hi",
        subject: "Hello Maitreya",
        Icon: MessageCircle,
      },
    ],

    labels: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },

    placeholders: {
      name: "Your name",
      email: "your.email@example.com",
      subject: "Internship / project / hello",
      message:
        "Hi Maitreya, I came across your portfolio and would like to discuss...",
    },

    replyNote: "Usually replies within 24 hours",
    sendLabel: "Send message",
    sendingLabel: "Sending...",
    characterSuffix: "chars",
    successMessage: "Message sent successfully! I'll get back to you soon.",
    failureMessage: "Failed to send message. Please try again.",
    connectionErrorMessage:
      "Failed to send message. Please check your connection.",
    copySuccessMessage: "Email copied to clipboard",
    copyErrorMessage: "Couldn't copy the email — use the mail link instead.",
  },
} as const satisfies ContactContent;

/**
 * Shared field styling for the contact form.
 * Kept next to the contact content so form visuals are easy to tune.
 */
export const FIELD_CLASS =
  "h-11 rounded-xl border-white/10 bg-white/[0.045] px-3.5 text-sm text-foreground shadow-[inset_0_1px_0_oklch(1_0_0_/_0.04)] placeholder:text-white/30 transition-all duration-300 hover:border-white/20 focus-visible:border-gold/50 focus-visible:bg-white/[0.06] focus-visible:ring-1 focus-visible:ring-gold/25 focus-visible:shadow-[0_0_24px_-10px_oklch(0.82_0.14_85_/_0.8)]";
