# מפת דרכים — מכונת לידים | אלמוג בן-דוד CPA

> עדכון אחרון: מאי 2026
שכל התקרות, החוקים התקנות הכל הכל יהיה מגובה עם גורמים רשמיים לשנת 2026.

לראות בולשיט באתר.

הדף הראשי שיהיה בעיקר דף תדמית, ושיווק ושכל הנושאים המקצועיים יהיו בתוך דפי השירות.
שכל דף שירות יהיה עולם בפני עצמו שאנשים יגיעו אליו מגוגל לפי SEO.

---

## ✅ שלב 0 — תשתית (הושלם)
- [x] CSS משותף → `css/style.css`
- [x] `sitemap.xml`
- [x] `robots.txt`
- [x] מבנה תיקיות: `services/`, `calculators/`, `blog/`
- [x] SEO metadata (OG, Twitter Card, JSON-LD, canonical, favicon)
- [x] ליטושים ויזואליים (hover, אנימציות, תפריט מובייל, WA צף, חזור למעלה)
- [x] נגישות (focus-visible, prefers-reduced-motion, ARIA)
- [ ] Google Analytics 4 — **ממתין למספר מדידה**
- [ ] Google Search Console — **לאחר העלאה לאינטרנט**

---

## 🔄 שלב 1 — דפי שירות (SEO עיקרי)

### עדיפות גבוהה:
- [~] `services/hashavat-mas.html` — החזרי מס לשכיר ← **בנוי, חסר:**
  - [ ] סליידר ביקורות אמיתיות מלקוחות (גלילה אוטומטית / עיצוב כרטיסים)
  - [ ] שאלון לידים מותאם (מצב אישי, חודשי עבודה, שינויים בשנה) → WhatsApp/טופס
  - [x] מחשבון החזר מס (בנוי — 2025 brackets, נקודות זיכוי)
  - [x] תוכן SEO מלא: טופס 106, מדרגות מס, חופשת לידה, חייל משוחרר, 8 FAQ

- [~] `services/kviut-zchuyot.html` — קיבוע זכויות ← **בנוי, חסר:**
  - [ ] שאלון בחינת כדאיות (גיל, סוג פנסיה, הכנסה צפויה, מצב משפחתי) → הערכה + CTA

### עדיפות בינונית:
- [ ] `services/misuy-mekarkain.html` — מיסוי מקרקעין ומס שבח
- [ ] `services/chevra-baam.html` — פתיחת חברה בע"מ
- [ ] `services/osek-patur-morsheh.html` — עוסק פטור / עוסק מורשה

### עדיפות נמוכה:
- [ ] `services/hanhalt-heshbonot.html` — הנהלת חשבונות
- [ ] `services/bikoret.html` — ביקורת חשבונות
- [ ] `services/misuy-revahim.html` — מיסוי רווחי הון
- [ ] `services/amutot.html` — עמותות ומלכ"רים

---

## 🔄 שלב 2 — מחשבונים אינטראקטיביים

- [x] מחשבון החזר מס — **בנוי בתוך `services/hashavat-mas.html`** (מספיק לעכשיו)
- [ ] `calculators/hashavat-mas.html` — גרסה עצמאית מורחבת (אופציונלי)
- [ ] `calculators/mas-shevah.html` — מחשבון מס שבח
- [ ] `calculators/osek-patur-morsheh.html` — עוסק פטור או מורשה?
- [ ] `calculators/kviut-zchuyot.html` — הערכת קיבוע זכויות

---

## 🔄 שלב 3 — בלוג / מאמרים

- [ ] `blog/index.html` — דף הבית של הבלוג
- [ ] `blog/hashavat-mas-2025.html` — כיצד לקבל החזר מס
- [ ] `blog/osek-patur-vs-morsheh.html` — ההבדל בין עוסק פטור למורשה
- [ ] `blog/matai-liftoh-chevra.html` — מתי כדאי לפתוח חברה בע"מ
- [ ] `blog/mas-shevah-mador.html` — מס שבח — המדריך המלא
- [ ] `blog/kviut-zchuyot-madrich.html` — קיבוע זכויות — כל מה שצריך לדעת

---

## 🔄 שלב 4 — Google Business Profile

- [ ] עדכון פרופיל GBP (תמונות, שעות, תיאור עם מילות מפתח)
- [ ] שגרת פרסום אחת לשבוע ב-GBP
- [ ] תבנית הודעת WhatsApp לבקשת ביקורות

---

## 🔄 שלב 5 — אנליטיקה

- [ ] Google Analytics 4 (Measurement ID: G-XXXXXXXXXX)
- [ ] Google Search Console — הגשת sitemap
- [ ] מעקב המרות: WhatsApp clicks, טופס, טלפון, מחשבון

---

## 🔄 שלב 6 — שיפורי דף ראשי

- [ ] הוספת סקשן "מאמרים אחרונים" (3 כרטיסים)
- [ ] הוספת סקשן "כלים חינמיים" (2–3 מחשבונים)
- [ ] עדכון תפריט לדפי שירות

---

## הוראות לעדכון Sitemap
כל דף חדש שנוסף — יש להוסיף `<url>` ל-`sitemap.xml` ולעדכן את התאריך.

---

## 🎯 פוקוס נוכחי — `services/hashavat-mas.html`

### מה קיים כבר בדף

**תשתית ו-SEO:**
- [x] `<title>`, meta description, canonical, OG, Twitter Card
- [x] JSON-LD: BreadcrumbList + FAQPage (10 שאלות)
- [x] RTL, פונטים (Frank Ruhl Libre + Heebo), `../css/style.css`
- [x] Favicon, preconnect לפונטים

**ניווט:**
- [x] Header עם לוגו + nav links (חזרה לindex)
- [x] Mobile hamburger menu עם animation visibility-based
- [x] Breadcrumb (ראשי › שירותים › החזרי מס לשכיר)
- [x] Floating WhatsApp + Back-to-top + Scroll progress bar

**Hero Section:**
- [x] Page label ("שירות · החזרי מס")
- [x] H1 גדול: "האם מגיע לך החזר מס?"
- [x] Lead paragraph
- [x] CTA row: כפתור כהה + WhatsApp link
- [x] Stats bar: 6 שנים / ₪3,000+ / 200+ לקוחות

**תוכן מאמר (Article + Sidebar):**
- [x] 8 סקשנים עם H2:
  - מה זה החזר מס לשכיר?
  - כמה כסף אפשר לקבל? (עם amount-row ויזואלי)
  - מדרגות מס הכנסה 2025 (טבלה)
  - נקודות זיכוי — כסף שמגיע מהמדינה (רשימה עם ₪)
  - טופס 106 — כל מה שצריך לדעת
  - החזר מס לאמא בחופשת לידה
  - החזר מס לחייל משוחרר
  - האם שכיר חייב להגיש דוח שנתי?
- [x] 2 highlight-box (מסגרות דגש)
- [x] Sidebar sticky: CTA + טלפון + מייל + WhatsApp

**סקשנים מלאים:**
- [x] Eligibility grid — 9 קטגוריות זכאות (3 עמודות, hover)
- [x] מחשבון החזר מס — JS חי (2025 brackets, נקודות זיכוי, range slider)
- [x] Process — 4 שלבים (01–04)
- [x] FAQ accordion — 8 שאלות עם ARIA
- [x] CTA band — כהה עם 2 כפתורים
- [x] Related services — 3 כרטיסים (קיבוע זכויות, מיסוי מקרקעין, פתיחת עסק)
- [x] Footer מלא (לוגו, ניווט, קשר, socia)

**CSS:**
- [x] Responsive: breakpoints 900px + 600px
- [x] Calculator styles (`.calc-grid`, `.calc-result-panel` sticky)
- [x] Amount row, content table, content h3
- [x] Sidebar sticky card, eligibility grid, process steps

---

### מה חסר — שלבים לשיפור הדף

#### 🔴 עדיפות גבוהה (ליד ו-Trust)

**1. שאלון לידים מותאם (Lead Form)**
- [ ] טופס רב-שלבי (3 צעדים) בתוך הדף — לא popup:
  - שלב 1: מצב אישי (חודשי עבודה, מצב משפחתי, ילדים)
  - שלב 2: נסיבות מיוחדות (תואר, צבא, חל"ת, מוגבלות, תרומות)
  - שלב 3: פרטי קשר (שם + טלפון)
- [ ] לחיצה על "שלח" → פותח WhatsApp עם כל הנתונים מולאו אוטומטית בהודעה
- [ ] עיצוב: כרטיס כהה בולט, progress bar בין שלבים
- [ ] מיקום: אחרי ה-Hero, לפני המאמר (מי שמוכן — ימלא; מי שרוצה לקרוא — יקרא)

**2. סליידר ביקורות (Social Proof)**
- [ ] carousel אוטומטי (auto-play 4 שניות, pause בהover, חצים + dots)
- [ ] כרטיסי ביקורת: שם פרטי + עיסוק/מצב (אמא בחל"ת, מפוטר, החלפת מעסיק) + סכום שהוחזר + ציטוט
- [ ] 3–5 כוכבים ויזואליים (SVG)
- [ ] מיקום: בין ה-CTA band לבין Related services
- [ ] דוגמת כרטיס: "מיכל כ. — אמא לשניים ← קיבלה ₪11,200 להחזרי מס של 4 שנים"
- [ ] **דורש ממך: לספק 5–10 ביקורות אמיתיות (גם ראשי שם בלבד)**

---

#### 🟠 עדיפות בינונית (UX + Design)

**3. שיפור Hero ויזואלי**
- [ ] הוסף pattern/texture עדין ברקע Hero (geometric dots, grain)
- [ ] אנימציית כניסה לH1 (fade-up 0.4s delay)
- [ ] Stats bar — counter animation (count up מ-0 בscroll)
- [ ] כפתור WA ב-Hero — הוסף פולסציה/glow עדין לתשומת לב

**4. Sticky CTA בזמן גלילה**
- [ ] כשהמשתמש עובר את ה-Hero — מופיע בתחתית המסך סרט CTA צר (לא מטריד):
  `"בדוק/י זכאות חינם ← WhatsApp"` עם background charcoal
- [ ] נעלם כש-Footer נכנס לתצוגה

**5. שיפור מחשבון**
- [ ] Counter animation בתוצאה (count-up מ-0 לסכום)
- [ ] הפוך ל-"חשב שוב" אחרי חישוב ראשון
- [ ] Tooltip מוסבר על כל שדה (? icon עם hover)
- [ ] Mobile: תוצאה מוצגת ABOVE הכפתור לאחר חישוב (כרגע נדחפת למטה)

**6. Table of Contents — תוכן עניינים**
- [ ] בתוך ה-sidebar (מעל כרטיס CTA): רשימת קישורים מהירים לסקשנים בדף
- [ ] active state מתעדכן בזמן גלילה (IntersectionObserver)
- [ ] מיועד לדפים ארוכים — מאוד שימושי ל-SEO (Google רואה structure)

**7. מיקרו-אינטראקציות**
- [ ] Scroll reveal (fade-up) על elig-items, svc-steps בכניסה לתצוגה
- [ ] hover על FAQ items — חצ קטן שמתחלף
- [ ] highlight-box — animate border-right מ-0 לאורך מלא בכניסה

---

#### 🟡 עדיפות נמוכה (Professional Polish)

**8. Schema נוסף**
- [ ] הוסף `@type: Article` לJSON-LD עם `datePublished`, `dateModified`, `author`
- [ ] `@type: Person` לאלמוג (name, jobTitle, url)
- [ ] → גוגל יציג "עודכן לאחרונה" בתוצאות החיפוש

**9. "עדכון אחרון" ויזואלי**
- [ ] שורה קטנה מתחת ל-Hero: `עודכן: מאי 2026 | לפי נתוני רשות המסים`
- [ ] מגביר אמינות ורלוונטיות SEO

**10. Social Share**
- [ ] כפתורי שיתוף קטנים ב-sidebar תחתון: WhatsApp / copy link
- [ ] טקסט מוכן לשיתוף: "בדקתי — מגיע לי החזר מס! תבדוק/י גם..."

**11. Video embed (אופציונלי)**
- [ ] אם בעתיד יש רילס/וידאו הסבר — placeholder section מוכן
- [ ] עיצוב: כרטיס כהה עם play button, thumbnail

**12. "השוואה מהירה" — עם רואה חשבון vs לבד**
- [ ] טבלת השוואה 2 עמודות: "לבד" vs "עם אלמוג"
- [ ] שורות: זמן, שלמות הזכויות, סיכון לטעויות, עלות, ליווי

---

#### ✅ כלל קבוע
בכל דף שירות שמסיימים — מיד מעדכנים את הכרטיס שלו ב-`index.html` ל-`<a>` עם חץ.
