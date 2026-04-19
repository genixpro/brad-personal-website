export const portfolioTagColors = {
  'AI Evangelism': 'var(--color-tag-gold)',
  'API Development': 'var(--color-tag-amber)',
  'Audio Processing': 'var(--color-tag-blue)',
  Automation: 'var(--color-tag-blue)',
  'Chatbot Technology': 'var(--color-tag-green)',
  'Computer Vision': 'var(--color-tag-teal)',
  'Content Generation': 'var(--color-tag-blue)',
  'Data Analytics': 'var(--color-tag-magenta)',
  'Data Extraction & Scraping': 'var(--color-tag-magenta)',
  'Deep Learning': 'var(--color-tag-purple)',
  'Document Processing': 'var(--color-tag-default)',
  Fintech: 'var(--color-tag-default)',
  'Generative AI': 'var(--color-tag-indigo)',
  'Health Technology': 'var(--color-tag-lime)',
  'Machine Learning': 'var(--color-tag-purple)',
  'Management Consulting': 'var(--color-tag-pink)',
  'Mobile App': 'var(--color-tag-red)',
  'Natural Language Processing': 'var(--color-tag-default)',
  'Reinforcement Learning': 'var(--color-tag-violet)',
  'Software Testing': 'var(--color-tag-purple)',
  'Strategy Consulting': 'var(--color-tag-amber)',
  'User Interface Development': 'var(--color-tag-olive)',
  'Voice AI': 'var(--color-tag-blue)'
} as const;

export type PortfolioTag = keyof typeof portfolioTagColors;
