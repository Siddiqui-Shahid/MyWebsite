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
    period: 'Jan 2026 – April 2026',
    location: 'Gurugram',
    highlights: [
      'Delivered Free Parking billing flow and biometric (Face ID) ticket access via LocalAuthentication; on-call for production fixes.',
      'Hotlist: updated discovery flows with Instagram Reels and restaurant search.',
      'Plays: court and venue booking for badminton, cricket, football, and more.',
      'MVVM / Clean Architecture migrations with zero-regression delivery.',
    ],
  },
  {
    company: 'BookMyShow',
    title: 'Software Development Engineer (iOS) - 1',
    period: 'Oct 2024 – Jan 2026',
    location: 'Mumbai',
    highlights: [
      'Maintained 30+ lakh DAU app at 99.95%+ crash-free sessions; IMOC for P0/P1 incidents during peak events.',
      'Owned highest-revenue Ads Module: HeroWidget lifecycle, POP + Generics pipeline; migrated Alamofire to URLSession with SSL pinning.',
      'Shipped LE Bottom Sheet and backend-driven header/search; Firebase Performance traces at p50/p90.',
      'Eliminated concurrent-access crashes with GCD synchronised dictionaries and read-write lock patterns.',
    ],
  },
  {
    company: 'Raw Engineering',
    title: 'Associate Software Engineer (iOS + Flutter)',
    period: 'Jan 2023 – Oct 2024',
    location: 'Mumbai',
    highlights: [
      'Built NBA/WNBA iOS apps (Memphis Grizzlies, Miami Heat, Las Vegas Aces, Chicago Sky); shipped reusable Stories SDK adopted portfolio-wide.',
      'SwiftUI+UIKit interoperability, deep links, Mixpanel/Airship; led Xcode 15 migration with zero-regression QA checklist.',
      'Used Flutter for cross-platform delivery where the product needed it; MVVM, GCD, Combine, and Instruments-driven performance tuning.',
      'End-to-end ownership of 40+ live releases across 10+ NBA team apps.',
      'Recognized with the Best Performer Award for technical excellence and delivery.',
    ],
  },
]
