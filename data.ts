export const NAME = 'Tenzin Dhonyoe'

/** The heading: a small hello above the name. */
export const GREETING = { hello: 'Hi, I’m', name: 'Tenzin' }

/** The intro, one string per paragraph. */
export const INTRO = [
  'I grew up in Nepal and moved to Toronto when I was 13. I studied Biomedical Engineering at TMU and now work in silicon validation at Qualcomm.',
  'I’m also building GlucoSolutions to help people with pre-diabetes reverse their condition.',
]

/** A row in one of the lists. Rows with a url are links; the rest just show their figure. */
export type Item = {
  id: string
  title: string
  /** Short label for the list. */
  tag: string
  /** One line for the caption under the particles. */
  line: string
  url?: string
}

export const WORK: Item[] = [
  {
    id: 'qualcomm',
    title: 'Qualcomm',
    tag: 'Silicon validation',
    line: 'Silicon Validation Engineer. Making sure the chips do what the spec says they do.',
  },
  {
    id: 'gluco',
    title: 'GlucoSolutions',
    tag: 'Co-founder',
    line: 'A non-invasive, needle-free glucose-monitoring wristband for people with prediabetes, showing how meals, movement, sleep and stress affect their blood sugar.',
    url: 'https://glucosolutions.ca',
  },
  {
    id: 'alphawave',
    title: 'Alphawave Semi',
    tag: 'Validation intern',
    line: 'A year as a silicon validation intern, before Qualcomm acquired Alphawave.',
  },
  {
    id: 'ibz',
    title: 'Innovation Boost Zone',
    tag: 'Incubator',
    line: 'Worked at TMU’s startup incubator, around founders building their first companies.',
  },
]

export const PROJECTS: Item[] = [
  {
    id: 'zerisk',
    title: '0risk.ai',
    tag: 'Surgical AI',
    line: 'Real-time risk cues for surgical teams during knee replacement.',
    url: 'https://github.com/TenzinDhonyoe/0risk.ai',
  },
  {
    id: 'mobileqa',
    title: 'Mobile QA Engine',
    tag: 'Dev tools',
    line: 'Automated QA for iOS apps: simulator and cloud-device testing that finds and fixes bugs.',
    url: 'https://github.com/TenzinDhonyoe/gstack/tree/feat/browse-mobile',
  },
  {
    id: 'tumor',
    title: 'Tumor Detection',
    tag: 'Imaging',
    line: 'Flags tumor-like regions in medical images through segmentation and classification.',
    url: 'https://github.com/TenzinDhonyoe/Tumor-Detection-Prototype',
  },
  {
    id: 'trading',
    title: 'ML Trading Bot',
    tag: 'Finance',
    line: 'Trades SPY on sentiment from financial news, live through the Alpaca API.',
    url: 'https://github.com/TenzinDhonyoe/TradingBot-Using-ML',
  },
  {
    id: 'gym',
    title: 'ML Gym App',
    tag: 'Vision',
    line: 'Pose estimation that follows your joints and counts reps in real time.',
    url: 'https://github.com/TenzinDhonyoe/ML-Gym-App',
  },
  {
    id: 'afib',
    title: 'AFib Detection',
    tag: 'Cardiac',
    line: 'An SVM that spots atrial fibrillation in ECG signals.',
    url: 'https://github.com/TenzinDhonyoe/SVM_data_processing_for_atrial_fibrillation_detection',
  },
  {
    id: 'gene',
    title: 'Gene Sequence Analysis',
    tag: 'Genomics',
    line: 'Finds genes, motifs and promoter regions in FASTA sequences.',
    url: 'https://github.com/TenzinDhonyoe/Gene-Sequence-Analysis',
  },
]

export const LIFE: Item[] = [
  {
    id: 'home',
    title: 'Nepal → Canada',
    tag: 'Origin',
    line: 'Grew up in Nepal, moved to Toronto at 13. Traded mountains for maple leaves.',
  },
  {
    id: 'guitar',
    title: 'Guitar',
    tag: 'Music',
    line: 'Mostly chords. Occasionally a solo nobody asked for.',
  },
  {
    id: 'pickleball',
    title: 'Pickleball',
    tag: 'Sport',
    line: 'Dinks, drives and a healthy amount of friendly trash talk.',
  },
  {
    id: 'cooking',
    title: 'Cooking',
    tag: 'Food',
    line: 'Recipes are more like suggestions.',
  },
  {
    id: 'tinkering',
    title: 'Weekends',
    tag: 'Tinkering',
    line: 'Building and tinkering. If it has screws, it’s getting opened.',
  },
  {
    id: 'goal',
    title: 'The goal',
    tag: 'Why',
    line: 'Make a real difference in at least one person’s health. Everything after that is a bonus.',
  },
]

export const MILESTONES: Item[] = [
  {
    id: 'dmz',
    title: 'DMZ Basecamp',
    tag: 'Winner',
    line: 'Won DMZ Basecamp, and $20,000 to keep building.',
  },
  {
    id: 'gameon',
    title: 'Game On (W26)',
    tag: 'San Francisco',
    line: 'Game On, Winter 2026 cohort, in San Francisco.',
  },
  {
    id: 'residency',
    title: 'The Residency',
    tag: 'Biopunk, SF',
    line: 'The Biopunk cohort of The Residency, in San Francisco.',
  },
  {
    id: 'first',
    title: 'FIRST Robotics',
    tag: '2nd in the world',
    line: 'Finished 2nd in the world at FIRST Robotics.',
  },
]

/** The tabs on the right, in order; the first is open on arrival. */
export const SECTIONS = [
  { id: 'work', label: 'Work', items: WORK },
  { id: 'projects', label: 'Projects', items: PROJECTS },
  { id: 'life', label: 'Life', items: LIFE },
  { id: 'milestones', label: 'Milestones', items: MILESTONES },
]

/** A stop on the timeline. */
export type Chapter = {
  id: string
  /** A short label for when: a year, an age, a stage of life. */
  when: string
  title: string
  line: string
  /**
   * The dot figure that stands beside the road: any row's id above,
   * 'nepal' / 'toronto' for the two halves of 'home', or 'sun' for the
   * sunrise at the end.
   */
  figure: string
}

/** The timeline, oldest first. The second-to-last chapter is "now"; the last is what's next. */
export const TIMELINE: Chapter[] = [
  {
    id: 'nepal',
    when: 'Early years',
    title: 'Nepal',
    line: 'Grew up in Nepal. This is where the story starts.',
    figure: 'nepal',
  },
  {
    id: 'toronto',
    when: 'Age 13',
    title: 'Toronto',
    line: 'Moved to Toronto at 13. Traded mountains for maple leaves.',
    figure: 'toronto',
  },
  {
    id: 'first',
    when: 'High school',
    title: 'FIRST Robotics',
    line: 'Finished 2nd in the world at FIRST Robotics.',
    figure: 'first',
  },
  {
    id: 'tmu',
    when: 'University',
    title: 'Biomedical Engineering',
    line: 'Studied Biomedical Engineering at Toronto Metropolitan University.',
    figure: 'afib',
  },
  {
    id: 'ibz',
    when: 'At TMU',
    title: 'Innovation Boost Zone',
    line: 'Worked at TMU’s startup incubator, around founders building their first companies.',
    figure: 'ibz',
  },
  {
    id: 'alphawave',
    when: 'Internship',
    title: 'Alphawave Semi',
    line: 'A year as a silicon validation intern.',
    figure: 'alphawave',
  },
  {
    id: 'gluco',
    when: 'Co-founder',
    title: 'GlucoSolutions',
    line: 'Started GlucoSolutions to help people with pre-diabetes reverse their condition.',
    figure: 'gluco',
  },
  {
    id: 'dmz',
    when: 'Winner',
    title: 'DMZ Basecamp',
    line: 'Won DMZ Basecamp, and $20,000 to keep building.',
    figure: 'dmz',
  },
  {
    id: 'gameon',
    when: 'Winter 2026',
    title: 'Game On',
    line: 'The W26 cohort of Game On, in San Francisco.',
    figure: 'gameon',
  },
  {
    id: 'residency',
    when: 'San Francisco',
    title: 'The Residency',
    line: 'The Biopunk cohort of The Residency.',
    figure: 'residency',
  },
  {
    id: 'now',
    when: 'Today',
    title: 'Qualcomm',
    line: 'Validating silicon at Qualcomm by day, building GlucoSolutions by night.',
    figure: 'qualcomm',
  },
  {
    id: 'next',
    when: 'Next',
    title: 'Not done yet',
    line: 'The goal hasn’t changed: make a real difference in at least one person’s health. Everything after that is a bonus.',
    figure: 'sun',
  },
]

/** One-liners that rotate under the face while nothing is hovered. */
export const FACTS = [
  'Validating silicon by day, building GlucoSolutions by night.',
  'Will happily talk pickleball, guitar or glucose with anyone.',
  'Goal: make a difference in at least one person’s health.',
]

export const LINKS = [
  { label: 'GitHub', url: 'https://github.com/TenzinDhonyoe' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tenzindhonyoe/' },
  { label: 'X', url: 'https://x.com/_tenZdhon_' },
] as const
