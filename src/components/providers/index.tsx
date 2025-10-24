'use client'

import React from 'react'
import { ThemeProvider } from './theme-provider'
import { QueryProvider } from './query-provider'
import { AccessibilityProvider } from './accessibility-provider'
import { Toaster } from 'react-hot-toast'
import { I18nProvider } from './i18n-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      forcedTheme="light"
      disableTransitionOnChange
    >
      <QueryProvider>
        <I18nProvider>
          <AccessibilityProvider>
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'hsl(var(--background))',
                  color: 'hsl(var(--foreground))',
                  border: '1px solid hsl(var(--border))',
                },
                success: {
                  iconTheme: {
                    primary: 'hsl(var(--primary))',
                    secondary: 'white',
                  },
                },
                error: {
                  iconTheme: {
                    primary: 'hsl(var(--destructive))',
                    secondary: 'white',
                  },
                },
              }}
            />
          </AccessibilityProvider>
        </I18nProvider>
      </QueryProvider>
    </ThemeProvider>
  )
}
