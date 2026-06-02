'use client'

import { motion } from 'framer-motion'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const testimonials = [
  {
    quote: 'אלמוג מלווה אותי מאז פתחתי את העסק. הדיוק המקצועי שלה וזמינותה הם מה שגורמים לי להרגיש שאני ביד טובה. לא רק רואת חשבון — שותפה אמיתית.',
    name: 'שיר לוי',
    role: 'בעלת עסק עצמאי',
  },
  {
    quote: 'קיבלתי החזר מס שלא ידעתי שמגיע לי — ואלמוג מצאה אותו. ההסבר היה ברור, התהליך היה מהיר, והשירות היה אישי להפליא.',
    name: 'נועם כהן',
    role: 'שכיר בהייטק',
  },
  {
    quote: 'פתחנו חברה בע"מ עם ליווי מלא של אלמוג — ממיסוי ועד רישום. הכל היה שקוף, מסודר ומקצועי. ממליץ בחום רב.',
    name: 'דן מזרחי',
    role: 'מנכ"ל חברת סטארטאפ',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F5F1EC]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 md:py-32">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-16"
        >
          <span className="text-[10.5px] tracking-[0.22em] text-[#9B8A72] uppercase font-medium block mb-4">
            מה אומרים לקוחות
          </span>
          <h2
            className="font-display font-bold text-[#1E1C18] leading-[1.05]"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}
          >
            לקוחות מספרים
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              className={`border-t border-[#DDD8D0] pt-8 pb-10
                          ${i < testimonials.length - 1 ? 'md:pe-10 md:border-e md:border-e-[#DDD8D0]' : ''}
                          ${i > 0 ? 'md:ps-10' : ''}`}
            >
              {/* Opening mark */}
              <span className="font-display text-[3.5rem] text-[#DDD8D0] leading-none block mb-2 -mt-2">
                &ldquo;
              </span>
              <p className="text-[#5E584F] text-[0.97rem] leading-[1.85] font-light mb-8">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#9B8A72]" />
                <div>
                  <span className="text-sm font-semibold text-[#1E1C18] block">{t.name}</span>
                  <span className="text-[11px] text-[#ABA49A]">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
