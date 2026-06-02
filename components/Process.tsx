'use client'

import { motion } from 'framer-motion'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const steps = [
  {
    n: '01',
    title: 'שיחת היכרות',
    desc: 'פגישה ראשונית ללא עלות. מקשיבה לצרכים, מבינה את המצב הקיים ומציגה מסגרת שירות ברורה.',
  },
  {
    n: '02',
    title: 'הצעת מחיר שקופה',
    desc: 'הצעה מפורטת וברורה — ללא תוספות מפתיעות. יודעים מראש מה כולל השירות וכמה הוא עולה.',
  },
  {
    n: '03',
    title: 'ליווי שוטף',
    desc: 'ניהול מקצועי ורציף, עמידה בלוחות זמנים, דוחות תקופתיים ותקשורת פתוחה ושוטפת.',
  },
  {
    n: '04',
    title: 'זמינות ותמיכה',
    desc: 'גיבוי מקצועי לכל שאלה ואתגר — לאורך כל השנה, לא רק בעונת המס.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-[#FAFAF8]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 md:py-32">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-16"
        >
          <span className="text-[10.5px] tracking-[0.22em] text-[#9B8A72] uppercase font-medium block mb-4">
            איך אנחנו עובדים
          </span>
          <h2
            className="font-display font-bold text-[#1E1C18] leading-[1.05]"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}
          >
            מהיכרות ראשונה
            <br />
            עד ליווי שוטף
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              className={`pt-8 pb-10 ${i < steps.length - 1 ? 'lg:pe-8 lg:border-e lg:border-e-[#E0D9D0]' : ''} ${i > 0 ? 'lg:ps-8' : ''} border-t border-[#E0D9D0]`}
            >
              <span className="font-display font-bold text-[2.8rem] text-[#E0D9D0] leading-none block mb-6">
                {step.n}
              </span>
              <h3 className="font-semibold text-[#1E1C18] text-[1rem] mb-3">{step.title}</h3>
              <p className="text-[#7C7870] text-sm font-light leading-[1.85]">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
