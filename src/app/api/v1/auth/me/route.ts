import { NextRequest, NextResponse } from 'next/server'
import { readXml, ensureArray } from '@/lib/xmlStore'
import { parseToken } from '@/lib/authDemo'

type UsersDoc = { users: { user?: any[] | any } }

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const payload = parseToken(token)
  if (!payload) {
    return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 })
  }
  const doc = await readXml<UsersDoc>('users.xml', 'users')
  const users = ensureArray<any>(doc.users.user)
  const user = users.find(u => Number(u.id) === payload.uid)
  if (!user) {
    return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 })
  }
  const roles = String(user.roles || '').split(',').map((r: string) => r.trim()).filter(Boolean)
  return NextResponse.json({ id: Number(user.id), email: user.email, roles, full_name: user.full_name || 'Usuário' })
}
