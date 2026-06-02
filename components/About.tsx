'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function About() {
  return (
    <section id="about" className="bg-[#FAFAF8]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 md:py-32">

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">

          {/* Text — right in RTL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="text-[10.5px] tracking-[0.22em] text-[#9B8A72] uppercase font-medium block mb-6">
              אודות
            </span>

            <h2
              className="font-display font-bold text-[#1E1C18] leading-[1.08] mb-8"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
            >
              רואת חשבון מוסמכת
              <br />
              עם ניסיון של 10+ שנים
            </h2>

            {/* Pull quote */}
            <blockquote className="border-r-2 border-[#9B8A72] pr-5 mb-8">
              <p className="text-[#5E584F] text-[1.05rem] leading-[1.8] italic font-light">
                &quot;משרד דיגיטלי לחלוטין — עובדת עם לקוחות מכל הארץ, בלי צורך להגיע פיזית.&quot;
              </p>
            </blockquote>

            <div className="space-y-4 text-[#7C7870] text-[0.97rem] font-light leading-[1.85]">
              <p>
                אני אלמוג בן דוד, רואת חשבון מוסמכת עם ניסיון של למעלה מעשור.
                מתמחה בהנהלת חשבונות, מיסוי, החזרי מס ותכנון פרישה — לעסקים, עצמאים ופרטיים.
              </p>
              <p>
                מלווה לקוחות ביחס אישי ובזמינות גבוהה, מכל מקום בישראל.
                הכל דיגיטלי, מהיר וברור.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 pt-8 border-t border-[#E0D9D0] grid grid-cols-2 gap-6">
              {[
                { label: 'רישיון', value: 'רואת חשבון מוסמכת' },
                { label: 'חברות', value: 'לשכת רו"ח בישראל' },
                { label: 'ניסיון', value: '10+ שנים בתחום' },
                { label: 'שירות', value: 'זמינות אישית מלאה' },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-[10px] tracking-[0.18em] text-[#ABA49A] uppercase block mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm text-[#1E1C18] font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo — left in RTL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="relative aspect-[3/4] lg:aspect-auto lg:h-[620px]"
          >
            <div className="absolute inset-0 bg-[#EDE8E0]" />
            <div className="relative h-full w-full">
              <Image
                src="/almog.png"
                alt="אלמוג בן דוד"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            {/* Grain */}
            <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '200px 200px', opacity: 0.06 }} />
            {/* Vignette */}
            <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(30,28,24,.18) 0%, transparent 28%), linear-gradient(to top, rgba(30,28,24,.14) 0%, transparent 28%)' }} />
            {/* Corner marks */}
            {(['top-[14px] start-[14px] border-t border-s', 'top-[14px] end-[14px] border-t border-e', 'bottom-[14px] start-[14px] border-b border-s', 'bottom-[14px] end-[14px] border-b border-e'] as const).map((pos, i) => (
              <div key={i} aria-hidden className={`absolute w-[22px] h-[22px] border-[#C2B9AF] pointer-events-none z-10 ${pos}`} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
