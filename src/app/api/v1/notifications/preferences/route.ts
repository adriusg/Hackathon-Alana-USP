import { NextRequest, NextResponse } from 'next/server'
import { readXml, writeXml } from '@/lib/xmlStore'

type NotifDoc = { notifications: { preferences?: { default?: { in_app?: any; email?: any; sms?: any } } } }

export async function GET() {
  const doc = await readXml<NotifDoc>('notifications.xml', 'notifications')
  const prefs = doc.notifications.preferences || { default: { in_app: true, email: false, sms: false } }
  return NextResponse.json({ preferences: { default: { in_app: String(prefs.default?.in_app) === 'true', email: String(prefs.default?.email) === 'true', sms: String(prefs.default?.sms) === 'true' } } })
}

export async function PATCH(req: NextRequest) {
  const body = await req.json()
  const doc = await readXml<NotifDoc>('notifications.xml', 'notifications')
  const p = body?.preferences?.default || {}
  if (!doc.notifications.preferences) {
    (doc.notifications as any).preferences = {}
  }
  ;(doc.notifications.preferences as any).default = {
    in_app: !!p.in_app,
    email: !!p.email,
    sms: !!p.sms,
  }
  await writeXml('notifications.xml', doc, 'notifications')
  return NextResponse.json({ ok: true })
}
