import type { Metadata } from 'next'
import { Syne, DM_Mono, Instrument_Serif } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  title: 'Muhammad Hassan Sheikh — SQA Engineer',
  description:
    'Detail-oriented SQA Engineer specializing in manual testing, API testing, Firebase, and mobile QA. Islamabad, Pakistan.',
  keywords: [
    'SQA Engineer',
    'Software Testing',
    'Quality Assurance',
    'API Testing',
    'Postman',
    'Firebase',
    'Mobile QA',
    'Islamabad',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmMono.variable} ${instrumentSerif.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}