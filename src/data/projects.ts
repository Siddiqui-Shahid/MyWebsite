export type Project = {
  title: string
  tech: string[]
  bullets: string[]
  impact?: string
  /** App Store or external product link */
  href?: string
  linkLabel?: string
  imageSrc?: string
}

export const projects: Project[] = [
  {
    title: 'BookMyShow',
    tech: ['Swift', 'SwiftUI', 'UIKit', 'MVVM', 'Backend-driven UI'],
    bullets: [
      'LE Bottom Sheet: End-to-end delivery for quick event overviews with cross-functional stakeholders and improved UI stability.',
      'Ads Module Optimization: Refactored ads for a more scalable architecture — stronger performance and reliability for a revenue-critical surface.',
      'Dynamic Backend-Driven Header: Configurable headers, unified CTA models, and resilient fallbacks when APIs fail.',
      'Drop-off Widget: Coordinated multiple backend pods to fix integrations, strengthen analytics, and smooth the user journey.',
    ],
    impact:
      'Modernized networking and revenue surfaces while keeping releases stable for millions of users.',
    linkLabel: 'App Store',
    href: 'https://apps.apple.com/in/app/bookmyshow-movie-tickets/id405894842',
  },
  {
    title: 'District by Zomato',
    tech: ['Swift', 'SwiftUI', 'iOS'],
    bullets: [
      'Hotlist: Updated flows so users can discover restaurants using Instagram Reels and AI-powered search.',
      'Impression actions: When a widget is on-screen with sufficient visibility, configured actions run automatically.',
      'Plays: Court and venue booking for badminton, cricket, football, and other sports — including cancellation and rescheduling.',
      'Resolved multiple production bugs; on-call during critical releases and major initiatives.',
      'Integrated AI-assisted tooling in the workflow for faster delivery, reviews, and safer architectural changes.',
    ],
    impact:
      'Shipped marketplace and booking experiences with reliability during high-traffic releases.',
    linkLabel: 'App Store',
    href: 'https://apps.apple.com/in/app/district-dining-movies-events/id6448696699',
  },
  {
    title: 'Memphis Grizzlies iOS App',
    tech: ['SwiftUI', 'Deeplinks', 'UIKit', 'REST API', 'Mixpanel', 'SDK', 'Firebase', 'Airship'],
    bullets: [
      'Led end-to-end work on Arena, Ticketing, Schedule, Profile, and Home.',
      'Built a dynamic page mapper for personalized home based on location and user type.',
      'Increased engagement by designing key UI components and implementing deep linking.',
      'Integrated Mixpanel and Airship for behavior analysis and targeted push notifications.',
      'Owned API integrations, caching, and real-time display for a smooth in-app experience.',
      'Tuned performance with GCD and OperationQueue — memory and runtime stability.',
    ],
    linkLabel: 'App Store',
    href: 'https://apps.apple.com/us/app/memphis-grizzlies/id787339433',
  },
  {
    title: 'Miami HEAT iOS App',
    tech: ['SwiftUI', 'DeepLinks', 'Live Updates', 'SDK', 'UIKit', 'MVVM', 'XCFramework'],
    bullets: [
      'Integrated a third-party XCFramework for in-arena wayfinding.',
      'Built the Drops module for live in-game contests with automated winner selection.',
      'Managed the in-arena scoreboard system — real-time game statistics and accurate historical data.',
      'Streamlined live game updates and player statistics to improve fan engagement.',
      'Improved responsiveness and modularity with a streamlined SwiftUI architecture.',
      'Collaborated with QA and backend to resolve critical bugs and performance issues before App Store release.',
    ],
    linkLabel: 'App Store',
    href: 'https://apps.apple.com/us/app/miami-heat-mobile/id497407923',
  },
  {
    title: 'Las Vegas Aces iOS App',
    tech: ['UIKit', 'DeepLinks', 'Live Updates', 'SDK'],
    bullets: [
      'Integrated audio streaming so fans can access live broadcasts and team information.',
      'Enhanced launch experience by updating splash screen data.',
    ],
    linkLabel: 'App Store',
    href: 'https://apps.apple.com/us/app/las-vegas-aces-app/id6448954083',
  },
  {
    title: 'Chicago Sky iOS App',
    tech: ['UIKit', 'Ticketmaster', 'REST API', 'SDKs'],
    bullets: [
      'Migrated the codebase to Xcode 15 for compatibility and performance improvements.',
      'Managed SDKs through migration so core flows stayed stable.',
    ],
    linkLabel: 'App Store',
    href: 'https://apps.apple.com/us/app/chicago-sky-mobile/id1225686717',
  },
]
