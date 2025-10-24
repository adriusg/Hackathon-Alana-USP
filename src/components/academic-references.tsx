import { BookOpen } from 'lucide-react'

interface ReferenceProps {
  text: string
  className?: string
}

export function AcademicReference({ text, className = '' }: ReferenceProps) {
  return (
    <div className={`mt-4 border-l-4 border-amber-500 bg-slate-50 dark:bg-slate-800 p-4 rounded-r-lg ${className}`}>
      <div className="flex gap-3">
        <BookOpen className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed">
          <span className="font-semibold text-amber-700 dark:text-amber-400">Referência: </span>
          {text}
        </p>
      </div>
    </div>
  )
}

interface StatBoxProps {
  value: string
  label: string
  source?: string
  trend?: 'up' | 'down' | 'stable'
}

export function StatBox({ value, label, source, trend }: StatBoxProps) {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    stable: 'text-blue-600'
  }

  const trendSymbols = {
    up: '↑',
    down: '↓',
    stable: '→'
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 border border-amber-200 dark:border-amber-800 rounded-lg p-6 text-center shadow-md">
      <div className="text-4xl font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center justify-center gap-2">
        {value}
        {trend && (
          <span className={`text-2xl ${trendColors[trend]}`}>
            {trendSymbols[trend]}
          </span>
        )}
      </div>
      <div className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">
        {label}
      </div>
      {source && (
        <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
          Fonte: {source}
        </div>
      )}
    </div>
  )
}

interface QuoteBoxProps {
  quote: string
  author: string
  work?: string
  year?: number
}

export function QuoteBox({ quote, author, work, year }: QuoteBoxProps) {
  return (
    <blockquote className="my-6 border-l-4 border-amber-500 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-r-lg shadow-sm">
      <p className="text-lg text-gray-800 dark:text-gray-200 italic leading-relaxed mb-3">
        "{quote}"
      </p>
      <footer className="text-sm font-semibold text-amber-700 dark:text-amber-400">
        — {author}
        {work && <span className="font-normal text-gray-600 dark:text-gray-400">, {work}</span>}
        {year && <span className="font-normal text-gray-600 dark:text-gray-400"> ({year})</span>}
      </footer>
    </blockquote>
  )
}
