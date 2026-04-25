import { HABITS } from './habits';

export type Citation = {
  authors: string;
  year: number;
  journal: string;
  volumePages: string;
  title: string;
  url: string;
};

export type ConceptV2 = {
  n: number;
  slug: string;
  name: string;
  romaji: string;
  translation: string;
  tagline: string;
  science: string;
  citation: Citation;
  takeaway: string;
  accent: string;
  motif: string;
};

export const V2_INTRO = {
  eyebrow: 'eight ideas',
  title: 'Scroll at your own pace.',
  blurb: 'Eight Japanese concepts. Eight pieces of real research. No video, no playlist — just the ideas, and a little science under each one.',
  honesty:
    'These are folk concepts. The studies cited are real research on adjacent psychological and medical constructs — not validation of the Japanese terms themselves.',
};

export const V2_OUTRO = {
  title: 'Pick one. Start tiny.',
  body: 'You don’t need all eight. Choose the one that nudged you, do the smallest version of it today, and let the rest sit for another time.',
  v1Link: 'If you want the source video this was inspired by →',
};

const byHabit = (slug: string) => {
  const h = HABITS.find((x) => x.slug === slug);
  if (!h) throw new Error(`No habit named ${slug}`);
  return h;
};

export const CONCEPTS_V2: ConceptV2[] = [
  {
    ...byHabit('kaizen'),
    tagline: 'One percent better. Every day.',
    science:
      'A 12-week real-world study tracked 96 people forming new daily habits and measured how long until each behavior felt automatic. The median was 66 days — and consistent small actions reliably outperformed sporadic large ones.',
    citation: {
      authors: 'Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J.',
      year: 2010,
      journal: 'European Journal of Social Psychology',
      volumePages: '40(6), 998–1009',
      title: 'How are habits formed: Modelling habit formation in the real world',
      url: 'https://doi.org/10.1002/ejsp.674',
    },
    takeaway: 'Pick the smallest version that’s too easy to skip. Do it once today.',
    accent: 'var(--yellow)',
    motif: 'kaizen',
  },
  {
    ...byHabit('ikigai'),
    tagline: 'A reason to wake up.',
    science:
      'The Ohsaki Cohort followed 43,391 Japanese adults for seven years. Those who reported having ikigai had significantly lower all-cause mortality, with the strongest reduction in cardiovascular deaths.',
    citation: {
      authors: 'Sone, T., Nakaya, N., Ohmori, K., et al.',
      year: 2008,
      journal: 'Psychosomatic Medicine',
      volumePages: '70(6), 709–715',
      title: 'Sense of life worth living (ikigai) and mortality in Japan: Ohsaki Study',
      url: 'https://pubmed.ncbi.nlm.nih.gov/18596247/',
    },
    takeaway: 'Name one thing that would make tomorrow worth showing up for. Start there.',
    accent: 'var(--wood)',
    motif: 'ikigai',
  },
  {
    ...byHabit('hara-hachi-bu'),
    tagline: 'Stop at almost-full.',
    science:
      'CALERIE was a two-year randomized trial of moderate calorie restriction (~12%) in healthy non-obese adults. It significantly improved cardiometabolic risk markers without harming quality of life — the strongest human evidence yet for eating slightly less.',
    citation: {
      authors: 'Kraus, W. E., Bhapkar, M., Huffman, K. M., et al.',
      year: 2019,
      journal: 'Lancet Diabetes & Endocrinology',
      volumePages: '7(9), 673–683',
      title:
        '2 years of calorie restriction and cardiometabolic risk (CALERIE): exploratory outcomes of a multicentre, phase 2, randomised controlled trial',
      url: 'https://doi.org/10.1016/S2213-8587(19)30151-2',
    },
    takeaway: 'Pause halfway through your next meal. If “I could stop” is true, stop.',
    accent: 'var(--sage)',
    motif: 'harahachi',
  },
  {
    ...byHabit('shinrin-yoku'),
    tagline: 'Trees are medicine.',
    science:
      'Three-day forest visits raised natural killer cell activity and intracellular anti-cancer protein expression — and the effect persisted for up to 30 days. Researchers credit phytoncides, the compounds trees release into the air.',
    citation: {
      authors: 'Li, Q.',
      year: 2010,
      journal: 'Environmental Health and Preventive Medicine',
      volumePages: '15(1), 9–17',
      title: 'Effect of forest bathing trips on human immune function',
      url: 'https://doi.org/10.1007/s12199-008-0068-3',
    },
    takeaway: 'Twenty minutes among trees. Phone away. That’s the dose.',
    accent: 'var(--sky)',
    motif: 'shinrin',
  },
  {
    ...byHabit('wabi-sabi'),
    tagline: 'Cracks are the design.',
    science:
      'A meta-analysis of 20 samples found self-compassion — accepting your own flaws with kindness — strongly correlates with lower anxiety, depression, and stress. The effect size was large (r = −0.54) and outperformed self-esteem-based approaches.',
    citation: {
      authors: 'MacBeth, A., & Gumley, A.',
      year: 2012,
      journal: 'Clinical Psychology Review',
      volumePages: '32(6), 545–552',
      title:
        'Exploring compassion: A meta-analysis of the association between self-compassion and psychopathology',
      url: 'https://doi.org/10.1016/j.cpr.2012.06.003',
    },
    takeaway: 'What if this didn’t need fixing? Sit with that for ten seconds.',
    accent: 'var(--rose)',
    motif: 'wabisabi',
  },
  {
    ...byHabit('gaman'),
    tagline: 'Strength without an audience.',
    science:
      'Across six studies — including West Point cadets and National Spelling Bee finalists — grit, defined as perseverance and passion for long-term goals, predicted success beyond IQ and conscientiousness. Quiet endurance is measurable, and it works.',
    citation: {
      authors: 'Duckworth, A. L., Peterson, C., Matthews, M. D., & Kelly, D. R.',
      year: 2007,
      journal: 'Journal of Personality and Social Psychology',
      volumePages: '92(6), 1087–1101',
      title: 'Grit: Perseverance and passion for long-term goals',
      url: 'https://doi.org/10.1037/0022-3514.92.6.1087',
    },
    takeaway: 'The next hard hour: don’t post about it. Walk through it.',
    accent: 'var(--gold)',
    motif: 'gaman',
  },
  {
    ...byHabit('omoiyari'),
    tagline: 'Anticipate. Don’t intrude.',
    science:
      'A meta-analysis of 27 kindness studies (n = 4,045) found that performing small acts of kindness measurably raised the giver’s well-being. The effect was small-to-medium and remarkably consistent across study designs.',
    citation: {
      authors: 'Curry, O. S., Rowland, L. A., Van Lissa, C. J., Zlotowitz, S., & Whitehouse, H.',
      year: 2018,
      journal: 'Journal of Experimental Social Psychology',
      volumePages: '76, 320–329',
      title:
        'Happy to help? A systematic review and meta-analysis of the effects of performing acts of kindness on the well-being of the actor',
      url: 'https://doi.org/10.1016/j.jesp.2018.02.014',
    },
    takeaway: 'One small act today, before being asked.',
    accent: 'var(--sage)',
    motif: 'omoiyari',
  },
  {
    ...byHabit('kintsugi'),
    tagline: 'Mended, not hidden.',
    science:
      'Post-traumatic growth is a measurable construct. After serious adversity, many people report real gains across five domains: relationships, new possibilities, personal strength, spiritual change, and appreciation of life. The wound and the gain coexist.',
    citation: {
      authors: 'Tedeschi, R. G., & Calhoun, L. G.',
      year: 1996,
      journal: 'Journal of Traumatic Stress',
      volumePages: '9(3), 455–471',
      title: 'The Posttraumatic Growth Inventory: Measuring the positive legacy of trauma',
      url: 'https://doi.org/10.1007/BF02103658',
    },
    takeaway: 'Don’t sand the seam. Let it be visible.',
    accent: 'var(--yellow-hi)',
    motif: 'kintsugi',
  },
];
