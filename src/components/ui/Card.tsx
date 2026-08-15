import type { HTMLAttributes } from 'react'

import { cn } from '../../lib/cn'

type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-border bg-surface/80 p-6 shadow-[var(--shadow-soft)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-white/16 hover:shadow-[var(--shadow-glow)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
