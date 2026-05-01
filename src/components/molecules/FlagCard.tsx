import React from 'react'
import Images from '../atoms/Images'
import { useTranslations } from 'next-intl'

export default function FlagCard({lang}:{lang:string}) {
      const t=useTranslations('langCard')
    
  return (
    <div className='flex flex-col md:flex-row border gap-3 border-dotted rounded-xl w-full md:w-150 !mx-auto !p-3 justify-start !my-11'>
        <div className='w-1/3'>
   <Images src={'vercel.svg'}  alt='flg image' width={40} height={40} />

        </div>
    <div className='flex flex-col   '>
        <span className='text-lg font-semibold '>{t('title')}</span>
        <span>{lang && t('lang')}</span>

    </div>

    </div>
  )
}
