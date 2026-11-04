import { assetPaths } from './assets';

export const aboutPage = {
  image: assetPaths.profileRobot,
  heading: "Hi, I'm Brad",
  paragraphs: [
    'I build AI agent teams that replace a roomful of experts: the research, analysis, and judgment calls that usually take a group of experienced specialists.',
    'I start with the people doing the work and go through real cases with them. I map the evidence they weigh, how they reach a decision, and what they do when a case doesn’t fit the usual pattern. Then I design and build the system: the models, agents, integrations, and evaluation, along with the points where an expert should review the result.',
    'I’ve been working in applied AI for over a decade. I trained my first neural network on receipt processing at Sensibill in 2015. I built Kwola, an open-source system that used reinforcement learning to explore web applications and find bugs, and at Checksum.ai I built models that generate tests from real user sessions.',
    'I’m interested in Staff and Principal Applied AI roles where I own a hard problem from discovery through a system the team relies on.'
  ],
  links: [
    { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/bradaarsenault/', primary: true },
    { label: 'View my résumé', href: '/resume', primary: false }
  ]
} as const;
