import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Sarah Johnson | Web Developer & Designer',
  description: 'I create beautiful, functional websites that help businesses grow. Explore my portfolio of web development and design projects.',
}

export const viewport: Viewport = {
  themeColor: '#2570b8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${_inter.variable} ${_spaceGrotesk.variable} font-sans antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
