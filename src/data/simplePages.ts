import { contactInfo } from './site';

export type SimplePage = {
  title: string;
  intro: string;
  cta?: string;
  href?: string;
};

export const simplePages = {
  'book-an-intro-call': {
    title: 'Book an Intro Call',
    intro: 'Use the meeting link to book time directly with me.',
    cta: 'Open Calendly',
    href: contactInfo.calendly
  },
  'book-ai-product-brainstorm': {
    title: 'Get a free AI product brainstorming and feasibility consultation!',
    intro: 'Book a no-obligation AI product brainstorming session to discuss your concept, costs, timeline, and feasibility.',
    cta: 'Get a Free Consultation',
    href: contactInfo.calendly
  },
  'webinar-signup': {
    title: 'Webinar Signup',
    intro: 'Sign up for AI product and engineering webinars from Bradley Arsenault.',
    cta: 'Contact Me',
    href: '/contact-me'
  },
  resume: {
    title: 'Resume',
    intro: 'Bradley Arsenault - AI engineer, entrepreneur, freelancer, and product builder.',
    cta: 'Contact Me',
    href: '/contact-me'
  }
} satisfies Record<string, SimplePage>;
