import crypto from 'crypto'

export function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex')
}

export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash
}

export type DemoTokenPayload = { uid: number; ts: number }

export function makeToken(userId: number): string {
  const payload: DemoTokenPayload = { uid: userId, ts: Date.now() }
  const json = JSON.stringify(payload)
  return Buffer.from(json, 'utf-8').toString('base64url')
}

export function parseToken(token?: string): DemoTokenPayload | null {
  if (!token) return null
  try {
    const json = Buffer.from(token, 'base64url').toString('utf-8')
    const data = JSON.parse(json)
    if (typeof data?.uid === 'number') return data
    return null
  } catch {
    return null
  }
}
