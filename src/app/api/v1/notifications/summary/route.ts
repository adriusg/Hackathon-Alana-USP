import { NextRequest, NextResponse } from 'next/server'
import { readXml, ensureArray } from '@/lib/xmlStore'
import { parseToken } from '@/lib/authDemo'

type NotifDoc = { notifications: { items?: { notification?: any[] | any } } }

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  const uid = payload?.uid || 0

  const doc = await readXml<NotifDoc>('notifications.xml', 'notifications')
  const list = ensureArray<any>(doc.notifications.items?.notification)
  const mine = list.filter(n => Number(n.user_id) === uid)
  const groups: Record<string, { category: string; total: number; prioridade: number }> = {}
  for (const n of mine) {
    const cat = String(n.category || 'Geral')
    if (!groups[cat]) groups[cat] = { category: cat, total: 0, prioridade: 1 }
    const unread = String(n.read) !== 'true'
    if (unread) groups[cat].total += 1
  }
  const items = Object.values(groups)
  const total = items.reduce((s, it) => s + it.total, 0)
  return NextResponse.json({ total, items })
}
