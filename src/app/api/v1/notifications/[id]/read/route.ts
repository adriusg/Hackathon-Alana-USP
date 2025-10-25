import { NextRequest, NextResponse } from 'next/server'
import { readXml, writeXml, ensureArray } from '@/lib/xmlStore'
import { parseToken } from '@/lib/authDemo'

type NotifDoc = { notifications: { items?: { notification?: any[] | any } } }

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  if (!payload) return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 })

  const doc = await readXml<NotifDoc>('notifications.xml', 'notifications')
  const list = ensureArray<any>(doc.notifications.items?.notification)
  const idx = list.findIndex(n => Number(n.id) === Number(params.id) && Number(n.user_id) === payload.uid)
  if (idx < 0) return NextResponse.json({ detail: 'Not found' }, { status: 404 })
  list[idx].read = true
  ;(doc.notifications.items as any).notification = list
  await writeXml('notifications.xml', doc, 'notifications')
  return NextResponse.json({ ok: true })
}
