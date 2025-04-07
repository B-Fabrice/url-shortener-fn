import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const bitly = localFont({
  src: [
    {
      path: '../fonts/bitly-regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/bitly-medium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/bitly-semi-bold.woff',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../fonts/bitly-bold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/bitly-heavy.woff',
      weight: '800',
      style: 'normal'
    }
  ],
  variable: '--font-bitly',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  preload: true
})


export const metadata: Metadata = {
  title: 'Url Shortener',
  description: 'A simple url shortener app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${bitly.className}`}
      >
        {children}
      </body>
    </html>
  )
}
