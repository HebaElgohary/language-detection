import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'
import { ReactNode } from 'react'

export default function PublicLayout({children}:{children:ReactNode}) {
  return (
    <div>
        <Navbar />
        <div className='ds-container flex-col min-h-screen '>
        {children}
        </div>
        <Footer />
    </div>
  )
}
