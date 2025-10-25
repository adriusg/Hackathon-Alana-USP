import { NextRequest, NextResponse } from 'next/server'
import { readXml, writeXml, ensureArray, nextId, nowISO } from '@/lib/xmlStore'

type ReportsDoc = { reports: { items?: { report?: any[] | any } } }

export async function POST(req: NextRequest) {
  const body = await req.json()
  const doc = await readXml<ReportsDoc>('reports.xml', 'reports')
  const list = ensureArray<any>(doc.reports.items?.report)
  const id = nextId(list)
  const r = {
    id,
    title: body.title || 'Relato',
    description: body.description || '',
    category: body.category || 'geral',
    created_at: nowISO(),
    created_by: '',
    status: 'submitted',
    anonymous: true,
  }
  list.push(r)
  if (!doc.reports.items) (doc.reports as any).items = {}
  ;(doc.reports.items as any).report = list
  await writeXml('reports.xml', doc, 'reports')
  return NextResponse.json(r)
}
