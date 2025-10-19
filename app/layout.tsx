import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI-on-Auto | AI Automation Experts - Transform Your Business',
  description: 'Leading AI automation experts helping businesses scale with intelligent workflows. Custom AI solutions, n8n automation, and cutting-edge technology integration.',
  keywords: 'AI automation, business automation, n8n workflows, AI consulting, intelligent automation, process optimization',
  authors: [{ name: 'Daniel Allan', url: 'https://ai-on-auto.com' }],
  creator: 'AI-on-Auto',
  publisher: 'AI-on-Auto',
  openGraph: {
    title: 'AI-on-Auto | AI Automation Experts',
    description: 'Transform your business with intelligent AI automation solutions',
    url: 'https://ai-on-auto.com',
    siteName: 'AI-on-Auto',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-on-Auto - AI Automation Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-on-Auto | AI Automation Experts',
    description: 'Transform your business with intelligent AI automation solutions',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}