import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

const links = [
  { href: '#services', label: 'שירותים' },
  { href: '#about', label: 'אודות' },
  { href: '#process', label: 'תהליך' },
  { href: '#faq', label: 'שאלות' },
  { href: '#contact', label: 'צור קשר' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1E1C18] text-[#ABA49A]">

      {/* Top */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-14 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

          {/* Brand */}
          <div>
            <span className="font-display font-bold text-[#FAFAF8] text-xl block mb-2">
              אלמוג בן דוד
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase">
              רואת חשבון מוסמכת
            </span>
            <p className="text-sm font-light leading-relaxed mt-5 max-w-xs text-[#857E74]">
              ליווי פיננסי ומיסויי אישי, מדויק ומחויב — לעסקים ופרטיים.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#7C7870] hover:text-[#FAFAF8] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact quick */}
          <div className="flex flex-col gap-2 text-sm">
            <a href="tel:+972547312262" className="hover:text-[#FAFAF8] transition-colors duration-200" dir="ltr">
              054-731-2262
            </a>
            <a href="mailto:almog@abd-cpa.co.il" className="hover:text-[#FAFAF8] transition-colors duration-200" dir="ltr">
              almog@abd-cpa.co.il
            </a>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.instagram.com/almogbd_cpa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAFAF8] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.3} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61588477094876"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAFAF8] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} strokeWidth={1.3} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2E2C28]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-[#5E584F]">
            © {new Date().getFullYear()} אלמוג בן דוד. כל הזכויות שמורות.
          </span>
          <nav className="flex items-center gap-5" aria-label="קישורים משפטיים">
            <Link href="/privacy"
              className="text-[11px] text-[#5E584F] hover:text-[#ABA49A] transition-colors duration-200">
              מדיניות פרטיות
            </Link>
            <span className="text-[#3A3630]" aria-hidden="true">·</span>
            <Link href="/accessibility"
              className="text-[11px] text-[#5E584F] hover:text-[#ABA49A] transition-colors duration-200">
              הצהרת נגישות
            </Link>
            <span className="text-[#3A3630]" aria-hidden="true">·</span>
            <Link href="/terms"
              className="text-[11px] text-[#5E584F] hover:text-[#ABA49A] transition-colors duration-200">
              תנאי שימוש
            </Link>
          </nav>
          <a
            href="https://wa.me/972547312262"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#5E584F] hover:text-[#ABA49A] transition-colors duration-200"
          >
            לתיאום ייעוץ ← WhatsApp
          </a>
        </div>
      </div>

    </footer>
  )
}
