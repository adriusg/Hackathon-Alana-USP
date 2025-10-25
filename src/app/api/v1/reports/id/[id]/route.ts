import { NextRequest, NextResponse } from 'next/server'
import { readXml, writeXml, ensureArray } from '@/lib/xmlStore'

type ReportsDoc = { reports: { items?: { report?: any[] | any } } }

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const doc = await readXml<ReportsDoc>('reports.xml', 'reports')
  const list = ensureArray<any>(doc.reports.items?.report)
  const r = list.find(x => Number(x.id) === Number(params.id))
  if (!r) return NextResponse.json({ detail: 'Not found' }, { status: 404 })
  return NextResponse.json(r)
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json()
  const doc = await readXml<ReportsDoc>('reports.xml', 'reports')
  const list = ensureArray<any>(doc.reports.items?.report)
  const idx = list.findIndex(x => Number(x.id) === Number(params.id))
  if (idx < 0) return NextResponse.json({ detail: 'Not found' }, { status: 404 })
  const prev = list[idx]
  const updated = { ...prev, ...body }
  list[idx] = updated
  ;(doc.reports.items as any).report = list
  await writeXml('reports.xml', doc, 'reports')
  return NextResponse.json(updated)
}
