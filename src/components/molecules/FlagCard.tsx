import React from 'react'
import Images from '../atoms/Images'
import { useTranslations } from 'next-intl'
import ReactCountryFlag from 'react-country-flag'

export default function FlagCard({lang, code}:{lang:string, code:string}) {
      const t=useTranslations('langCard')
    
  return (
    <div className='flex flex-row md:flex-row border gap-1 border-dotted rounded-xl w-full md:w-150 !mx-auto !p-3  !my-11'>
        <div className='w-1/3 flex items-center justify-center flex-col flex'>
      <ReactCountryFlag countryCode={code} svg style={{ width: '2.5em', height: '2.5em' }} />

        </div>
    <div className='flex flex-col   '>
        <span className='text-md md:text-xl font-semibold '>{t('title')}</span>
        <span>{lang && t('lang')}</span>

    </div>

    </div>
  )
}
