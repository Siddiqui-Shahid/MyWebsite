/** Central contact and meta copy */
export const site = {
  name: 'Shahid',
  email: 'teamworkwithshahid@gmail.com',
  hero: {
    headline:
      'iOS & AI-native engineer — production apps and on-device intelligence',
    subheadline:
      '3.5+ years shipping at BookMyShow (30+ lakh DAU), District by Zomato, and NBA team apps — plus solo-built FinTrack and GymFlow with on-device RAG, TFLite, and privacy-first architecture. Swift, Flutter, Clean Architecture, and AI-assisted delivery.',
    photoAlt: 'Portrait of Shahid, iOS and AI-native mobile engineer',
    /** Short labels for the hero visual — stacked cards */
    stackCards: [
      'iOS & SwiftUI',
      'Flutter & On-device AI',
      'RAG · TFLite · Privacy',
    ] as const,
    /** One-line proof points under the subhead */
    stats: [
      '30+ lakh DAU production scale',
      'On-device AI — no cloud LLM for user data',
      'Solo full-stack product shipping',
    ] as const,
    /** Companies / products — trust chips (subset of full TrustBar) */
    trustChips: [
      'BookMyShow',
      'District by Zomato',
      'FinTrack',
      'GymFlow',
    ] as const,
  },
  about:
    'I am an iOS and AI-native software engineer who ships production mobile at scale and builds privacy-first products end-to-end. At BookMyShow I owned revenue-critical surfaces for 30+ lakh daily users; at District by Zomato I delivered native flows with biometric security and AI-assisted architecture migrations. Solo, I built FinTrack — a Flutter expense app with BM25 RAG and Apple Intelligence / Gemini Nano coaching that never sends spending data to the cloud — and GymFlow, a full-stack gym ops platform with geofenced QR check-in and on-device MiniLM workout recommendations. I combine Swift, Flutter, Clean Architecture, and Context Engineering to move fast without compromising trust boundaries.',
  nextProject: {
    title: 'Building something with mobile or on-device AI?',
    subtext:
      'From consumer scale to privacy-first Flutter products — architecture, ownership, and shipped releases.',
    cta: 'Get in Touch',
  },
  contact: {
    heading:
      'Have an idea, role, or project? Reach out — I typically reply within a few snack breaks 😁',
  },
  /** PDF under `public/` — regenerate with `npm run resume` */
  resume: {
    href: 'resume.pdf',
    label: 'Resume',
  },
} as const
