"use client"

import React from 'react'
import { useAccessibility } from '@/components/providers/accessibility-provider'

export function AccessibilityShortcuts() {
  const acc = useAccessibility()

  return (
    <div className="flex items-center gap-2" aria-label="Acessibilidade">
      <button
        type="button"
        onClick={() => acc.setTtsEnabled(!acc.ttsEnabled)}
        className={`px-2 py-1 rounded border text-xs ${acc.ttsEnabled ? 'bg-amber-100 border-amber-400' : 'border-gray-300 dark:border-gray-700'}`}
        aria-pressed={acc.ttsEnabled}
      >
        TTS
      </button>
      <div className="flex items-center gap-1">
        <button type="button" aria-label="Diminuir fonte" className="px-2 py-1 rounded border text-xs" onClick={()=>acc.setFontSize(Math.max(80, acc.fontSize-10))}>A-</button>
        <div className="text-xs w-9 text-center" aria-live="polite">{acc.fontSize}%</div>
        <button type="button" aria-label="Aumentar fonte" className="px-2 py-1 rounded border text-xs" onClick={()=>acc.setFontSize(Math.min(160, acc.fontSize+10))}>A+</button>
      </div>
      <button
        type="button"
        onClick={() => acc.setHighContrast(!acc.highContrast)}
        className={`px-2 py-1 rounded border text-xs ${acc.highContrast ? 'bg-black text-white border-black' : 'border-gray-300 dark:border-gray-700'}`}
        aria-pressed={acc.highContrast}
      >
        Contraste
      </button>
      <button
        type="button"
        onClick={() => acc.setKeyboardNavigation(!acc.keyboardNavigation)}
        className={`px-2 py-1 rounded border text-xs ${acc.keyboardNavigation ? 'bg-amber-100 border-amber-400' : 'border-gray-300 dark:border-gray-700'}`}
        aria-pressed={acc.keyboardNavigation}
      >
        Teclado
      </button>
      <button
        type="button"
        onClick={acc.savePreferences}
        className="px-2 py-1 rounded border text-xs border-gray-300 dark:border-gray-700"
        aria-label="Salvar preferências de acessibilidade"
      >
        Salvar
      </button>
    </div>
  )
}
