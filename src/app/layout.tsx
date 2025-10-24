import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Plataforma Solar - Educação Inclusiva',
    template: '%s | Plataforma Solar',
  },
  description: 'Plataforma de educação inclusiva com IA responsável desenvolvida pela parceria USP-ALANA',
  keywords: ['educação inclusiva', 'acessibilidade', 'LGPD', 'IA responsável', 'USP', 'ALANA'],
  authors: [{ name: 'Instituto ALANA & USP' }],
  creator: 'Instituto ALANA & USP',
  publisher: 'Instituto ALANA & USP',
  metadataBase: new URL('https://gruposolar.edu.br'),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gruposolar.edu.br',
    siteName: 'Plataforma Solar',
    title: 'Plataforma Solar - Educação Inclusiva',
    description: 'Plataforma de educação inclusiva com IA responsável',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Plataforma Solar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plataforma Solar - Educação Inclusiva',
    description: 'Plataforma de educação inclusiva com IA responsável',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
