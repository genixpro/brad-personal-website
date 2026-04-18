export const portfolioTagColors = {
  'AI Evangelism': '#c09a1a',
  'API Development': '#9a570b',
  'Audio Processing': '#114279',
  Automation: '#114279',
  'Chatbot Technology': '#117916',
  'Computer Vision': '#117969',
  'Content Generation': '#114279',
  'Data Analytics': '#850c55',
  'Data Extraction & Scraping': '#850c55',
  'Deep Learning': '#9012c2',
  'Document Processing': '#117923',
  Fintech: '#117923',
  'Generative AI': '#1215c2',
  'Health Technology': '#2ea21b',
  'Machine Learning': '#9012c2',
  'Management Consulting': '#9d0a90',
  'Mobile App': '#9a250b',
  'Natural Language Processing': '#117923',
  'Reinforcement Learning': '#3b1179',
  'Software Testing': '#9012c2',
  'Strategy Consulting': '#9a570b',
  'User Interface Development': '#889a0b',
  'Voice AI': '#114279'
} as const;

export type PortfolioTag = keyof typeof portfolioTagColors;
