import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '../../lib/cn'

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string
  labelledBy?: string
  children: ReactNode
}

export function Section({
  id,
  labelledBy,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('scroll-mt-24 py-24 md:py-28', className)}
      {...props}
    >
      {children}
    </section>
  )
}
