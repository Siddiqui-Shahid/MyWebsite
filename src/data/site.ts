/** Central contact and meta copy */
export const site = {
  name: 'Shahid',
  email: 'teamworkwithshahid@gmail.com',
  hero: {
    headline: 'I build scalable iOS and Flutter apps for production teams',
    subheadline:
      'Shipping at District by Zomato, BookMyShow, and Raw Engineering (NBA & WNBA team apps). Swift, Dart, Python, SwiftUI, UIKit, Flutter, Firebase, MVVM, REST, analytics, CMS-driven UI — with AI-assisted, review-ready workflows.',
    photoAlt: 'Portrait of Shahid, iOS and Flutter engineer',
    /** Short labels for the hero visual — stacked cards */
    stackCards: ['iOS & SwiftUI', 'Flutter & Dart', 'AI-assisted delivery'] as const,
    /** One-line proof points under the subhead */
    stats: [
      'Production releases & scale',
      'iOS, Flutter & Firebase',
      'Integration & on-call ownership',
    ] as const,
    /** Companies / products — trust chips (subset of full TrustBar) */
    trustChips: [
      'District by Zomato',
      'BookMyShow',
      'Raw Engineering',
      'NBA / WNBA apps',
    ] as const,
  },
  about:
    'I am an iOS engineer focused on production releases, modular architecture, and measurable performance. At District by Zomato I ship native marketplace flows and reliability on-call. At BookMyShow I owned revenue-critical surfaces and networking modernization. At Raw Engineering I shipped end-to-end features across multiple NBA team apps (integrations, analytics, notifications, and cross-team collaboration). Day to day I use Xcode, Git, GitHub, VS Code, Android Studio, Firebase, Mixpanel, deep links, REST APIs, CMS-backed content, and AI-driven development with Cursor, Claude, Gemini, and GitHub Copilot — always with reviewable, secure workflows.',
  nextProject: {
    title: 'Ready to build your next app',
    subtext:
      'From arena apps to consumer marketplaces — scalable architecture, clear ownership, and shipped releases.',
    cta: 'Start a Project',
  },
  contact: {
    heading:
      'Have an idea or opportunity? Reach out — I typically reply within a few business days.',
  },
} as const
