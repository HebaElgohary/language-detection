import React, { ReactNode } from 'react'
import ThemesProvider from './ThemeProvider'
export default function AppProviders({children}:{children:ReactNode}) {
  return (
    <ThemesProvider>
        {children}
    </ThemesProvider>
  )
}
