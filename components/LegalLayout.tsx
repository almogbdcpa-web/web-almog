import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'

interface LegalLayoutProps {
  label: string
  title: string
  lastUpdated: string
  children: ReactNode
}

export default function LegalLayout({ label, title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20 bg-[#FAFAF8] min-h-screen">
        <div className="bg-[#F5F1EC] border-b border-[#E0D9D0]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-20">
            <span className="text-[10.5px] tracking-[0.22em] text-[#9B8A72] uppercase font-medium block mb-5">
              {label}
            </span>
            <h1
              className="font-display font-bold text-[#1E1C18] leading-[1.06] mb-4"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}
            >
              {title}
            </h1>
            <p className="text-[11px] tracking-[0.14em] text-[#ABA49A] uppercase">
              עודכן לאחרונה: {lastUpdated}
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-24">
          <div className="max-w-3xl">
            {children}
          </div>
        </div>
        <div className="border-t border-[#E0D9D0]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-8">
            <a
              href="/"
              className="text-sm text-[#9B8A72] hover:text-[#1E1C18] transition-colors duration-200
                         border-b border-[#9B8A72]/40 hover:border-[#1E1C18] pb-px"
            >
              ← חזרה לעמוד הראשי
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
