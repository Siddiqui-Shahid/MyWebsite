import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-[#061018] shadow-[var(--shadow-glow)] hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
  secondary:
    'border border-white/12 bg-white/4 text-text-primary backdrop-blur-sm hover:border-primary/40 hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
}

type ButtonProps = {
  variant?: Variant
  className?: string
  href?: string
  children: React.ReactNode
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>

export function Button({
  variant = 'primary',
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-[box-shadow,background-color,border-color,transform] duration-200 hover:scale-[1.02]',
    variants[variant],
    className,
  )

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
