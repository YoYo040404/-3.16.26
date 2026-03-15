"use client"

import Image from "next/image"
import { MessageCircle, ChevronDown, ArrowLeft } from "lucide-react"
import { useState } from "react"

const WA_LINK = "https://wa.me/972000000000?text=שלום%20ג׳ריקו%2C%20שלחתי%20תמונה%20לבדיקה"

// Concept B: Tactile, material, craft-driven
// Dark charcoal + warm parchment + wood accents
// Full-bleed imagery, overlapping text, raw edges, heavy typography
// Sections feel like pages of a craftsman's portfolio

function WhatsAppBtn({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 font-sans font-bold text-base tracking-wide transition-all hover:opacity-90 active:scale-[0.98] ${className}`}
    >
      <MessageCircle size={20} className="shrink-0" />
      {children}
    </a>
  )
}

// ─── HERO — full bleed, text overlaid on dark image ──────────────────────────
function HeroB() {
  return (
    <section className="relative min-h-screen flex flex-col" style={{ backgroundColor: "#1a1510" }}>
      {/* Nav */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-10 py-6">
        <div className="font-serif text-xl font-bold tracking-tight" style={{ color: "#f5efe6" }}>
          ג׳ריקו אספינוזה
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm font-semibold border rounded-sm px-4 py-2 transition-colors hover:bg-white/10"
          style={{ color: "#f5efe6", borderColor: "rgba(245,239,230,0.3)" }}
        >
          WhatsApp
        </a>
      </header>

      {/* Full-bleed hero image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-parquet.jpg"
          alt="פרקט עץ מותקן בצורה מדויקת"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay — bottom-heavy so text is readable */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(20,15,8,0.97) 0%, rgba(20,15,8,0.5) 55%, rgba(20,15,8,0.15) 100%)" }}
        />
      </div>

      {/* Hero text — bottom-anchored */}
      <div className="relative z-10 mt-auto px-6 md:px-10 pb-16 md:pb-24">
        {/* Stamp */}
        <div
          className="inline-block font-sans text-xs tracking-widest uppercase font-bold px-3 py-1.5 mb-8 rounded-sm"
          style={{ backgroundColor: "#8b5e3c", color: "#f5efe6" }}
        >
          מרכז הארץ · 20+ שנות ניסיון
        </div>

        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-black leading-none text-balance mb-8 max-w-4xl"
          style={{ color: "#f5efe6", letterSpacing: "-0.02em" }}
        >
          פרקטים, שטיחים ודקים עושים עם מי שיודע לעבוד מדויק
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="font-sans text-base leading-relaxed max-w-xl" style={{ color: "rgba(245,239,230,0.75)" }}>
            ג׳ריקו אספינוזה מבצע התקנות, תיקונים וחידוש של פרקטים, שטיחים ודקים במרכז הארץ — עם מעל 20 שנות ניסיון, שנה אחריות על העבודה, ומענה תוך כמה שעות.
          </p>
          <WhatsAppBtn
            className="shrink-0 px-7 py-4 rounded-sm"
            style={{
              backgroundColor: "#2d5a27",
              color: "#f5efe6",
            } as React.CSSProperties}
          >
            שלחו תמונה ב־WhatsApp
          </WhatsAppBtn>
        </div>

        <p className="mt-5 font-sans text-sm" style={{ color: "rgba(245,239,230,0.5)" }}>
          נגיד לכם ישר אם צריך תיקון, חידוש או התקנה חדשה.
        </p>
      </div>
    </section>
  )
}

// ─── PROOF STRIP ──────────────────────────────────────────────────────────────
function ProofStripB() {
  return (
    <div
      className="py-4 px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-sans font-bold tracking-widest uppercase"
      style={{ backgroundColor: "#8b5e3c", color: "#f5efe6" }}
    >
      <span>20+ שנות ניסיון</span>
      <span style={{ opacity: 0.4 }}>×</span>
      <span>שנה אחריות</span>
      <span style={{ opacity: 0.4 }}>×</span>
      <span>מענה תוך כמה שעות</span>
    </div>
  )
}

// ─── PROBLEM — dark section, dense typography ─────────────────────────────────
function ProblemB() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: "#1a1510", color: "#f5efe6" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase font-bold mb-6" style={{ color: "#8b5e3c" }}>
              הבעיה
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight text-balance" style={{ letterSpacing: "-0.02em" }}>
              הבעיה בדרך כלל לא מתחילה בחומר. היא מתחילה בביצוע.
            </h2>
          </div>
          <div className="space-y-6 pt-2 md:pt-16">
            <p className="font-sans text-base leading-relaxed" style={{ color: "rgba(245,239,230,0.85)" }}>
              אפשר לבחור פרקט יפה, שטיח טוב או דק מתאים — אבל אם העבודה לא מדויקת, רואים את זה מהר מאוד.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: "rgba(245,239,230,0.6)" }}>
              חיבורים לא נקיים, קווים שלא יושבים נכון, גימור לא מדויק, בלגן בשטח או עבודה שנראית טוב רק ביום הראשון — אלה בדיוק הדברים שאנשים מנסים להימנע מהם.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: "rgba(245,239,230,0.6)" }}>
              ובמקרים אחרים בכלל לא ברור מה נכון לעשות: לתקן, לחדש או להחליף. כשאין מי שיגיד את זה ישר, קל מאוד להיכנס להוצאה מיותרת.
            </p>
            <p
              className="font-serif text-xl font-bold border-r-4 pr-5 pt-2 pb-2"
              style={{ borderColor: "#8b5e3c", color: "#f5efe6" }}
            >
              בדיוק כאן נכנסת יד מקצועית שמבינה עבודה — ולא רק מוכרת עבודה.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SOLUTION — parchment, full-width image left, text right ──────────────────
function SolutionB() {
  return (
    <section style={{ backgroundColor: "#f0e8d8" }}>
      {/* Wide image */}
      <div className="relative h-72 md:h-96 w-full">
        <Image
          src="/images/fishbone-parquet.jpg"
          alt="פרקט פישבון"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to left, #f0e8d8 0%, transparent 60%)" }} />
        <div className="absolute bottom-8 left-8 md:left-16">
          <span
            className="font-serif text-2xl md:text-3xl font-black"
            style={{ color: "#1a1510" }}
          >
            כשעובדים מדויק,<br />גם התוצאה נראית אחרת
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <p className="font-sans text-base leading-relaxed mb-12 max-w-2xl" style={{ color: "#3d2f20" }}>
          ג׳ריקו אספינוזה לא מגיע רק כדי ״לעשות עבודה״. הוא מגיע כדי להבין מה נכון לעשות בשטח, להסביר ישר מה האפשרויות, ולבצע בצורה נקייה, מדויקת ומסודרת.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              label: "ניסיון אמיתי",
              text: "מעל 20 שנות ניסיון בעבודה עם פרקטים, שטיחים ודקים — מהתקנות חדשות ועד תיקונים, חידוש ועבודות גמר שדורשות יד מקצועית.",
            },
            {
              label: "עבודה אישית",
              text: "עובד בעצמו, וכשצריך מביא צוות בהתאם לסוג העבודה — כדי לשמור על רמת ביצוע גבוהה ולא להפוך כל עבודה ל׳פס ייצור׳.",
            },
            {
              label: "גם בחומרים",
              text: "אם צריך, עוזר גם בבחירת חומרים ובהבנה מה באמת מתאים לחלל, לתקציב ולתוצאה שרוצים להגיע אליה.",
            },
          ].map((item) => (
            <div key={item.label}>
              <div
                className="w-8 h-1 mb-5 rounded-full"
                style={{ backgroundColor: "#8b5e3c" }}
              />
              <p className="font-sans font-bold text-sm uppercase tracking-widest mb-3" style={{ color: "#8b5e3c" }}>
                {item.label}
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: "#3d2f20" }}>{item.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 font-serif text-xl font-bold" style={{ color: "#1a1510" }}>
          המטרה היא פשוטה: לתת עבודה שנראית טוב, יושבת נכון, ומחזיקה כמו שצריך.
        </p>
      </div>
    </section>
  )
}

// ─── ABOUT — portrait large, text alongside ────────────────────────────────
function AboutB() {
  return (
    <section style={{ backgroundColor: "#1a1510" }} className="py-20 md:py-0 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2">
        {/* Portrait */}
        <div className="relative h-80 md:h-auto md:min-h-[600px] order-1">
          <Image
            src="/images/jerico-portrait.jpg"
            alt="ג׳ריקו אספינוזה"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: "linear-gradient(to top, #1a1510 0%, transparent 60%)" }}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 md:px-14 py-16 order-2">
          <p className="font-sans text-xs tracking-widest uppercase font-bold mb-6" style={{ color: "#8b5e3c" }}>
            קצת על ג׳ריקו
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight mb-8 text-balance" style={{ color: "#f5efe6", letterSpacing: "-0.02em" }}>
            מקצוע שנבנה כאן, על הרצפה
          </h2>
          <p className="font-sans text-base leading-relaxed mb-4" style={{ color: "rgba(245,239,230,0.8)" }}>
            ג׳ריקו אספינוזה עלה לישראל עם אמו בגיל 10 וגדל כאן. את הדרך שלו בעולם העבודה הוא בנה בארץ, וביותר מ־20 שנות ניסיון פיתח גישה פשוטה: לעבוד מדויק, לדבר ישר, ולתת תוצאה שנראית טוב גם ביום הראשון וגם אחרי.
          </p>
          <p className="font-sans text-base leading-relaxed mb-10" style={{ color: "rgba(245,239,230,0.55)" }}>
            היום הוא מבצע עבודות פרקט, שטיחים ודקים במרכז הארץ, עם מעורבות אישית בכל עבודה וירידה לפרטים שחשובים באמת.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 border-t pt-8" style={{ borderColor: "rgba(245,239,230,0.12)" }}>
            {[
              { n: "20+", l: "שנות ניסיון" },
              { n: "שנה", l: "אחריות" },
              { n: "כמה שעות", l: "מענה" },
            ].map((s) => (
              <div key={s.n}>
                <p className="font-serif text-2xl md:text-3xl font-black" style={{ color: "#8b5e3c" }}>{s.n}</p>
                <p className="font-sans text-xs mt-1" style={{ color: "rgba(245,239,230,0.5)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── GALLERY — mosaic ─────────────────────────────────────────────────────────
function GalleryB() {
  return (
    <section style={{ backgroundColor: "#f0e8d8" }} className="py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase font-bold mb-2" style={{ color: "#8b5e3c" }}>
              עבודות
            </p>
            <h2 className="font-serif text-3xl font-black" style={{ color: "#1a1510" }}>
              העבודה בשטח מדברת
            </h2>
          </div>
          <ArrowLeft size={24} style={{ color: "#8b5e3c" }} />
        </div>

        {/* Asymmetric mosaic */}
        <div className="grid grid-cols-12 grid-rows-2 gap-2 h-96 md:h-[500px]">
          <div className="col-span-7 row-span-2 relative rounded-sm overflow-hidden">
            <Image src="/images/hero-parquet.jpg" alt="פרקט" fill className="object-cover" />
          </div>
          <div className="col-span-5 row-span-1 relative rounded-sm overflow-hidden">
            <Image src="/images/fishbone-parquet.jpg" alt="פרקט פישבון" fill className="object-cover" />
          </div>
          <div className="col-span-2 row-span-1 relative rounded-sm overflow-hidden">
            <Image src="/images/parquet-repair.jpg" alt="תיקון פרקט" fill className="object-cover" />
          </div>
          <div className="col-span-3 row-span-1 relative rounded-sm overflow-hidden">
            <Image src="/images/deck-installation.jpg" alt="דק" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS — large quote style ─────────────────────────────────────────
function TestimonialsB() {
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
    <section style={{ backgroundColor: "#1a1510" }} className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-sans text-xs tracking-widest uppercase font-bold mb-14" style={{ color: "#8b5e3c" }}>
          מה אומרים לקוחות
        </p>
        <div className="space-y-16">
          {testimonials.map((t, i) => (
            <div key={i} className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
              <div className="md:col-span-1">
                <span className="font-serif text-4xl font-black" style={{ color: "#8b5e3c" }}>״</span>
              </div>
              <div className="md:col-span-8">
                <p className="font-serif text-2xl md:text-3xl font-bold leading-snug text-balance" style={{ color: "#f5efe6" }}>
                  {t.text}
                </p>
              </div>
              <div className="md:col-span-3 flex flex-col gap-1 md:pt-2">
                <p className="font-sans font-bold text-sm" style={{ color: "rgba(245,239,230,0.9)" }}>{t.name}, {t.location}</p>
                <p className="font-sans text-sm" style={{ color: "rgba(245,239,230,0.4)" }}>{t.work}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROCESS — numbered list on parchment ─────────────────────────────────────
function ProcessB() {
  const steps = [
    { n: "01", t: "שולחים תמונה", d: "שולחים תמונה או פרטים ב־WhatsApp ומקבלים מענה תוך כמה שעות." },
    { n: "02", t: "בודקים בשטח", d: "בודקים מה נכון לעשות לפי המצב — תיקון, חידוש או התקנה חדשה." },
    { n: "03", t: "מקבלים הצעה ברורה", d: "מקבלים הסבר ברור והצעת עבודה מסודרת, בלי לסבך ובלי למכור מה שלא צריך." },
    { n: "04", t: "ביצוע מדויק", d: "קובעים עבודה ומבצעים בצורה מדויקת, נקייה ומסודרת — עם תשומת לב לגימור, לחיבורים ולתוצאה הסופית." },
    { n: "05", t: "תוצאה + אחריות", d: "בסיום מקבלים עבודה שנראית טוב, יושבת נכון, וכוללת שנה אחריות על העבודה." },
  ]

  return (
    <section style={{ backgroundColor: "#f0e8d8" }} className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-14">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase font-bold mb-4" style={{ color: "#8b5e3c" }}>
              תהליך
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-black leading-tight text-balance" style={{ color: "#1a1510" }}>
              ככה זה עובד בפועל
            </h2>
          </div>
          <div className="md:col-span-2 space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 py-6 border-b" style={{ borderColor: "rgba(26,21,16,0.12)" }}>
                <span className="col-span-2 font-sans font-bold text-sm" style={{ color: "#8b5e3c" }}>{step.n}</span>
                <div className="col-span-10">
                  <p className="font-sans font-bold text-base mb-1" style={{ color: "#1a1510" }}>{step.t}</p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#5c4a35" }}>{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FaqB() {
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
    <section style={{ backgroundColor: "#1a1510" }} className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase font-bold mb-10" style={{ color: "#8b5e3c" }}>
          שאלות נפוצות
        </p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(245,239,230,0.08)" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ backgroundColor: "#1a1510" }} className="p-1">
              <button
                className="w-full p-5 flex items-start justify-between gap-4 text-right transition-colors hover:bg-white/5 rounded-sm"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-sans font-bold text-base" style={{ color: "#f5efe6" }}>{faq.q}</span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 mt-0.5 transition-transform ${open === i ? "rotate-180" : ""}`}
                  style={{ color: "#8b5e3c" }}
                />
              </button>
              {open === i && (
                <p className="px-5 pb-5 font-sans text-sm leading-relaxed" style={{ color: "rgba(245,239,230,0.6)" }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FINAL CTA ────────────────────────────────────────────────────────────────
function FinalCtaB() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#f0e8d8" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight text-balance mb-6" style={{ color: "#1a1510", letterSpacing: "-0.02em" }}>
            רוצים להבין מה נכון לעשות אצלכם?
          </h2>
          <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "#5c4a35" }}>
            שלחו תמונה או כמה פרטים ב־WhatsApp, ותקבלו תשובה ברורה. בלי ניחושים, בלי סיבובים, ובלי למכור לכם מה שלא צריך.
          </p>
          <WhatsAppBtn
            className="px-8 py-4 rounded-sm"
            style={{ backgroundColor: "#2d5a27", color: "#f5efe6" } as React.CSSProperties}
          >
            שלחו תמונה ב־WhatsApp
          </WhatsAppBtn>
          <p className="mt-5 font-sans text-sm" style={{ color: "#8b5e3c" }}>
            מענה תוך כמה שעות · שנה אחריות · מרכז הארץ
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
          <Image src="/images/deck-installation.jpg" alt="דק עץ" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}

function FooterB() {
  return (
    <footer style={{ backgroundColor: "#1a1510", borderTopColor: "rgba(245,239,230,0.1)" }} className="border-t py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-sans">
        <span className="font-bold" style={{ color: "#f5efe6" }}>ג׳ריקו אספינוזה</span>
        <span style={{ color: "rgba(245,239,230,0.4)" }}>פרקטים, שטיחים ודקים — מרכז הארץ</span>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "#8b5e3c" }} className="font-bold hover:underline">
          WhatsApp
        </a>
      </div>
    </footer>
  )
}

export default function ConceptB() {
  return (
    <div dir="rtl">
      <HeroB />
      <ProofStripB />
      <ProblemB />
      <SolutionB />
      <AboutB />
      <GalleryB />
      <TestimonialsB />
      <ProcessB />
      <FaqB />
      <FinalCtaB />
      <FooterB />
    </div>
  )
}
