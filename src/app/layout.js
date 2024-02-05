import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Mysql CRUD with NextJS',
  description: 'Generated by create next app',
}

export default function RootLayout({children}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main> {children} </main> 
        <Footer />      
      </body>
    </html>
  )
}
