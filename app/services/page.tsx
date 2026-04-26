import { getWhatsAppUrl } from "@/lib/contact"
import { SERVICES } from "@/lib/services"

export const metadata = {
  title: "שירותים | ג׳ריקו אספינוזה",
  description: "עמוד שירותים מרכזי: פרקטים, דמוי פרקט, שטיחים מקיר לקיר, תיקונים, דקים וחידוש דקים.",
}

const C = {
  charcoal: "#1a1510",
  parchment: "#f0e8d8",
  cream: "#f5efe6",
  woodBrown: "#8b5e3c",
  deepGreen: "#2d5a27",
  warmGray: "#5c4a35",
} as const

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: C.charcoal, color: C.cream }}>
      <section className="relative overflow-hidden border-b" style={{ borderColor: "rgba(139,94,60,0.35)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 20% 0%, rgba(139,94,60,0.25), transparent 55%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(245,239,230,0.6)" }}>
            <span>מרכז הארץ</span>
            <span>•</span>
            <span>שנה אחריות</span>
            <span>•</span>
            <span>20+ שנות ניסיון</span>
          </div>

          <h1 className="mt-6 font-serif text-4xl md:text-6xl font-black leading-tight max-w-4xl">
            שירותים מקצועיים לפרקטים, שטיחים ודקים
          </h1>

          <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed" style={{ color: "rgba(245,239,230,0.78)" }}>
            כל השירותים במקום אחד, באותה שפה מקצועית וישירה. ג׳ריקו מבצע את העבודה בעצמו, עם דגש על גימור מדויק, סדר בשטח ומענה מהיר.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm px-5 py-3 font-sans font-bold"
              style={{ backgroundColor: C.deepGreen, color: C.cream }}
            >
              שלחו תמונות בוואטסאפ
            </a>
            <a
              href="/"
              className="rounded-sm border px-5 py-3 font-sans text-sm font-bold"
              style={{ borderColor: "rgba(245,239,230,0.25)", color: C.cream }}
            >
              חזרה לדף הבית
            </a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: C.parchment }} className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service) => (
              <article
                key={service.slug}
                className="group rounded-sm border p-6 md:p-7 transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: "rgba(139,94,60,0.28)", backgroundColor: "rgba(245,239,230,0.55)" }}
              >
                <p className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: C.woodBrown }}>
                  שירות
                </p>
                <h2 className="font-serif text-2xl font-black leading-tight" style={{ color: C.charcoal }}>
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: C.warmGray }}>
                  {service.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={`/services/${service.slug}`}
                    className="rounded-sm border px-4 py-2 text-sm font-bold"
                    style={{ borderColor: "rgba(139,94,60,0.45)", color: C.charcoal }}
                  >
                    לעמוד השירות
                  </a>
                  <a
                    href={getWhatsAppUrl(`שלום ג׳ריקו, אשמח לקבל פרטים על ${service.title}. מצורפות תמונות של השטח.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm px-4 py-2 text-sm font-bold"
                    style={{ backgroundColor: C.deepGreen, color: C.cream }}
                  >
                    דברו עם ג׳ריקו
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
