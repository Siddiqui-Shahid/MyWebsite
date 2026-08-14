/** Grouped technical skills for the portfolio */

export type SkillCategory = {
  title: string
  items: readonly string[]
}

export const shippingIntro =
  'I ship native iOS and Flutter with the same production bar: MVVM / Clean Architecture, crash-free releases, TestFlight / store hygiene, and ownership from feature to App Store.'

/** Top ATS keywords for iOS + Flutter roles */
export const atsKeywords = [
  'Swift',
  'SwiftUI',
  'UIKit',
  'Flutter',
  'Dart',
  'MVVM',
  'Clean Architecture',
  'Firebase',
  'REST APIs',
  'Combine',
  'async/await',
  'URLSession',
  'XCTest',
  'TestFlight',
  'Provider',
  'Hive',
  'Deep linking',
  'Push notifications',
  'Offline-first',
  'Protocol-Oriented Programming',
] as const

export const skillCategories: SkillCategory[] = [
  {
    title: 'iOS',
    items: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'Combine',
      'async/await',
      'URLSession',
      'XCTest',
      'TestFlight',
      'StoreKit',
    ],
  },
  {
    title: 'Flutter',
    items: [
      'Dart',
      'Provider',
      'Hive',
      'Platform channels',
      'Firebase',
      'Material',
      'Play Store',
      'Offline-first',
    ],
  },
  {
    title: 'Architecture & production',
    items: [
      'MVVM',
      'Clean Architecture',
      'Protocol-Oriented Programming',
      'REST APIs',
      'Deep links',
      'Push (Airship)',
      'Mixpanel',
      'CMS-driven UI',
      'SSL pinning',
      'Crashlytics',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Xcode',
      'Android Studio',
      'Git',
      'GitHub Actions',
      'Instruments',
      'Firebase',
      'NestJS',
      'Cursor',
    ],
  },
] as const
