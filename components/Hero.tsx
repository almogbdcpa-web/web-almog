'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        backgroundColor: '#F9F7F4',
        backgroundImage: 'radial-gradient(ellipse 70% 60% at 72% 42%, rgba(155,138,114,.06), transparent)',
      }}
    >

      {/* Main grid */}
      <div className="flex-1 max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 min-h-screen">

          {/* Text — right column in RTL, bottom on mobile */}
          <div className="flex flex-col justify-center py-20 lg:py-0 lg:pe-16">

            {/* Eyebrow — fades in first */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.1 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-5 h-px bg-[#9B8A72]" />
              <span className="text-[10.5px] tracking-[0.22em] text-[#9B8A72] uppercase font-medium">
                רואת חשבון מוסמכת · באר שבע
              </span>
            </motion.div>

            {/* Headline — slides in from the right */}
            <motion.h1
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="font-display font-bold text-[#1E1C18] leading-[1.08] mb-8"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.6rem)' }}
            >
              אלמוג בן דוד
              <br />
              <span style={{ background: 'linear-gradient(135deg, #C4A882 0%, #9B8A72 45%, #7A6D5E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>משרד רואה חשבון</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.65, ease, delay: 0.42 }}
              className="h-px mb-8 w-full origin-right"
              style={{ background: 'linear-gradient(to left, #BBA88A, rgba(155,138,114,.08))' }}
            />

            {/* Subheadline — fades in with slight upward motion */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.5 }}
              className="text-[#7C7870] text-[1.05rem] leading-[1.85] mb-10 max-w-[400px] font-light"
            >
              שירות חשבונאי ומיסויי דיגיטלי מלא לעוסקים פטורים ומורשים, חברות בע״מ, עמותות ופורשים — מכל מקום בארץ.
              הנהלת חשבונות, מיסוי, החזרי מס ותכנון פרישה.
            </motion.p>

            {/* CTA — appears last, sequence completes at ~1.45s */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.72 }}
              className="flex flex-wrap items-center gap-7"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#1E1C18] text-[#FAFAF8]
                           px-8 py-4 text-sm tracking-wide font-medium
                           hover:bg-[#3A3630] transition-colors duration-300"
              >
                לתיאום ייעוץ ראשוני
                <ArrowLeft
                  size={14}
                  strokeWidth={1.5}
                  className="group-hover:-translate-x-1 transition-transform duration-300"
                />
              </a>
              <a
                href="#services"
                className="text-sm text-[#9B8A72] hover:text-[#1E1C18] transition-colors duration-300
                           border-b border-[#9B8A72]/50 hover:border-[#1E1C18] pb-px"
              >
                השירותים שלי
              </a>
            </motion.div>
          </div>

          {/* Photo — left column in RTL, top on mobile */}
          {/* clip-path wipes left→right while opacity fades in simultaneously */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1.0, ease, delay: 0 }}
            className="relative h-[68vw] lg:h-auto lg:min-h-screen"
          >
            <div className="absolute inset-0 bg-[#F0EAE2]" />
            <div className="relative h-full w-full">
              <Image
                src="/almog.png"
                alt="אלמוג בן דוד, רואת חשבון"
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Grain texture */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
                backgroundSize: '200px 200px',
                opacity: 0.045,
                mixBlendMode: 'multiply' as const,
              }}
            />
            {/* Vignette */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(30,28,24,.09) 0%, transparent 24%), linear-gradient(to top, rgba(30,28,24,.07) 0%, transparent 22%)',
              }}
            />
            {/* Corner marks */}
            {[
              'top-[14px] start-[14px] border-t border-s',
              'top-[14px] end-[14px] border-t border-e',
              'bottom-[14px] start-[14px] border-b border-s',
              'bottom-[14px] end-[14px] border-b border-e',
            ].map((pos, i) => (
              <div key={i} aria-hidden
                className={`absolute w-[22px] h-[22px] border-[#C2B9AF] pointer-events-none z-10 ${pos}`}
              />
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  )
}
