import { promises as fs } from 'fs'
import path from 'path'
import { parseStringPromise, Builder } from 'xml2js'

const DATA_DIR = path.join(process.cwd(), 'data')

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true })
  } catch {}
}

export async function readXml<T = any>(fileName: string, root: string): Promise<T> {
  await ensureDataDir()
  const filePath = path.join(DATA_DIR, fileName)
  try {
    const xml = await fs.readFile(filePath, 'utf-8')
    const json = await parseStringPromise(xml, { explicitArray: false, mergeAttrs: true, attrkey: '$' })
    // Ensure root exists
    if (!json[root]) json[root] = {}
    return json as T
  } catch (e: any) {
    if (e && (e.code === 'ENOENT' || e.message?.includes('no such file'))) {
      // Create empty structure
      const obj: any = { [root]: {} }
      await writeXml(fileName, obj, root)
      return obj as T
    }
    throw e
  }
}

export async function writeXml(fileName: string, data: any, root: string) {
  await ensureDataDir()
  const filePath = path.join(DATA_DIR, fileName)
  const builder = new Builder({ headless: true, renderOpts: { pretty: true, indent: '  ', newline: '\n' } })
  const xml = builder.buildObject(data)
  await fs.writeFile(filePath, xml, 'utf-8')
}

// Helpers for array collections under a root, e.g., { users: { user: [...] } }
export function ensureArray<T>(value: T | T[] | undefined): T[] {
  if (!value) return []
  return Array.isArray(value) ? value : [value]
}

export function toId(n: any): number {
  const x = Number(n)
  return Number.isFinite(x) ? x : 0
}

export function nextId(items: Array<{ id?: any }>): number {
  const max = items.reduce((m, it) => Math.max(m, toId(it.id)), 0)
  return max + 1
}

export function nowISO() {
  return new Date().toISOString()
}
