import type { LucideIcon } from 'lucide-react'
import { Gauge, Layers, Rocket, Smartphone, Sparkles } from 'lucide-react'

export type Service = {
  title: string
  description: string
  Icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'iOS Development',
    description:
      'Production-ready SwiftUI and UIKit apps with solid architecture and App Store polish.',
    Icon: Smartphone,
  },
  {
    title: 'Flutter Development',
    description:
      'Cross-platform experiences with consistent UX and maintainable Dart codebases.',
    Icon: Layers,
  },
  {
    title: 'MVP Development',
    description:
      'From idea to TestFlight: scope tightly, ship fast, and learn from real users.',
    Icon: Rocket,
  },
  {
    title: 'Performance Optimization',
    description:
      'Networking, startup time, memory, and binary size tuned for real-world traffic.',
    Icon: Gauge,
  },
  {
    title: 'AI-Driven Development',
    description:
      'Secure AI-assisted coding with Cursor, Claude, Gemini, and Copilot — faster iteration and reviews without sacrificing architecture or production bar.',
    Icon: Sparkles,
  },
]
