"use client"

import React from "react"
import { useI18n } from "./providers/i18n-provider"

interface TranslatableProps {
  pt: React.ReactNode
  en: React.ReactNode
}

// Detect common mojibake markers (UTF-8 read as Latin-1)
const MOJIBAKE_REGEX = /[ÃÂ]|â€¢|â€“|â€”|â€œ|â€|â€˜|â€™/;

// Replace control chars (except \n, \r, \t) and stray replacement chars
function sanitizeText(s: string): string {
  // 1) Replace sequences like " �<control> " with an em dash separator
  s = s.replace(/\s*\uFFFD[\u0000-\u001F\u007F]*\s*/g, ' — ')
  // 2) Remove ASCII control chars except newlines/tabs/carriage returns
  s = s.replace(/[\u0000-\u001F\u007F]/g, (ch) => ("\n\r\t".includes(ch) ? ch : ' '))
  // 3) Collapse excessive spaces introduced by replacements
  s = s.replace(/\s{2,}/g, ' ')
  return s
}

function maybeFixMojibake(input: string): string {
  if (!MOJIBAKE_REGEX.test(input) && !/\uFFFD|[\u0000-\u001F\u007F]/.test(input)) return input
  try {
    // Convert each 0–255 char code to a byte, then decode as UTF-8
    const bytes = new Uint8Array(Array.from(input, (c) => c.charCodeAt(0)))
    const decoded = new TextDecoder("utf-8", { fatal: false }).decode(bytes)
    return sanitizeText(decoded)
  } catch {
    // Fallback using legacy escape/decodeURIComponent trick
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - escape is deprecated but works as a fallback in browsers
      return sanitizeText(decodeURIComponent(escape(input)))
    } catch {
      return sanitizeText(input)
    }
  }
}

function fixNodeMojibake(node: React.ReactNode): React.ReactNode {
  if (typeof node === "string") return maybeFixMojibake(node)
  if (Array.isArray(node)) return node.map((n, i) => fixNodeMojibake(n))
  if (React.isValidElement(node)) {
    const children = (node as any).props?.children
    const fixedChildren = fixNodeMojibake(children)

    // Fix string props commonly used for textual content
    const oldProps = (node as any).props || {}
    let changed = false
    const newProps: Record<string, any> = {}
    for (const key of Object.keys(oldProps)) {
      if (key === "children") continue
      const val = oldProps[key]
      if (typeof val === "string") {
        const fixed = maybeFixMojibake(val)
        if (fixed !== val) changed = true
        newProps[key] = fixed
      } else {
        newProps[key] = val
      }
    }

    if (fixedChildren !== children || changed) {
      return React.cloneElement(node as any, newProps, fixedChildren)
    }
    return node
  }
  return node
}

export function Translatable({ pt, en }: TranslatableProps) {
  const { locale } = useI18n()
  if (locale === "en") return <>{en}</>
  const fixed = React.useMemo(() => fixNodeMojibake(pt), [pt])
  return <>{fixed}</>
}
