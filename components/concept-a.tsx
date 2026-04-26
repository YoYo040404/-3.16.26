"use client"

import Image from "next/image"
import { MessageCircle, ChevronDown } from "lucide-react"
import { useState } from "react"
import { getWhatsAppUrl } from "@/lib/contact"

function WhatsAppButton({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-accent text-accent-foreground font-sans font-semibold rounded-sm px-6 py-3.5 text-base transition-all hover:opacity-90 active:scale-[0.98] ${className}`}
    >
      <MessageCircle size={18} className="shrink-0" />
      {children}
    </a>
  )
}

function ProofStrip() {
  return (
    <div className="border-y border-border bg-secondary/60">
      <div className="max-w-5xl mx-auto px-6 py-3 flex flex-wrap justify-center gap-x-8 gap-y-1.5 text-sm font-sans text-muted-foreground">
        <span>מעל 20 שנות ניסיון</span>
        <span className="hidden sm:inline text-border">|</span>
        <span>שנה אחריות על העבודה</span>
        <span className="hidden sm:inline text-border">|</span>
        <span>מענה תוך כמה שעות</span>
      </div>
    </div>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function HeroA() {
  return (
    <section className="relative overflow-hidden">
      {/* Nav */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-6 pb-4">
        <div className="font-serif font-bold text-xl text-foreground tracking-tight">
          ג׳ריקו אספינוזה
        </div>
        <WhatsAppButton className="hidden md:inline-flex text-sm px-4 py-2.5">
          שלחו תמונה ב־WhatsApp
        </WhatsAppButton>
      </header>

      {/* Hero layout: text right, image left (RTL context means visual right = start) */}
      <div className="grid md:grid-cols-2 min-h-[88vh]">
        {/* Text column */}
        <div className="flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 order-2 md:order-1">
          <p className="font-sans text-xs tracking-widest uppercase text-primary mb-6 font-medium">
            פרקט · שטיחים · דקים — מרכז הארץ
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
            פרקטים, שטיחים ודקים עושים עם מי שיודע לעבוד מדויק
          </h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            ג׳ריקו אספינוזה מבצע התקנות, תיקונים וחידוש של פרקטים, שטיחים ודקים במרכז הארץ — עם מעל 20 שנות ניסיון, שנה אחריות על העבודה, ומענה תוך כמה שעות.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <WhatsAppButton>שלחו תמונה ב־WhatsApp ותקבלו כיוון ראשוני</WhatsAppButton>
          </div>
          <p className="mt-4 text-sm text-muted-foreground font-sans">
            נגיד לכם ישר אם צריך תיקון, חידוש או התקנה חדשה.
          </p>
        </div>

        {/* Image column */}
        <div className="relative h-72 md:h-auto order-1 md:order-2">
          <Image
            src="/images/hero-parquet.jpg"
            alt="פרקט עץ מותקן בצורה מדויקת בסלון"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/10" />
        </div>
      </div>
    </section>
  )
}

// ─── SERVICES ROW ─────────────────────────────────────────────────────────────
function ServicesA() {
  const services = [
    "התקנת פרקט",
    "תיקון פרקט",
    "פרקט פישבון",
    "פרקט 3 שכבות",
    "שטיחים מקיר לקיר",
    "מתיחת שטיחים",
    "הדבקת שטיחים",
    "התקנת דק",
    "חידוש דק",
  ]
  return (
    <section className="py-10 overflow-hidden border-b border-border">
      <div className="flex gap-8 animate-marquee-rtl whitespace-nowrap select-none" aria-hidden>
        {[...services, ...services].map((s, i) => (
          <span key={i} className="font-sans text-sm text-muted-foreground shrink-0">
            {s} <span className="text-primary mx-2">·</span>
          </span>
        ))}
      </div>
    </section>
  )
}

// ─── PROBLEM ──────────────────────────────────────────────────────────────────
function ProblemA() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <p className="font-sans text-xs tracking-widest uppercase text-primary font-medium mb-4">הבעיה</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-snug text-balance">
            הבעיה בדרך כלל לא מתחילה בחומר. היא מתחילה בביצוע.
          </h2>
        </div>
        <div className="md:col-span-3 space-y-5 pt-2">
          <p className="font-sans text-base text-foreground leading-relaxed">
            אפשר לבחור פרקט יפה, שטיח טוב או דק מתאים — אבל אם העבודה לא מדויקת, רואים את זה מהר מאוד.
          </p>
          <p className="font-sans text-base text-muted-foreground leading-relaxed">
            חיבורים לא נקיים, קווים שלא יושבים נכון, גימור לא מדויק, בלגן בשטח או עבודה שנראית טוב רק ביום הראשון — אלה בדיוק הדברים שאנשים מנסים להימנע מהם.
          </p>
          <p className="font-sans text-base text-muted-foreground leading-relaxed">
            ובמקרים אחרים בכלל לא ברור מה נכון לעשות: לתקן, לחדש או להחליף. כשאין מי שיגיד את זה ישר, קל מאוד להיכנס להוצאה מיותרת או לפתרון לא נכון.
          </p>
          <p className="font-serif text-lg font-medium text-primary border-r-2 border-primary pr-4 mt-8">
            בדיוק כאן נכנסת יד מקצועית שמבינה עבודה — ולא רק מוכרת עבודה.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── SOLUTION ─────────────────────────────────────────────────────────────────
function SolutionA() {
  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-primary font-medium mb-4">הגישה</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-snug max-w-2xl text-balance">
            כשעובדים מדויק, גם התוצאה נראית אחרת
          </h2>
          <p className="mt-5 font-sans text-base text-muted-foreground leading-relaxed max-w-2xl">
            ג׳ריקו אספינוזה לא מגיע רק כדי ״לעשות עבודה״. הוא מגיע כדי להבין מה נכון לעשות בשטח, להסביר ישר מה האפשרויות, ולבצע בצורה נקייה, מדויקת ומסודרת.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            {
              num: "01",
              text: "מעל 20 שנות ניסיון בעבודה עם פרקטים, שטיחים ודקים — מהתקנות חדשות ועד תיקונים, חידוש ועבודות גמר שדורשות יד מקצועית.",
            },
            {
              num: "02",
              text: "עובד בעצמו, וכשצריך מביא צוות בהתאם לסוג העבודה — כדי לשמור על רמת ביצוע גבוהה ולא להפוך כל עבודה ל׳פס ייצור׳.",
            },
            {
              num: "03",
              text: "אם צריך, עוזר גם בבחירת חומרים ובהבנה מה באמת מתאים לחלל, לתקציב ולתוצאה שרוצים להגיע אליה.",
            },
          ].map((item) => (
            <div key={item.num} className="bg-background p-8">
              <span className="font-sans text-3xl font-bold text-border">{item.num}</span>
              <p className="mt-4 font-sans text-base text-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 font-serif text-xl font-medium text-foreground">
          המטרה היא פשוטה: לתת עבודה שנראית טוב, יושבת נכון, ומחזיקה כמו שצריך.
        </p>
      </div>
    </section>
  )
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function AboutA() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
          <Image
            src="/images/jerico-portrait.jpg"
            alt="ג׳ריקו אספינוזה, בעל המקצוע"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-primary font-medium mb-4">קצת על ג׳ריקו</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-snug mb-6 text-balance">
            מקצוע שנבנה כאן, על הרצפה
          </h2>
          <p className="font-sans text-base text-foreground leading-relaxed mb-4">
            ג׳ריקו אספינוזה עלה לישראל עם אמו בגיל 10 וגדל כאן. את הדרך שלו בעולם העבודה הוא בנה בארץ, וביותר מ־20 שנות ניסיון פיתח גישה פשוטה: לעבוד מדויק, לדבר ישר, ולתת תוצאה שנראית טוב גם ביום הראשון וגם אחרי.
          </p>
          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
            היום הוא מבצע עבודות פרקט, שטיחים ודקים במרכז הארץ, עם מעורבות אישית בכל עבודה וירידה לפרטים שחשובים באמת.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="font-serif text-3xl font-bold text-primary">20+</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">שנות ניסיון</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-primary">שנה</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">אחריות על העבודה</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-primary">כמה שעות</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">זמן מענה</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────
function GalleryA() {
  return (
    <section className="py-4">
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-10">
        <p className="font-sans text-xs tracking-widest uppercase text-primary font-medium mb-3">העבודה בשטח מדברת</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-snug text-balance max-w-lg">
          בסוף, אנשים רואים את ההבדל בעיניים.
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-1 max-w-5xl mx-auto px-6 md:px-12">
        <div className="relative aspect-square">
          <Image src="/images/fishbone-parquet.jpg" alt="פרקט פישבון" fill className="object-cover rounded-sm" />
        </div>
        <div className="relative aspect-square col-span-2">
          <Image src="/images/deck-installation.jpg" alt="התקנת דק" fill className="object-cover rounded-sm" />
        </div>
        <div className="relative aspect-square col-span-2">
          <Image src="/images/carpet-installation.jpg" alt="התקנת שטיח" fill className="object-cover rounded-sm" />
        </div>
        <div className="relative aspect-square">
          <Image src="/images/parquet-repair.jpg" alt="תיקון פרקט" fill className="object-cover rounded-sm" />
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function TestimonialsA() {
  const testimonials = [
    {
      text: "ג׳ריקו עשה לנו פרקט בסלון ובחדרים. הגיע בזמן, עבד מסודר, לא השאיר בלגן. העבודה יצאה יפה מאוד. ממליץ בחום.",
      name: "דני כ.",
      location: "רמת גן",
      work: "התקנת פרקט בסלון ובחדרים",
    },
    {
      text: "חיפשנו מישהו לשטיח במשרד. ג׳ריקו הגיע, נתן מחיר הוגן ועשה את העבודה תוך יום. מקצועי ונעים לעבוד איתו.",
      name: "מיכל ר.",
      location: "תל אביב",
      work: "התקנת שטיח במשרד",
    },
    {
      text: "עשינו איתו פרקט פישבון בחדר השינה. לא האמנו שייצא כל כך יפה. רואים שיש לו ידיים של אומן.",
      name: "יוסי ואורית מ.",
      location: "פתח תקווה",
      work: "התקנת פרקט פישבון בחדר שינה",
    },
  ]

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-5xl mx-auto">
      <p className="font-sans text-xs tracking-widest uppercase text-primary font-medium mb-10">מה אומרים לקוחות</p>
      <div className="space-y-px bg-border">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-background grid md:grid-cols-3 gap-6 p-8">
            <div className="md:col-span-2">
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
                ״{t.text}״
              </p>
            </div>
            <div className="flex flex-col justify-end gap-1">
              <p className="font-sans font-semibold text-foreground">— {t.name}, {t.location}</p>
              <p className="font-sans text-sm text-muted-foreground">{t.work}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── PROCESS ──────────────────────────────────────────────────────────────────
function ProcessA() {
  const steps = [
    "שולחים תמונה או פרטים ב־WhatsApp ומקבלים מענה תוך כמה שעות.",
    "בודקים מה נכון לעשות לפי המצב בשטח — תיקון, חידוש או התקנה חדשה.",
    "מקבלים הסבר ברור והצעת עבודה מסודרת, בלי לסבך ובלי למכור מה שלא צריך.",
    "קובעים עבודה ומבצעים בצורה מדויקת, נקייה ומסודרת — עם תשומת לב לגימור, לחיבורים ולתוצאה הסופית.",
    "בסיום מקבלים עבודה שנראית טוב, יושבת נכון, וכוללת שנה אחריות על העבודה.",
  ]
  return (
    <section className="bg-foreground text-background py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/50 font-medium mb-4">תהליך</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-14 text-balance max-w-lg">
          ככה זה עובד בפועל
        </h2>
        <div className="space-y-0 divide-y divide-background/10">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-8 items-start py-6">
              <span className="font-sans text-sm font-bold text-primary shrink-0 w-6 mt-1">{i + 1}</span>
              <p className="font-sans text-base leading-relaxed text-background/90">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FaqA() {
  const [open, setOpen] = useState<number | null>(null)
  const faqs = [
    { q: "האם אתם עובדים רק במרכז הארץ?", a: "כן. ג׳ריקו אספינוזה נותן שירות במרכז הארץ. אם יש עבודה באזור גבולי, אפשר לשלוח מיקום ולקבל תשובה." },
    { q: "אפשר לפנות גם על תיקון קטן?", a: "אפשר גם על תיקונים. אם יש נזק נקודתי, בעיה בפרקט, שטיח שצריך מתיחה — שולחים תמונה ומבינים מה נכון לעשות." },
    { q: "אתם גם עוזרים עם חומרים?", a: "כן. ובמקרה הצורך אפשר גם לעזור להבין אילו חומרים מתאימים לחלל, לתקציב ולסוג העבודה." },
    { q: "תוך כמה זמן מקבלים מענה?", a: "בדרך כלל תוך כמה שעות ב־WhatsApp." },
    { q: "יש אחריות על העבודה?", a: "כן. יש שנה אחריות על העבודה." },
    { q: "איך מתחילים?", a: "פשוט שולחים תמונה או כמה פרטים ב־WhatsApp, ומקבלים כיוון ראשוני." },
  ]

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-primary font-medium mb-4">שאלות</p>
          <h2 className="font-serif text-3xl font-bold text-foreground leading-snug text-balance">
            שאלות שעולות כמעט בכל עבודה
          </h2>
        </div>
        <div className="md:col-span-2 divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                className="w-full flex items-center justify-between gap-4 text-right"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-sans font-semibold text-foreground text-base">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="mt-3 font-sans text-base text-muted-foreground leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FINAL CTA ────────────────────────────────────────────────────────────────
function FinalCtaA() {
  return (
    <section className="bg-primary text-primary-foreground py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold leading-snug mb-5 text-balance">
          רוצים להבין מה נכון לעשות אצלכם?
        </h2>
        <p className="font-sans text-base leading-relaxed opacity-90 mb-8 max-w-xl mx-auto">
          שלחו תמונה או כמה פרטים ב־WhatsApp, ותקבלו תשובה ברורה אם צריך תיקון, חידוש או התקנה חדשה. בלי ניחושים, בלי סיבובים, ובלי למכור לכם מה שלא צריך.
        </p>
        <WhatsAppButton className="bg-accent text-accent-foreground text-lg px-8 py-4 mx-auto">
          שלחו תמונה ב־WhatsApp
        </WhatsAppButton>
        <p className="mt-5 font-sans text-sm opacity-70">
          מענה תוך כמה שעות · שנה אחריות על העבודה · שירות במרכז הארץ
        </p>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function FooterA() {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-sans">
        <span className="font-semibold text-foreground">ג׳ריקו אספינוזה</span>
        <span>פרקטים, שטיחים ודקים — מרכז הארץ</span>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
          WhatsApp
        </a>
      </div>
    </footer>
  )
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
export default function ConceptA() {
  return (
    <div className="bg-background text-foreground font-sans" dir="rtl">
      <HeroA />
      <ProofStrip />
      <ServicesA />
      <ProblemA />
      <SolutionA />
      <AboutA />
      <GalleryA />
      <TestimonialsA />
      <ProcessA />
      <FaqA />
      <FinalCtaA />
      <FooterA />
    </div>
  )
}
