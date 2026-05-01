import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'
import { ReactNode } from 'react'

export default function PublicLayout({children}:{children:ReactNode}) {
  return (
    <div>
        <Navbar />
        <div className='ds-container '>
        {children}
        </div>
        {/* <Footer /> */}
    </div>
  )
}
