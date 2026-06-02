'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Instagram, Facebook } from 'lucide-react'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `שלום אלמוג, שמי ${form.name}.\n` +
      (form.subject ? `נושא: ${form.subject}\n` : '') +
      (form.message ? `${form.message}\n` : '') +
      `טלפון: ${form.phone}`
    )
    window.open(`https://wa.me/972547312262?text=${text}`, '_blank')
    setSent(true)
  }

  const inputClass = `w-full bg-transparent border-b border-[#E0D9D0] pb-3 pt-2
                      text-[0.95rem] text-[#1E1C18] placeholder:text-[#C5BDB3]
                      focus:outline-none focus:border-[#1E1C18] transition-colors duration-300
                      font-light`

  return (
    <section id="contact" className="bg-[#F5F1EC]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 md:py-32">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Info — right in RTL */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="text-[10.5px] tracking-[0.22em] text-[#9B8A72] uppercase font-medium block mb-6">
              צור קשר
            </span>
            <h2
              className="font-display font-bold text-[#1E1C18] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}
            >
              בואו נדבר
            </h2>
            <p className="text-[#7C7870] text-[0.97rem] font-light leading-[1.85] mb-12 max-w-sm">
              נשמח לשמוע מכם. פנו אלינו בכל ערוץ שנוח לכם. נחזור בהקדם.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-12">
              <a
                href="tel:+972547312262"
                className="flex items-center gap-4 group"
              >
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#1E1C18] flex items-center justify-center flex-shrink-0
                                shadow-[0_4px_12px_rgba(30,28,24,.22)]
                                group-hover:bg-[#282420] group-hover:shadow-[0_6px_18px_rgba(155,138,114,.28)]
                                transition-all duration-300">
                  <Phone size={15} strokeWidth={1.3} className="text-[#D4B896]" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-[#ABA49A] uppercase block mb-0.5">טלפון</span>
                  <span className="text-sm text-[#1E1C18] group-hover:text-[#5E584F] transition-colors" dir="ltr">
                    054-731-2262
                  </span>
                </div>
              </a>

              <a
                href="mailto:almog@abd-cpa.co.il"
                className="flex items-center gap-4 group"
              >
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#1E1C18] flex items-center justify-center flex-shrink-0
                                shadow-[0_4px_12px_rgba(30,28,24,.22)]
                                group-hover:bg-[#282420] group-hover:shadow-[0_6px_18px_rgba(155,138,114,.28)]
                                transition-all duration-300">
                  <Mail size={15} strokeWidth={1.3} className="text-[#D4B896]" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-[#ABA49A] uppercase block mb-0.5">דוא&quot;ל</span>
                  <span className="text-sm text-[#1E1C18] group-hover:text-[#5E584F] transition-colors" dir="ltr">
                    almog@abd-cpa.co.il
                  </span>
                </div>
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/almogbd_cpa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#7C7870] hover:text-[#1E1C18]
                           transition-colors duration-300 text-sm"
              >
                <Instagram size={16} strokeWidth={1.3} />
                <span>Instagram</span>
              </a>
              <span className="text-[#DDD8D0]">·</span>
              <a
                href="https://www.facebook.com/profile.php?id=61588477094876"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#7C7870] hover:text-[#1E1C18]
                           transition-colors duration-300 text-sm"
              >
                <Facebook size={16} strokeWidth={1.3} />
                <span>Facebook</span>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/972547312262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1E1C18] text-[#FAFAF8]
                           px-8 py-4 text-sm tracking-wide font-medium
                           hover:bg-[#3A3630] transition-colors duration-300"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L.057 23.571a.5.5 0 0 0 .613.614l5.78-1.516A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.371l-.361-.214-3.731.979.997-3.645-.235-.374A9.861 9.861 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
                </svg>
                שלח הודעה ב-WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form — left in RTL */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.12 }}
          >
            {sent ? (
              <div className="flex flex-col items-start justify-center h-full pt-12">
                <div className="w-8 h-px bg-[#9B8A72] mb-6" />
                <p className="font-display font-bold text-2xl text-[#1E1C18] mb-3">
                  ההודעה נשלחה
                </p>
                <p className="text-[#7C7870] text-sm font-light leading-relaxed">
                  נחזור אליך בהקדם האפשרי.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 pt-12 lg:pt-0">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="שם מלא"
                      required
                      className={inputClass}
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="טלפון"
                      required
                      className={inputClass}
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="נושא הפנייה"
                    className={inputClass}
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div>
                  <textarea
                    placeholder="הודעה (אופציונלי)"
                    rows={4}
                    className={`${inputClass} resize-none`}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#1E1C18] text-[#FAFAF8] px-10 py-4 text-sm tracking-wide
                             font-medium hover:bg-[#3A3630] transition-colors duration-300"
                >
                  שלח הודעה
                </button>

                <p className="text-[11px] text-[#ABA49A] font-light leading-relaxed">
                  הלחיצה על שלח תפתח שיחת WhatsApp עם הפרטים שמילאת.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
