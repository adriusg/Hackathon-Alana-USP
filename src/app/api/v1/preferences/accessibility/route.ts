import { NextRequest, NextResponse } from 'next/server'
import { readXml, writeXml, ensureArray } from '@/lib/xmlStore'
import { parseToken } from '@/lib/authDemo'

type PrefsDoc = { preferences: { accessibility?: { user?: any[] | any } } }

function ensurePrefs(doc: PrefsDoc) {
  if (!doc.preferences) (doc as any).preferences = {}
  if (!doc.preferences.accessibility) (doc.preferences as any).accessibility = {}
}

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  const uid = payload?.uid || 0

  const doc = await readXml<PrefsDoc>('preferences.xml', 'preferences')
  ensurePrefs(doc)
  const list = ensureArray<any>(doc.preferences.accessibility!.user)
  const u = list.find(x => Number(x.user_id) === uid)
  const data = u || {
    user_id: uid,
    ttsEnabled: false,
    fontSize: 16,
    highContrast: false,
    alternativeFont: false,
    keyboardNavigation: true,
    focusVisible: true,
    reduceMotion: false,
  }
  return NextResponse.json({
    ttsEnabled: data.ttsEnabled === true || String(data.ttsEnabled) === 'true',
    fontSize: Number(data.fontSize) || 16,
    highContrast: data.highContrast === true || String(data.highContrast) === 'true',
    alternativeFont: data.alternativeFont === true || String(data.alternativeFont) === 'true',
    keyboardNavigation: data.keyboardNavigation === true || String(data.keyboardNavigation) === 'true',
    focusVisible: data.focusVisible === true || String(data.focusVisible) === 'true',
    reduceMotion: data.reduceMotion === true || String(data.reduceMotion) === 'true',
  })
}

export async function PATCH(req: NextRequest) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  const uid = payload?.uid || 0

  const body = await req.json()
  const doc = await readXml<PrefsDoc>('preferences.xml', 'preferences')
  ensurePrefs(doc)
  const list = ensureArray<any>(doc.preferences.accessibility!.user)
  const idx = list.findIndex(x => Number(x.user_id) === uid)
  const updated = {
    user_id: uid,
    ttsEnabled: !!body.ttsEnabled,
    fontSize: Number(body.fontSize) || 16,
    highContrast: !!body.highContrast,
    alternativeFont: !!body.alternativeFont,
    keyboardNavigation: !!body.keyboardNavigation,
    focusVisible: !!body.focusVisible,
    reduceMotion: !!body.reduceMotion,
  }
  if (idx >= 0) {
    list[idx] = updated
  } else {
    list.push(updated)
  }
  ;(doc.preferences.accessibility as any).user = list
  await writeXml('preferences.xml', doc, 'preferences')
  return NextResponse.json(updated)
}
