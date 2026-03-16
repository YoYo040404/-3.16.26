"use client"

import Image from "next/image"
import { MessageCircle, ChevronDown, Phone } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const WA_LINK = "https://wa.me/972000000000?text=שלום%20ג׳ריקו%2C%20שלחתי%20תמונה%20לבדיקה"

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
    ? `${base} px-8 py-4 rounded-lg`
    : `${base} px-6 py-3 border-2 rounded-lg`

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={styles}
      style={variant === "primary" 
        ? { backgroundColor: C.deepGreen, color: C.cream, borderRadius: "18px" }
        : { borderColor: C.woodBrown, color: C.woodBrown, borderRadius: "18px" }
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

// ─── SERVICE STRIP MARQUEE ────────────────────────────────────────────────────
function ServiceMarquee() {
  const services = [
    "התקנות פרקט",
    "תיקוני פרקט",
    "שטיחים מקיר לקיר",
    "הדבקות ומתיחות שטיחים",
    "פרקט רגיל, פישבון ותלת־שכבתי",
    "חידוש והתקנת דקים",
  ]

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  const marqueeStyle = prefersReducedMotion ? {} : {
    animation: 'marquee 60s linear infinite',
  }

  return (
    <div 
      className="relative w-full overflow-hidden py-3 md:py-4"
      style={{ backgroundColor: C.woodBrown }}
      onMouseEnter={(e) => {
        if (!prefersReducedMotion) {
          const marquee = e.currentTarget.querySelector('[data-marquee]') as HTMLElement
          if (marquee) marquee.style.animationPlayState = 'paused'
        }
      }}
      onMouseLeave={(e) => {
        if (!prefersReducedMotion) {
          const marquee = e.currentTarget.querySelector('[data-marquee]') as HTMLElement
          if (marquee) marquee.style.animationPlayState = 'running'
        }
      }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(0); }
          }
        }
      `}</style>
      <div 
        data-marquee
        className="flex whitespace-nowrap gap-8 md:gap-12"
        style={marqueeStyle}
      >
        {[...services, ...services].map((service, i) => (
          <span
            key={i}
            className="font-sans text-xs md:text-sm font-bold tracking-wide shrink-0"
            style={{ color: C.cream }}
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  const [isPaused, setIsPaused] = useState(false)
  return (
    <section className="relative min-h-screen flex flex-col" style={{ backgroundColor: C.charcoal }}>
      {/* Nav — minimal, transparent */}
      <header className="relative z-30 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="font-serif text-xl font-bold tracking-tight" style={{ color: C.cream }}>
          ג׳ריקו אספינוזה
        </div>
        <a
          href={`tel:+972000000000`}
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
      <div className="relative z-10 mt-auto px-6 md:px-12 pb-8 md:pb-12">
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-balance mb-6 md:mb-8 max-w-4xl"
          style={{ color: C.cream, letterSpacing: "-0.025em" }}
        >
          פרקטים, שטיחים ודקים עם הבנה נכונה של השטח וביצוע מדויק
        </h1>

        <p
          className="font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-10 md:mb-12"
          style={{ color: "rgba(245,239,230,0.75)" }}
        >
          ג׳ריקו אספינוזה מבצע עבודות פרקט, שטיחים ודקים במרכז הארץ — בגישה מקצועית, מדויקת וישירה.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mb-10 md:mb-12">
          <WhatsAppCTA variant="primary" />
          <p className="font-sans text-sm" style={{ color: "rgba(245,239,230,0.5)" }}>
            שלחו תמונה ותקבלו תשובה ברורה אם נכון לתקן, לחדש או להחליף.
          </p>
        </div>

        {/* Trust row — static with separators */}
        <div className="flex flex-wrap justify-start gap-4 md:gap-6 items-center">
          {["20+ שנות ניסיון", "שנה אחריות על העבודה", "שירות במרכז הארץ"].map((item, i, arr) => (
            <span key={i} className="flex items-center gap-4 md:gap-6">
              <span
                className="font-sans text-xs md:text-sm font-bold tracking-wide"
                style={{ color: "rgba(245,239,230,0.7)" }}
              >
                {item}
              </span>
              {i < arr.length - 1 && (
                <span style={{ color: "rgba(245,239,230,0.2)" }}>·</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Service strip marquee — replaces old proof strip */}
      <ServiceMarquee />
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROBLEM — Asymmetric 2-column, headline huge on left, pain points stacked right
// Border accent runs vertically
// ═══════════════════════════════════════════════════════════════════════════════
function Problem() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12" style={{ backgroundColor: C.charcoal }}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p
          className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold mb-8 md:mb-10"
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
            <div className="space-y-5 pt-2">
              <p className="font-sans text-base md:text-lg leading-relaxed" style={{ color: "rgba(245,239,230,0.9)" }}>
                אפשר לבחור פרקט יפה, שטיח טוב או דק מתאים — אבל כשהעבודה לא מתבצעת כמו שצריך, רואים את זה מהר מאוד.
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: "rgba(245,239,230,0.7)" }}>
                חיבורים לא נקיים, קווים שלא יושבים נכון, גימור לא מדויק, בלגן בשטח או פתרון שלא באמת מתאים למצב — אלה בדיוק הדברים שאנשים מנסים להימנע מהם.
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: "rgba(245,239,230,0.7)" }}>
                ובמקרים אחרים בכלל לא ברור מה נכון לעשות: לתקן, לחדש או להחליף. כשאין מי שמסתכל על השטח ואומר את הדברים בצורה ברורה, קל להיכנס להוצאה מיותרת או לעבודה שלא פותרת את הבעיה.
              </p>
            </div>

            {/* Transition line — styled as pull quote */}
            <div className="mt-8 pt-8 border-t" style={{ borderColor: "rgba(139,94,60,0.2)" }}>
              <p
                className="font-serif text-xl md:text-2xl font-bold leading-snug"
                style={{ color: C.cream }}
              >
                כאן בדיוק נכנסת יד מקצועית שמבינה עבודה — ולא רק באה לבצע.
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
      label: "מעורבות אישית",
      text: "ג׳ריקו מעורב אישית בכל עבודה, וכשצריך מביא צוות בהתאם לסוג העבודה — כדי לשמור על רמת ביצוע גבוהה ועל שליטה בפרטים.",
    },
    {
      label: "גם בהחלטה, לא רק בביצוע",
      text: "כשצריך, הוא מסייע גם להבין מה באמת נכון לעשות: תיקון, חידוש, החלפה או בחירת חומר שמתאים לחלל, לתקציב ולתוצאה שרוצים להגיע אליה.",
    },
  ]

  return (
    <section style={{ backgroundColor: C.parchment }}>
      {/* Full-width image with text overlay */}
      <div className="relative h-64 sm:h-80 md:h-[450px] w-full overflow-hidden rounded-lg" style={{ borderRadius: "18px", margin: "0 auto", maxWidth: "100%" }}>
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
            כשמבינים את השטח נכון, גם התוצאה נראית אחרת
          </h2>
        </div>
      </div>

      {/* Content below */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-18 md:py-28">
        <p
          className="font-sans text-base md:text-lg leading-relaxed mb-16 max-w-3xl"
          style={{ color: C.darkWarm }}
        >
          ג׳ריקו אספינוזה לא מגיע רק לבצע עבודה. הוא מגיע להבין מה נכון לעשות בשטח, להסביר בצורה ברורה מה האפשרויות, ולבצע את העבודה בצורה מסודרת, מדויקת ונקייה.
        </p>

        {/* 3-column points — each with wood-brown line accent */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mb-14">
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
          className="font-serif text-xl md:text-2xl font-bold max-w-2xl"
          style={{ color: C.charcoal }}
        >
          המטרה בעבודה כזאת היא אחת: לבצע עבודה שיושבת נכון ומחזיקה לאורך זמן.
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
        <div className="relative h-80 sm:h-96 lg:h-auto lg:min-h-[550px] lg:col-span-5 order-1 rounded-lg overflow-hidden" style={{ borderRadius: "18px" }}>
          <Image
            src="/images/jerico-portrait.jpg"
            alt="ג׳ריקו אספינוזה — ההנדסאי"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0 lg:hidden"
            style={{ background: `linear-gradient(to top, ${C.charcoal} 0%, transparent 50%)` }}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-14 lg:py-20 lg:col-span-7 order-2">
          <p
            className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold mb-6"
            style={{ color: C.woodBrown }}
          >
            ג׳ריקו אספינוזה
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] mb-8 text-balance"
            style={{ color: C.cream, letterSpacing: "-0.02em" }}
          >
            מקצוע שנבנה כאן, על הרצפה
          </h2>
          <p className="font-sans text-base leading-relaxed mb-4" style={{ color: "rgba(245,239,230,0.85)" }}>
            ג׳ריקו אספינוזה בנה את המקצוע שלו בישראל לאורך יותר מ־20 שנה, עם גישה פשוטה ועקבית: לעבוד מדויק, לדבר ברור, ולתת תוצאה שנראית טוב גם ביום הראשון וגם בהמשך.
          </p>
          <p className="font-sans text-base leading-relaxed mb-12" style={{ color: "rgba(245,239,230,0.65)" }}>
            היום הוא מבצע עבודות פרקט, שטיחים ודקים במרכז הארץ, עם מעורבות אישית בכל עבודה וירידה לפרטים שחשובים באמת.
          </p>

          {/* Stats row — improved alignment */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 border-t pt-10" style={{ borderColor: "rgba(245,239,230,0.15)" }}>
            {[
              { n: "20+", l: "שנות ניסיון" },
              { n: "שנה", l: "אחריות על העבודה" },
              { n: "מרכז הארץ", l: "אזור השירות" },
            ].map((s) => (
              <div key={s.n}>
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-black leading-tight" style={{ color: C.woodBrown }}>{s.n}</p>
                <p className="font-sans text-xs mt-2 leading-tight" style={{ color: "rgba(245,239,230,0.6)" }}>{s.l}</p>
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
    <section style={{ backgroundColor: C.parchment }} className="py-18 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold mb-2"
              style={{ color: C.woodBrown }}
            >
              עבודות
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black" style={{ color: C.charcoal }}>
              תמונות מעבודות שבוצעו בשטח
            </h2>
          </div>
          <p className="hidden sm:block font-sans text-sm" style={{ color: C.warmGray }}>
            בסוף, את ההבדל רואים בעיניים
          </p>
        </div>

        {/* Intro — removed from here, integrated in header */}

        {/* Asymmetric mosaic grid */}
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {/* Large — spans 7 cols, 2 rows */}
          <div className="col-span-12 sm:col-span-7 row-span-2 relative aspect-[4/3] sm:aspect-auto sm:h-[420px] md:h-[520px] rounded-lg overflow-hidden" style={{ borderRadius: "18px" }}>
            <Image src="/images/hero-parquet.jpg" alt="רמת גן — פרקט בסלון ובחדרים — התקנת פרקט" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6" style={{ background: "linear-gradient(to top, rgba(26,21,16,0.8), transparent)" }}>
              <p className="font-sans text-xs md:text-sm font-bold" style={{ color: C.cream }}>רמת גן — פרקט בסלון ובחדרים</p>
            </div>
          </div>
          {/* Top right — fishbone */}
          <div className="col-span-6 sm:col-span-5 relative aspect-[3/2] sm:aspect-auto sm:h-[208px] md:h-[258px] rounded-lg overflow-hidden" style={{ borderRadius: "18px" }}>
            <Image src="/images/fishbone-parquet.jpg" alt="פתח תקווה — פרקט פישבון בחדר שינה — התקנה" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4" style={{ background: "linear-gradient(to top, rgba(26,21,16,0.8), transparent)" }}>
              <p className="font-sans text-[10px] md:text-xs font-bold" style={{ color: C.cream }}>פתח תקווה — פרקט פישבון בחדר שינה</p>
            </div>
          </div>
          {/* Bottom right — deck */}
          <div className="col-span-6 sm:col-span-5 relative aspect-[3/2] sm:aspect-auto sm:h-[208px] md:h-[258px] rounded-lg overflow-hidden" style={{ borderRadius: "18px" }}>
            <Image src="/images/deck-installation.jpg" alt="הרצליה — התקנת דק בחצר — עבודה חיצונית" fill className="object-cover" />
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
      quote:
        "ג׳ריקו עשה לנו פרקט בסלון ובחדרים. הגיע בזמן, עבד מסודר, לא השאיר בלגן. העבודה יצאה יפה מאוד. ממליץ בחום.",
      name: "דני כ.",
      location: "רמת גן",
      project: "התקנת פרקט בסלון ובחדרים",
    },
    {
      quote:
        "חיפשנו מישהו לשטיח במשרד. ג׳ריקו הגיע, נתן מחיר הוגן ועשה את העבודה תוך יום. מקצועי ונעים לעבוד איתו.",
      name: "מיכל ר.",
      location: "תל אביב",
      project: "התקנת שטיח במשרד",
    },
    {
      quote:
        "עשינו איתו פרקט פישבון בחדר השינה. לא האמנו שייצא כל כך יפה. רואים שיש לו ידיים של אומן.",
      name: "יוסי ואורית מ.",
      location: "פתח תקווה",
      project: "התקנת פרקט פישבון בחדר שינה",
    },
  ]

  return (
    <section style={{ backgroundColor: C.charcoal }} className="py-18 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p
          className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold mb-12 md:mb-16"
          style={{ color: C.woodBrown }}
        >
          מה אומרים לקוחות
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black mb-14 md:mb-20 max-w-3xl" style={{ color: C.cream }}>
          לקוחות מדברים על אותה נקודה: סדר, דיוק ותוצאה שנראית נכון
        </h2>

        <div className="space-y-14 md:space-y-20">
          {testimonials.map((t, i) => (
            <div key={i} className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              {/* Quote mark */}
              <div className="lg:col-span-1">
                <span className="font-serif text-5xl md:text-6xl font-black leading-none" style={{ color: C.woodBrown }}>״</span>
              </div>
              {/* Quote text */}
              <div className="lg:col-span-7">
                <p
                  className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-balance"
                  style={{ color: C.cream }}
                >
                  {t.quote}
                </p>
              </div>
              {/* Attribution */}
              <div className="lg:col-span-4 flex flex-col gap-2 lg:pt-2 lg:border-r lg:pr-6" style={{ borderColor: "rgba(139,94,60,0.3)" }}>
                <p className="font-sans font-bold text-sm" style={{ color: "rgba(245,239,230,0.9)" }}>
                  {t.name}, {t.location}
                </p>
                <p className="font-sans text-sm" style={{ color: "rgba(245,239,230,0.5)" }}>{t.project}</p>
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
    { n: "01", t: "שולחים תמונה", d: "שולחים תמונה או כמה פרטים ב־WhatsApp, כדי להבין במה מדובר." },
    { n: "02", t: "בודקים מה נכון לעשות", d: "בודקים לפי המצב בשטח אם נכון לבצע תיקון, חידוש או התקנה חדשה." },
    { n: "03", t: "מקבלים הסבר מסודר", d: "מקבלים תשובה ברורה והצעת עבודה מסודרת, בלי לסבך ובלי להמליץ על מה שלא צריך." },
    { n: "04", t: "מבצעים בצורה מדויקת", d: "קובעים עבודה ומבצעים בצורה נקייה, מדויקת ומסודרת — עם תשומת לב לגימור, לחיבורים ולתוצאה הסופית." },
    { n: "05", t: "מסיימים כמו שצריך", d: "בסיום מקבלים עבודה שיושבת נכון, נראית נכון וכוללת שנה אחריות על העבודה." },
  ]

  return (
    <section style={{ backgroundColor: C.parchment }} className="py-18 md:py-28">
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
              תהליך עבודה ברור ומסודר.
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
                  <p className="font-sans font-bold text-base mb-2" style={{ color: C.charcoal }}>{step.t}</p>
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
      a: "כן. ג׳ריקו עובד באזור המרכז.",
    },
    {
      q: "אפשר לפנות גם על תיקון קטן, או רק על עבודה גדולה?",
      a: "אפשר לפנות גם על תיקונים נקודתיים וגם על עבודות גדולות יותר.",
    },
    {
      q: "אתם עובדים גם עם שטיחים, או רק עם פרקטים?",
      a:
        "כן. העבודה כוללת גם שטיחים מקיר לקיר, הדבקות ומתיחות שטיחים, לצד עבודות פרקט ודקים.",
    },
    {
      q: "אתם גם עוזרים להבין מה נכון לעשות?",
      a:
        "כן. חלק חשוב מהעבודה הוא להבין אם נכון לתקן, לחדש או להחליף — לפי מה שבאמת מתאים למצב בשטח.",
    },
    {
      q: "יש אחריות על העבודה?",
      a: "כן. יש שנה אחריות על העבודה.",
    },
    {
      q: "איך מתחילים?",
      a: "שולחים תמונה או כמה פרטים ב־WhatsApp, ומשם ממשיכים בצורה מסודרת.",
    },
  ]

  return (
    <section style={{ backgroundColor: C.charcoal }} className="py-18 md:py-28 px-6 md:px-12">
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

        <div className="grid md:grid-cols-2 gap-px rounded-lg overflow-hidden" style={{ backgroundColor: "rgba(245,239,230,0.08)", borderRadius: "18px" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ backgroundColor: C.charcoal }} className="p-1">
              <button
                className="w-full p-5 flex items-start justify-between gap-4 text-right transition-colors hover:bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
                style={{ focusRingColor: C.woodBrown }}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-sans font-bold text-sm md:text-base text-left" style={{ color: C.cream }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 mt-1 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  style={{ color: C.woodBrown }}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="px-5 pb-5 font-sans text-sm leading-relaxed" style={{ color: "rgba(245,239,230,0.7)" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 font-sans text-sm" style={{ color: "rgba(245,239,230,0.5)" }}>
          יש שאלה שלא מופיעה כאן? שלחו הודעה ותקבלו תשובה ברורה, בלי להסתבך.
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
    <section style={{ backgroundColor: C.parchment }} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] text-balance mb-8"
              style={{ color: C.charcoal, letterSpacing: "-0.02em" }}
            >
              רוצים להבין מה נכון לעשות אצלכם?
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed mb-10 max-w-xl" style={{ color: C.warmGray }}>
              שלחו תמונה או כמה פרטים ב־WhatsApp, ותקבלו תשובה ברורה אם נכון לתקן, לחדש או להחליף. בלי ניחושים, בלי סיבובים, ובלי למכור לכם מה שלא צריך.
            </p>
            <WhatsAppCTA variant="primary" />
            <p className="mt-8 font-sans text-sm" style={{ color: C.warmGray }}>
              שנה אחריות על העבודה · שירות במרכז הארץ · 20+ שנות ניסיון
            </p>
          </div>

          {/* Image accent */}
          <div className="relative h-64 sm:h-80 lg:h-[400px] rounded-lg overflow-hidden" style={{ borderRadius: "18px" }}>
            <Image
              src="/images/parquet-repair.jpg"
              alt="פרקט מחודש — עבודה מקצועית"
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
