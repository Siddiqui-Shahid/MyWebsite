export type ProjectScreenshot = {
  src: string
  alt: string
}

export type Project = {
  title: string
  tech: string[]
  bullets: string[]
  impact?: string
  /** App Store or external product link */
  href?: string
  linkLabel?: string
  imageSrc?: string
  /** Phone UI captures for in-card demo scroll */
  screenshots?: ProjectScreenshot[]
}

export const projects: Project[] = [
  {
    title: 'GradAxis Talent Copilot',
    tech: [
      'SwiftUI',
      'Kotlin Compose',
      'Next.js',
      'FastAPI',
      'Ollama',
      'Local LLM',
      'BM25',
      'SQLite',
    ],
    bullets: [
      'Recruiter workspace across iOS, Android, and Web: create roles, upload candidates, rank matches, track outreach.',
      'BM25 ranking works offline; quote-backed fit evidence and WhatsApp drafts via local Ollama (llama3.2 / qwen2.5) — no cloud LLM API.',
      'PDF Scorer grades resumes 0–100 against a role with rubric + rationale on-device via local models.',
      'FastAPI + SQLite backend shared by SwiftUI, Jetpack Compose, and Next.js clients.',
    ],
    impact:
      'Full-stack talent copilot with local AI — ranking, evidence, and PDF scoring without shipping resumes to a cloud LLM.',
    linkLabel: 'GitHub',
    href: 'https://github.com/Siddiqui-Shahid/Talent-copilot',
    screenshots: [
      { src: 'projects/talent-copilot/01-roles.jpg', alt: 'Talent Copilot iOS — open roles list' },
      {
        src: 'projects/talent-copilot/02-role-detail.jpg',
        alt: 'Talent Copilot iOS — role detail and candidate pool',
      },
      {
        src: 'projects/talent-copilot/03-ranked.jpg',
        alt: 'Talent Copilot iOS — BM25 ranked matches with evidence',
      },
    ],
  },
  {
    title: 'FinTrack',
    tech: [
      'Flutter',
      'Dart',
      'Hive',
      'On-device AI',
      'RAG',
      'BM25',
      'Apple Intelligence',
      'Gemini Nano',
    ],
    bullets: [
      'Privacy-first expense tracker: offline Hive storage, biometric lock, insights charts, JSON backup, AdMob monetization.',
      'AI Savings Coach: BM25 RAG over local spending data + on-device generation via custom flutter_native_ai plugin (Apple FM / Gemini Nano).',
      'RuleBasedCoach fallback when OS models unavailable — spending data never leaves the device.',
      'Production ops: Firebase Crashlytics, Remote Config for updates/ads, Material You design system.',
    ],
    impact:
      'Shipped a store-ready privacy product with real on-device AI — not a cloud chatbot bolt-on.',
    linkLabel: 'GitHub',
    href: 'https://github.com/Siddiqui-Shahid/SpendingTracker',
    screenshots: [
      { src: 'projects/fintrack/home_screen.jpg', alt: 'FinTrack home — balances and recent spending' },
      { src: 'projects/fintrack/add_transaction.jpg', alt: 'FinTrack add transaction screen' },
      { src: 'projects/fintrack/spending_insights.jpg', alt: 'FinTrack spending insights charts' },
      { src: 'projects/fintrack/transaction_history.jpg', alt: 'FinTrack transaction history' },
      { src: 'projects/fintrack/categories.jpg', alt: 'FinTrack categories screen' },
      { src: 'projects/fintrack/settings.jpg', alt: 'FinTrack settings and privacy options' },
    ],
  },
  {
    title: 'Volt',
    tech: ['Swift', 'SwiftUI', 'MVVM', 'Offline-first', 'iOS 17+'],
    bullets: [
      'Offline strength app: build today’s session (Push / Pull / Legs / Chest / Mix / Custom) and train without accounts or network.',
      'Live exercise mode with weight stepper, set logging, and a lime rest-timer ring (+15s / Skip).',
      'Tabs for Today, Programs, Progress, and Profile with glass chrome — fully local, no HealthKit.',
      'Portfolio demo rebuilt from a Forge (Sleek) workout design reference into production SwiftUI.',
    ],
    impact:
      'End-to-end SwiftUI product demo — session builder → exercise mode → rest → summary, fully offline.',
    linkLabel: 'GitHub',
    href: 'https://github.com/Siddiqui-Shahid/Volt',
    screenshots: [
      { src: 'projects/volt/01-today.jpg', alt: 'Volt Today tab — build and start workout' },
      { src: 'projects/volt/02-programs.jpg', alt: 'Volt Programs library' },
      { src: 'projects/volt/03-progress.jpg', alt: 'Volt Progress charts' },
      { src: 'projects/volt/05-select-exercises.jpg', alt: 'Volt select exercises for custom session' },
      { src: 'projects/volt/06-exercise-mode.jpg', alt: 'Volt live exercise mode logging sets' },
      { src: 'projects/volt/07-rest-timer.jpg', alt: 'Volt rest timer between sets' },
      { src: 'projects/volt/08-session-complete.jpg', alt: 'Volt session complete summary' },
    ],
  },
  {
    title: 'GymFlow',
    tech: [
      'NestJS',
      'Prisma',
      'Next.js',
      'Flutter',
      'TFLite',
      'RAG',
      'JWT',
    ],
    bullets: [
      'Full-stack gym ops for Indian gyms: one API, Next.js staff portal, Flutter member/trainer app.',
      'Secure attendance: QR geofence, membership gate, rotating HMAC-SHA1 TOTP desk bypass (30s).',
      'On-device MiniLM (TFLite) embeddings + WordPiece tokenizer for workout recommendations; trainer plan as RAG context; TF-IDF fail-soft fallback.',
      'India-first ops: INR/UPI receipts, wa.me lead follow-ups; migrated Firebase BaaS to owned NestJS/Prisma stack.',
    ],
    impact:
      'Pilot-ready B2B product with deliberate scope cuts and on-device AI — zero cloud inference cost.',
    linkLabel: 'GitHub',
    href: 'https://github.com/Siddiqui-Shahid/gymautomation',
  },
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
    tech: ['Swift', 'SwiftUI', 'iOS', 'LocalAuthentication'],
    bullets: [
      'Free Parking billing flow and biometric (Face ID) ticket access via LocalAuthentication.',
      'Hotlist: Updated flows so users can discover restaurants using Instagram Reels and AI-powered search.',
      'Plays: Court and venue booking for badminton, cricket, football, and other sports.',
      'Context Engineering with Cursor and Claude for MVVM/Clean Architecture migrations and AI-assisted reviews.',
    ],
    impact:
      'Shipped marketplace and booking experiences with reliability during high-traffic releases.',
    linkLabel: 'App Store',
    href: 'https://apps.apple.com/in/app/district-movies-events-dining/id6670536058',
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
