// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {AuthProvider} from '../context/TestContext';
export function Providers({children}: { children: React.ReactNode }) {
  return (
    <AuthProvider>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
    </AuthProvider>
  )
}