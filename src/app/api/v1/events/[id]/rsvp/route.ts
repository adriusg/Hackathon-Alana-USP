import { NextRequest, NextResponse } from 'next/server'
import { readXml, writeXml, ensureArray } from '@/lib/xmlStore'
import { parseToken } from '@/lib/authDemo'

type EventsDoc = { events: { rsvps?: { rsvp?: any[] | any } } }

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  if (!payload) return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 })

  const doc = await readXml<EventsDoc>('events.xml', 'events')
  const rsvps = ensureArray<any>(doc.events.rsvps?.rsvp)
  const found = rsvps.find(x => Number(x.eventId) === Number(params.id) && Number(x.userId) === payload.uid)
  if (!found) return NextResponse.json({ detail: 'Not found' }, { status: 404 })
  return NextResponse.json(found)
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  if (!payload) return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const response = String(body.response || 'going') as 'going' | 'maybe' | 'not_going'
  const doc = await readXml<EventsDoc>('events.xml', 'events')
  const list = ensureArray<any>(doc.events.rsvps?.rsvp)
  const idx = list.findIndex(x => Number(x.eventId) === Number(params.id) && Number(x.userId) === payload.uid)
  const item = { eventId: Number(params.id), userId: payload.uid, response }
  if (idx >= 0) list[idx] = item
  else list.push(item)
  if (!doc.events.rsvps) (doc.events as any).rsvps = {}
  ;(doc.events.rsvps as any).rsvp = list
  await writeXml('events.xml', doc, 'events')
  return NextResponse.json(item)
}
