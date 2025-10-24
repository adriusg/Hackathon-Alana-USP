'use client'

import React from 'react'
import { useAccessibility } from '@/components/providers/accessibility-provider'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import toast from 'react-hot-toast'

export default function AcessibilidadePage() {
  const acc = useAccessibility()
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    let active = true
    const load = async () => {
      try {
        const prefs = await apiClient.getAccessibilityPrefs()
        if (!active) return
        acc.setTtsEnabled(!!prefs.ttsEnabled)
        acc.setFontSize(prefs.fontSize || 100)
        acc.setHighContrast(!!prefs.highContrast)
        acc.setAlternativeFont(!!prefs.alternativeFont)
        acc.setKeyboardNavigation(!!prefs.keyboardNavigation)
        acc.setFocusVisible(!!prefs.focusVisible)
        acc.setReduceMotion(!!prefs.reduceMotion)
      } catch {}
    }
    load()
    return () => { active = false }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const save = async () => {
    setLoading(true)
    try {
      const payload = {
        ttsEnabled: acc.ttsEnabled,
        fontSize: acc.fontSize,
        highContrast: acc.highContrast,
        alternativeFont: acc.alternativeFont,
        keyboardNavigation: acc.keyboardNavigation,
        focusVisible: acc.focusVisible,
        reduceMotion: acc.reduceMotion,
      }
      await apiClient.updateAccessibilityPrefs(payload)
      acc.savePreferences()
      toast.success('Preferências salvas')
    } catch (e: any) {
      toast.error(e?.response?.data?.detail || 'Falha ao salvar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Acessibilidade</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Leitura de tela</CardTitle>
          <CardDescription>Ative a leitura por voz (TTS) para conteúdos importantes.</CardDescription>
        </CardHeader>
        <CardContent>
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={acc.ttsEnabled} onChange={(e)=>acc.setTtsEnabled(e.target.checked)} />
            Habilitar TTS (Text-to-Speech)
          </label>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Legibilidade</CardTitle>
          <CardDescription>Ajustes para facilitar a leitura.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fontSize">Tamanho da fonte: {acc.fontSize}%</Label>
            <input id="fontSize" type="range" min={80} max={200} step={5} value={acc.fontSize} onChange={(e)=>acc.setFontSize(parseInt(e.target.value))} className="w-full" />
          </div>
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={acc.highContrast} onChange={(e)=>acc.setHighContrast(e.target.checked)} />
            Alto contraste
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={acc.alternativeFont} onChange={(e)=>acc.setAlternativeFont(e.target.checked)} />
            Fonte alternativa para dislexia
          </label>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Navegação</CardTitle>
          <CardDescription>Recursos para navegar com teclado e foco visível.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={acc.keyboardNavigation} onChange={(e)=>acc.setKeyboardNavigation(e.target.checked)} />
            Navegação por teclado
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={acc.focusVisible} onChange={(e)=>acc.setFocusVisible(e.target.checked)} />
            Destaque de foco visível
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={acc.reduceMotion} onChange={(e)=>acc.setReduceMotion(e.target.checked)} />
            Reduzir animações/movimento
          </label>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Button onClick={save} disabled={loading}>{loading ? 'Salvando...' : 'Salvar preferências'}</Button>
      </div>
    </div>
  )
}
