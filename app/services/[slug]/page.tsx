import { notFound } from "next/navigation"
import { getWhatsAppUrl } from "@/lib/contact"
import { getServiceBySlug, SERVICES } from "@/lib/services"

type PageProps = {
  params: Promise<{ slug: string }>
}

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
    <main className="min-h-screen bg-[#f7f2e9] px-4 py-12 text-[#1f1811] md:px-6">
      <div className="mx-auto max-w-4xl space-y-10">
        <nav className="flex flex-wrap gap-4 text-sm font-semibold">
          <a href="/" className="underline underline-offset-4">
            בית
          </a>
          <a href="/services" className="underline underline-offset-4">
            שירותים
          </a>
          <a href="#contact" className="underline underline-offset-4">
            יצירת קשר
          </a>
        </nav>

        <header className="space-y-4">
          <h1 className="font-serif text-4xl font-black leading-tight md:text-5xl">{service.h1}</h1>
          <p className="text-lg text-[#4f3b2b]">{service.subtitle}</p>
          <p className="text-[#4f3b2b]">{service.intro}</p>
        </header>

        <section className="rounded-xl border border-[#dbcab3] bg-white p-6">
          <h2 className="text-2xl font-bold">מה כולל השירות?</h2>
          <p className="mt-3 text-[#4f3b2b]">{service.description}</p>
          {service.includes && service.includes.length > 0 ? (
            <ul className="mt-4 list-disc space-y-2 pr-5 text-[#3f3125]">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>

        {service.suitableFor && service.suitableFor.length > 0 ? (
          <section className="rounded-xl border border-[#dbcab3] bg-white p-6">
            <h2 className="text-2xl font-bold">למי זה מתאים?</h2>
            <ul className="mt-4 list-disc space-y-2 pr-5 text-[#3f3125]">
              {service.suitableFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="rounded-xl border border-[#dbcab3] bg-white p-6">
          <h2 className="text-2xl font-bold">נקודות אמון</h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {service.trustPoints.map((point) => (
              <li key={point} className="rounded-md bg-[#f4ece0] px-3 py-2 text-sm">
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-[#dbcab3] bg-white p-6">
          <h2 className="text-2xl font-bold">תהליך קצר</h2>
          <ol className="mt-4 space-y-2">
            {service.process.map((step, index) => (
              <li key={step} className="rounded-md bg-[#f4ece0] px-3 py-2 text-sm">
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </section>

        {service.faq && service.faq.length > 0 ? (
          <section className="rounded-xl border border-[#dbcab3] bg-white p-6">
            <h2 className="text-2xl font-bold">שאלות נפוצות</h2>
            <div className="mt-4 space-y-3">
              {service.faq.map((item) => (
                <details key={item.question} className="rounded-md border border-[#e2d5c3] p-3">
                  <summary className="cursor-pointer font-semibold">{item.question}</summary>
                  <p className="mt-2 text-sm text-[#4f3b2b]">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        <section id="contact" className="rounded-xl bg-[#1f1811] p-6 text-[#f5efe6]">
          <h2 className="text-2xl font-bold">{service.ctaLabel}</h2>
          <p className="mt-3 text-sm text-[#d8c8b7]">שלחו תמונות של השטח עם עיר וסוג העבודה, וקבלו מענה תוך כמה שעות.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl(`שלום ג׳ריקו, אשמח לבדוק אפשרות ל${service.title}. מצורפות תמונות של השטח.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#2d5a27] px-4 py-3 font-bold"
            >
              התחילו בוואטסאפ
            </a>
            <a href="/services" className="rounded-md border border-[#d8c8b7] px-4 py-3 font-bold">
              לכל השירותים
            </a>
            <a href="/" className="rounded-md border border-[#d8c8b7] px-4 py-3 font-bold">
              חזרה לדף הבית
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
