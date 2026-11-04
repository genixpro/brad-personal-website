export type PageMetadata = {
  title: string;
  description: string;
};

export const pageMetadataByPath: Record<string, PageMetadata> = {
  '/case-studies': {
    title: 'Case Studies | Bradley Arsenault, Applied AI Architect',
    description:
      'Case studies and project examples from Bradley Arsenault.'
  },
  '/portfolio': {
    title: 'Portfolio | Bradley Arsenault, Applied AI Architect',
    description: 'Selected AI systems and products built by Bradley Arsenault'
  },
  '/mycreations': {
    title: 'My Creations | Bradley Arsenault, Applied AI Architect',
    description:
      'A collection of some of the many personal projects and startups created by Brad, including Articulon, PromptDesk, FlowThought, Kwola, SwiftlyAI, and Hypermax.'
  },
  '/code-review-services': {
    title: 'Code Review | Bradley Arsenault, Applied AI Architect',
    description:
      'In my code-review service, I will help introduce your team to better software engineering practices through your existing code review processes.'
  },
  '/code-refactoring-services': {
    title: 'Code Refactoring | Bradley Arsenault, Applied AI Architect',
    description:
      'Code refactoring services from Bradley Arsenault to help improve, modernize, and restructure software systems for better maintainability.'
  },
  '/software-architecture-advising': {
    title: 'Software Architecture Advising | Bradley Arsenault, Applied AI Architect',
    description:
      'Software architecture advising from Bradley Arsenault for technical decisions, architecture planning, and maintainable system design.'
  },
  '/ai-product-development': {
    title: 'AI Product Development | Bradley Arsenault, Applied AI Architect',
    description:
      'AI product development services from Bradley Arsenault for building practical AI products, prototypes, and production systems.'
  },
  '/ai-consulting': {
    title: 'AI Consulting | Bradley Arsenault, Applied AI Architect',
    description:
      'AI consulting from Bradley Arsenault for product strategy, feasibility, implementation planning, and applied machine learning systems.'
  },
  '/machine-learning-architecture': {
    title: 'Machine Learning Architecture | Bradley Arsenault, Applied AI Architect',
    description:
      'Machine learning architecture services from Bradley Arsenault for designing reliable AI and ML systems.'
  },
  '/presentations': {
    title: 'Presentations | Bradley Arsenault, Applied AI Architect',
    description: 'Presentations and talks from Bradley Arsenault on AI, software engineering, and product development.'
  },
  '/about': {
    title: 'About Me | Bradley Arsenault, Applied AI Architect',
    description:
      'About Bradley Arsenault, an Applied AI Architect who builds AI agent teams that replace a roomful of experts.'
  },
  '/contact-me': {
    title: 'Contact me | Bradley Arsenault, Applied AI Architect',
    description:
      'Contact Bradley Arsenault for AI engineering, consulting, product development, and software architecture services.'
  },
  '/book-an-intro-call': {
    title: 'Book an Intro Call | Bradley Arsenault, Applied AI Architect',
    description:
      'Book an intro call with Bradley Arsenault to discuss AI engineering, consulting, and product development.'
  },
  '/book-ai-product-brainstorm': {
    title: 'AI Product Brainstorm | Bradley Arsenault, Applied AI Architect',
    description:
      'Book a no-obligation AI product brainstorming session to discuss your concept, costs, timeline, and feasibility.'
  },
  '/webinar-signup': {
    title: 'Webinar Signup | Bradley Arsenault, Applied AI Architect',
    description: 'Sign up for AI product and engineering webinars from Bradley Arsenault.'
  },
  '/resume': {
    title: 'Resume | Bradley Arsenault, Applied AI Architect',
    description:
      'Résumé of Bradley Arsenault, Applied AI Architect.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Bradley Arsenault, Applied AI Architect',
    description: 'Privacy policy for Bradley Arsenault AI Services.'
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions | Bradley Arsenault, Applied AI Architect',
    description: 'Terms and conditions for Bradley Arsenault AI Services.'
  }
};

export const getPageMetadata = (path: string): PageMetadata | undefined => pageMetadataByPath[path];
