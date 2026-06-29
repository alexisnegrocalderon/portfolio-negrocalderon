import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-negrocalderon.vercel.app'),
  title: 'Alexis Negro Calderón | Brand Powering Designer',
  description: 'Transformo ideas en identidades digitales que no solo se ven bien, sino que cuentan una historia auténtica y generan impacto.',
  keywords: ['Web Design', 'Branding', 'UX/UI', 'Landing Pages', 'Startups'],
  openGraph: {
    title: 'Alexis Negro Calderón | Brand Powering Designer',
    description: 'Experiencias web inmersivas que destacan tu marca',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
