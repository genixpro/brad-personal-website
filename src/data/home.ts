import { assetPaths } from './assets';

export type HomeStat = {
  value: string;
  label: string;
};

export type CompanyLogo = {
  name: string;
  src: string;
};

export const homeStats: HomeStat[] = [
  { value: '5', label: "acquisitions of companies I've built technology for" },
  { value: '20+', label: "successful products, prototypes and models I've built for companies" },
  { value: '∞', label: 'the number of AI products I want to launch before I die' },
  { value: '87', label: 'proposals, designs and ideations created with visionary entrepreneurs' }
];

export const companies: CompanyLogo[] = [
  { name: 'ScotiaBank', src: '/assets/company-scotiabank.png' },
  { name: 'GenSquared', src: '/assets/company-gensquared.png' },
  { name: 'Blueprint', src: '/assets/company-blueprint.png' },
  { name: 'HubDoc', src: '/assets/company-hubdoc.png' },
  { name: 'FishRecruit', src: '/assets/company-fishrecruit.png' },
  { name: 'StanAI', src: '/assets/company-stan-ai.png' },
  { name: 'Analytics4Life', src: '/assets/company-analytics4life.png' },
  { name: 'Sensibill', src: '/assets/company-sensibill.png' },
  { name: 'PureFacts', src: '/assets/company-purefacts.png' },
  { name: 'RulesCube', src: '/assets/company-rulescube.png' },
  { name: 'UpstreamWorks', src: '/assets/company-positive-networks.png' }
];

export const consultingBullets = [
  '100% no obligation to purchase anything',
  'Come up with your next AI product',
  'Find out costs, timelines, and expectations around building AI technology',
  'Establish the best strategy for you to not get replaced with AI',
  'Make your dream come true'
] as const;

export const homeHero = {
  title: 'Become an owner of AI...',
  subtitle: 'Or get replaced by it',
  copy:
    'Develop your next AI product with an engineering expert who has built AI technology for 20+ companies leading to 5 acquisitions between them.'
} as const;

export const originStory = {
  title: '"I still remember training my first neural network like it was yesterday."',
  image: assetPaths.profileRobot,
  imageAlt: 'Bradley Arsenault robot portrait',
  caption: 'Brad, after his 2023 conversion to become a robot.',
  paragraphs: [
    'In mid-2015, I had been slaving away at Sensibill using traditional machine learning for 11 months. We were getting OK results but with lots of caveats and issues, averaging about 80% accuracy.',
    'Then I downloaded code for my first luatorch neural network and ran it on our dataset. The result made my jaw drop. It boosted the accuracy from 80% to 97%. Errors dropped 6 x from 20% to just 3%.',
    'In one weekend of light programming, the new neural network vastly outperformed 11 months of continuous effort using traditional techniques.'
  ]
} as const;

export const revelation = {
  title: 'THIS CHANGES EVERYTHING!',
  paragraphs: [
    'That moment in 2015 training my first neural network completely changed my life. It was if I had total clarity on my purpose and calling in life.',
    'I realized immediately that neural networks were the future of computing. The neural networks of 2015 were still primitive, but I could see where they were headed. They were going to change everything.',
    'It only took me weeks before I decided that I was going to start my own business in AI. If the future was going to be run by machines, I was hell-bent on owning some of those machines.'
  ]
} as const;

export const promos = {
  aiOwnersClub: {
    title: 'Join the AI Owners Club',
    copy:
      'The AI Owners Club is a group of visionary entrepreneurs and small business owners who are dedicated to becoming owners of our AI-powered future. We share tactics and ideas, work on concepts together, build cutting-edge technology products, and grow AI-powered businesses.',
    href: 'https://genixpro.wixstudio.io/ai-owners-club',
    cta: 'Learn More',
    image: '/assets/ai-brain-icon.png',
    alt: 'AI brain icon'
  },
  prospera: {
    title: 'Check out Prosperalab',
    copy:
      'Prosperalab is my new Startup Studio. We build Chatbot, Agent, and AI based products and services in house. We are building out a portfolio of successful AI products and services.',
    href: 'https://prosperalab.ai',
    cta: 'Learn More',
    image: '/assets/company-prosperalab.jpg',
    alt: 'Prosperalab logo'
  }
} as const;
