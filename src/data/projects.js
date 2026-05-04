// Single source of truth for project data.
// Add a new entry here and it shows up on /projects automatically.
// `id` becomes the URL slug at /projects/:id

export const projects = [
 
  {
    id: 'roboticarm',
    title: 'Robotic Arm Controller',
    subtitle: 'Side project · 2026',
    date: 'Spring 2026',
    description:
      'A markdown-first journaling app for hikers and naturalists. Works offline, syncs over Bluetooth between devices in the same trail group.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    accent: '#4cf0ff',
    role: 'Solo build',
    timeline: '4 months (nights & weekends)',
    stack: ['React Native', 'SQLite', 'WebBluetooth'],
    body: [
      'Field Notes came from a personal frustration: every trail journaling app I tried was either a glorified photo gallery or a bloated social network. I wanted plain text, fast capture, and zero cell signal required.',
      'The Bluetooth sync was the unexpectedly fun part. Two phones on a ridgeline can swap entries without ever touching the internet, which feels closer to passing a notebook than using software.',
    ],
  },
  {
    id: 'machinevision',
    title: 'Machine Vision',
    subtitle: 'Machine Learning · 2025',
    date: 'Dec 2025',
    description:
      'An email client that intentionally delays delivery by 24 hours, with a "would you really say this tomorrow?" review step before sending.',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80',
    accent: '#4cf0ff',
    role: 'Designer, prototype builder',
    timeline: '2 months',
    stack: ['Figma', 'Swift', 'PostgreSQL'],
    body: [
      'Machine Vision is a thought experiment about whether software should sometimes get in our way. The premise: every email you send sits in a 24-hour holding pattern. The next morning, you get a chance to edit, soften, or kill it before it goes out.',
      'I built a working iOS prototype and ran it on myself for two months. I killed roughly 18% of my sent messages the next morning. The remaining 82% were almost always shorter than the original draft.',
    ],
  },
  {
    id: 'windcharger',
    title: 'Windcharger',
    subtitle: '3D printed turbine · 2024',
    date: 'Winter 2024',
    description:
      'A 3D-printed vertical-axis wind turbine designed for low-wind environments. Generates enough power to charge a phone in a day of light breeze.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    accent: '#d4ff3a',
    role: 'Designer, audio programmer',
    timeline: 'Ongoing',
    stack: ['p5.js', 'Web Audio API', 'Cloudflare Workers'],
    body: [
      'Windcharger started as a weekend project to explore how software could help me understand the physics of wind energy. I designed and 3D-printed a small vertical-axis turbine, then built a web-based simulator to model its performance under different conditions.',
    ],
  },
  {
    id: 'truerandom',
    title: 'TrueRandom',
    subtitle: 'Open source · 2023',
    date: 'Dec 2025',
    description:
      'Using random images of spinning art objects to demonstrate the difference between true randomness and algorithmic pseudorandomness.',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&q=80',
    accent: '#ff5e3a',
    role: 'Author',
    timeline: '1 weeks',
    stack: ['CSS', 'PostCSS', 'Stylelint'],
    body: [
      'Tessellate is what happens when you read too much M.C. Escher and not enough stop signs. It\'s a CSS-only library that lets you drop in tiled backgrounds with impossible geometry — Penrose tilings, Truchet patterns, and a few I made up.',
      'The constraint of "no JavaScript" forced some interesting solutions, especially for the animated variants. The whole thing leans heavily on CSS custom properties and `@property` for tween-able gradients.',
    ],
  }
];

export function getProject(id) {
  return projects.find((p) => p.id === id);
}
