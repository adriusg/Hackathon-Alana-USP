import { describe, test, expect } from '@jest/globals'
import { hashPassword, verifyPassword, makeToken, parseToken } from './authDemo'

describe('authDemo', () => {
  test('hash and verify password', () => {
    const h = hashPassword('123456')
    expect(typeof h).toBe('string')
    expect(h.length).toBeGreaterThan(0)
    expect(verifyPassword('123456', h)).toBe(true)
    expect(verifyPassword('wrong', h)).toBe(false)
  })

  test('make and parse token', () => {
    const t = makeToken(42)
    expect(typeof t).toBe('string')
    const p = parseToken(t)
    expect(p).not.toBeNull()
    expect(p!.uid).toBe(42)
    expect(typeof p!.ts).toBe('number')
  })
})
