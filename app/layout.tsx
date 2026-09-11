import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Royal Route Travel & Tours | Explore Pakistan',
  description:
    'Your Adventure, Our Responsibility! Book curated tours across Kashmir, Naran Kaghan, Hunza and Skardu with Royal Route Travel & Tours. Luxury coasters, expert guides, safe family trips.',
  generator: 'v0.app',
  keywords: [
    'Pakistan tours',
    'Kashmir tour',
    'Hunza tour',
    'Naran Kaghan',
    'Skardu tour',
    'Royal Route Travel',
  ],
  verification: {
    google: 'QIg97dPgb6eR4muK0l2fzmm-D-py9ZnAmGM5kEC-7c8', // Search Console verification tag
  },
 icons: {
  icon: '/images/logo.png',
  apple: '/images/logo.png',
},
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2f6b47',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${inter.variable} ${bricolage.variable}`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <WhatsappFab />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
