"use client"

import Image from "next/image"
import { MessageCircle, ChevronDown, Phone } from "lucide-react"
import { useState } from "react"
import { CONTACT, getWhatsAppUrl } from "@/lib/contact"

// ═══════════════════════════════════════════════════════════════════════════════
// Concept B: Tactile, Material, Craft-Driven
// Dark charcoal (#1a1510) + warm parchment (#f0e8d8) + wood-brown (#8b5e3c)
// Each section = unique grid, unique rhythm, unique visual weight
// ═══════════════════════════════════════════════════════════════════════════════

// ─── COLORS ───────────────────────────────────────────────────────────────────
const C = {
  charcoal: "#1a1510",
  parchment: "#f0e8d8",
  cream: "#f5efe6",
  woodBrown: "#8b5e3c",
  deepGreen: "#2d5a27",
  warmGray: "#5c4a35",
  darkWarm: "#3d2f20",
} as const

// ─── WHATSAPP BUTTON ──────────────────────────────────────────────────────────
function WhatsAppCTA({ variant = "primary" }: { variant?: "primary" | "outline" }) {
  const base = "inline-flex items-center gap-3 font-sans font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
  const styles = variant === "primary"
    ? `${base} px-8 py-4 rounded-sm`
    : `${base} px-6 py-3 border-2 rounded-sm`

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={styles}
      style={variant === "primary" 
        ? { backgroundColor: C.deepGreen, color: C.cream }
        : { borderColor: C.woodBrown, color: C.woodBrown }
      }
    >
      <MessageCircle size={20} className="shrink-0" />
      שלחו תמונה ב־WhatsApp
    </a>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// HERO — Full viewport, image bleeds, text overlaid bottom-left
// Diagonal crop on image, stamp floats top-right
// ═══════════════════════════════════════════════════════════════════════════════
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col" style={{ backgroundColor: C.charcoal }}>
      {/* Nav — minimal, transparent */}
      <header className="relative z-30 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="font-serif text-xl font-bold tracking-tight" style={{ color: C.cream }}>
          ג׳ריקו אספינוזה
        </div>
        <a
          href={`tel:${CONTACT.whatsappNumber}`}
          className="flex items-center gap-2 font-sans text-sm font-semibold border rounded-sm px-4 py-2 transition-colors hover:bg-white/10"
          style={{ color: C.cream, borderColor: "rgba(245,239,230,0.25)" }}
        >
          <Phone size={14} />
          <span className="hidden sm:inline">צרו קשר</span>
        </a>
      </header>

      {/* Hero image — full bleed with heavy gradient */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-parquet.jpg"
          alt="פרקט עץ מותקן בצורה מדויקת"
          fill
          className="object-cover"
          priority
        />
        {/* Heavy gradient — legible text is critical */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to top,
              ${C.charcoal} 0%,
              rgba(26,21,16,0.95) 25%,
              rgba(26,21,16,0.6) 50%,
              rgba(26,21,16,0.2) 100%
            )`
          }}
        />
      </div>

      {/* Floating stamp — top right on desktop */}
      <div className="absolute top-24 left-6 md:top-28 md:left-auto md:right-12 z-20">
        <div
          className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold px-4 py-2 rounded-sm"
          style={{ backgroundColor: C.woodBrown, color: C.cream }}
        >
          מרכז הארץ · 20+ שנות ניסיון
        </div>
      </div>

      {/* Hero content — bottom anchored */}
      <div className="relative z-10 mt-auto px-6 md:px-12 pb-12 md:pb-20">
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-balance mb-8 max-w-4xl"
          style={{ color: C.cream, letterSpacing: "-0.025em" }}
        >
          פרקטים, שטיחים ודקים עושים עם מי שיודע לעבוד מדויק
        </h1>

        <p
          className="font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-10"
          style={{ color: "rgba(245,239,230,0.75)" }}
        >
          ג׳ריקו אספינוזה מבצע התקנות, תיקונים וחידוש של פרקטים, שטיחים ודקים במרכז הארץ — עם מעל 20 שנות ניסיון, שנה אחריות על העבודה, ומענה תוך כמה שעות.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <WhatsAppCTA variant="primary" />
          <p className="font-sans text-sm" style={{ color: "rgba(245,239,230,0.5)" }}>
            נגיד לכם ישר אם צריך תיקון, חידוש או התקנה חדשה.
          </p>
        </div>
      </div>

      {/* Proof strip — sticks to bottom */}
      <div
        className="relative z-10 py-4 px-6 md:px-12 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2"
        style={{ backgroundColor: C.woodBrown }}
      >
        {["מעל 20 שנות ניסיון", "שנה אחריות על העבודה", "מענה תוך כמה שעות"].map((item, i) => (
          <span
            key={i}
            className="font-sans text-xs md:text-sm font-bold tracking-wide"
            style={{ color: C.cream }}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROBLEM — Asymmetric 2-column, headline huge on left, pain points stacked right
// Border accent runs vertically
// ═══════════════════════════════════════════════════════════════════════════════
function Problem() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12" style={{ backgroundColor: C.charcoal }}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p
          className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold mb-8 md:mb-12"
          style={{ color: C.woodBrown }}
        >
          הבעיה
        </p>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left — massive headline */}
          <div className="lg:col-span-5">
            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] text-balance"
              style={{ color: C.cream, letterSpacing: "-0.02em" }}
            >
              הבעיה בדרך כלל לא מתחילה בחומר. היא מתחילה בביצוע.
            </h2>
          </div>

          {/* Right — pain points with border accent */}
          <div className="lg:col-span-7 lg:border-r-2 lg:pr-12" style={{ borderColor: "rgba(139,94,60,0.3)" }}>
            <div className="space-y-6 pt-2">
              <p className="font-sans text-base md:text-lg leading-relaxed" style={{ color: "rgba(245,239,230,0.9)" }}>
                אפשר לבחור פרקט יפה, שטיח טוב או דק מתאים — אבל אם העבודה לא מדויקת, רואים את זה מהר מאוד.
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: "rgba(245,239,230,0.6)" }}>
                חיבורים לא נקיים, קווים שלא יושבים נכון, גימור לא מדויק, בלגן בשטח או עבודה שנראית טוב רק ביום הראשון — אלה בדיוק הדברים שאנשים מנסים להימנע מהם.
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: "rgba(245,239,230,0.6)" }}>
                ובמקרים אחרים בכלל לא ברור מה נכון לעשות: לתקן, לחדש או להחליף. כשאין מי שיגיד את זה ישר, קל מאוד להיכנס להוצאה מיותרת או לפתרון לא נכון.
              </p>
            </div>

            {/* Transition line — styled as pull quote */}
            <div className="mt-10 pt-8 border-t" style={{ borderColor: "rgba(139,94,60,0.2)" }}>
              <p
                className="font-serif text-xl md:text-2xl font-bold leading-snug"
                style={{ color: C.cream }}
              >
                בדיוק כאן נכנסת יד מקצועית שמבינה עבודה — ולא רק מוכרת עבודה.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// SOLUTION — Parchment bg, image with overlaid headline, 3-col points below
// Completely different grid from Problem
// ═══════════════════════════════════════════════════════════════════════════════
function Solution() {
  const points = [
    {
      label: "ניסיון אמיתי",
      text: "מעל 20 שנות ניסיון בעבודה עם פרקטים, שטיחים ודקים — מהתקנות חדשות ועד תיקונים, חידוש ועבודות גמר שדורשות יד מקצועית.",
    },
    {
      label: "עבודה אישית",
      text: "עובד בעצמו, וכשצריך מביא צוות בהתאם לסוג העבודה — כדי לשמור על רמת ביצוע גבוהה ולא להפוך כל עבודה ל״פס ייצור״.",
    },
    {
      label: "גם בחומרים",
      text: "אם צריך, עוזר גם בבחירת חומרים ובהבנה מה באמת מתאים לחלל, לתקציב ולתוצאה שרוצים להגיע אליה.",
    },
  ]

  return (
    <section style={{ backgroundColor: C.parchment }}>
      {/* Full-width image with text overlay */}
      <div className="relative h-64 sm:h-80 md:h-[450px] w-full overflow-hidden">
        <Image
          src="/images/fishbone-parquet.jpg"
          alt="פרקט פישבון"
          fill
          className="object-cover"
        />
        {/* Gradient overlay for text */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${C.parchment} 0%, rgba(240,232,216,0.3) 50%, transparent 100%)`
          }}
        />
        <div className="absolute inset-0 flex items-end p-6 md:p-12">
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] max-w-lg"
            style={{ color: C.charcoal, letterSpacing: "-0.02em" }}
          >
            כשעובדים מדויק, גם התוצאה נראית אחרת
          </h2>
        </div>
      </div>

      {/* Content below */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <p
          className="font-sans text-base md:text-lg leading-relaxed mb-14 max-w-3xl"
          style={{ color: C.darkWarm }}
        >
          ג׳ריקו אספינוזה לא מגיע רק כדי ״לעשות עבודה״. הוא מגיע כדי להבין מה נכון לעשות בשטח, להסביר ישר מה האפשרויות, ולבצע בצורה נקייה, מדויקת ומסודרת.
        </p>

        {/* 3-column points — each with wood-brown line accent */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {points.map((item) => (
            <div key={item.label}>
              <div className="w-10 h-[3px] mb-5" style={{ backgroundColor: C.woodBrown }} />
              <p
                className="font-sans font-bold text-xs tracking-[0.2em] uppercase mb-3"
                style={{ color: C.woodBrown }}
              >
                {item.label}
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: C.darkWarm }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p
          className="mt-14 font-serif text-xl md:text-2xl font-bold max-w-2xl"
          style={{ color: C.charcoal }}
        >
          המטרה היא פשוטה: לתת עבודה שנראית טוב, יושבת נכון, ומחזיקה כמו שצריך.
        </p>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// ABOUT — Portrait massive, text alongside, stats below
// Grid: 7/5 split, portrait bleeds edge
// ═══════════════════════════════════════════════════════════════════════════════
function About() {
  return (
    <section style={{ backgroundColor: C.charcoal }} className="overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12">
        {/* Portrait — full height on desktop */}
        <div className="relative h-80 sm:h-96 lg:h-auto lg:min-h-[650px] lg:col-span-5 order-1">
          <Image
            src="/images/jerico-portrait.jpg"
            alt="ג׳ריקו אספינוזה"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0 lg:hidden"
            style={{ background: `linear-gradient(to top, ${C.charcoal} 0%, transparent 50%)` }}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-24 lg:col-span-7 order-2">
          <p
            className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold mb-6"
            style={{ color: C.woodBrown }}
          >
            קצת על ג׳ריקו
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] mb-8 text-balance"
            style={{ color: C.cream, letterSpacing: "-0.02em" }}
          >
            מקצוע שנבנה כאן, על הרצפה
          </h2>
          <p className="font-sans text-base leading-relaxed mb-4" style={{ color: "rgba(245,239,230,0.85)" }}>
            ג׳ריקו אספינוזה עלה לישראל עם אמו בגיל 10 וגדל כאן. את הדרך שלו בעולם העבודה הוא בנה בארץ, וביותר מ־20 שנות ניסיון פיתח גישה פשוטה: לעבוד מדויק, לדבר ישר, ולתת תוצאה שנראית טוב גם ביום הראשון וגם אחרי.
          </p>
          <p className="font-sans text-base leading-relaxed mb-12" style={{ color: "rgba(245,239,230,0.55)" }}>
            היום הוא מבצע עבודות פרקט, שטיחים ודקים במרכז הארץ, עם מעורבות אישית בכל עבודה וירידה לפרטים שחשובים באמת.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 border-t pt-10" style={{ borderColor: "rgba(245,239,230,0.1)" }}>
            {[
              { n: "20+", l: "שנות ניסיון" },
              { n: "שנה", l: "אחריות" },
              { n: "כמה שעות", l: "מענה" },
            ].map((s) => (
              <div key={s.n}>
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-black" style={{ color: C.woodBrown }}>{s.n}</p>
                <p className="font-sans text-xs mt-1" style={{ color: "rgba(245,239,230,0.5)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// GALLERY — Asymmetric mosaic, parchment background
// Different aspect ratios, different weights
// ═══════════════════════════════════════════════════════════════════════════════
function Gallery() {
  return (
    <section style={{ backgroundColor: C.parchment }} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p
              className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold mb-2"
              style={{ color: C.woodBrown }}
            >
              עבודות
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black" style={{ color: C.charcoal }}>
              העבודה בשטח מדברת
            </h2>
          </div>
          <p className="hidden sm:block font-sans text-sm" style={{ color: C.warmGray }}>
            תמונות מעבודות אמיתיות
          </p>
        </div>

        {/* Intro */}
        <p
          className="font-sans text-base leading-relaxed mb-10 max-w-2xl"
          style={{ color: C.warmGray }}
        >
          בסוף, אנשים רואים את ההבדל בעיניים. אבל לפני זה, הם מרגישים אותו בדרך העבודה: עמידה בזמנים, סדר, דיוק, ותוצאה שנראית כמו שצריך.
        </p>

        {/* Asymmetric mosaic grid */}
        <div className="grid grid-cols-12 gap-2 md:gap-3">
          {/* Large — spans 7 cols, 2 rows */}
          <div className="col-span-12 sm:col-span-7 row-span-2 relative aspect-[4/3] sm:aspect-auto sm:h-[400px] md:h-[500px] rounded-sm overflow-hidden">
            <Image src="/images/hero-parquet.jpg" alt="פרקט בסלון ובחדרים — רמת גן" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6" style={{ background: "linear-gradient(to top, rgba(26,21,16,0.8), transparent)" }}>
              <p className="font-sans text-xs md:text-sm font-bold" style={{ color: C.cream }}>רמת גן — פרקט בסלון ובחדרים</p>
            </div>
          </div>
          {/* Top right — fishbone */}
          <div className="col-span-6 sm:col-span-5 relative aspect-[3/2] sm:aspect-auto sm:h-[195px] md:h-[245px] rounded-sm overflow-hidden">
            <Image src="/images/fishbone-parquet.jpg" alt="פרקט פישבון בחדר שינה — פתח תקווה" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4" style={{ background: "linear-gradient(to top, rgba(26,21,16,0.8), transparent)" }}>
              <p className="font-sans text-[10px] md:text-xs font-bold" style={{ color: C.cream }}>פתח תקווה — פרקט פישבון</p>
            </div>
          </div>
          {/* Bottom right — deck */}
          <div className="col-span-6 sm:col-span-5 relative aspect-[3/2] sm:aspect-auto sm:h-[195px] md:h-[245px] rounded-sm overflow-hidden">
            <Image src="/images/deck-installation.jpg" alt="התקנת דק בחצר — הרצליה" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4" style={{ background: "linear-gradient(to top, rgba(26,21,16,0.8), transparent)" }}>
              <p className="font-sans text-[10px] md:text-xs font-bold" style={{ color: C.cream }}>הרצליה — התקנת דק בחצר</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// TESTIMONIALS — Large quote style, dark background
// Each testimonial = full width, quote mark accent
// ═══════════════════════════════════════════════════════════════════════════════
function Testimonials() {
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
    <section style={{ backgroundColor: C.charcoal }} className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p
          className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold mb-14 md:mb-20"
          style={{ color: C.woodBrown }}
        >
          מה אומרים לקוחות
        </p>

        <div className="space-y-16 md:space-y-24">
          {testimonials.map((t, i) => (
            <div key={i} className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              {/* Quote mark */}
              <div className="lg:col-span-1">
                <span className="font-serif text-5xl md:text-6xl font-black leading-none" style={{ color: C.woodBrown }}>״</span>
              </div>
              {/* Quote text */}
              <div className="lg:col-span-8">
                <p
                  className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-balance"
                  style={{ color: C.cream }}
                >
                  {t.text}
                </p>
              </div>
              {/* Attribution */}
              <div className="lg:col-span-3 flex flex-col gap-1 lg:pt-2 lg:border-r lg:pr-6" style={{ borderColor: "rgba(139,94,60,0.3)" }}>
                <p className="font-sans font-bold text-sm" style={{ color: "rgba(245,239,230,0.9)" }}>
                  {t.name}, {t.location}
                </p>
                <p className="font-sans text-sm" style={{ color: "rgba(245,239,230,0.4)" }}>{t.work}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROCESS — Parchment, numbered timeline
// 2-column: header left, steps right
// ═══════════════════════════════════════════════════════════════════════════════
function Process() {
  const steps = [
    { n: "01", t: "שולחים תמונה", d: "שולחים תמונה או פרטים ב־WhatsApp ומקבלים מענה תוך כמה שעות." },
    { n: "02", t: "בודקים מה נכון לעשות", d: "בודקים מה נכון לעשות לפי המצב בשטח — תיקון, חידוש או התקנה חדשה." },
    { n: "03", t: "מקבלים הסבר ברור", d: "מקבלים הסבר ברור והצעת עבודה מסודרת, בלי לסבך ובלי למכור מה שלא צריך." },
    { n: "04", t: "ביצוע מדויק", d: "קובעים עבודה ומבצעים בצורה מדויקת, נקייה ומסודרת — עם תשומת לב לגימור, לחיבורים ולתוצאה הסופית." },
    { n: "05", t: "תוצאה + אחריות", d: "בסיום מקבלים עבודה שנראית טוב, יושבת נכון, וכוללת שנה אחריות על העבודה." },
  ]

  return (
    <section style={{ backgroundColor: C.parchment }} className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — header */}
          <div className="lg:col-span-4">
            <p
              className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold mb-4"
              style={{ color: C.woodBrown }}
            >
              תהליך
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl font-black leading-tight text-balance"
              style={{ color: C.charcoal }}
            >
              ככה זה עובד בפועל
            </h2>
            <p className="mt-8 font-sans text-base leading-relaxed" style={{ color: C.warmGray }}>
              פשוט, ברור, ובלי כאב ראש מיותר.
            </p>
          </div>

          {/* Right — steps */}
          <div className="lg:col-span-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-4 py-6 border-b"
                style={{ borderColor: "rgba(26,21,16,0.1)" }}
              >
                <span className="col-span-2 sm:col-span-1 font-sans font-bold text-sm" style={{ color: C.woodBrown }}>
                  {step.n}
                </span>
                <div className="col-span-10 sm:col-span-11">
                  <p className="font-sans font-bold text-base mb-1" style={{ color: C.charcoal }}>{step.t}</p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: C.warmGray }}>{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// FAQ — Dark, 2-column grid of accordions
// ═══════════════════════════════════════════════════════════════════════════════
function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const faqs = [
    {
      q: "האם אתם עובדים רק במרכז הארץ?",
      a: "כן. ג׳ריקו אספינוזה נותן שירות במרכז הארץ. אם יש עבודה באזור גבולי, אפשר לשלוח מיקום ולקבל תשובה.",
    },
    {
      q: "אפשר לפנות גם על תיקון קטן, או רק על עבודה גדולה?",
      a: "אפשר גם על תיקונים. אם יש נזק נקודתי, בעיה בפרקט, שטיח שצריך מתיחה או תיקון, או משהו שדורש בדיקה — שולחים תמונה ומבינים מה נכון לעשות.",
    },
    {
      q: "אתם גם עוזרים עם חומרים?",
      a: "כן. הביצוע הוא תמיד חלק מרכזי מהעבודה, ובמקרה הצורך אפשר גם לעזור להבין אילו חומרים מתאימים לחלל, לתקציב ולסוג העבודה.",
    },
    {
      q: "תוך כמה זמן מקבלים מענה?",
      a: "בדרך כלל תוך כמה שעות ב־WhatsApp.",
    },
    {
      q: "יש אחריות על העבודה?",
      a: "כן. יש שנה אחריות על העבודה.",
    },
    {
      q: "איך מתחילים?",
      a: "פשוט שולחים תמונה או כמה פרטים ב־WhatsApp, ומקבלים כיוון ראשוני אם מדובר בתיקון, חידוש או התקנה חדשה.",
    },
  ]

  return (
    <section style={{ backgroundColor: C.charcoal }} className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p
          className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold mb-6"
          style={{ color: C.woodBrown }}
        >
          שאלות נפוצות
        </p>
        <h2
          className="font-serif text-2xl sm:text-3xl font-black mb-12"
          style={{ color: C.cream }}
        >
          שאלות שעולות כמעט בכל עבודה
        </h2>

        <div className="grid md:grid-cols-2 gap-px rounded-sm overflow-hidden" style={{ backgroundColor: "rgba(245,239,230,0.08)" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ backgroundColor: C.charcoal }} className="p-1">
              <button
                className="w-full p-5 flex items-start justify-between gap-4 text-right transition-colors hover:bg-white/5 rounded-sm"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-sans font-bold text-sm md:text-base" style={{ color: C.cream }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 mt-0.5 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  style={{ color: C.woodBrown }}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="px-5 pb-5 font-sans text-sm leading-relaxed" style={{ color: "rgba(245,239,230,0.6)" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 font-sans text-sm" style={{ color: "rgba(245,239,230,0.5)" }}>
          יש שאלה שלא מופיעה כאן? שלחו הודעה ותקבלו תשובה ברורה בלי להסתבך.
        </p>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// FINAL CTA — Parchment, big headline, CTA prominent
// ═══════════════════════════════════════════════════════════════════════════════
function FinalCTA() {
  return (
    <section style={{ backgroundColor: C.parchment }} className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] text-balance mb-6"
              style={{ color: C.charcoal, letterSpacing: "-0.02em" }}
            >
              רוצים להבין מה נכון לעשות אצלכם?
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed mb-8" style={{ color: C.warmGray }}>
              שלחו תמונה או כמה פרטים ב־WhatsApp, ותקבלו תשובה ברורה אם צריך תיקון, חידוש או התקנה חדשה. בלי ניחושים, בלי סיבובים, ובלי למכור לכם מה שלא צריך.
            </p>
            <WhatsAppCTA variant="primary" />
            <p className="mt-6 font-sans text-sm" style={{ color: C.warmGray }}>
              מענה תוך כמה שעות | שנה אחריות על העבודה | שירות במרכז הארץ
            </p>
          </div>

          {/* Image accent */}
          <div className="relative h-64 sm:h-80 lg:h-[400px] rounded-sm overflow-hidden">
            <Image
              src="/images/parquet-repair.jpg"
              alt="פרקט מחודש"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// FOOTER — Minimal, dark
// ═══════════════════════════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer style={{ backgroundColor: C.charcoal }} className="py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg font-bold" style={{ color: C.cream }}>
          ג׳ריקו אספינוזה
        </p>
        <p className="font-sans text-xs" style={{ color: "rgba(245,239,230,0.4)" }}>
          פרקטים, שטיחים ודקים עם עבודה מדויקת מהשלב הראשון ועד הגימור.
        </p>
      </div>
    </footer>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════════════════════════════
export default function ConceptB() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <About />
      <Gallery />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
