import { NextRequest, NextResponse } from 'next/server'
import { readXml, writeXml, ensureArray } from '@/lib/xmlStore'
import { parseToken } from '@/lib/authDemo'

type NotifDoc = { notifications: { items?: { notification?: any[] | any } } }

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  const uid = payload?.uid || 0

  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category')
  const unreadOnly = String(searchParams.get('unread_only')) === 'true'

  const doc = await readXml<NotifDoc>('notifications.xml', 'notifications')
  const list = ensureArray<any>(doc.notifications.items?.notification)
  const mine = list.filter(n => {
    if (Number(n.user_id) !== uid) return false
    if (category && String(n.category) !== category) return false
    if (unreadOnly && String(n.read) === 'true') return false
    return true
  })
  return NextResponse.json(mine)
}
