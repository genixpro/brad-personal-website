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
      { label: 'Videos', href: 'https://www.youtube.com/@BradleyArsenault' },
      { label: 'Code Review', href: '/code-review-services' },
      { label: 'Code Refactoring', href: '/code-refactoring-services' },
      { label: 'Software Architecture Advising', href: '/software-architecture-advising' },
      { label: 'AI Product Development', href: '/ai-product-development' },
      { label: 'AI Consulting', href: '/ai-consulting' },
      { label: 'Machine Learning Architecture', href: '/machine-learning-architecture' },
      { label: 'About Me', href: '/about' },
      { label: 'Presentations', href: '/presentations' },
      { label: 'Book a Meeting', href: 'https://calendly.com/bradleyarsenault' },
      { label: 'Resume', href: '/resume' },
      { label: 'GitHub', href: 'https://github.com/genixpro' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bradaarsenault/' },
      { label: 'Contact me', href: '/contact-me' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms and Conditions', href: '/terms-and-conditions' }
    ]
  }
];

export const headerCta: NavLink = {
  label: 'Book a Call',
  href: '/book-an-intro-call'
};
