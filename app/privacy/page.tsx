import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | אלמוג בן דוד - רואת חשבון',
  description: 'מדיניות הפרטיות של משרד אלמוג בן דוד — כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך.',
}

export default function PrivacyPage() {
  const h2Class = "font-display font-bold text-[#1E1C18] text-xl mb-4 mt-12 first:mt-0"
  const pClass  = "text-[#7C7870] text-[0.96rem] font-light leading-[1.9] mb-5"
  const liClass = "text-[#7C7870] text-[0.96rem] font-light leading-[1.9] mb-2 pr-4 relative before:content-['·'] before:absolute before:right-0 before:text-[#9B8A72]"
  const sectionClass = "mb-10 pb-10 border-b border-[#E0D9D0] last:border-0 last:pb-0"

  return (
    <LegalLayout label="מסמך משפטי" title="מדיניות פרטיות" lastUpdated="מאי 2025">

      <div className={sectionClass}>
        <h2 className={h2Class}>1. כללי</h2>
        <p className={pClass}>
          משרד אלמוג בן דוד, רואת חשבון מוסמכת (מספר רישיון 5211189) (להלן: &quot;המשרד&quot;) מחויב להגנה על פרטיותך
          ועל המידע האישי שנמסר לנו. מדיניות זו נערכת בהתאם לחוק הגנת הפרטיות, תשמ&quot;א-1981,
          ולתקנות הגנת הפרטיות (אבטחת מידע), תשע&quot;ז-2017.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>2. איזה מידע נאסף</h2>
        <p className={pClass}>בעת השימוש בטופס יצירת הקשר, ייתכן שתמסור:</p>
        <ul className="mb-5 space-y-1 list-none">
          <li className={liClass}>שם מלא</li>
          <li className={liClass}>מספר טלפון</li>
          <li className={liClass}>נושא הפנייה</li>
          <li className={liClass}>תוכן הודעה (אופציונלי)</li>
        </ul>
        <p className={pClass}>
          <strong className="text-[#1E1C18] font-medium">חשוב:</strong> טופס הפנייה אינו שומר מידע בשרתי האתר.
          הנתונים מועברים ישירות לאפליקציית WhatsApp במכשירך ומשם לצוות המשרד.
          האתר עצמו אינו אוסף, שומר או מעבד מידע אישי בשרת.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>3. מטרות השימוש במידע</h2>
        <p className={pClass}>המידע שתמסור ישמש אך ורק לצורך:</p>
        <ul className="mb-5 space-y-1 list-none">
          <li className={liClass}>מתן מענה לפנייתך</li>
          <li className={liClass}>ייעוץ ראשוני וקביעת פגישה</li>
          <li className={liClass}>משלוח מידע רלוונטי שביקשת</li>
        </ul>
        <p className={pClass}>אנו לא נשתמש במידע לצורכי שיווק ישיר ללא הסכמתך המפורשת.</p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>4. אחסון המידע ואבטחתו</h2>
        <p className={pClass}>
          כאמור, האתר אינו שומר מידע אישי. כל מידע שתמסור לנו במסגרת ייעוץ או שירות יישמר בהתאם
          לדרישות החוק והרגולציה המחייבת רואי חשבון בישראל, לרבות חובות שמירת תיקים על פי הוראות מס הכנסה.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>5. העברת מידע לצדדים שלישיים</h2>
        <p className={pClass}>המשרד לא ימכור, יחכיר או ישתף מידע אישי של לקוחות עם גורמים חיצוניים, למעט:</p>
        <ul className="mb-5 space-y-1 list-none">
          <li className={liClass}>בהתאם לדרישת חוק או צו שיפוטי</li>
          <li className={liClass}>לרשויות המס בישראל במסגרת דיווחים חוקיים</li>
          <li className={liClass}>לספקי שירות הפועלים בשמנו ומחויבים לסודיות</li>
        </ul>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>6. קישורים לרשתות חברתיות</h2>
        <p className={pClass}>
          האתר כולל קישורים לעמודי המשרד ב-Instagram וב-Facebook. כאשר תלחץ על קישורים אלו תועבר לאתרי
          צד שלישי הכפופים למדיניות הפרטיות שלהם. אין לנו שליטה על אופן איסוף המידע שלהם.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>7. Cookies</h2>
        <p className={pClass}>
          האתר הנוכחי אינו משתמש ב-Cookies מעקב. ייתכן שהדפדפן שלך ישמור מידע טכני בסיסי הקשור לגלישה,
          אך הדבר אינו בשליטת האתר.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>8. זכויותיך</h2>
        <p className={pClass}>
          בהתאם לחוק הגנת הפרטיות, יש לך זכות לעיין במידע שנאסף עליך, לתקן אותו, או לבקש את מחיקתו.
          לבקשות בנושא פרטיות:
        </p>
        <p className={pClass}>
          אלמוג בן דוד, רואת חשבון<br />
          דוא&quot;ל: almog@abd-cpa.co.il<br />
          טלפון: 054-731-2262
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>9. שינויים במדיניות</h2>
        <p className={pClass}>
          אנו שומרים לעצמנו את הזכות לעדכן מדיניות זו מעת לעת. הגרסה המעודכנת תפורסם באתר עם ציון
          תאריך העדכון האחרון. המשך השימוש באתר לאחר שינוי המדיניות מהווה הסכמה לתנאים המעודכנים.
        </p>
      </div>

    </LegalLayout>
  )
}
