import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flexible Functions - Industrial Research & Development AI Lab',
  description: 'Building practical AI use cases using state-of-the-art machine learning systems in different domains.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
          {children}
        </div>
      </body>
    </html>
  )
}