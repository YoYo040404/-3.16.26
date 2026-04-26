import { getWhatsAppUrl } from "@/lib/contact"
import { SERVICES } from "@/lib/services"

export const metadata = {
  title: "שירותים | ג׳ריקו אספינוזה",
  description: "עמוד שירותים מרכזי: פרקטים, דמוי פרקט, שטיחים מקיר לקיר, תיקונים, דקים וחידוש דקים.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f2e9] px-4 py-12 text-[#1f1811] md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <a href="/" className="text-sm font-semibold underline underline-offset-4">
            חזרה לדף הבית
          </a>
          <h1 className="mt-4 font-serif text-4xl font-black">שירותים</h1>
          <p className="mt-3 max-w-3xl text-[#4f3b2b]">
            התקנות ותיקונים של פרקטים, שטיחים ודקים במרכז הארץ, השפלה והשרון. העבודה מתבצעת על ידי ג׳ריקו בעצמו, עם מענה מהיר ושנה אחריות על העבודה.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.slug} className="rounded-lg border border-[#dbcab3] bg-white p-5">
              <h2 className="text-xl font-bold">{service.title}</h2>
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
                  דברו עם ג׳ריקו
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
