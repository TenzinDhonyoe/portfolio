export const HEADLINE_TEXT = 'TENZIN DHONYOE'
export const SUBTITLE_TEXT = 'Biomedical Engineering · GlucoSolutions · Toronto'

export const BIO_TEXT =
  'I\'m a final-year Biomedical Engineering student at Toronto Metropolitan University and Co-Founder of GlucoSolutions, where we\'re building personalized tools for pre-diabetes management. ' +
  'I spend most of my time at the intersection of healthcare and AI, from tumor detection prototypes to cardiac arrhythmia classification, gene sequence analysis to computer vision for fitness tracking. ' +
  'The work that excites me most is the kind that bridges a real gap: taking a signal from the body, running it through something smart, and turning it into something a patient or clinician can actually use. ' +
  'I believe the best software disappears into the problem it solves. ' +
  'Right now I\'m focused on making glucose monitoring more accessible and actionable, so that people at risk of diabetes can intervene before it\'s too late. ' +
  'When I\'m not writing code, I\'m probably reading about signal processing, training ML models, or figuring out how to make biomedical data tell a clearer story.'

export type Project = {
  id: string
  title: string
  tag: string
  text: string
  url: string
}

export const PROJECTS: Project[] = [
  {
    id: 'gluco',
    title: 'GlucoSolutions',
    tag: 'Startup',
    text: 'Personalized pre-diabetes management platform. Patient-facing app for glucose and metabolic health tracking, plus a dietitian dashboard for monitoring client stability. Full-stack TypeScript.',
    url: 'https://glucosolutions.ca',
  },
  {
    id: 'tumor',
    title: 'Tumor Detection',
    tag: 'ML / Healthcare',
    text: 'Proof-of-concept for identifying tumor-like structures through image analysis. Preprocessing, segmentation, and classification pipeline for flagging regions of interest in biomedical imagery.',
    url: 'https://github.com/TenzinDhonyoe/Tumor-Detection-Prototype',
  },
  {
    id: 'trading',
    title: 'ML Trading Bot',
    tag: 'ML / Finance',
    text: 'Automated trading system for SPY ETF using sentiment analysis of financial news. NLP-driven signal generation combined with the Alpaca API for live trade execution.',
    url: 'https://github.com/TenzinDhonyoe/TradingBot-Using-ML',
  },
  {
    id: 'gym',
    title: 'ML Gym App',
    tag: 'Computer Vision',
    text: 'Real-time exercise tracking using pose estimation. Analyzes body joint positions frame-by-frame to detect movement patterns and count repetitions automatically.',
    url: 'https://github.com/TenzinDhonyoe/ML-Gym-App',
  },
  {
    id: 'afib',
    title: 'AFib Detection',
    tag: 'Signal Processing',
    text: 'SVM-based classifier for detecting atrial fibrillation from ECG signal data. Signal preprocessing, feature extraction, and classification for cardiac arrhythmia detection.',
    url: 'https://github.com/TenzinDhonyoe/SVM_data_processing_for_atrial_fibrillation_detection',
  },
  {
    id: 'gene',
    title: 'Gene Sequence Analysis',
    tag: 'Bioinformatics',
    text: 'DNA analysis toolkit for pattern matching, gene finding, and promoter region detection. Parses FASTA files, compares sequences, and identifies biologically relevant motifs.',
    url: 'https://github.com/TenzinDhonyoe/Gene-Sequence-Analysis',
  },
]

export const LINKS = [
  { label: 'GitHub', url: 'https://github.com/TenzinDhonyoe', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tenzindhonyoe/', icon: 'linkedin' },
  { label: 'GlucoSolutions', url: 'https://glucosolutions.ca', icon: 'globe' },
] as const
