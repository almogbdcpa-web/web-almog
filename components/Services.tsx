'use client'

import { motion } from 'framer-motion'
import {
  Store, Building2, Users, BookOpen,
  ClipboardCheck, TrendingUp, Home, Scale, RotateCcw, FileText,
  type LucideIcon,
} from 'lucide-react'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const group1 = {
  label: 'עצמאיים, חברות ועמותות',
  services: [
    {
      n: '01',
      icon: Store,
      title: 'פתיחת עוסק פטור / עוסק מורשה',
      desc: 'ליווי מלא בפתיחת עוסק פטור או עוסק מורשה, רישום במע"מ, מס הכנסה וביטוח לאומי, בחירת מבנה העסק המתאים, וליווי שוטף לאורך כל הדרך.',
    },
    {
      n: '02',
      icon: Building2,
      title: 'פתיחת חברה בע"מ',
      desc: 'פתיחת חברה בע"מ, רישום ברשם החברות, תכנון מס ראשוני, הקמת מבנה עסקי נכון וליווי שוטף לבעלי המניות, דירקטורים ועסקים בצמיחה.',
    },
    {
      n: '03',
      icon: Users,
      title: 'עמותות ומלכ"רים',
      desc: 'הקמה וניהול של עמותות ומלכ"רים, הנהלת חשבונות, ביקורת דוחות כספיים, הגשת דיווחים לרשם העמותות ועמידה בדרישות הרגולציה.',
    },
    {
      n: '04',
      icon: BookOpen,
      title: 'הנהלת חשבונות לעסקים',
      desc: 'שירותי הנהלת חשבונות לעוסקים פטורים, עוסקים מורשים וחברות בע"מ, כולל דיווחי מע"מ, דיווחים לרשויות המס, הפקת דוחות וליווי עסקי שוטף.',
    },
    {
      n: '05',
      icon: ClipboardCheck,
      title: 'ביקורת חשבונות ודוחות כספיים',
      desc: 'ביקורת דוחות כספיים לחברות ועמותות, הכנת דוחות שנתיים, עמידה בדרישות החוק ומתן חוות דעת מקצועית בהתאם לתקני הביקורת.',
    },
  ],
}

const group2 = {
  label: 'שכירים ותכנון פרישה',
  services: [
    {
      n: '01',
      icon: Scale,
      title: 'קיבוע זכויות ותכנון פרישה',
      desc: 'קיבוע זכויות, תכנון פרישה, מיצוי הטבות מס לפנסיונרים, פריסות מס ובחינת החלופות המיטביות לקבלת קצבאות ופיצויים.',
    },
    {
      n: '02',
      icon: RotateCcw,
      title: 'החזרי מס לשכירים ופורשים',
      desc: 'בדיקת זכאות והגשת בקשות להחזרי מס לשכירים ופורשים, כולל החזרי מס בגין השקעות, הפקדות לפנסיה, נקודות זיכוי ומיצוי זכויות.',
    },
    {
      n: '03',
      icon: TrendingUp,
      title: 'מיסוי שוק ההון ורווחי הון',
      desc: 'דיווח ותכנון מס על מניות, ניירות ערך, השקעות בארץ ובחו"ל, רווחי הון, דיבידנדים והגשת דוחות שנתיים למשקיעים.',
    },
    {
      n: '04',
      icon: Home,
      title: 'החזרי מס שבח',
      desc: 'בדיקת זכאות להחזר מס שבח, הגשת בקשות להחזר מס, בחינת פריסת מס שבח ומיצוי הטבות ופטורים בהתאם להוראות רשות המסים.',
    },
    {
      n: '05',
      icon: FileText,
      title: 'דוחות שנתיים לשכירים',
      desc: 'הגשת דוח שנתי לשכירים עם מספר מקורות הכנסה, השקעות, פיצויים, מלגות או זכאות להחזר מס — כולל ליווי מלא מול רשות המסים.',
    },
  ],
}

function Card({
  n, icon: Icon, title, desc, delay,
}: {
  n: string; icon: LucideIcon; title: string; desc: string; delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease, delay }}
      className="group relative bg-[#FEFDFB] rounded-2xl overflow-hidden flex flex-col
                 border border-[#EAE4DC]
                 shadow-[0_2px_4px_rgba(30,28,24,.04),_0_8px_24px_rgba(30,28,24,.07),_0_24px_48px_rgba(30,28,24,.05)]
                 hover:border-[#BBA88A]/70
                 hover:-translate-y-[8px]
                 hover:shadow-[0_16px_56px_rgba(155,138,114,.18),_0_4px_16px_rgba(30,28,24,.08)]
                 transition-all duration-300 ease-out"
    >
      {/* Gradient top bar */}
      <div className="h-[4px] bg-gradient-to-l from-[#C4A882] via-[#9B8A72] to-[#7A6D5E]" />

      <div className="relative p-8 lg:p-9 flex flex-col flex-1">
        {/* Watermark number */}
        <span
          aria-hidden
          className="absolute top-3 end-5 font-display font-black text-[5.5rem]
                     leading-none select-none pointer-events-none
                     text-[#EDE7DE] group-hover:text-[#E5DDD2] transition-colors duration-300"
        >
          {n}
        </span>

        {/* Icon box */}
        <div className="relative z-10 w-12 h-12 rounded-xl bg-[#1E1C18] flex items-center justify-center mb-7
                        shadow-[0_4px_14px_rgba(30,28,24,.25)]
                        group-hover:shadow-[0_6px_20px_rgba(155,138,114,.30)]
                        group-hover:bg-[#282420]
                        transition-all duration-300">
          <Icon size={20} strokeWidth={1.35} className="text-[#D4B896]" />
        </div>

        <h3 className="relative z-10 font-semibold text-[#1E1C18] text-[1.08rem] mb-3 leading-snug
                       group-hover:text-[#0A0908] transition-colors duration-200">
          {title}
        </h3>
        <p className="relative z-10 text-[#8C847C] text-[0.875rem] font-light leading-[1.82]">
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

function GroupHeader({ badge, titleDark, titleAccent, delay = 0 }: {
  badge: string; titleDark: string; titleAccent: string; delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease, delay }}
      className="mb-8"
    >
      <span className="inline-flex items-center gap-2 rounded-full
                       border border-[#9B8A72]/35 bg-[#9B8A72]/[0.06]
                       px-4 py-[7px] mb-5">
        <span className="w-[5px] h-[5px] rounded-full bg-[#9B8A72] flex-shrink-0" />
        <span className="text-[10.5px] tracking-[0.18em] text-[#9B8A72] font-semibold">
          {badge}
        </span>
      </span>
      <h2
        className="font-display font-bold text-[#1E1C18] leading-[1.1]"
        style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}
      >
        {titleDark}{' '}
        <span className="text-gradient-gold">{titleAccent}</span>
      </h2>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative bg-[#F5F1EC] overflow-hidden">
      {/* Subtle radial glow at top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_35%_at_50%_0%,_rgba(155,138,114,0.08),_transparent)] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-28 md:pt-32 md:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Group 1 header */}
          <div className="col-span-full mb-1">
            <GroupHeader badge="עסקים ועצמאיים" titleDark="עצמאיים, חברות" titleAccent="ועמותות" />
          </div>

          {group1.services.map((s, i) => (
            <Card key={s.n} n={s.n} icon={s.icon} title={s.title} desc={s.desc} delay={(i % 3) * 0.07} />
          ))}

          {/* Divider + Group 2 header */}
          <div className="col-span-full mt-14 mb-1">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D5CEC5] to-transparent mb-12" />
            <GroupHeader badge="שכירים ופורשים" titleDark="שכירים" titleAccent="ותכנון פרישה" />
          </div>

          {group2.services.map((s, i) => (
            <Card key={s.n} n={s.n} icon={s.icon} title={s.title} desc={s.desc} delay={(i % 3) * 0.07} />
          ))}

        </div>
      </div>
    </section>
  )
}
