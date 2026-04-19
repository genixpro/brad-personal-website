export type PageMetadata = {
  title: string;
  description: string;
};

export const pageMetadataByPath: Record<string, PageMetadata> = {
  '/case-studies': {
    title: 'Case Studies | Bradley Arsenault AI Services',
    description:
      'Case studies and project examples from AI engineer and freelancer Bradley Arsenault.'
  },
  '/portfolio': {
    title: 'Portfolio | Bradley Arsenault AI Services',
    description: 'A portfolio of all the projects created by AI Engineer and Freelancer Bradley Arsenault'
  },
  '/mycreations': {
    title: 'My Creations | Bradley Arsenault | Freelance AI Engineer',
    description:
      'A collection of some of the many personal projects and startups created by Brad, including Articulon, PromptDesk, FlowThought, Kwola, SwiftlyAI, and Hypermax.'
  },
  '/code-review-services': {
    title: 'Code Review | Bradley Arsenault | Freelance AI Engineer',
    description:
      'In my code-review service, I will help introduce your team to better software engineering practices through your existing code review processes.'
  },
  '/code-refactoring-services': {
    title: 'Code Refactoring | Bradley Arsenault | Freelance AI Engineer',
    description:
      'Code refactoring services from Bradley Arsenault to help improve, modernize, and restructure software systems for better maintainability.'
  },
  '/software-architecture-advising': {
    title: 'Software Architecture Advising | Bradley Arsenault | Freelance AI Engineer',
    description:
      'Software architecture advising from Bradley Arsenault for technical decisions, architecture planning, and maintainable system design.'
  },
  '/ai-product-development': {
    title: 'AI Product Development | Bradley Arsenault | Freelance AI Engineer',
    description:
      'AI product development services from Bradley Arsenault for building practical AI products, prototypes, and production systems.'
  },
  '/ai-consulting': {
    title: 'AI Consulting | Bradley Arsenault | Freelance AI Engineer',
    description:
      'AI consulting from Bradley Arsenault for product strategy, feasibility, implementation planning, and applied machine learning systems.'
  },
  '/machine-learning-architecture': {
    title: 'Machine Learning Architecture | Bradley Arsenault | Freelance AI Engineer',
    description:
      'Machine learning architecture services from Bradley Arsenault for designing reliable AI and ML systems.'
  },
  '/presentations': {
    title: 'Presentations | Bradley Arsenault | Freelance AI Engineer',
    description: 'Presentations and talks from Bradley Arsenault on AI, software engineering, and product development.'
  },
  '/about': {
    title: 'About Me | Bradley Arsenault | Freelance AI Engineer',
    description:
      'Bradley Arsenault is an AI engineer, entrepreneur, freelancer, and product builder specializing in AI product engineering and consulting.'
  },
  '/contact-me': {
    title: 'Contact me | Bradley Arsenault | Freelance AI Engineer',
    description:
      'Contact Bradley Arsenault for AI engineering, consulting, product development, and software architecture services.'
  },
  '/book-an-intro-call': {
    title: 'Book an Intro Call | Bradley Arsenault | Freelance AI Engineer',
    description:
      'Book an intro call with Bradley Arsenault to discuss AI engineering, consulting, and product development.'
  },
  '/book-ai-product-brainstorm': {
    title: 'AI Product Brainstorm | Bradley Arsenault | Freelance AI Engineer',
    description:
      'Book a no-obligation AI product brainstorming session to discuss your concept, costs, timeline, and feasibility.'
  },
  '/webinar-signup': {
    title: 'Webinar Signup | Bradley Arsenault | Freelance AI Engineer',
    description: 'Sign up for AI product and engineering webinars from Bradley Arsenault.'
  },
  '/resume': {
    title: 'Resume | Bradley Arsenault | Freelance AI Engineer',
    description:
      'Bradley Arsenault resume for AI engineering, software architecture, product development, and consulting work.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Bradley Arsenault AI Services',
    description: 'Privacy policy for Bradley Arsenault AI Services.'
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions | Bradley Arsenault AI Services',
    description: 'Terms and conditions for Bradley Arsenault AI Services.'
  }
};

export const getPageMetadata = (path: string): PageMetadata | undefined => pageMetadataByPath[path];
