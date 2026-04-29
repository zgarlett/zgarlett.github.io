// Single source of truth for project data.
// Add a new entry here and it shows up on /projects automatically.
// `id` becomes the URL slug at /projects/:id

export const projects = [
  {
    id: 'orbital-os',
    title: 'Orbital OS',
    subtitle: 'Design lead · 2024',
    date: 'Q3 2024',
    description:
      'A speculative dashboard for low-earth-orbit satellite fleet operators. Combines telemetry, comms, and mission planning into one calm, glanceable interface.',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80',
    accent: '#ff5e3a',
    role: 'Design Lead, Frontend Engineer',
    timeline: '6 months',
    stack: ['React', 'WebGL', 'D3', 'Rust (backend)'],
    body: [
      'Orbital OS started as a sketchbook exercise: what would mission control look like if it were designed in 2025 instead of 1985? The brief was to build a working prototype that a fleet operator could actually use to monitor 40+ satellites at once without losing situational awareness.',
      'The biggest design challenge was hierarchy — every telemetry stream wants to be the most important. We solved it with a "pulse" system: anomalies bubble up visually, while nominal data fades back. Operators reported a 30% reduction in cognitive load during user testing.',
      'On the engineering side, the trickiest part was streaming 12,000 datapoints/sec into a 60fps WebGL globe without dropping frames. We ended up writing a custom ring buffer in WASM that handed batched diffs to the renderer.',
    ],
  },
  {
    id: 'field-notes',
    title: 'Field Notes',
    subtitle: 'Side project · 2024',
    date: 'Spring 2024',
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
    id: 'paper-radio',
    title: 'Paper Radio',
    subtitle: 'Generative art · 2023',
    date: 'Winter 2023',
    description:
      'Daily generative posters tied to a custom radio station. Each day produces a unique algorithmic poster derived from the day\'s playlist.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    accent: '#d4ff3a',
    role: 'Designer, audio programmer',
    timeline: 'Ongoing',
    stack: ['p5.js', 'Web Audio API', 'Cloudflare Workers'],
    body: [
      'Paper Radio is a love letter to FM radio aesthetics. Every poster is an SVG generated from spectral analysis of the day\'s 20-track playlist, which I curate manually each morning.',
      'The hardest part wasn\'t the code — it was the constraint of making sure no two days look alike while keeping a consistent visual language. I ended up encoding the constraint as a "novelty score" that compares each new poster to the last 30 days.',
    ],
  },
  {
    id: 'tessellate',
    title: 'Tessellate',
    subtitle: 'Open source · 2023',
    date: 'Aug 2023',
    description:
      'A tiny CSS library for impossible Escher-style tiling backgrounds. Pure CSS, no JS, under 4KB gzipped.',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&q=80',
    accent: '#ff5e3a',
    role: 'Author',
    timeline: '3 weeks',
    stack: ['CSS', 'PostCSS', 'Stylelint'],
    body: [
      'Tessellate is what happens when you read too much M.C. Escher and not enough stop signs. It\'s a CSS-only library that lets you drop in tiled backgrounds with impossible geometry — Penrose tilings, Truchet patterns, and a few I made up.',
      'The constraint of "no JavaScript" forced some interesting solutions, especially for the animated variants. The whole thing leans heavily on CSS custom properties and `@property` for tween-able gradients.',
    ],
  },
  {
    id: 'slowmail',
    title: 'Slowmail',
    subtitle: 'Concept · 2023',
    date: 'Mar 2023',
    description:
      'An email client that intentionally delays delivery by 24 hours, with a "would you really say this tomorrow?" review step before sending.',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80',
    accent: '#4cf0ff',
    role: 'Designer, prototype builder',
    timeline: '2 months',
    stack: ['Figma', 'Swift', 'PostgreSQL'],
    body: [
      'Slowmail is a thought experiment about whether software should sometimes get in our way. The premise: every email you send sits in a 24-hour holding pattern. The next morning, you get a chance to edit, soften, or kill it before it goes out.',
      'I built a working iOS prototype and ran it on myself for two months. I killed roughly 18% of my sent messages the next morning. The remaining 82% were almost always shorter than the original draft.',
    ],
  },
  {
    id: 'wayfinder',
    title: 'Wayfinder',
    subtitle: 'Client work · 2022',
    date: 'Nov 2022',
    description:
      'Indoor wayfinding system for a 400,000-sq-ft research campus. Mixes physical signage, an AR mobile app, and a kiosk network.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80',
    accent: '#d4ff3a',
    role: 'Lead designer',
    timeline: '9 months',
    stack: ['Figma', 'Unity (AR)', 'React (kiosks)'],
    body: [
      'The campus had grown organically over 30 years and the existing signage system reflected that — six different visual languages competing for attention. Our job was to design a unified system that could grow with the campus for the next 30 years.',
      'The AR component was a late addition based on user research: visitors with mobility constraints needed step-free routing, and the AR overlay was the most accessible way to surface that without cluttering physical signs.',
    ],
  },
];

export function getProject(id) {
  return projects.find((p) => p.id === id);
}
