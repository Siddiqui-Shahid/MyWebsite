import type { LucideIcon } from 'lucide-react'
import { Brain, Gauge, Layers, Rocket, Smartphone, Sparkles } from 'lucide-react'

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
      'Cross-platform apps with offline-first storage, biometric security, and store-ready polish.',
    Icon: Layers,
  },
  {
    title: 'On-Device AI',
    description:
      'Privacy-first RAG, TFLite embeddings, Apple Intelligence, and Gemini Nano — with graceful fallbacks when models are unavailable.',
    Icon: Brain,
  },
  {
    title: 'Full-Stack Product Shipping',
    description:
      'Solo end-to-end delivery: mobile + API + portal — from FinTrack to GymFlow with deliberate product scope.',
    Icon: Rocket,
  },
  {
    title: 'Performance & Security',
    description:
      'Firebase traces, crash triage, networking modernization, and biometric auth for production trust.',
    Icon: Gauge,
  },
  {
    title: 'AI-Assisted Development',
    description:
      'Context Engineering with Cursor, Claude, and Copilot — faster iteration without sacrificing architecture or security.',
    Icon: Sparkles,
  },
]
