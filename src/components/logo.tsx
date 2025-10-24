"use client"

import React from 'react'

interface LogoProps {
  size?: number
  showText?: boolean
  className?: string
  textClassName?: string
}

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

function isRaster(path: string) {
  return /(\.png|\.jpg|\.jpeg|\.webp)(\?|$)/i.test(path)
}

async function removeWhiteBackground(img: HTMLImageElement): Promise<string | null> {
  try {
    const w = img.naturalWidth
    const h = img.naturalHeight
    if (!w || !h) return null
    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')
    if (!ctx) return null
    ctx.drawImage(img, 0, 0)
    const imageData = ctx.getImageData(0, 0, w, h)
    const data = imageData.data
    const WHITE_TH = 248
    const LUMA_TH = 230
    const CHROMA_TH = 18
    const visited = new Uint8Array(w * h)
    const stack: number[] = []

    const pushIf = (x: number, y: number) => {
      if (x < 0 || y < 0 || x >= w || y >= h) return
      const p = y * w + x
      if (visited[p]) return
      const i = p * 4
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const a = data[i + 3]
      if (a === 0) {
        visited[p] = 1
        stack.push(p)
        return
      }
      const isNearWhite = r >= WHITE_TH && g >= WHITE_TH && b >= WHITE_TH
      const isLowChroma = Math.abs(r - g) < CHROMA_TH && Math.abs(r - b) < CHROMA_TH && Math.abs(g - b) < CHROMA_TH
      const isBrightGray = r >= LUMA_TH && g >= LUMA_TH && b >= LUMA_TH && isLowChroma
      if (isNearWhite || isBrightGray) {
        visited[p] = 1
        stack.push(p)
      }
    }

    for (let x = 0; x < w; x++) { pushIf(x, 0); pushIf(x, h - 1) }
    for (let y = 0; y < h; y++) { pushIf(0, y); pushIf(w - 1, y) }

    while (stack.length) {
      const p = stack.pop() as number
      const i = p * 4
      data[i + 3] = 0
      const x = p % w
      const y = (p / w) | 0
      pushIf(x + 1, y)
      pushIf(x - 1, y)
      pushIf(x, y + 1)
      pushIf(x, y - 1)
    }
    ctx.putImageData(imageData, 0, 0)
    return canvas.toDataURL('image/png')
  } catch {
    return null
  }
}

export function Logo({ size = 40, showText = true, className, textClassName }: LogoProps) {
  const candidates = React.useMemo(
    () => [
      '/logo/plataforma-solar.png.png',
      '/logo/plataforma-solar.png',
      '/logo/plataforma-solar.webp',
      '/logo/plataforma-solar.jpg',
      '/logo/plataforma-solar.jpeg',
      '/logo/plataforma-solar.svg',
    ],
    []
  )
  const [idx, setIdx] = React.useState(0)
  const [error, setError] = React.useState(false)
  const src = candidates[idx]
  return (
    <div className={cx('flex items-center gap-2 bg-transparent', className)}>
      {!error ? (
        <div className="relative overflow-hidden rounded-sm" style={{ width: size, height: size }}>
          <img
            src={src}
            alt="Plataforma Solar"
            loading="eager"
            onError={() => {
              if (idx < candidates.length - 1) setIdx((v) => v + 1)
              else setError(true)
            }}
            onLoad={async (e) => {
              // If raster without transparency, try to remove near-white background once
              const current = e.currentTarget as HTMLImageElement
              if (isRaster(src) && !current.src.startsWith('data:')) {
                const processed = await removeWhiteBackground(current)
                if (processed) {
                  // swap to processed data URL (will not loop due to data: guard)
                  current.src = processed
                }
              }
            }}
            className="absolute inset-0 w-full h-full object-contain"
            draggable={false}
          />
        </div>
      ) : (
        <div
          style={{ width: size, height: size }}
          className="rounded-sm bg-gradient-to-br from-amber-400 to-orange-500"
          aria-hidden
        />
      )}
      {showText && (
        <span className={cx('text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent', textClassName)}>
          Plataforma Solar
        </span>
      )}
    </div>
  )
}
