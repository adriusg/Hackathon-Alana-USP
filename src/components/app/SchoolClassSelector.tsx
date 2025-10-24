"use client"

import React from 'react'

export function SchoolClassSelector({ ties }: { ties?: { escolas: string[]; turmas?: string[] } }) {
  const [escola, setEscola] = React.useState('')
  const [turma, setTurma] = React.useState('')

  React.useEffect(() => {
    const e = localStorage.getItem('tie-escola') || ties?.escolas?.[0] || ''
    const t = localStorage.getItem('tie-turma') || ties?.turmas?.[0] || ''
    setEscola(e)
    setTurma(t)
  }, [ties])

  const onChangeEscola = (v: string) => {
    setEscola(v)
    try { localStorage.setItem('tie-escola', v) } catch {}
  }
  const onChangeTurma = (v: string) => {
    setTurma(v)
    try { localStorage.setItem('tie-turma', v) } catch {}
  }

  return (
    <div className="flex items-center gap-2">
      <label className="sr-only" htmlFor="sel-escola">Escola</label>
      <select id="sel-escola" value={escola} onChange={(e)=>onChangeEscola(e.target.value)} className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1 text-sm">
        {(ties?.escolas || ['Escola Demo - São Paulo']).map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <label className="sr-only" htmlFor="sel-turma">Turma</label>
      <select id="sel-turma" value={turma} onChange={(e)=>onChangeTurma(e.target.value)} className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1 text-sm">
        {(ties?.turmas || ['7º A', '8º B']).map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}
