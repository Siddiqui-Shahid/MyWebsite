import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '../../lib/cn'
import { resumeHref } from '../../lib/publicUrl'
import { site } from '../../data/site'
import { Container } from '../ui/Container'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const

const resumeLink = resumeHref(site.resume.href)

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-background/70 backdrop-blur-xl">
      <Container className="flex h-[4.25rem] items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-text-primary transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-primary/15 text-[0.7rem] font-bold tracking-wide text-primary">
            SS
          </span>
          <span className="text-[0.95rem] font-semibold tracking-tight">{site.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary transition-colors hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {site.resume.label}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-[#061018] shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Hire me
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-text-primary md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          'border-t border-border bg-background/95 md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-3 py-3 text-base font-medium text-text-primary hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-3 text-base font-medium text-text-primary hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() => setOpen(false)}
          >
            {site.resume.label}
          </a>
          <a
            href="#contact"
            className="rounded-lg px-3 py-3 text-base font-medium text-primary hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() => setOpen(false)}
          >
            Hire me
          </a>
        </Container>
      </div>
    </header>
  )
}
