import { NextRequest, NextResponse } from 'next/server'
import { readXml, ensureArray } from '@/lib/xmlStore'
import { parseToken } from '@/lib/authDemo'

type RespDoc = { questionnaires: { responses?: { response?: any[] | any } } }

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  if (!payload) return NextResponse.json([], { status: 200 })

  const qid = Number(params.id)
  const doc = await readXml<RespDoc>('questionnaires.xml', 'questionnaires')
  const list = ensureArray<any>(doc.questionnaires.responses?.response)
  const mine = list.filter(r => Number(r.user_id) === payload.uid && Number(r.questionnaire_id) === qid)
  return NextResponse.json(mine)
}
