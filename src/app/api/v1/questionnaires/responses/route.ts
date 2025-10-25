import { NextRequest, NextResponse } from 'next/server'
import { readXml, writeXml, ensureArray, nextId, nowISO } from '@/lib/xmlStore'
import { parseToken } from '@/lib/authDemo'

type RespDoc = { questionnaires: { responses?: { response?: any[] | any } } }

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  if (!payload) return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const doc = await readXml<RespDoc>('questionnaires.xml', 'questionnaires')
  const list = ensureArray<any>(doc.questionnaires.responses?.response)
  const id = nextId(list)
  const r = {
    id,
    questionnaire_id: Number(body.questionnaire_id),
    question_id: Number(body.question_id),
    user_id: payload.uid,
    is_draft: !!body.is_draft,
    time_spent_seconds: body.time_spent_seconds ? Number(body.time_spent_seconds) : 0,
    answer_text: body.answer_text || '',
    answer_value: body.answer_value || '',
    answer_number: typeof body.answer_number === 'number' ? body.answer_number : '',
    answer_json: body.answer_json ? JSON.stringify(body.answer_json) : '',
    created_at: nowISO(),
  }
  list.push(r)
  if (!doc.questionnaires.responses) (doc.questionnaires as any).responses = {}
  ;(doc.questionnaires.responses as any).response = list
  await writeXml('questionnaires.xml', doc, 'questionnaires')
  return NextResponse.json(r)
}
