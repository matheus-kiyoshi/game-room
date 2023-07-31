import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Game Room',
  description: 'Your Online Game Room',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">{children}</body>
    </html>
  )
}
