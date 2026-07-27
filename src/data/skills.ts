/** Grouped technical skills for the portfolio */

export type SkillCategory = {
  title: string
  items: readonly string[]
}

export const aiDevelopmentIntro =
  'On-device AI & AI-assisted delivery: I ship privacy-first RAG, TFLite, and OS-native models (Apple Intelligence, Gemini Nano) in product — and use Context Engineering with Cursor, Claude, and Copilot to accelerate full-stack delivery while owning architecture, security, and production judgment.'

/** Top ATS keywords for iOS + AI-native + Flutter roles */
export const atsKeywords = [
  'Swift',
  'SwiftUI',
  'UIKit',
  'Flutter',
  'Dart',
  'On-device AI',
  'Core ML',
  'TensorFlow Lite',
  'RAG',
  'Apple Intelligence',
  'Gemini Nano',
  'MVVM',
  'Clean Architecture',
  'Firebase',
  'Privacy Engineering',
  'Mobile SDK Development',
  'REST APIs',
  'Context Engineering',
  'Offline-first',
  'Protocol-Oriented Programming',
] as const

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming languages',
    items: ['Swift', 'Dart', 'TypeScript', 'Python'],
  },
  {
    title: 'Mobile & architecture',
    items: [
      'SwiftUI',
      'UIKit',
      'Flutter',
      'Clean Architecture',
      'MVVM',
      'Protocol-Oriented Programming',
      'Offline-first',
      'Mobile SDK Development',
      'Deep links',
      'REST APIs',
      'Firebase',
      'CMS-driven UI',
    ],
  },
  {
    title: 'On-device AI & privacy',
    items: [
      'RAG',
      'BM25',
      'TensorFlow Lite',
      'Core ML',
      'Apple Intelligence',
      'Gemini Nano',
      'Semantic retrieval',
      'Privacy Engineering',
      'Flutter plugins (Pigeon)',
    ],
  },
  {
    title: 'Tools & platforms',
    items: [
      'Xcode',
      'Android Studio',
      'NestJS',
      'Prisma',
      'Next.js',
      'Git',
      'GitHub',
      'Cursor',
      'Claude',
      'Gemini',
      'GitHub Copilot',
    ],
  },
] as const
