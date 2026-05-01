import React from 'react'
import { useTranslations } from 'next-intl'
export default function ErrorCard({error}:any) {
  const t=useTranslations('errorCard')
  console.log(' in error card',error)
  return (
    <div className='w-full !my-14 md:w-150 !mx-auto text-sm md:text-lg h-25 flex items-center border-red-800 border-1 rounded-2xl  ds-bg-secondary-200 ds-text-secondary !p-5'>
  <span className='w-5 h-5 !p-5 text-lg md:text-xl  !mx-2 flex justify-center items-center  rounded-full border border-red-800 '>!</span>{error && t('p')}
    </div>
  )
}
