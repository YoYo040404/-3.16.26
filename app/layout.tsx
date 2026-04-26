import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
