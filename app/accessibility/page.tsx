import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'הצהרת נגישות | אלמוג בן דוד - רואת חשבון',
  description: 'הצהרת הנגישות של אתר אלמוג בן דוד — מחויבות לנגישות דיגיטלית לאנשים עם מוגבלות.',
}

export default function AccessibilityPage() {
  const h2Class = "font-display font-bold text-[#1E1C18] text-xl mb-4 mt-12 first:mt-0"
  const pClass  = "text-[#7C7870] text-[0.96rem] font-light leading-[1.9] mb-5"
  const liClass = "text-[#7C7870] text-[0.96rem] font-light leading-[1.9] mb-2 pr-4 relative before:content-['·'] before:absolute before:right-0 before:text-[#9B8A72]"
  const sectionClass = "mb-10 pb-10 border-b border-[#E0D9D0] last:border-0 last:pb-0"

  return (
    <LegalLayout label="נגישות" title="הצהרת נגישות" lastUpdated="מאי 2025">

      <div className={sectionClass}>
        <h2 className={h2Class}>1. מחויבות לנגישות</h2>
        <p className={pClass}>
          אלמוג בן דוד, רואת חשבון מוסמכת (מספר רישיון 5211189) מחויבת להנגיש את האתר abd-cpa.co.il
          לאנשים עם מוגבלות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, תשנ&quot;ח-1998, ולתקנות שוויון
          זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע&quot;ג-2013.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>2. רמת הנגישות</h2>
        <p className={pClass}>
          אנו פועלים לעמוד בדרישות תקן WCAG 2.1 ברמה AA. בין ההתאמות שבוצעו:
        </p>
        <ul className="mb-5 space-y-1 list-none">
          <li className={liClass}>ניווט מלא באמצעות מקלדת</li>
          <li className={liClass}>טקסט חלופי (alt text) לתמונות</li>
          <li className={liClass}>ניגודיות צבעים עומדת בדרישות התקן</li>
          <li className={liClass}>מבנה כותרות היררכי ומסודר (H1–H3)</li>
          <li className={liClass}>תגיות ARIA לרכיבי ממשק אינטראקטיביים</li>
          <li className={liClass}>תמיכה בגודל גופן משתנה</li>
          <li className={liClass}>שפת הדף מוגדרת כ-Hebrew (he) עם כיווניות RTL</li>
          <li className={liClass}>קישורי דילוג לתוכן הראשי</li>
        </ul>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>3. תאימות לדפדפנים ולטכנולוגיות עזר</h2>
        <p className={pClass}>האתר נבדק ונמצא תואם לשימוש עם:</p>
        <ul className="mb-5 space-y-1 list-none">
          <li className={liClass}>NVDA ו-JAWS (קוראי מסך לחלונות)</li>
          <li className={liClass}>VoiceOver (iOS ו-macOS)</li>
          <li className={liClass}>TalkBack (Android)</li>
          <li className={liClass}>דפדפני Chrome, Firefox, Safari ו-Edge בגרסאותיהם העדכניות</li>
        </ul>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>4. מה עדיין בתהליך שיפור</h2>
        <p className={pClass}>
          למרות המאמצים שהושקעו, ייתכן שחלק מהתכנים או הפונקציונליות אינם נגישים במלואם.
          אנו ממשיכים לעבוד על שיפור הנגישות באופן שוטף.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>5. יצירת קשר בענייני נגישות</h2>
        <p className={pClass}>
          אם נתקלת בקושי נגישות באתר, אנא צור קשר עם רכזת הנגישות שלנו:
        </p>
        <p className={pClass}>
          אלמוג בן דוד — רכזת נגישות<br />
          דוא&quot;ל: almog@abd-cpa.co.il<br />
          טלפון: 054-731-2262
        </p>
        <p className={pClass}>אנו נשתדל לטפל בפנייתך בתוך 5 ימי עסקים.</p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>6. תאריך עדכון הצהרה זו</h2>
        <p className={pClass}>הצהרת נגישות זו עודכנה לאחרונה בחודש מאי 2025.</p>
      </div>

    </LegalLayout>
  )
}
