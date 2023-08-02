import Footer from './components/Footer/Footer'
import Nav from './components/nav/Nav'
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
      <body className="bg-zinc-900">
        <aside>
          <Nav />
        </aside>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
