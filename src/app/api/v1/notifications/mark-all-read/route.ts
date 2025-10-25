import { NextRequest, NextResponse } from 'next/server'
import { readXml, writeXml, ensureArray } from '@/lib/xmlStore'
import { parseToken } from '@/lib/authDemo'

type NotifDoc = { notifications: { items?: { notification?: any[] | any } } }

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  const uid = payload?.uid || 0

  const doc = await readXml<NotifDoc>('notifications.xml', 'notifications')
  const list = ensureArray<any>(doc.notifications.items?.notification)
  for (const n of list) {
    if (Number(n.user_id) === uid) n.read = true
  }
  ;(doc.notifications.items as any).notification = list
  await writeXml('notifications.xml', doc, 'notifications')
  return NextResponse.json({ ok: true })
}
