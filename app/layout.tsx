import type { Metadata } from 'next'
import { Heebo, Frank_Ruhl_Libre } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
})

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ['hebrew', 'latin'],
  variable: '--font-frank-ruhl',
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "ג'ריקו אספינוזה — פרקטים, שטיחים ודקים במרכז הארץ",
  description: "ג'ריקו אספינוזה מבצע התקנות, תיקונים וחידוש של פרקטים, שטיחים ודקים במרכז הארץ — עם מעל 20 שנות ניסיון, שנה אחריות על העבודה, ומענה תוך כמה שעות.",
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${frankRuhl.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
