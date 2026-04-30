import React from 'react'
import {EarthIcon} from '@/assets/icons/icons'
import Button from '../atoms/Button'

export default function Navbar() {
  return (
    <div className='bg-white flex justify-between items-center ds-text-primary !p-5'>
     {/* first section */}
        <div className='flex flex-row gap-2'>
            <span> <EarthIcon /></span>
            <span>Language Detect</span>
        </div>
        {/* //////////////////// */}
        {/* second section */}
            <div className='flex gap-2 items-center'>
               <div className='flex gap-3 border-1 !p-2 rounded-3xl'>
                <span ><Button className='!px-3 rounded-2xl'>EN</Button></span>
                <span><Button variant='ghost' >AR</Button></span>

            </div>
            <span className='border-1 border-primary rounded-lg !p-2 '>starts</span>
        </div>
        {/* ///////////////// */}
    </div>
  )
}
