export type Habit = {
  n: number;
  slug: string;
  name: string;
  romaji: string;
  translation: string;
  start: number;
  end: number;
  frames: string[];
  quote: string;
  body: string[];
  try: string;
};

export const VIDEO = {
  id: 't0fqRqLHq_w',
  title: '8 Tiny Japanese Habits That Make a Massive Difference',
  channel: '@WutNexLev',
  channelUrl: 'https://www.youtube.com/@WutNexLev',
  url: 'https://www.youtube.com/watch?v=t0fqRqLHq_w',
  duration: 955,
};

export const INTRO = {
  hook: 'Have you ever wondered why Japan has one of the longest life expectancies in the world? Why their cities are spotless? Why so many people seem calm, focused, and purposeful?',
  answer: "It's not genetics. It's not luck. It's habits — tiny habits that most people overlook. Habits so small they seem almost insignificant. But that's exactly why they work.",
  promise: 'Eight tiny Japanese habits that create massive differences. Not in dramatic overnight transformations, but in the kind of deep, lasting change that compounds over years.',
  saying: 'In Japan, there\u2019s a saying: the nail that sticks out gets hammered down. But there\u2019s another side to that philosophy \u2014 when everyone moves in harmony, the whole society rises.',
  heroTime: 6,
  frames: ['hero-a', 'hero-b', 'intro'],
};

export const OUTRO = {
  recap: "These eight tiny habits aren't quick fixes. They're not life hacks. They're principles \u2014 and principles take time.",
  lines: [
    'Kaizen teaches you that small improvements compound into massive results.',
    'Ikigai gives you a reason to keep going.',
    'Hara Hachi Bu protects your health with one simple rule.',
    'Shinrin-yoku restores your mind in minutes.',
    'Wabi-sabi frees you from perfection.',
    'Gaman builds your resilience quietly.',
    'Omoiyari connects you to others through small acts.',
    'Kintsugi reminds you that breaking isn\u2019t the end.',
  ],
  closing: 'You don\u2019t need to adopt all eight at once. Pick one. Start tiny. Let it become part of who you are \u2014 and then add another. Because the Japanese don\u2019t chase transformation. They build it one tiny choice at a time, one small habit at a time. And over the course of a lifetime, those tiny habits create massive differences. A life that\u2019s calm, purposeful, and deeply fulfilling \u2014 not because it\u2019s perfect, but because it\u2019s intentional.',
  frames: ['outro'],
  time: 920,
};

export const HABITS: Habit[] = [
  {
    n: 1,
    slug: 'kaizen',
    name: 'Kaizen',
    romaji: '\u6539\u5584',
    translation: 'Continuous improvement',
    start: 70,
    end: 187,
    frames: ['kaizen-a', 'kaizen-b', 'kaizen-c'],
    quote: '1% better every day. That\u2019s it.',
    body: [
      'Kaizen means continuous improvement \u2014 but not the kind where you overhaul your entire life on January 1st and burn out by February. It\u2019s the opposite. It\u2019s about making improvements so small they\u2019re almost invisible.',
      'In Japanese companies, this philosophy is everywhere. Toyota became one of the most successful car manufacturers in the world because of kaizen \u2014 not by making massive changes, but by encouraging every worker, every day, to find one tiny thing to improve. A process that could be one second faster, a tool that could be placed two inches closer, a step that could be eliminated entirely. It sounds insignificant, but when you do that every single day for years, the compound effect is staggering.',
      'Want to get in shape? Don\u2019t commit to the gym for an hour every day. Do one push-up \u2014 just one. That\u2019s so easy you can\u2019t say no. And once you do one, you\u2019ll probably do five, then ten, and before you know it, it\u2019s a habit. Want to read more? Read one page. One page is nothing \u2014 but one page a day is 365 pages a year. That\u2019s more than most people read in five years.',
      'Kaizen removes the friction. It makes improvement invisible until the results become undeniable. Because the goal isn\u2019t to transform overnight. The goal is to never stop moving forward.',
    ],
    try: 'Find the smallest possible version of the change you want to make \u2014 one that\u2019s so easy you can\u2019t say no \u2014 and do it today.',
  },
  {
    n: 2,
    slug: 'ikigai',
    name: 'Ikigai',
    romaji: '\u751f\u304d\u7518\u6590',
    translation: 'A reason for being',
    start: 187,
    end: 305,
    frames: ['ikigai-a', 'ikigai-b', 'ikigai-c'],
    quote: 'When you have a reason to wake up, your body wants to keep going.',
    body: [
      'Ikigai is your reason for being \u2014 the thing that makes you wake up in the morning. Not your job, not your responsibilities, but the thing that gives your life meaning.',
      'In Okinawa \u2014 one of the blue zones where people regularly live past 100 \u2014 almost everyone can tell you their ikigai. And researchers believe that sense of purpose is one of the main reasons they live so long. When you have a reason to wake up, your body wants to keep going. But when life feels meaningless, your health declines, your energy drops, you age faster.',
      'Ikigai isn\u2019t about grand ambitions. It\u2019s not about changing the world or becoming famous. It can be as simple as tending a garden, teaching a skill, spending time with grandchildren, creating something with your hands. The key is that it\u2019s yours \u2014 not what society tells you to care about, but what genuinely makes you feel alive.',
      'The Japanese framework says ikigai sits at the intersection of four things: what you love, what you\u2019re good at, what the world needs, and what you can be paid for. When you find something that touches all four, that\u2019s your ikigai \u2014 and when you live according to that, everything else falls into place.',
    ],
    try: 'Pause right now and ask yourself the four questions. You don\u2019t need all the answers today \u2014 but if you start asking, the answers will come.',
  },
  {
    n: 3,
    slug: 'hara-hachi-bu',
    name: 'Hara Hachi Bu',
    romaji: '\u8179\u516b\u5206',
    translation: 'Eat until you\u2019re 80% full',
    start: 305,
    end: 417,
    frames: ['harahachi-a', 'harahachi-b', 'harahachi-c'],
    quote: 'Eat until you\u2019re 80% full. Not stuffed. Not satisfied. Just 80%.',
    body: [
      'In Okinawa, people say this phrase before every meal. It\u2019s a reminder, a tiny moment of mindfulness, and it keeps them from overeating.',
      'Here\u2019s the problem. Your brain takes about 20 minutes to register that you\u2019re full. So if you eat until you feel full, you\u2019ve already overeaten. You\u2019ve consumed more than your body needed. And over time, that extra 20% adds up \u2014 it leads to weight gain, sluggishness, inflammation, all the things that make you age faster.',
      'But if you stop at 80%, you give your body exactly what it needs, nothing more. And that slight calorie restriction has been shown to extend lifespan in almost every species studied. This doesn\u2019t mean starving yourself. It means eating slowly, paying attention, putting your fork down between bites, asking yourself: am I actually still hungry, or am I just eating because it\u2019s there?',
      'Most people eat on autopilot. They finish what\u2019s on the plate because that\u2019s what they\u2019re supposed to do. But your plate doesn\u2019t know how much your body needs.',
    ],
    try: 'Halfway through your next meal, pause. Ask yourself: could I stop here and feel fine? If yes, stop. If not, keep going \u2014 but slowly. It\u2019s not restriction. It\u2019s awareness.',
  },
  {
    n: 4,
    slug: 'shinrin-yoku',
    name: 'Shinrin-yoku',
    romaji: '\u68ee\u6797\u6d74',
    translation: 'Forest bathing',
    start: 417,
    end: 520,
    frames: ['shinrin-a', 'shinrin-b', 'shinrin-c'],
    quote: 'This isn\u2019t exercise. It\u2019s not hiking. It\u2019s simply being in nature.',
    body: [
      'Shinrin-yoku \u2014 forest bathing \u2014 is simply being in nature, walking slowly, breathing deeply, noticing what\u2019s around you. In Japan, doctors actually prescribe this. They tell patients to spend time in the forest \u2014 not as a metaphor, as medicine.',
      'And the science backs it up. When you spend time in nature, your cortisol drops, your blood pressure lowers, your immune system strengthens, even your mood improves. There\u2019s something about being surrounded by trees that resets your nervous system. Researchers think it has to do with phytoncides \u2014 compounds that trees release to protect themselves from insects. When you breathe them in, your stress hormones decrease, your parasympathetic nervous system activates. You shift from fight-or-flight to rest-and-digest.',
      'You don\u2019t need a forest. You don\u2019t need to live in Japan. You just need trees \u2014 a park, a trail, even a tree-lined street. The key is to go without distractions. No phone, no podcast, no goal. Just walk slowly and pay attention. Notice the light filtering through the leaves, the sound of the wind, the smell of the earth. Let your mind wander.',
      'This isn\u2019t wasted time. This is recovery. And in a world that\u2019s constantly demanding your attention, this tiny practice might be the most important hour of your week.',
    ],
    try: 'Find trees. Leave your phone. Walk slowly, breathe deeply, and pay attention to one small thing you\u2019ve never noticed before.',
  },
  {
    n: 5,
    slug: 'wabi-sabi',
    name: 'Wabi-sabi',
    romaji: '\u4f98\u5bc2',
    translation: 'Beauty in imperfection',
    start: 520,
    end: 628,
    frames: ['wabisabi-a', 'wabisabi-b', 'wabisabi-c'],
    quote: 'A cracked teacup isn\u2019t broken. It\u2019s lived.',
    body: [
      'Wabi-sabi is the acceptance of imperfection \u2014 the beauty of things that are impermanent, incomplete, and imperfect.',
      'In the West, we\u2019re obsessed with perfection. Flawless skin, perfect bodies, spotless homes, curated Instagram feeds. But that pursuit is exhausting \u2014 and it\u2019s a lie. Because nothing is perfect. Nothing lasts forever. And nothing is ever finished. Wabi-sabi says that\u2019s okay. In fact, that\u2019s where the beauty is.',
      'A cracked teacup isn\u2019t broken \u2014 it\u2019s lived. A weathered wooden table isn\u2019t old \u2014 it\u2019s full of history. A wrinkle on your face isn\u2019t a flaw \u2014 it\u2019s a map of your life. When you embrace wabi-sabi, you stop chasing the impossible. You stop comparing yourself to airbrushed images. You stop feeling like you\u2019re not enough. Instead, you start appreciating what is, right now, as it is.',
      'That shift is freeing. Suddenly you don\u2019t need to fix everything. You don\u2019t need to be more, do more, have more. You can just be. This doesn\u2019t mean giving up. It means accepting that progress is messy, that life is imperfect, and that\u2019s not a problem \u2014 that\u2019s the point.',
    ],
    try: 'The next time you notice something imperfect in your life, instead of seeing it as something to fix, ask yourself: what\u2019s beautiful about this?',
  },
  {
    n: 6,
    slug: 'gaman',
    name: 'Gaman',
    romaji: '\u6211\u6162',
    translation: 'Endurance with dignity',
    start: 628,
    end: 711,
    frames: ['gaman-a', 'gaman-b', 'gaman-c'],
    quote: 'This is hard, but I can handle it.',
    body: [
      'Gaman means endurance with dignity \u2014 the ability to tolerate difficulty without complaint, to persevere through hardship without breaking down.',
      'In the West, this might sound like toxic positivity. Like \u201cjust suck it up and don\u2019t feel your feelings.\u201d But that\u2019s not what gaman is about. Gaman isn\u2019t about denying your pain. It\u2019s about not letting your pain control you. It\u2019s the quiet strength that says: this is hard, but I can handle it. I don\u2019t need to broadcast my struggle. I don\u2019t need validation. I just need to keep going.',
      'There\u2019s something powerful about that. Because when you stop complaining, you stop reinforcing the narrative that you\u2019re a victim. You stop feeding the story that life is happening to you. Instead, you take responsibility. You accept that difficulty is part of life, and you choose how you respond to it.',
      'This doesn\u2019t mean you suffer in silence. It means you don\u2019t let suffering define you. In a world where everyone is constantly sharing their struggles online, looking for sympathy, looking for likes \u2014 gaman is a reminder: you don\u2019t need an audience to be strong. You just need to show up.',
    ],
    try: 'The next hard moment, skip the tweet, skip the text, skip the vent. Just breathe, take the next step, and let the strength be quiet.',
  },
  {
    n: 7,
    slug: 'omoiyari',
    name: 'Omoiyari',
    romaji: '\u601d\u3044\u3084\u308a',
    translation: 'Compassionate consideration',
    start: 711,
    end: 804,
    frames: ['omoiyari-a', 'omoiyari-b', 'omoiyari-c'],
    quote: 'When you make life easier for others, life becomes easier for everyone.',
    body: [
      'Omoiyari is compassionate consideration \u2014 the ability to put yourself in someone else\u2019s shoes, to anticipate their needs before they ask, to act with kindness not because you have to but because you\u2019re thinking about how your actions affect others.',
      'In Japan, this is everywhere. People speak quietly on trains so they don\u2019t disturb others. They clean up after themselves in public spaces. They bow when they greet you \u2014 not out of subservience, but out of respect. It\u2019s a society built on the idea that we\u2019re all connected. That your actions ripple outward. That when you make life easier for others, life becomes easier for everyone.',
      'This isn\u2019t just polite \u2014 it\u2019s practical. Because when everyone practices omoiyari, trust increases, stress decreases, society functions more smoothly. But more than that, omoiyari makes you happier. Because when you shift your focus from yourself to others, your own problems shrink, your perspective widens, and you feel more connected to the world around you.',
    ],
    try: 'Before you act, pause and ask: how will this affect the people around me? If you\u2019re playing music, is it too loud? If you\u2019re leaving a space, is it cleaner than when you arrived? Tiny acts, huge ripple.',
  },
  {
    n: 8,
    slug: 'kintsugi',
    name: 'Kintsugi',
    romaji: '\u91d1\u7d99\u304e',
    translation: 'Golden repair',
    start: 804,
    end: 870,
    frames: ['kintsugi-a', 'kintsugi-b', 'kintsugi-c'],
    quote: 'You\u2019re not damaged. You\u2019re being transformed.',
    body: [
      'Kintsugi is the art of repairing broken things with gold. When a bowl or vase breaks in Japan, they don\u2019t throw it away \u2014 they repair it. But instead of hiding the cracks, they fill them with gold. And the piece becomes more beautiful than it was before.',
      'Kintsugi is a metaphor for life. You will break. You will fail. You will be hurt. But that doesn\u2019t make you worthless. It makes you real. And when you repair yourself \u2014 when you put the pieces back together \u2014 those cracks become part of your story. They\u2019re not something to hide. They\u2019re something to honor.',
      'Because the strongest people aren\u2019t the ones who never broke. They\u2019re the ones who broke and rebuilt themselves \u2014 and they carry that gold with them. So if you\u2019re going through something hard right now, remember this: you\u2019re not damaged. You\u2019re being transformed. And the version of you that comes out the other side will be stronger, wiser, and more beautiful than before.',
    ],
    try: 'Don\u2019t hide your scars. Let them shine.',
  },
];
