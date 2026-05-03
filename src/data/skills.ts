/** Grouped technical skills for the portfolio */

export type SkillCategory = {
  title: string
  items: readonly string[]
}

export const aiDevelopmentIntro =
  'AI-driven development: Cursor, Claude, Gemini, and GitHub Copilot speed up implementation and reviews; architecture, security, and production judgment stay human-led — secure AI-assisted coding with reviewable diffs.'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming languages',
    items: ['Swift', 'Dart', 'Python'],
  },
  {
    title: 'Libraries & frameworks',
    items: [
      'SwiftUI',
      'UIKit',
      'Deep links',
      'Mixpanel Analytics',
      'iOS development',
      'REST API integration',
      'Flutter',
      'Firebase',
      'MVVM',
      'CMS & content management',
      'UI SDKs',
      'Secure AI-assisted coding',
    ],
  },
  {
    title: 'Tools & platforms',
    items: [
      'Xcode',
      'Git',
      'GitHub',
      'VS Code',
      'Android Studio',
      'Cursor',
      'Claude',
      'Gemini',
      'GitHub Copilot',
    ],
  },
] as const
