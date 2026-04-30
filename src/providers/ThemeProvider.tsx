'use client '
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode } from 'react'

export default function ThemeProvider({children}:{children:ReactNode}) {
    
  return (
    <NextThemesProvider defaultTheme="system" attribute="class" enableSystem>
        {children}
    </NextThemesProvider>
  )
}
