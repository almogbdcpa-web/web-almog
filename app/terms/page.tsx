import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'תנאי שימוש | אלמוג בן דוד - רואת חשבון',
  description: 'תנאי השימוש של אתר אלמוג בן דוד — כללים ומגבלות השימוש באתר.',
}

export default function TermsPage() {
  const h2Class = "font-display font-bold text-[#1E1C18] text-xl mb-4 mt-12 first:mt-0"
  const pClass  = "text-[#7C7870] text-[0.96rem] font-light leading-[1.9] mb-5"
  const liClass = "text-[#7C7870] text-[0.96rem] font-light leading-[1.9] mb-2 pr-4 relative before:content-['·'] before:absolute before:right-0 before:text-[#9B8A72]"
  const sectionClass = "mb-10 pb-10 border-b border-[#E0D9D0] last:border-0 last:pb-0"

  return (
    <LegalLayout label="מסמך משפטי" title="תנאי שימוש" lastUpdated="מאי 2025">

      <div className={sectionClass}>
        <h2 className={h2Class}>1. כללי</h2>
        <p className={pClass}>
          ברוכים הבאים לאתר abd-cpa.co.il (להלן: &quot;האתר&quot;), המופעל על ידי אלמוג בן דוד,
          רואת חשבון מוסמכת, מספר רישיון 5211189 (להלן: &quot;המשרד&quot;).
          הגלישה והשימוש באתר מהווים הסכמה לתנאי שימוש אלו.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>2. מטרת האתר</h2>
        <p className={pClass}>
          האתר נועד להציג את שירותי המשרד, לאפשר יצירת קשר ולספק מידע כללי בתחום ראיית החשבון,
          ייעוץ המס והחשבונאות. המידע המוצג באתר הינו כללי בלבד ואינו מהווה ייעוץ מקצועי,
          חשבונאי, משפטי או מיסויי.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>3. אי-מתן ייעוץ מקצועי</h2>
        <p className={pClass}>
          כל מידע, תוכן או תיאור שירות המופיע באתר הוא למטרות הסברה כללית בלבד. הוא אינו מהווה
          חוות דעת מקצועית, אינו תחליף לייעוץ אישי ואינו יוצר יחסי לקוח-יועץ.
          לקבלת ייעוץ המותאם לנסיבות האישיות שלך, אנא צור קשר ישיר עם המשרד.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>4. קניין רוחני</h2>
        <p className={pClass}>
          כל התכנים המוצגים באתר — לרבות טקסטים, עיצוב, לוגו, גרפיקה ומבנה הדפים — הם קניינו
          הרוחני של המשרד, ומוגנים תחת חוק זכות יוצרים, תשס&quot;ח-2007. אין להעתיק, לשכפל,
          לפרסם מחדש או לעשות שימוש מסחרי בכל חלק מהאתר ללא אישור מפורש בכתב מאת המשרד.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>5. הגבלת אחריות</h2>
        <p className={pClass}>
          המשרד עושה מאמצים לשמור על דיוק המידע באתר, אך אינו מתחייב לשלמותו, עדכניותו או
          התאמתו לנסיבות ספציפיות. המשרד לא יישא באחריות לכל נזק ישיר, עקיף, תוצאתי או מקרי
          הנגרם כתוצאה משימוש באתר, הסתמכות על תכניו, או חוסר זמינות הזמנית של האתר.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>6. קישורים לאתרים חיצוניים</h2>
        <p className={pClass}>
          האתר עשוי להכיל קישורים לאתרי צד שלישי (לרבות רשתות חברתיות). קישורים אלו מוצעים
          לנוחיותך בלבד. המשרד אינו אחראי לתוכן, למדיניות הפרטיות או לפעילותם של אתרים אלו.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>7. זמינות האתר</h2>
        <p className={pClass}>
          המשרד שומר לעצמו את הזכות לשנות, להשעות או להפסיק את פעילות האתר בכל עת וללא הודעה
          מוקדמת. לא תהיה לך כל טענה כלפי המשרד בגין שינויים כאמור.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>8. דין חל וסמכות שיפוט</h2>
        <p className={pClass}>
          תנאי שימוש אלו כפופים לדיני מדינת ישראל. סמכות השיפוט הבלעדית לדון בכל מחלוקת
          הנובעת מהשימוש באתר תהא לבתי המשפט המוסמכים במחוז תל אביב-יפו.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>9. שינויים בתנאי השימוש</h2>
        <p className={pClass}>
          המשרד רשאי לעדכן תנאים אלו בכל עת. הגרסה המעודכנת תפורסם באתר. המשך השימוש באתר
          לאחר פרסום השינויים מהווה הסכמה לתנאים המעודכנים.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className={h2Class}>10. יצירת קשר</h2>
        <p className={pClass}>
          לכל שאלה הנוגעת לתנאי שימוש אלו, ניתן לפנות:<br />
          דוא&quot;ל: almog@abd-cpa.co.il<br />
          טלפון: 054-731-2262
        </p>
      </div>

    </LegalLayout>
  )
}
