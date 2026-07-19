import type { Faq } from "@/types";

/** Frequently asked questions (source of truth for both UI and JSON-LD). */
export const faqs: Faq[] = [
  {
    id: "services",
    question: "What services does Lex Haven Solicitors offer?",
    answer:
      "We are a multidisciplinary advisory firm providing legal advisory, regulatory compliance, corporate governance advisory, tax consulting, and real estate advisory. We help businesses stay compliant, strengthen their governance, and make commercially sound decisions that support sustainable growth.",
  },
  {
    id: "book-consultation",
    question: "How do I book a consultation?",
    answer:
      "Use any 'Book a Consultation' button on the site to open our contact page, where you can send us a message, call us, or email contact-us@lexhavensolicitors.com. Tell us briefly what you need and we'll arrange a time to talk.",
  },
  {
    id: "location",
    question: "Where are you located?",
    answer:
      "Our office is at 15 Ebun Otti Estate, Mende, Maryland, Lagos. We work with clients across Lagos and beyond, and can advise remotely where that's more convenient.",
  },
  {
    id: "hours",
    question: "What are your working hours?",
    answer:
      "We're open Monday to Friday, 8:00am to 5:00pm. Messages sent outside those hours will be answered on the next working day.",
  },
  {
    id: "difference",
    question: "What makes Lex Haven different from other firms?",
    answer:
      "We bring legal, regulatory, governance, tax and real estate expertise together under one roof, so you get joined-up advice rather than fragmented opinions. We're commercially minded, uphold the highest standards of integrity, and measure our success by the lasting value we create for clients.",
  },
];

/** Closing prompt shown beneath the accordion. */
export const faqContactPrompt = "Still have a question? We're happy to help.";
