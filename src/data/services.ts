import type { LucideIcon } from 'lucide-react'
import { Gauge, Layers, Rocket, Smartphone, Sparkles, Store } from 'lucide-react'

export type Service = {
  title: string
  description: string
  Icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'iOS Development',
    description:
      'Production SwiftUI and UIKit at scale — MVVM, Clean Architecture, SSL pinning, and 30+ lakh DAU reliability.',
    Icon: Smartphone,
  },
  {
    title: 'Flutter Development',
    description:
      'Cross-platform apps with offline-first storage, biometric security, Firebase, and store-ready polish.',
    Icon: Layers,
  },
  {
    title: 'App Store ownership',
    description:
      'Feature → TestFlight → release. Crashlytics, Performance traces, deep links, and live-day reliability.',
    Icon: Store,
  },
  {
    title: 'Architecture',
    description:
      'MVVM and Clean Architecture that stay shippable — protocol-oriented Swift, feature-first Flutter, CMS-driven UI when it earns its keep.',
    Icon: Rocket,
  },
  {
    title: 'Performance & security',
    description:
      'Firebase traces, crash triage, URLSession + SSL pinning, and biometric auth for production trust.',
    Icon: Gauge,
  },
  {
    title: 'Fast delivery',
    description:
      'Cursor, Claude, and Copilot as a speed boost — architecture and release judgment stay mine.',
    Icon: Sparkles,
  },
]
