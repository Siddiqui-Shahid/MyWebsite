import { lazy, Suspense } from 'react'

import { Navbar } from './components/layout/Navbar'
import { Hero } from './sections/Hero'

const BelowFold = lazy(() => import('./sections/BelowFold'))

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense
          fallback={
            <div
              className="min-h-[50vh] bg-muted/30"
              aria-hidden
            />
          }
        >
          <BelowFold />
        </Suspense>
      </main>
    </>
  )
}
