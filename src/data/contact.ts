import { contactInfo } from './site';

export const contactPage = {
  title: 'Get in touch',
  copy:
    'Feel free to reach out using any communication medium! For best results, book a meeting directly with me using my meeting link:',
  meetingHref: contactInfo.calendly
} as const;
