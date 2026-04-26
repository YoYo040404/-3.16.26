import { notFound } from "next/navigation"
import { getWhatsAppUrl } from "@/lib/contact"
import { getServiceBySlug, SERVICES } from "@/lib/services"

type PageProps = {
  params: Promise<{ slug: string }>
}

const C = {
  charcoal: "#1a1510",
  parchment: "#f0e8d8",
  cream: "#f5efe6",
  woodBrown: "#8b5e3c",
  deepGreen: "#2d5a27",
  warmGray: "#5c4a35",
} as const

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "שירות לא נמצא | ג׳ריקו אספינוזה",
      description: "העמוד המבוקש לא נמצא.",
    }
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <main style={{ backgroundColor: C.charcoal, color: C.cream }}>
      <section className="border-b" style={{ borderColor: "rgba(139,94,60,0.35)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <nav className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(245,239,230,0.62)" }}>
            <a href="/" className="hover:opacity-100 opacity-80">בית</a>
            <span>•</span>
            <a href="/services" className="hover:opacity-100 opacity-80">שירותים</a>
            <span>•</span>
            <span className="opacity-90">{service.title}</span>
          </nav>

          <h1 className="mt-7 font-serif text-4xl md:text-6xl font-black leading-tight max-w-4xl">{service.h1}</h1>
          <p className="mt-5 max-w-3xl text-base md:text-lg leading-relaxed" style={{ color: "rgba(245,239,230,0.78)" }}>
            {service.subtitle}
          </p>
          <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed" style={{ color: "rgba(245,239,230,0.62)" }}>
            {service.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl(`שלום ג׳ריקו, אשמח לבדוק אפשרות ל${service.title}. מצורפות תמונות של השטח.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm px-5 py-3 font-bold"
              style={{ backgroundColor: C.deepGreen, color: C.cream }}
            >
              התחילו בוואטסאפ
            </a>
            <a
              href="/services"
              className="inline-flex items-center rounded-sm border px-5 py-3 font-bold"
              style={{ borderColor: "rgba(245,239,230,0.25)", color: C.cream }}
            >
              לכל השירותים
            </a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: C.parchment }} className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid gap-4 lg:grid-cols-2">
          <article className="rounded-sm border p-6 md:p-8" style={{ borderColor: "rgba(139,94,60,0.28)", backgroundColor: "rgba(245,239,230,0.5)" }}>
            <p className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: C.woodBrown }}>מה השירות כולל</p>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: C.warmGray }}>
              {service.description}
            </p>
            {service.includes && service.includes.length > 0 ? (
              <ul className="mt-5 space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="text-sm leading-relaxed border-r-2 pr-3" style={{ borderColor: "rgba(139,94,60,0.35)", color: C.warmGray }}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>

          {service.suitableFor && service.suitableFor.length > 0 ? (
            <article className="rounded-sm border p-6 md:p-8" style={{ borderColor: "rgba(139,94,60,0.28)", backgroundColor: "rgba(245,239,230,0.5)" }}>
              <p className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: C.woodBrown }}>למי זה מתאים</p>
              <ul className="space-y-2">
                {service.suitableFor.map((item) => (
                  <li key={item} className="text-sm leading-relaxed border-r-2 pr-3" style={{ borderColor: "rgba(139,94,60,0.35)", color: C.warmGray }}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ) : (
            <article className="rounded-sm border p-6 md:p-8" style={{ borderColor: "rgba(139,94,60,0.28)", backgroundColor: "rgba(245,239,230,0.5)" }}>
              <p className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: C.woodBrown }}>למה לבחור בג׳ריקו</p>
              <ul className="space-y-2">
                {service.trustPoints.map((point) => (
                  <li key={point} className="text-sm leading-relaxed border-r-2 pr-3" style={{ borderColor: "rgba(139,94,60,0.35)", color: C.warmGray }}>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid gap-4 lg:grid-cols-2">
          <article className="rounded-sm border p-6 md:p-8" style={{ borderColor: "rgba(139,94,60,0.35)", backgroundColor: "rgba(61,47,32,0.35)" }}>
            <h2 className="font-serif text-2xl font-black mb-4">נקודות אמון</h2>
            <ul className="space-y-2">
              {service.trustPoints.map((point) => (
                <li key={point} className="text-sm leading-relaxed" style={{ color: "rgba(245,239,230,0.78)" }}>
                  • {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-sm border p-6 md:p-8" style={{ borderColor: "rgba(139,94,60,0.35)", backgroundColor: "rgba(61,47,32,0.35)" }}>
            <h2 className="font-serif text-2xl font-black mb-4">תהליך קצר</h2>
            <ol className="space-y-2">
              {service.process.map((step, index) => (
                <li key={step} className="text-sm leading-relaxed" style={{ color: "rgba(245,239,230,0.78)" }}>
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      {service.faq && service.faq.length > 0 ? (
        <section style={{ backgroundColor: C.parchment }} className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl font-black mb-6" style={{ color: C.charcoal }}>
              שאלות נפוצות על השירות
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {service.faq.map((item) => (
                <details key={item.question} className="rounded-sm border p-4" style={{ borderColor: "rgba(139,94,60,0.3)", backgroundColor: "rgba(245,239,230,0.55)" }}>
                  <summary className="cursor-pointer font-bold" style={{ color: C.charcoal }}>{item.question}</summary>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.warmGray }}>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-14 md:py-16" style={{ backgroundColor: C.parchment }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 rounded-sm border p-6 md:p-10" style={{ borderColor: "rgba(139,94,60,0.35)", backgroundColor: "rgba(61,47,32,0.9)" }}>
          <h2 className="font-serif text-3xl font-black" style={{ color: C.cream }}>
            {service.ctaLabel}
          </h2>
          <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed" style={{ color: "rgba(245,239,230,0.72)" }}>
            שלחו תמונות של השטח עם עיר וסוג העבודה, ותקבלו מענה תוך כמה שעות. אם צריך — מתאמים בדיקה וממשיכים בצורה מסודרת.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl(`שלום ג׳ריקו, אשמח לבדוק אפשרות ל${service.title}. מצורפות תמונות של השטח.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm px-5 py-3 font-bold"
              style={{ backgroundColor: C.deepGreen, color: C.cream }}
            >
              שלחו הודעה בוואטסאפ
            </a>
            <a
              href="/services"
              className="rounded-sm border px-5 py-3 font-bold"
              style={{ borderColor: "rgba(245,239,230,0.3)", color: C.cream }}
            >
              חזרה לכל השירותים
            </a>
            <a
              href="/"
              className="rounded-sm border px-5 py-3 font-bold"
              style={{ borderColor: "rgba(245,239,230,0.3)", color: C.cream }}
            >
              חזרה לדף הבית
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
