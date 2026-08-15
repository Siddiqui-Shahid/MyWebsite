/** Central contact and meta copy */
export const site = {
  name: 'Shahid',
  email: 'teamworkwithshahid@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shahidsiddiquiios/',
  github: 'https://github.com/Siddiqui-Shahid',
  hero: {
    availability: 'Available immediately · iOS & Flutter roles',
    headline: 'iOS & Flutter engineer',
    tagline: 'who ships production apps',
    subheadline:
      '3.5+ years of native iOS (Swift, SwiftUI, UIKit) and Flutter. BookMyShow at 30+ lakh DAU, District by Zomato, and NBA / WNBA apps on the App Store — plus Flutter products shipped end-to-end.',
    photoAlt: 'Portrait of Shahid, iOS and Flutter engineer',
    stackCards: ['iOS · SwiftUI · UIKit', 'Flutter · Dart', 'MVVM · Clean Architecture'] as const,
    stats: [
      { value: '30L+', label: 'DAU on iOS' },
      { value: '99.95%', label: 'crash-free' },
      { value: '3.5+', label: 'years shipping' },
    ] as const,
    trustChips: [
      'BookMyShow',
      'District by Zomato',
      'NBA / WNBA',
      'FinTrack',
      'GymFlow',
    ] as const,
  },
  about:
    'I am an iOS and Flutter engineer. At BookMyShow I owned revenue-critical iOS surfaces for 30+ lakh daily users (ads, event bottom sheet, backend-driven UI) while keeping 99.95%+ crash-free sessions. At District by Zomato I shipped native billing and booking flows. At Raw Engineering I delivered NBA / WNBA fan apps still on the App Store. In Flutter I built FinTrack — a privacy-first expense tracker with offline Hive storage and store-ready Crashlytics / Remote Config — and GymFlow, a gym-ops member app on a NestJS API. I use MVVM, Clean Architecture, and production habits (SSL pinning, deep links, TestFlight) so releases stay stable.',
  nextProject: {
    title: 'Hiring an iOS or Flutter engineer?',
    subtext:
      'Available immediately. Production iOS at consumer scale, Flutter products shipped solo, and App Store ownership from feature to release.',
    cta: 'Email me',
  },
  contact: {
    heading:
      'Open to iOS, Flutter, and mobile roles. Email me — I typically reply the same day.',
  },
  /** PDF under `public/` — rebuild from sibling repo `../resume` (see run.md there) */
  resume: {
    href: 'resume.pdf',
    label: 'Resume',
  },
} as const
