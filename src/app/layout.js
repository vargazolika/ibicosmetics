import { Inter } from 'next/font/google'
import '../../style/index.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ibi kozmetika',
  description: 'kozmetika',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
