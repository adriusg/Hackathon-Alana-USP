import { NextRequest, NextResponse } from 'next/server'
import { readXml, writeXml, ensureArray, nextId } from '@/lib/xmlStore'
import { parseToken } from '@/lib/authDemo'

type EventsDoc = { events: { items?: { event?: any[] | any }, rsvps?: { rsvp?: any[] | any } } }

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const start = searchParams.get('start')
  const end = searchParams.get('end')
  const doc = await readXml<EventsDoc>('events.xml', 'events')
  const list = ensureArray<any>(doc.events.items?.event)
  const filtered = list.filter(ev => {
    if (!start || !end) return true
    const s = new Date(start).getTime()
    const e = new Date(end).getTime()
    const evS = new Date(String(ev.start_datetime)).getTime()
    return evS >= s && evS <= e
  })
  return NextResponse.json(filtered)
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  if (!payload) return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const doc = await readXml<EventsDoc>('events.xml', 'events')
  const list = ensureArray<any>(doc.events.items?.event)
  const id = nextId(list)
  const ev = {
    id,
    title: body.title || 'Evento',
    category: body.category || 'escola',
    start_datetime: body.start_datetime,
    end_datetime: body.end_datetime,
    location: body.location || '',
    description: body.description || '',
    allow_guests: !!body.allow_guests,
    max_attendees: body.max_attendees ? Number(body.max_attendees) : '',
    created_by: payload.uid,
  }
  list.push(ev)
  if (!doc.events.items) (doc.events as any).items = {}
  ;(doc.events.items as any).event = list
  await writeXml('events.xml', doc, 'events')
  return NextResponse.json(ev)
}
