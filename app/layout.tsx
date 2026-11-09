import type { ReactNode } from 'react'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ru" className="bg-[#0c0e14]">
      <head>
        <meta charSet="utf-8" />
        <title>Volk Casino официальный сайт — вход, рабочее зеркало Волк казино онлайн</title>
        <meta
          name="description"
          content="Volk Casino официальный сайт и рабочее зеркало Волк казино. Играйте онлайн в лучшие слоты, получайте бонус 225% + 1000 FS за регистрацию, моментальный вывод выигрышей."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://volk-casino-official.site/" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#ea1935" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Volk Casino официальный сайт — Волк казино зеркало и вход" />
        <meta
          property="og:description"
          content="Официальный сайт Volk Casino: актуальное рабочее зеркало Волк казино, бонусы за регистрацию 225% + 1000 FS, турниры и моментальные выплаты."
        />
        <meta property="og:url" content="https://volk-casino-official.site/" />
        <meta property="og:image" content="/images/volk-hero-banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Volk Casino официальный сайт | Волк казино онлайн" />
        <meta
          name="twitter:description"
          content="Играть в Volk Casino через рабочее зеркало Волк казино. Лицензионные слоты, бонус 225% + 1000 FS, честная игра."
        />
        <meta name="twitter:image" content="/images/volk-hero-banner.png" />
      </head>
      <body className="antialiased bg-[#0c0e14] text-[#f0f2f5] min-h-screen">
        {children}
      </body>
    </html>
  )
}
