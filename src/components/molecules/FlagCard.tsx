import React from 'react'
import Images from '../atoms/Images'

export default function FlagCard({lang}:{lang:string}) {
  return (
    <div className='flex flex-col md:flex-row border gap-3 border-dotted rounded-xl w-full md:w-150 !mx-auto !p-3 justify-start !my-11'>
        <div className='w-1/3'>
   <Images src={'vercel.svg'}  alt='flg image' width={40} height={40} />

        </div>
    <div className='flex flex-col   '>
        <span className='text-lg font-semibold '>Detected Language</span>
        <span>{lang}</span>

    </div>

    </div>
  )
}
