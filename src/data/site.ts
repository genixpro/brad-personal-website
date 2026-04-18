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
  name: 'Bradley Arsenault AI',
  title: 'Bradley Arsenault | Freelance AI Engineer | Home',
  description:
    'Bradley (Brad) Arsenault is a reliable & talented AI consultant and freelance AI product engineer with a proven track record of building cutting-edge AI products from the ground up.',
  canonicalUrl: 'https://www.bradleyarsenault.me',
  imageUrl:
    'https://static.wixstatic.com/media/387c90_dd3cb4178c9d4644a817f8a34aaae862%7Emv2.png/v1/fit/w_2500,h_1330,al_c/387c90_dd3cb4178c9d4644a817f8a34aaae862%7Emv2.png',
  icon: assetPaths.siteIcon,
  brandLogo: assetPaths.brandLogo,
  copyright: '©2023 by Bradley Arsenault'
} as const;

export const contactInfo: ContactInfo = {
  name: 'Bradley Arsenault',
  location: 'Toronto, Ontario, Canada',
  phone: '+1-647-261-0462',
  email: 'brad@bradleyarsenault.me',
  calendly: 'https://calendly.com/bradleyarsenault',
  portrait: assetPaths.contactPortrait
};
