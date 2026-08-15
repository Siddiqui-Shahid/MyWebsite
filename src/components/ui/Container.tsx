import type { HTMLAttributes } from 'react'

import { cn } from '../../lib/cn'

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mx-auto max-w-6xl px-5 sm:px-6', className)}
      {...props}
    />
  )
}
