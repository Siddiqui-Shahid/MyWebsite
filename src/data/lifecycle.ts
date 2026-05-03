import type { LucideIcon } from 'lucide-react'
import {
  ClipboardList,
  Code2,
  Lightbulb,
  Rocket,
  TestTube,
  TrendingUp,
} from 'lucide-react'

export type LifecycleStep = {
  Icon: LucideIcon
  title: string
  description: string
}

export const lifecycleSteps: LifecycleStep[] = [
  {
    Icon: Lightbulb,
    title: 'Idea',
    description: 'Clarify goals, users, and success metrics before writing code.',
  },
  {
    Icon: ClipboardList,
    title: 'Planning',
    description: 'Architecture, APIs, and milestones aligned with your roadmap.',
  },
  {
    Icon: Code2,
    title: 'Development',
    description: 'Ship features with clean patterns and maintainable structure.',
  },
  {
    Icon: TestTube,
    title: 'Testing',
    description: 'Validate flows, edge cases, and performance on real devices.',
  },
  {
    Icon: Rocket,
    title: 'Launch',
    description: 'Release with confidence and monitor what matters in production.',
  },
  {
    Icon: TrendingUp,
    title: 'Scale',
    description: 'Iterate with analytics, stability, and growth in mind.',
  },
]
