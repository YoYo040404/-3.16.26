"use client"

import Image from "next/image"
import { MessageCircle, ChevronDown, CheckCircle2, Phone } from "lucide-react"
import { useState } from "react"

const WA_LINK = "https://wa.me/972000000000?text=שלום%20ג׳ריקו%2C%20שלחתי%20תמונה%20לבדיקה"

// Concept C: Conversion-first, direct, non-template
// Light warm white bg. CTA-heavy but not cheap. Sections are short, punchy.
// Typography is confident, not decorative. Layout is asymmetric and rhythmically varied.
// WhatsApp CTA appears multiple times. Social proof is prominent.

function WaButton({ big = false, className = "" }: { big?: boolean; className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 font-sans font-bold rounded-sm transition-all hover:opacity-90 active:scale-[0.98]
        ${big ? "text-lg px-8 py-5" : "text-base px-6 py-3.5"}
        bg-[#2d5a27] text-[#f5efe6] ${className}`}
    >
      <MessageCircle size={big ? 22 : 18} className="shrink-0" />
      שלחו תמונה ב־WhatsApp
    </a>
  )
}

// ─── STICKY TOP BAR ───────────────────────────────────────────────────────────
function TopBarC() {
  return (
    <div
      className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-10 py-3.5 border-b border-[#e0d5c5]"
      style={{ backgroundColor: "#faf6ef" }}
    >
      <span className="font-sans font-bold text-base text-[#1a1510]">ג׳ריקו אספינוזה</span>
      <div className="flex items-center gap-3">
        <span className="hidden md:block font-sans text-sm text-[#7a6450]">
          שירות במרכז הארץ · מענה תוך כמה שעות
        </span>
        <WaButton className="text-sm px-4 py-2.5" />
      </div>
    </div>
  )
}

// ─── HERO — conversion-first, punchy ─────────────────────────────────────────
function HeroC() {
  return (
    <section style={{ backgroundColor: "#faf6ef" }} className="pt-12 pb-0 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Badge row */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["20+ שנות ניסיון", "שנה אחריות", "מענה תוך כמה שעות", "מרכז הארץ"].map((tag) => (
            <span
              key={tag}
              className="font-sans text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full border"
              style={{ borderColor: "#c4a882", color: "#7a6450", backgroundColor: "#f0e8d8" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-balance mb-6"
              style={{ color: "#1a1510", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              פרקטים, שטיחים ודקים עושים עם מי שיודע לעבוד מדויק
            </h1>
            <p className="font-sans text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "#5c4a35" }}>
              ג׳ריקו אספינוזה מבצע התקנות, תיקונים וחידוש של פרקטים, שטיחים ודקים במרכז הארץ — עם מעל 20 שנות ניסיון, שנה אחריות על העבודה, ומענה תוך כמה שעות.
            </p>
            <WaButton big />
            <p className="mt-4 font-sans text-sm" style={{ color: "#9a8070" }}>
              נגיד לכם ישר אם צריך תיקון, חידוש או התקנה חדשה.
            </p>
          </div>

          {/* Hero image flush to bottom */}
          <div className="md:col-span-5 relative h-72 md:h-[420px] rounded-t-sm overflow-hidden self-end">
            <Image
              src="/images/hero-parquet.jpg"
              alt="פרקט עץ מותקן בצורה מדויקת"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PROBLEM — compact, text-heavy ────────────────────────────────────────────
function ProblemC() {
  return (
    <section className="py-16 px-5 md:px-10" style={{ backgroundColor: "#f0e8d8" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="font-sans text-xs tracking-widest uppercase font-bold mb-3" style={{ color: "#8b5e3c" }}>
            הבעיה האמיתית
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-black leading-tight text-balance" style={{ color: "#1a1510" }}>
            הבעיה בדרך כלל לא מתחילה בחומר. היא מתחילה בביצוע.
          </h2>
        </div>
        <div className="space-y-4">
          <p className="font-sans text-base leading-relaxed" style={{ color: "#3d2f20" }}>
            אפשר לבחור פרקט יפה, שטיח טוב או דק מתאים — אבל אם העבודה לא מדויקת, רואים את זה מהר מאוד.
          </p>
          <p className="font-sans text-base leading-relaxed" style={{ color: "#7a6450" }}>
            חיבורים לא נקיים, קווים שלא יושבים נכון, גימור לא מדויק, בלגן בשטח — אלה בדיוק הדברים שאנשים מנסים להימנע מהם.
          </p>
          <p className="font-sans text-base leading-relaxed" style={{ color: "#7a6450" }}>
            ובמקרים אחרים בכלל לא ברור מה נכון לעשות: לתקן, לחדש או להחליף. כשאין מי שיגיד את זה ישר, קל מאוד להיכנס להוצאה מיותרת.
          </p>
          <p className="font-serif text-lg font-bold pt-2" style={{ color: "#8b5e3c" }}>
            בדיוק כאן נכנסת יד מקצועית שמבינה עבודה — ולא רק מוכרת עבודה.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── WHY JERICO — checklist style, grounded ───────────────────────────────────
function WhyC() {
  const points = [
    "מעל 20 שנות ניסיון בעבודה עם פרקטים, שטיחים ודקים",
    "עובד בעצמו — לא מעביר לקבלני משנה",
    "נותן הסבר ברור לפני כל עבודה, בלי לסבך",
    "עוזר גם בבחירת חומרים לפי חלל, תקציב וצרכים",
    "שנה אחריות על כל עבודה",
    "לא מוכר מה שלא צריך",
  ]

  return (
    <section className="py-16 md:py-24 px-5 md:px-10" style={{ backgroundColor: "#faf6ef" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* Portrait */}
        <div className="md:col-span-4 relative">
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
            <Image
              src="/images/jerico-portrait.jpg"
              alt="ג׳ריקו אספינוזה"
              fill
              className="object-cover"
            />
          </div>
          {/* Floating name card */}
          <div
            className="absolute -bottom-4 -start-4 rounded-sm px-5 py-4 shadow-lg"
            style={{ backgroundColor: "#8b5e3c", color: "#f5efe6" }}
          >
            <p className="font-serif font-bold text-base">ג׳ריקו אספינוזה</p>
            <p className="font-sans text-xs mt-0.5" style={{ opacity: 0.75 }}>20+ שנות ניסיון</p>
          </div>
        </div>

        <div className="md:col-span-8">
          <p className="font-sans text-xs tracking-widest uppercase font-bold mb-4" style={{ color: "#8b5e3c" }}>
            למה ג׳ריקו
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-black leading-tight mb-3 text-balance" style={{ color: "#1a1510" }}>
            כשעובדים מדויק, גם התוצאה נראית אחרת
          </h2>
          <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "#5c4a35" }}>
            ג׳ריקו אספינוזה לא מגיע רק כדי ״לעשות עבודה״. הוא מגיע כדי להבין מה נכון לעשות בשטח ולבצע בצורה נקייה, מדויקת ומסודרת.
          </p>

          <ul className="space-y-3 mb-10">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: "#2d5a27" }} />
                <span className="font-sans text-base" style={{ color: "#3d2f20" }}>{p}</span>
              </li>
            ))}
          </ul>

          <WaButton />
        </div>
      </div>
    </section>
  )
}

// ─── GALLERY — 4-column strip ─────────────────────────────────────────────────
function GalleryC() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-2 md:grid-cols-4 h-48 md:h-64">
        {[
          { src: "/images/fishbone-parquet.jpg", alt: "פרקט פישבון" },
          { src: "/images/deck-installation.jpg", alt: "התקנת דק" },
          { src: "/images/carpet-installation.jpg", alt: "שטיח" },
          { src: "/images/parquet-repair.jpg", alt: "תיקון פרקט" },
        ].map((img) => (
          <div key={img.src} className="relative overflow-hidden">
            <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── TESTIMONIALS — compact cards ─────────────────────────────────────────────
function TestimonialsC() {
  const testimonials = [
    {
      text: "ג׳ריקו עשה לנו פרקט בסלון ובחדרים. הגיע בזמן, עבד מסודר, לא השאיר בלגן. העבודה יצאה יפה מאוד. ממליץ בחום.",
      name: "דני כ.",
      location: "רמת גן",
      work: "התקנת פרקט",
    },
    {
      text: "חיפשנו מישהו לשטיח במשרד. ג׳ריקו הגיע, נתן מחיר הוגן ועשה את העבודה תוך יום. מקצועי ונעים לעבוד איתו.",
      name: "מיכל ר.",
      location: "תל אביב",
      work: "שטיח במשרד",
    },
    {
      text: "עשינו איתו פרקט פישבון בחדר השינה. לא האמנו שייצא כל כך יפה. רואים שיש לו ידיים של אומן.",
      name: "יוסי ואורית מ.",
      location: "פתח תקווה",
      work: "פרקט פישבון",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-5 md:px-10" style={{ backgroundColor: "#f0e8d8" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase font-bold mb-2" style={{ color: "#8b5e3c" }}>
              לקוחות
            </p>
            <h2 className="font-serif text-3xl font-black" style={{ color: "#1a1510" }}>
              מה אומרים
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-sm p-7 flex flex-col justify-between gap-5"
              style={{ backgroundColor: "#faf6ef" }}
            >
              <p className="font-sans text-base leading-relaxed" style={{ color: "#3d2f20" }}>
                ״{t.text}״
              </p>
              <div>
                <div className="w-6 h-0.5 mb-4 rounded-full" style={{ backgroundColor: "#c4a882" }} />
                <p className="font-sans font-bold text-sm" style={{ color: "#1a1510" }}>
                  {t.name}, {t.location}
                </p>
                <p className="font-sans text-xs mt-0.5" style={{ color: "#9a8070" }}>{t.work}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROCESS — horizontal numbered ────────────────────────────────────────────
function ProcessC() {
  const steps = [
    { n: "1", t: "שולחים תמונה", d: "ב־WhatsApp, מקבלים מענה תוך כמה שעות" },
    { n: "2", t: "בודקים בשטח", d: "תיקון, חידוש או התקנה חדשה?" },
    { n: "3", t: "הצעה ברורה", d: "בלי סיבובים, בלי למכור מה שלא צריך" },
    { n: "4", t: "ביצוע מדויק", d: "נקי, מסודר, עם תשומת לב לגימור" },
    { n: "5", t: "תוצאה + אחריות", d: "שנה אחריות על העבודה" },
  ]

  return (
    <section className="py-16 md:py-24 px-5 md:px-10" style={{ backgroundColor: "#faf6ef" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase font-bold mb-2" style={{ color: "#8b5e3c" }}>
              תהליך
            </p>
            <h2 className="font-serif text-3xl font-black" style={{ color: "#1a1510" }}>
              ככה זה עובד בפועל
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-5 start-0 end-0 h-px hidden md:block"
            style={{ backgroundColor: "#e0d5c5", zIndex: 0 }}
          />
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-start md:items-center text-start md:text-center px-0 md:px-4 py-6 md:py-0 border-b md:border-b-0" style={{ borderColor: "#e0d5c5" }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm font-sans shrink-0 z-10 mb-4"
                style={{ backgroundColor: "#8b5e3c", color: "#f5efe6" }}
              >
                {step.n}
              </div>
              <p className="font-sans font-bold text-sm mb-1" style={{ color: "#1a1510" }}>{step.t}</p>
              <p className="font-sans text-xs leading-snug" style={{ color: "#9a8070" }}>{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FaqC() {
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
    <section className="py-16 md:py-24 px-5 md:px-10" style={{ backgroundColor: "#f0e8d8" }}>
      <div className="max-w-4xl mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase font-bold mb-3" style={{ color: "#8b5e3c" }}>שאלות נפוצות</p>
        <h2 className="font-serif text-3xl font-black mb-10" style={{ color: "#1a1510" }}>
          שאלות שעולות כמעט בכל עבודה
        </h2>
        <div className="space-y-0 divide-y" style={{ borderColor: "#c4a882" }}>
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-right"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-sans font-semibold text-base" style={{ color: "#1a1510" }}>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  style={{ color: "#8b5e3c" }}
                />
              </button>
              {open === i && (
                <p className="pb-5 font-sans text-base leading-relaxed" style={{ color: "#5c4a35" }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FINAL CTA — direct, high-contrast ────────────────────────────────────────
function FinalCtaC() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-10" style={{ backgroundColor: "#2d5a27" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="font-serif text-4xl md:text-5xl font-black leading-tight mb-5 text-balance"
          style={{ color: "#f5efe6", letterSpacing: "-0.02em" }}
        >
          רוצים להבין מה נכון לעשות אצלכם?
        </h2>
        <p className="font-sans text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "rgba(245,239,230,0.8)" }}>
          שלחו תמונה או כמה פרטים ב־WhatsApp, ותקבלו תשובה ברורה אם צריך תיקון, חידוש או התקנה חדשה. בלי ניחושים, בלי סיבובים, ובלי למכור לכם מה שלא צריך.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-sans font-bold text-lg px-10 py-5 rounded-sm transition-all hover:opacity-90 active:scale-[0.98]"
          style={{ backgroundColor: "#f5efe6", color: "#2d5a27" }}
        >
          <MessageCircle size={22} />
          שלחו תמונה ב־WhatsApp
        </a>
        <p className="mt-6 font-sans text-sm" style={{ color: "rgba(245,239,230,0.55)" }}>
          מענה תוך כמה שעות · שנה אחריות על העבודה · שירות במרכז הארץ
        </p>
      </div>
    </section>
  )
}

// ─── ABOUT STRIP ──────────────────────────────────────────────────────────────
function AboutStripC() {
  return (
    <section className="py-14 px-5 md:px-10" style={{ backgroundColor: "#faf6ef", borderTop: "1px solid #e0d5c5" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
        <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
          <Image src="/images/jerico-portrait.jpg" alt="ג׳ריקו" fill className="object-cover" />
        </div>
        <div className="flex-1">
          <p className="font-sans font-bold text-base mb-1" style={{ color: "#1a1510" }}>ג׳ריקו אספינוזה</p>
          <p className="font-sans text-base leading-relaxed" style={{ color: "#5c4a35" }}>
            עלה לישראל עם אמו בגיל 10. את הדרך שלו בעולם העבודה הוא בנה כאן, ובמעל 20 שנות ניסיון פיתח גישה פשוטה: לעבוד מדויק, לדבר ישר, ולתת תוצאה שנראית טוב גם ביום הראשון וגם אחרי.
          </p>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2 font-sans font-bold text-sm border-2 rounded-sm px-5 py-3 transition-colors hover:bg-[#2d5a27] hover:text-[#f5efe6] hover:border-[#2d5a27]"
          style={{ borderColor: "#2d5a27", color: "#2d5a27" }}
        >
          <Phone size={16} />
          צרו קשר
        </a>
      </div>
    </section>
  )
}

function FooterC() {
  return (
    <footer className="py-6 px-5 md:px-10 border-t" style={{ borderColor: "#e0d5c5", backgroundColor: "#faf6ef" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-sm font-sans">
        <span className="font-bold" style={{ color: "#1a1510" }}>ג׳ריקו אספינוזה</span>
        <span style={{ color: "#9a8070" }}>פרקטים · שטיחים · דקים · מרכז הארץ</span>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline" style={{ color: "#2d5a27" }}>
          WhatsApp
        </a>
      </div>
    </footer>
  )
}

export default function ConceptC() {
  return (
    <div dir="rtl" style={{ backgroundColor: "#faf6ef" }}>
      <TopBarC />
      <HeroC />
      <ProblemC />
      <WhyC />
      <GalleryC />
      <TestimonialsC />
      <ProcessC />
      <FaqC />
      <AboutStripC />
      <FinalCtaC />
      <FooterC />
    </div>
  )
}
