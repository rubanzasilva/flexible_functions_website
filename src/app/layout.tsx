import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flexible Functions - Industrial Research & Development AI Lab',
  description: 'Building practical AI use cases using state-of-the-art machine learning systems in different domains.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}