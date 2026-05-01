import React, { ReactNode } from 'react'
import {NextIntlClientProvider} from 'next-intl'

export default function AppProviders({children}:{children:ReactNode}) {
  return (
        <NextIntlClientProvider >

        {children}
        </NextIntlClientProvider >

  )
}
