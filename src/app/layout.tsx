import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavItems from '../components/ui/navbar'
import { ThemeProvider } from '../components/ui/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatApp',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider

          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex'>
            <div className="w-1/8">
              <NavItems />
            </div>
            <div className="w-7/8">
              {children}
            </div>
          </div>

        </ThemeProvider>
      </body>
    </html>
  )
}
