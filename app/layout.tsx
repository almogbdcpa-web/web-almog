import type { Metadata } from 'next'
import { Heebo, Frank_Ruhl_Libre } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heebo',
  display: 'swap',
})

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ['hebrew'],
  weight: ['400', '700', '900'],
  variable: '--font-frank',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'אלמוג בן דוד | רואת חשבון מוסמכת | באר שבע ולכל הארץ',
  description: 'שירות חשבונאי ומיסויי דיגיטלי מלא לעוסקים, חברות ופרטיים — מכל מקום בישראל. הנהלת חשבונות, מיסוי, החזרי מס וקיבוע זכויות. משרד מבוסס באר שבע, זמין לכל הארץ.',
  keywords: ['רואת חשבון', 'רואת חשבון באר שבע', 'רואת חשבון דיגיטלית', 'הנהלת חשבונות', 'החזרי מס', 'קיבוע זכויות', 'אלמוג בן דוד', 'CPA'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${frankRuhl.variable}`}>
      <body className="bg-[#FAFAF8] text-[#1E1C18] antialiased font-sans">
        {children}

        <Script id="sienna-widget" strategy="afterInteractive">
          {`
            var s = document.createElement('script');
            s.src = 'https://cdn.jsdelivr.net/npm/sienna-accessibility/dist/sienna-accessibility.min.js';
            s.onload = function() {
              SiennaAccessibility.init({
                lang: 'he',
                position: 'bottom-right',
                primaryColor: '#9B8A72',
                statement: 'https://abd-cpa.co.il/accessibility.html'
              });
            };
            document.head.appendChild(s);
          `}
        </Script>
      </body>
    </html>
  )
}
