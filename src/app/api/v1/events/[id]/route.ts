import { NextRequest, NextResponse } from 'next/server'
import { readXml, writeXml, ensureArray } from '@/lib/xmlStore'
import { parseToken } from '@/lib/authDemo'

type EventsDoc = { events: { items?: { event?: any[] | any } } }

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const doc = await readXml<EventsDoc>('events.xml', 'events')
  const list = ensureArray<any>(doc.events.items?.event)
  const ev = list.find(x => Number(x.id) === Number(params.id))
  if (!ev) return NextResponse.json({ detail: 'Not found' }, { status: 404 })
  return NextResponse.json(ev)
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  if (!payload) return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const doc = await readXml<EventsDoc>('events.xml', 'events')
  const list = ensureArray<any>(doc.events.items?.event)
  const idx = list.findIndex(x => Number(x.id) === Number(params.id))
  if (idx < 0) return NextResponse.json({ detail: 'Not found' }, { status: 404 })
  const prev = list[idx]
  const updated = { ...prev, ...body }
  list[idx] = updated
  if (!doc.events.items) (doc.events as any).items = {}
  ;(doc.events.items as any).event = list
  await writeXml('events.xml', doc, 'events')
  return NextResponse.json(updated)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  if (!payload) return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 })

  const doc = await readXml<EventsDoc>('events.xml', 'events')
  const list = ensureArray<any>(doc.events.items?.event)
  const idx = list.findIndex(x => Number(x.id) === Number(params.id))
  if (idx < 0) return NextResponse.json({ detail: 'Not found' }, { status: 404 })
  list.splice(idx, 1)
  if (!doc.events.items) (doc.events as any).items = {}
  ;(doc.events.items as any).event = list
  await writeXml('events.xml', doc, 'events')
  return NextResponse.json({ ok: true })
}
