import type { Metadata } from 'next'
import { React } from 'react'
import { Inter } from 'next/font/google'


import './globals.css'

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sigmoid AI',
  description: 'AI Platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          {children}
        </body>
      </html>

  )
}
