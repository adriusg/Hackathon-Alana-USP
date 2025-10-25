import { NextRequest, NextResponse } from 'next/server'
import { readXml, ensureArray } from '@/lib/xmlStore'
import { verifyPassword, makeToken } from '@/lib/authDemo'

type UsersDoc = { users: { user?: any[] | any } }

export async function POST(req: NextRequest) {
  const body = await req.json()
  const email = String(body?.email || '').toLowerCase().trim()
  const password = String(body?.password || '')
  if (!email || !password) {
    return NextResponse.json({ detail: 'Credenciais inválidas' }, { status: 400 })
  }

  const doc = await readXml<UsersDoc>('users.xml', 'users')
  const users = ensureArray<any>(doc.users.user)
  const user = users.find(u => String(u.email).toLowerCase() === email)
  if (!user) {
    return NextResponse.json({ detail: 'Usuário não encontrado' }, { status: 401 })
  }
  const ok = verifyPassword(password, String(user.passwordHash || ''))
  if (!ok) {
    return NextResponse.json({ detail: 'Senha incorreta' }, { status: 401 })
  }
  const uid = Number(user.id)
  const token = makeToken(uid)
  const roles = String(user.roles || '').split(',').map((r: string) => r.trim()).filter(Boolean)
  return NextResponse.json({
    access_token: token,
    refresh_token: token,
    user: {
      id: uid,
      email: user.email,
      roles,
      full_name: user.full_name || 'Usuário',
    }
  })
}
