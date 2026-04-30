import { CONTACT, getWhatsAppUrl } from "@/lib/contact"
import { SERVICES } from "@/lib/services"

export const metadata = {
  title: "ג׳ריקו אספינוזה | התקנת פרקטים, שטיחים ודקים",
  description:
    "התקנת פרקטים, דמוי פרקט, שטיחים מקיר לקיר ודקים במרכז הארץ, השפלה והשרון. מעל 20 שנות ניסיון, מענה מהיר ושנה אחריות על העבודה.",
}

const trustBadges = [
  "מעל 20 שנות ניסיון בהתקנות פרקט, שטיחים ודקים",
  "שנה אחריות על העבודה",
  "שירות במרכז הארץ, השפלה והשרון",
]

const whyPoints = [
  "מעל 20 שנות ניסיון בעבודות פרקט, שטיחים ודקים",
  "מתקין שמבצע את העבודה בעצמו",
  "לא קבלן שמגלגל עבודה לאחרים",
  "שנה אחריות על העבודה",
  "מענה מהיר תוך כמה שעות",
  "מתאים גם לעבודות קטנות ותיקונים נקודתיים",
  "שירות במרכז הארץ, השפלה והשרון",
]

const processSteps = [
  "שולחים תמונות בוואטסאפ",
  "מקבלים מענה תוך כמה שעות",
  "אם צריך — מתאמים בדיקה במקום",
  "מקבלים הצעת מחיר",
  "מבצעים את העבודה",
  "שנה אחריות על העבודה",
]

const faqItems = [
  {
    question: "האם ג׳ריקו מספק גם את החומרים?",
    answer: "לא. ג׳ריקו מתמחה בהתקנה ותיקון. הלקוח רוכש את החומרים, וג׳ריקו מבצע את העבודה בשטח.",
  },
  {
    question: "אפשר לשלוח תמונות ולקבל הערכה ראשונית?",
    answer:
      "כן. מומלץ לשלוח תמונות בוואטסאפ של השטח, הפרקט, השטיח או הדק. במקרים רבים אפשר להבין כיוון ראשוני לפי התמונות.",
  },
  { question: "תוך כמה זמן מקבלים מענה?", answer: "בדרך כלל ג׳ריקו חוזר תוך כמה שעות." },
  { question: "יש אחריות על העבודה?", answer: "כן. ניתנת שנה אחריות על העבודה שבוצעה." },
  {
    question: "ג׳ריקו עושה גם עבודות קטנות?",
    answer: "כן. אפשר לפנות גם לגבי תיקונים נקודתיים, החלפות קטנות, מתיחות שטיחים או עבודות קטנות אחרות.",
  },
  { question: "באילו אזורים הוא עובד?", answer: "מרכז הארץ, השפלה והשרון." },
]

const mainServiceCards = SERVICES.slice(0, 6)

export default function Page() {
  return (
    <main className="bg-[#f7f2e9] text-[#1f1811]">
      <div className="bg-[#8b5e3c] px-4 py-3 text-center text-xs font-bold text-[#f9f4eb] md:text-sm">
        {trustBadges.join(" | ")}
      </div>

      <header className="sticky top-0 z-50 border-b border-[#dbcab3] bg-[#f7f2e9]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 md:px-6">
          <div className="font-serif text-lg font-black md:text-xl">ג׳ריקו אספינוזה</div>
          <nav className="hidden items-center gap-5 text-sm font-semibold md:flex">
            <a href="#home">בית</a>
            <a href="#services">שירותים</a>
            <a href="#about">עליי</a>
            <a href="#faq">שאלות נפוצות</a>
            <a href="#contact">יצירת קשר</a>
          </nav>
          <div className="flex items-center gap-2 shrink-0">
            <a href={`tel:${CONTACT.whatsappNumber}`} className="rounded-md border border-[#8b5e3c] px-3 py-2 text-xs font-bold md:text-sm">
              התקשרו לג׳ריקו
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#2d5a27] px-3 py-2 text-xs font-bold text-[#f5efe6] md:text-sm"
            >
              שלחו וואטסאפ
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 pt-10 md:grid-cols-2 md:px-6 md:pt-16">
        <div className="space-y-6">
          <h1 className="font-serif text-4xl font-black leading-tight md:text-5xl">
            התקנת פרקטים, שטיחים ודקים — בעבודה נקייה, מדויקת ואישית
          </h1>
          <p className="text-lg leading-relaxed text-[#4f3b2b]">
            ג׳ריקו אספינוזה מבצע התקנות ותיקונים בפרקטים, שטיחים מקיר לקיר ודקים, עם מעל 20 שנות ניסיון, מענה מהיר ושנה אחריות על העבודה.
          </p>
          <p className="text-sm text-[#6f5540]">
            שולחים תמונות בוואטסאפ, מקבלים מענה תוך כמה שעות, ואם צריך — מתאמים בדיקה במקום והצעת מחיר מסודרת.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#2d5a27] px-6 py-4 text-center font-bold text-[#f5efe6]"
            >
              שלחו תמונות בוואטסאפ
            </a>
            <a href={`tel:${CONTACT.whatsappNumber}`} className="rounded-md border border-[#8b5e3c] px-6 py-4 text-center font-bold">
              התקשרו לג׳ריקו
            </a>
          </div>
          <p className="text-xs text-[#7b6656]">אפשר לשלוח תמונות של הרצפה, השטיח או הדק ולקבל כיוון ראשוני לפני ביקור.</p>
        </div>

        <div className="rounded-xl border border-dashed border-[#bda585] bg-[#efe5d6] p-6 text-center">
          <div className="mb-4 text-sm font-semibold">[תמונה זמנית] אזור Hero</div>
          <p className="text-sm text-[#6f5540]">יחס מומלץ: 2400x1400 בדסקטופ, 1200x1600 במובייל. התמונה תוחלף בצילום עבודה אמיתי.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-2 md:px-6">
        <div className="rounded-xl border border-[#dbcab3] bg-white p-6">
          <h2 className="font-serif text-2xl font-black md:text-3xl">לא בטוחים מאיפה מתחילים?</h2>
          <p className="mt-3 text-[#4f3b2b]">רוב הלקוחות מתחילים בשליחת תמונות. ג׳ריקו עובר על המצב, מחזיר תשובה תוך כמה שעות, ומסביר בצורה פשוטה אם צריך התקנה, תיקון או מתיחה.</p>
          <a
            href={getWhatsAppUrl("שלום ג׳ריקו, אשמח לכיוון ראשוני לפי תמונות.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-md border border-[#8b5e3c] px-5 py-3 font-bold"
          >
            שלחו תמונות וקבלו כיוון
          </a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="font-serif text-3xl font-black md:text-4xl">עבודות התקנה ותיקון לבית ולעסק</h2>
        <p className="mt-4 max-w-3xl text-[#4f3b2b]">
          ג׳ריקו מבצע את העבודה בעצמו — בלי להעביר אתכם בין אנשי מקצוע ובלי לגלגל את העבודה הלאה.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mainServiceCards.map((service) => (
            <article key={service.slug} className="rounded-lg border border-[#dbcab3] bg-white p-5">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-sm text-[#5e4938]">{service.subtitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={`/services/${service.slug}`} className="rounded-md border border-[#8b5e3c] px-3 py-2 text-sm font-semibold">
                  לעמוד השירות
                </a>
                <a
                  href={getWhatsAppUrl(`שלום ג׳ריקו, אשמח לקבל פרטים על ${service.title}. מצרף תמונות של השטח.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-[#2d5a27] px-3 py-2 text-sm font-semibold text-[#f5efe6]"
                >
                  {service.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <a href="/services" className="font-bold text-[#5a3e27] underline underline-offset-4">
            לכל השירותים
          </a>
        </div>
      </section>

      <section className="bg-[#efe5d6] py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="font-serif text-3xl font-black">עבודה שקטה, מסודרת ומדויקת</h2>
            <p className="mt-4 text-[#4f3b2b]">
              אחרי יותר מ־20 שנה בתחום, ג׳ריקו יודע שההבדל בין עבודה רגילה לעבודה טובה נמצא בפרטים הקטנים: חיתוכים, קצוות, חיבורים, הכנה נכונה של השטח וניקיון בסיום.
            </p>
          </div>
          <ul className="space-y-2 text-sm md:text-base">
            {whyPoints.map((point) => (
              <li key={point} className="rounded-md bg-white px-4 py-3">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="font-serif text-3xl font-black">החומרים אצלכם — ההתקנה אצל ג׳ריקו</h2>
        <p className="mt-4 max-w-4xl text-[#4f3b2b]">
          ג׳ריקו מתמחה בהתקנה ובתיקון. הלקוח רוכש את החומרים, וג׳ריקו מבצע את העבודה בשטח: התקנה, התאמה, חיתוכים, גימורים ותיקונים לפי הצורך.
        </p>
        <p className="mt-3 text-sm text-[#6f5540]">לא בטוחים אם החומר מתאים? שלחו תמונות ומידע בוואטסאפ לפני תחילת העבודה.</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 md:px-6">
        <div className="rounded-xl border border-[#dbcab3] bg-white p-6 text-center md:text-right">
          <h3 className="text-2xl font-bold">צריכים עזרה להבין איזה שירות מתאים?</h3>
          <p className="mt-3 text-sm text-[#4f3b2b] md:text-base">שלחו תמונות של השטח + עיר בוואטסאפ, וג׳ריקו יחזור תוך כמה שעות עם כיוון ברור לשלב הבא.</p>
          <a
            href={getWhatsAppUrl("שלום ג׳ריקו, אשמח להבין איזה שירות מתאים לי. מצרף תמונות ופרטי עיר.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-md bg-[#2d5a27] px-5 py-3 font-bold text-[#f5efe6]"
          >
            בדיקה ראשונית בוואטסאפ
          </a>
        </div>
      </section>


      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="font-serif text-3xl font-black">עבודות לדוגמה</h2>
        <p className="mt-3 text-[#4f3b2b]">כאן יוצגו עבודות אמיתיות של פרקטים, שטיחים ודקים.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["התקנת פרקט בדירה", "תיקון פרקט נקודתי", "שטיח מקיר לקיר", "חידוש דק"].map((item) => (
            <div key={item} className="rounded-lg border border-dashed border-[#bda585] bg-[#efe5d6] p-5 text-center">
              <div className="text-sm font-semibold">[תמונה זמנית]</div>
              <div className="mt-2 text-sm">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#efe5d6] py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-serif text-3xl font-black">מה לקוחות אומרים</h2>
          <p className="mt-3 text-[#4f3b2b]">אזור המלצות אמיתיות יתווסף לאחר איסוף ואישור לקוחות.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "[להחלפה / DEMO] ג׳ריקו הגיע בזמן, עבד נקי, הסביר מה הוא עושה והשאיר אחריו תוצאה מאוד מסודרת.",
              "[להחלפה / DEMO] שלחנו תמונות בוואטסאפ, קיבלנו מענה מהיר והעבודה בוצעה בצורה מקצועית ושקטה.",
              "[להחלפה / DEMO] היה חשוב לנו שהגימור יהיה מדויק, וג׳ריקו שם לב לכל הפרטים הקטנים.",
            ].map((quote) => (
              <blockquote key={quote} className="rounded-lg bg-white p-5 text-sm leading-7 text-[#4f3b2b]">
                {quote}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="font-serif text-3xl font-black">נעים להכיר, ג׳ריקו אספינוזה</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-dashed border-[#bda585] bg-[#efe5d6] p-4 text-center text-sm">
            <p className="font-semibold">[תמונה זמנית]</p>
            <p className="mt-2">פורטרט אישי של ג׳ריקו מהשטח</p>
          </div>
          <div className="md:col-span-2 space-y-4 text-[#4f3b2b]">
            <p>
              ג׳ריקו עלה לישראל עם אמו בגיל 10 וגדל כאן. את הדרך שלו בעולם העבודה הוא בנה בארץ, וביותר מ־20 שנות ניסיון פיתח גישה פשוטה: לעבוד מדויק, לדבר ישר, ולתת תוצאה שנראית טוב גם ביום הראשון וגם אחרי.
            </p>
            <p>
              היום הוא מבצע עבודות פרקט, שטיחים ודקים במרכז הארץ, השפלה והשרון, עם מעורבות אישית בכל עבודה וירידה לפרטים שחשובים באמת. העבודה מתבצעת על ידו בלבד, בלי להעביר אותה לקבלני משנה.
            </p>
            <a
              href={getWhatsAppUrl("שלום ג׳ריקו, אשמח לדבר איתך על עבודה אפשרית.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-[#2d5a27] px-5 py-3 font-bold text-[#f5efe6]"
            >
              דברו עם ג׳ריקו בוואטסאפ
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-serif text-3xl font-black">איך מתחילים?</h2>
          <ol className="mt-6 grid gap-3 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <li key={step} className="rounded-lg border border-[#dbcab3] p-4">
                <span className="mb-2 block text-xs font-bold text-[#8b5e3c]">שלב {index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="font-serif text-3xl font-black">שירות במרכז הארץ, השפלה והשרון</h2>
        <p className="mt-4 text-[#4f3b2b]">
          ג׳ריקו מבצע עבודות התקנה ותיקון באזור המרכז, השפלה והשרון. לא בטוחים אם אתם באזור השירות? שלחו הודעה בוואטסאפ עם מיקום העבודה ותקבלו תשובה.
        </p>
        <a
          href={getWhatsAppUrl("שלום ג׳ריקו, אשמח לבדוק זמינות באזור שלי.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md border border-[#8b5e3c] px-5 py-3 font-bold"
        >
          בדקו זמינות באזור שלכם
        </a>
      </section>

      <section id="faq" className="bg-[#efe5d6] py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-serif text-3xl font-black">שאלות נפוצות</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-lg bg-white p-4">
                <summary className="cursor-pointer font-bold">{item.question}</summary>
                <p className="mt-3 text-sm leading-7 text-[#4f3b2b]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="font-serif text-3xl font-black">רוצים לבדוק עבודה או לקבל הצעת מחיר?</h2>
        <p className="mt-4 max-w-3xl text-[#4f3b2b]">
          שלחו תמונות בוואטסאפ עם תיאור קצר של העבודה: מה צריך לעשות, איפה זה נמצא, ומה מצב השטח כרגע. ג׳ריקו יחזור אליכם תוך כמה שעות עם כיוון להמשך.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#2d5a27] px-6 py-4 text-center font-bold text-[#f5efe6]"
          >
            שליחת תמונות בוואטסאפ
          </a>
          <a href={`tel:${CONTACT.whatsappNumber}`} className="rounded-md border border-[#8b5e3c] px-6 py-4 text-center font-bold">
            התקשרו עכשיו
          </a>
        </div>
      </section>

      <section className="bg-[#1f1811] py-10 text-[#f5efe6]">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-serif text-2xl font-black">שלחו תמונות וקבלו כיוון ראשוני</h2>
          <p className="mt-3 max-w-2xl text-sm text-[#d8c8b7]">לא צריך להתחיל בטופס ארוך. שלחו תמונות בוואטסאפ, כתבו בקצרה מה צריך, וג׳ריקו יחזור אליכם עם מענה ברור.</p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-md bg-[#2d5a27] px-5 py-3 font-bold text-[#f5efe6]"
          >
            שלחו הודעה לג׳ריקו
          </a>
        </div>
      </section>

      <footer className="bg-[#120d09] py-10 text-[#f5efe6]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm md:px-6">
          <p className="font-bold">ג׳ריקו אספינוזה</p>
          <p>התקנת פרקטים, שטיחים ודקים</p>
          <p>שירות במרכז הארץ, השפלה והשרון</p>
          <p>מעל 20 שנות ניסיון | שנה אחריות על העבודה</p>
          <p>וואטסאפ: {CONTACT.phoneDisplay}</p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit rounded-md border border-[#d8c8b7] px-4 py-2 font-bold"
          >
            שלחו הודעה בוואטסאפ
          </a>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#2f5f2b] bg-[#2d5a27] p-3 md:hidden">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-md bg-[#f5efe6] px-4 py-3 text-center font-bold text-[#1f1811]"
        >
          שלחו תמונות בוואטסאפ
        </a>
      </div>
    </main>
  )
}
