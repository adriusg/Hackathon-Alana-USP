import { NextRequest, NextResponse } from 'next/server'
import { readXml, ensureArray } from '@/lib/xmlStore'

type QDoc = { questionnaires: { items?: { questionnaire?: any[] | any } } }

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const doc = await readXml<QDoc>('questionnaires.xml', 'questionnaires')
  const list = ensureArray<any>(doc.questionnaires.items?.questionnaire)
  const q = list.find(x => Number(x.id) === Number(params.id))
  if (!q) return NextResponse.json({ detail: 'Not found' }, { status: 404 })
  return NextResponse.json(q)
}
