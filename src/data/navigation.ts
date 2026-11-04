export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  links: NavLink[];
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'My Creations', href: '/mycreations' },
  { label: 'Blog', href: 'https://articulon.bradleyarsenault.me' }
];

export const navGroups: NavGroup[] = [
  {
    label: 'More',
    links: [
      { label: 'About Me', href: '/about' },
      { label: 'Presentations', href: '/presentations' },
      { label: 'Videos', href: 'https://www.youtube.com/@BradleyArsenault' },
      { label: 'Resume', href: '/resume' },
      { label: 'GitHub', href: 'https://github.com/genixpro' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bradaarsenault/' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms and Conditions', href: '/terms-and-conditions' }
    ]
  }
];

export const headerCta: NavLink = {
  label: 'Résumé',
  href: '/resume'
};
