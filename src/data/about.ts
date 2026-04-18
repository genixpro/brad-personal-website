import { assetPaths } from './assets';

export const aboutPage = {
  image: assetPaths.profileRobot,
  heading: "Hi, I'm Brad,",
  kicker: 'I build cool stuff with AI',
  body:
    "I'm an engineer, entrepreneur, freelancer, and all-around technology enthusiast. I offer wide range of services in software engineering and consulting. I specialize in custom AI product engineering, AI consulting, code refactoring, software architecture, and machine learning architecture. I love bringing new ideas to fruition, and pride myself on high quality work.",
  cta: 'Contact Me',
  href: '/contact-me',
  serviceBandTitle: 'Code Review, Refactoring &\nArchitecture Improvement',
  serviceBandBody:
    'Is your development team getting slower and slower with every passing month? Did your engineers inherit a legacy code base that is considered a nightmare to maintain? Do you wish to proactively get ahead of technical debt and keep your code base easy and fast to grow? Take advantage of my code review, refactoring, and software architecture consulting services!'
} as const;
