'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const faqs = [
  {
    q: 'מה ההבדל בין עוסק פטור לעוסק מורשה?',
    a: 'עוסק פטור הוא מי שמחזורו השנתי אינו עולה על 122,833 ₪ (תקרה לשנת 2026, מתעדכנת מדי שנה). הוא פטור מגביית מע"מ ומהגשת דוחות מע"מ. עוסק מורשה גובה מע"מ מלקוחות ומגיש דוחות מע"מ תקופתיים, אך זכאי לנכות מע"מ תשומות. חשוב: החל מ-2025 כל עוסק מורשה חייב להנפיק חשבוניות עם מספר הקצאה ממערכת "חשבוניות ישראל" של רשות המסים — חשבונית ללא מספר הקצאה אינה מוכרת לניכוי מע"מ. הבחירה בין סוגי הרישום תלויה בהיקף הפעילות ובסוג הלקוחות.',
  },
  {
    q: 'מתי כדאי לפתוח חברה בע"מ במקום לפעול כעצמאי?',
    a: 'פתיחת חברה בע"מ כדאית לרוב כשההכנסות מגיעות לרמה גבוהה יחסית (מעל 300,000–400,000 ₪ נטו), כשיש צורך בהגבלת אחריות אישית, או כשיש שותפים עסקיים. רווחי החברה חייבים במס חברות בשיעור 23%, ומשיכת דיבידנד חייבת במס נוסף של 25% לבעל מניות רגיל, או 30% לבעל מניות מהותי (המחזיק מעל 10% מהמניות). הכדאיות הכלכלית תלויה בפרופיל ההכנסה הספציפי — נשמח לנתח.',
  },
  {
    q: 'האם אני יכול/ה לקבל החזר מס גם אם עבדתי רק חלק מהשנה?',
    a: 'בהחלט כן. שכירים שעבדו רק חלק מהשנה, שינו מעסיק, עברו לחל"ת, או שיש להם הוצאות מוכרות — עשויים להיות זכאים להחזר מס. אנחנו בודקים את הזכאות וטיפול בהגשה ללא עלות מקדימה.',
  },
  {
    q: 'מה זה קיבוע זכויות ומי זכאי לו?',
    a: 'קיבוע זכויות הוא תהליך שמאפשר לעובדים לפני פרישה לבחון ולקבע את גובה הפטור ממס על הפנסיה. מי שמתקרב לגיל פרישה מומלץ מאוד לבצע את התהליך — הוא יכול לחסוך מאות אלפי שקלים לאורך שנות הגמלאות.',
  },
  {
    q: 'כמה עולים השירותים?',
    a: 'התמחור תלוי בהיקף השירות ובמורכבות התיק. אנחנו מציעים הצעת מחיר שקופה ומפורטת לאחר שיחת היכרות, ללא התחייבות. אין תוספות מפתיעות — כל מה שמוסכם בתחילה, זה מה שמשלמים.',
  },
  {
    q: 'האם אתם מטפלים גם בנדל"ן ומקרקעין?',
    a: 'כן. מיסוי מקרקעין הוא אחד מתחומי ההתמחות המרכזיים שלנו — מס שבח (25% ליחיד), מס רכישה, בחינת פטורים (כגון פטור דירה יחידה לפי תנאי החוק המעודכן), חישוב פחת ועוד. חוק מיסוי מקרקעין עבר תיקונים מהותיים בשנים 2024–2026 בכל הנוגע לתנאי הפטור ותקרות השווי — אנחנו מלווים עסקאות נדל"ן מהשלב הראשון ומוודאים שהחישוב מבוסס על הדין העדכני.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-[#FAFAF8]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 md:py-32">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-14"
        >
          <span className="text-[10.5px] tracking-[0.22em] text-[#9B8A72] uppercase font-medium block mb-4">
            שאלות נפוצות
          </span>
          <h2
            className="font-display font-bold text-[#1E1C18] leading-[1.05]"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}
          >
            תשובות לשאלות
            <br />
            שכולם שואלים
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease, delay: i * 0.05 }}
              className="border-t border-[#E0D9D0] last:border-b"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-right py-6 gap-6
                           group cursor-pointer"
              >
                <span className={`text-[0.97rem] font-medium transition-colors duration-200 ${open === i ? 'text-[#1E1C18]' : 'text-[#3A3630] group-hover:text-[#1E1C18]'}`}>
                  {item.q}
                </span>
                <span className="flex-shrink-0 text-[#9B8A72]">
                  {open === i
                    ? <Minus size={16} strokeWidth={1.5} />
                    : <Plus size={16} strokeWidth={1.5} />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#7C7870] text-sm font-light leading-[1.9] pb-7 max-w-xl">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
