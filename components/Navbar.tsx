'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#services', label: 'שירותים' },
  { href: '#about', label: 'אודות' },
  { href: '#process', label: 'תהליך' },
  { href: '#faq', label: 'שאלות' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E0D9D0]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#" className="group flex flex-col leading-none">
            <span className="font-display font-bold text-[#1E1C18] text-[1.1rem] tracking-tight group-hover:text-[#5E584F] transition-colors duration-300">
              אלמוג בן דוד
            </span>
            <span className="text-[10px] tracking-[0.18em] text-[#9B8A72] uppercase mt-0.5">
              רואת חשבון · CPA
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#7C7870] hover:text-[#1E1C18] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm border border-[#1E1C18] text-[#1E1C18] px-5 py-2.5
                         hover:bg-[#1E1C18] hover:text-[#FAFAF8] transition-all duration-300
                         tracking-wide"
            >
              לתיאום פגישה
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-[#1E1C18] rounded"
            aria-label="תפריט"
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#FAFAF8] border-b border-[#E0D9D0] overflow-hidden"
          >
            <nav className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col gap-0">
              {links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-base text-[#5E584F] hover:text-[#1E1C18] transition-colors py-4 ${
                    i < links.length - 1 ? 'border-b border-[#E0D9D0]' : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-5 flex items-center justify-center border border-[#1E1C18]
                           text-[#1E1C18] py-3.5 text-sm tracking-wide
                           hover:bg-[#1E1C18] hover:text-[#FAFAF8] transition-all duration-300"
              >
                לתיאום פגישה
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
