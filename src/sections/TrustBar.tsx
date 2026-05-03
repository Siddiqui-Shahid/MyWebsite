import { Container } from '../components/ui/Container'
import { trustItems } from '../data/trust'

export function TrustBar() {
  return (
    <div className="border-y border-border bg-muted/50">
      <Container className="py-6">
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-text-secondary">
          Trusted with
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {trustItems.map((name) => (
            <li key={name}>
              <span className="inline-block rounded-full border border-border bg-background px-4 py-2 text-sm text-text-secondary shadow-sm">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
