export type Role = {
  company: string
  title: string
  period: string
  location: string
  highlights: string[]
}

/** Reverse chronological. */
export const experience: Role[] = [
  {
    company: 'District by Zomato',
    title: 'Software Development Engineer (iOS) - 1',
    period: 'Jan 2026 – Present',
    location: 'Gurugram',
    highlights: [
      'Developed the Free Parking flow and other native features; on-call for critical releases, bug fixes, and production issues.',
      'Hotlist: updated discovery flows with Instagram Reels and AI-powered restaurant search; impression actions when widgets meet visibility thresholds.',
      'Plays: court and venue booking for badminton, cricket, football, and more — including cancellation and rescheduling.',
      'Integrated AI-assisted tools (e.g. Cursor, AI editors) for faster feature work, reviews, and architectural decisions.',
    ],
  },
  {
    company: 'BookMyShow',
    title: 'Software Development Engineer (iOS) - 1',
    period: 'Oct 2024 – Jan 2026',
    location: 'Mumbai',
    highlights: [
      'Built and maintained native iOS apps with Swift and SwiftUI using MVVM for modularity and scale.',
      'Migrated the Ads pod from Alamofire to URLSession for faster responses and smaller app size; moved HTTP to HTTPS and added Firebase Performance traces.',
      'Served as Incident Manager on Call (IMOC), coordinating teams on critical production issues and downtime.',
    ],
  },
  {
    company: 'Raw Engineering',
    title: 'Software Consulting Intern → Associate Software Engineer (iOS)',
    period: 'Jan 2023 – Oct 2024',
    location: 'Mumbai',
    highlights: [
      'Built production iOS apps with SwiftUI and UIKit; reusable UI components and modular structure for faster shipping.',
      'Collaborated with design on pixel-perfect UI; optimized Game Details and UX across devices.',
      'Designed and developed a Stories SDK for Miami Heat for daily, Instagram-like fan content.',
      'Evaluated and implemented Flutter for cross-platform needs; delivered integrations across NBA team apps with QA and backend.',
      'End-to-end ownership of 40+ live releases across 10+ NBA team apps; integrations for push (Airship), analytics (Firebase, Mixpanel, Sentry), and more.',
      'Recognized with the Best Performer Award for technical excellence and delivery.',
    ],
  },
]
