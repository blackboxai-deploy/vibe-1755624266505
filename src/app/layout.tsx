import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello World | Simple Greeting Page',
  description: 'A clean and modern Hello World page built with Next.js and Tailwind CSS',
  keywords: ['hello world', 'next.js', 'tailwind css', 'modern design'],
  authors: [{ name: 'Developer' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} antialiased h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`}>
        <main className="min-h-full">
          {children}
        </main>
      </body>
    </html>
  )
}