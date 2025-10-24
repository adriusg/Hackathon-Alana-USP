'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

interface AccessibilitySettings {
  ttsEnabled: boolean
  fontSize: number
  highContrast: boolean
  alternativeFont: boolean
  keyboardNavigation: boolean
  focusVisible: boolean
  reduceMotion: boolean
}

interface AccessibilityContextType extends AccessibilitySettings {
  setTtsEnabled: (enabled: boolean) => void
  setFontSize: (size: number) => void
  setHighContrast: (enabled: boolean) => void
  setAlternativeFont: (enabled: boolean) => void
  setKeyboardNavigation: (enabled: boolean) => void
  setFocusVisible: (enabled: boolean) => void
  setReduceMotion: (enabled: boolean) => void
  speak: (text: string) => void
  savePreferences: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

const DEFAULT_SETTINGS: AccessibilitySettings = {
  ttsEnabled: false,
  fontSize: 100,
  highContrast: false,
  alternativeFont: false,
  keyboardNavigation: true,
  focusVisible: true,
  reduceMotion: false,
}

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS)

  // Load preferences from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('accessibility-preferences')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setSettings({ ...DEFAULT_SETTINGS, ...parsed })
      } catch (e) {
        console.error('Failed to parse accessibility preferences', e)
      }
    }
  }, [])

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement

    // Font size
    root.style.fontSize = `${settings.fontSize}%`

    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Alternative font
    if (settings.alternativeFont) {
      root.classList.add('font-dyslexic')
    } else {
      root.classList.remove('font-dyslexic')
    }

    // Keyboard navigation
    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation')
    } else {
      root.classList.remove('keyboard-navigation')
    }

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible')
    } else {
      root.classList.remove('focus-visible')
    }

    // Reduce motion
    if (settings.reduceMotion) {
      root.classList.add('reduce-motion')
    } else {
      root.classList.remove('reduce-motion')
    }
  }, [settings])

  // Text-to-Speech function
  const speak = useCallback((text: string) => {
    if (!settings.ttsEnabled) return
    
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'pt-BR'
      utterance.rate = 1
      utterance.pitch = 1
      
      window.speechSynthesis.speak(utterance)
    } else {
      console.warn('Text-to-Speech not supported in this browser')
    }
  }, [settings.ttsEnabled])

  // Save preferences to localStorage
  const savePreferences = useCallback(() => {
    localStorage.setItem('accessibility-preferences', JSON.stringify(settings))
  }, [settings])

  const value: AccessibilityContextType = {
    ...settings,
    setTtsEnabled: (enabled: boolean) => setSettings((prev: AccessibilitySettings) => ({ ...prev, ttsEnabled: enabled })),
    setFontSize: (size: number) => setSettings((prev: AccessibilitySettings) => ({ ...prev, fontSize: size })),
    setHighContrast: (enabled: boolean) => setSettings((prev: AccessibilitySettings) => ({ ...prev, highContrast: enabled })),
    setAlternativeFont: (enabled: boolean) => setSettings((prev: AccessibilitySettings) => ({ ...prev, alternativeFont: enabled })),
    setKeyboardNavigation: (enabled: boolean) => setSettings((prev: AccessibilitySettings) => ({ ...prev, keyboardNavigation: enabled })),
    setFocusVisible: (enabled: boolean) => setSettings((prev: AccessibilitySettings) => ({ ...prev, focusVisible: enabled })),
    setReduceMotion: (enabled: boolean) => setSettings((prev: AccessibilitySettings) => ({ ...prev, reduceMotion: enabled })),
    speak,
    savePreferences,
  }

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}
