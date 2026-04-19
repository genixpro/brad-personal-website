import { assetPaths } from './assets';

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bradaarsenault/',
    icon: assetPaths.socialLinkedin
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/genixpro?lang=en',
    icon: assetPaths.socialX
  },
  {
    label: 'GitHub',
    href: 'https://github.com/genixpro',
    icon: assetPaths.socialGithub
  }
];
