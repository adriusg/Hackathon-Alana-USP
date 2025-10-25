import { NextRequest, NextResponse } from 'next/server'
import { readXml, ensureArray } from '@/lib/xmlStore'

type QDoc = { questionnaires: { items?: { questionnaire?: any[] | any } } }

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get('type')
  const activeOnly = String(searchParams.get('active_only')) === 'true'
  const doc = await readXml<QDoc>('questionnaires.xml', 'questionnaires')
  const list = ensureArray<any>(doc.questionnaires.items?.questionnaire)
  const filtered = list.filter(q => {
    if (type && String(q.type) !== type) return false
    if (activeOnly && String(q.active) !== 'true') return false
    return true
  })
  return NextResponse.json(filtered)
}
