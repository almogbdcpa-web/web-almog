'use client'

import { motion } from 'framer-motion'
import { UserCheck, BookMarked, MessageSquare, Zap } from 'lucide-react'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const reasons = [
  {
    icon: UserCheck,
    title: 'גישה אישית',
    desc: 'מקדישה לכל לקוח תשומת לב מלאה. כל תיק מטופל בצורה ייחודית, עם הבנה מעמיקה של המצב הספציפי.',
  },
  {
    icon: BookMarked,
    title: 'עדכניות ומקצועיות',
    desc: 'מעקב רציף אחר שינויי חקיקה ותקנות מס. הידע שלי תמיד מעודכן — לטובת ההחלטות שלכם.',
  },
  {
    icon: MessageSquare,
    title: 'שקיפות מלאה',
    desc: 'אין הפתעות. כל עלות, כל שלב — מוסבר, מוסכם ומתועד מראש. בהירות מלאה לאורך כל הדרך.',
  },
  {
    icon: Zap,
    title: 'זמינות ומהירות',
    desc: 'זמינה לשאלות ולעדכונים גם מחוץ לשעות הרגילות. כי ענייני עסק לא מחכים תמיד.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="bg-[#F5F1EC] section-inset">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 md:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-16"
        >
          <span className="text-[10.5px] tracking-[0.22em] text-[#9B8A72] uppercase font-medium block mb-4">
            למה לבחור בי
          </span>
          <h2
            className="font-display font-bold text-[#1E1C18] leading-[1.05] max-w-sm"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}
          >
            למה לקוחות בוחרים
            <br />
            לעבוד איתי
          </h2>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {reasons.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease, delay: i * 0.08 }}
                className={`group p-10 border-t border-[#DDD8D0] transition-colors duration-300
                            hover:bg-[#EDE8E0]/60
                            ${i % 2 === 0 ? 'md:border-e md:border-e-[#DDD8D0]' : ''}`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-[42px] h-[42px] rounded-[10px] bg-[#1E1C18] flex items-center justify-center flex-shrink-0
                                  shadow-[0_4px_12px_rgba(30,28,24,.22)]
                                  group-hover:bg-[#282420] group-hover:shadow-[0_6px_18px_rgba(155,138,114,.28)]
                                  transition-all duration-300">
                    <Icon size={16} strokeWidth={1.3} className="text-[#D4B896]" />
                  </div>
                  <h3 className="font-semibold text-[#1E1C18] text-[1rem]">{item.title}</h3>
                </div>
                <p className="text-[#7C7870] text-sm font-light leading-[1.85]">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
