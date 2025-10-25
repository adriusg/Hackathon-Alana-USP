import { NextRequest, NextResponse } from 'next/server'
import { readXml, ensureArray } from '@/lib/xmlStore'
import { parseToken } from '@/lib/authDemo'

type ReportsDoc = { reports: { items?: { report?: any[] | any } } }

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  if (!payload) return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 })

  const doc = await readXml<ReportsDoc>('reports.xml', 'reports')
  const list = ensureArray<any>(doc.reports.items?.report)
  const mine = list.filter(r => Number(r.created_by) === payload.uid)
  return NextResponse.json(mine)
}
