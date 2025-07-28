import Footer from '@/components/Footer'
import Header from '@/components/Header'
import './globals.css'
import { Special_Gothic_Expanded_One } from 'next/font/google'

const specialGothic = Special_Gothic_Expanded_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={specialGothic.className}>
        <Header />
        
        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}