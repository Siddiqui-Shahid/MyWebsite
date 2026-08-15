import { trustItems } from '../data/trust'

export function TrustBar() {
  const loop = [...trustItems, ...trustItems]

  return (
    <div className="overflow-hidden border-y border-border bg-muted/40 py-5">
      <p className="mb-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-text-secondary">
        Shipped with
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-muted/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-muted/90 to-transparent" />
        <ul className="marquee-track flex items-center gap-3 pr-3">
          {loop.map((name, i) => (
            <li key={`${name}-${i}`}>
              <span className="inline-block whitespace-nowrap rounded-full border border-white/8 bg-background/70 px-5 py-2 text-sm text-text-secondary">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
