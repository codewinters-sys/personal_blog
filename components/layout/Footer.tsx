'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] py-10 px-6 lg:px-12">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-display font-bold text-lg text-text-primary">Aryan</span>
          <span className="font-mono text-xs text-text-muted tracking-widest uppercase">Builder in Progress</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-body text-text-muted hover:text-text-secondary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Credit */}
        <p className="text-xs font-body text-text-muted text-center md:text-right">
          Designed & built by{' '}
          <span className="text-blue-accent">Aryan</span>{' '}
          © {year}
        </p>
      </div>
    </footer>
  )
}
