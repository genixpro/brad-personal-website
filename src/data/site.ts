import { assetPaths } from './assets';

export type ContactInfo = {
  name: string;
  location: string;
  phone: string;
  email: string;
  calendly: string;
  portrait: string;
};

export const site = {
  name: 'Bradley Arsenault',
  title: 'Bradley Arsenault | Applied AI Architect',
  description:
    'Bradley Arsenault builds AI agent teams that replace a roomful of experts, from understanding how specialists reason through hard cases to delivering systems people rely on.',
  canonicalUrl: 'https://www.bradleyarsenault.me',
  imageUrl: '/assets/site-share-image.png',
  imageWidth: '1024',
  imageHeight: '1024',
  icon: assetPaths.siteIcon,
  brandLogo: assetPaths.brandLogo,
  copyright: '©2026 by Bradley Arsenault'
} as const;

export const contactInfo: ContactInfo = {
  name: 'Bradley Arsenault',
  location: 'Toronto, Ontario, Canada',
  phone: '+1-647-261-0462',
  email: 'brad@bradleyarsenault.me',
  calendly: 'https://calendly.com/bradleyarsenault',
  portrait: assetPaths.contactPortrait
};
