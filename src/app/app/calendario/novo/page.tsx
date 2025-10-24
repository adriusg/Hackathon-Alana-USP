"use client"

import React from 'react'
import { AppShell } from '@/components/app/AppShell'
import { useMutation } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import toast from 'react-hot-toast'

export default function NovoEventoPage(){
  const [form, setForm] = React.useState({
    title: '',
    all_day: false,
    start: '',
    end: '',
    category: 'escola',
    location: '',
    is_virtual: false,
    virtual_meeting_url: '',
  })
  const [desc, setDesc] = React.useState('')

  const create = useMutation({
    mutationFn: async () => {
      if (!form.title || !form.start || !form.end) throw new Error('Preencha título e datas')
      const payload: any = {
        title: form.title,
        description: desc,
        start_datetime: new Date(form.start).toISOString(),
        end_datetime: new Date(form.end).toISOString(),
        all_day: form.all_day,
        category: form.category,
        location: form.location || undefined,
        is_virtual: form.is_virtual,
        virtual_meeting_url: form.is_virtual && form.virtual_meeting_url ? form.virtual_meeting_url : undefined,
      }
      return apiClient.createEvent(payload)
    },
    onSuccess: () => { toast.success('Evento criado'); window.location.href = '/app/calendario' },
    onError: (e: any) => toast.error(e?.message || 'Falha ao criar evento'),
  })

  const onToolbar = (cmd: string) => {
    document.execCommand(cmd)
  }

  return (
    <AppShell title="Novo evento" userRole="gestao" nav={[{ id: 'cal', label: 'Calendário', href: '/app/calendario' }]}>
      <section className="space-y-4">
        <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="text-sm">Título
              <input className="mt-1 w-full rounded border px-2 py-2" value={form.title} onChange={e=>setForm(f=>({...f, title: e.target.value}))} />
            </label>
            <label className="text-sm">Categoria
              <select className="mt-1 w-full rounded border px-2 py-2" value={form.category} onChange={e=>setForm(f=>({...f, category: e.target.value}))}>
                <option value="escola">Escola</option>
                <option value="clube">Clube</option>
                <option value="prazo">Prazo</option>
                <option value="passeio">Passeio</option>
              </select>
            </label>
            <label className="text-sm">Início
              <input type="datetime-local" className="mt-1 w-full rounded border px-2 py-2" value={form.start} onChange={e=>setForm(f=>({...f, start: e.target.value}))} />
            </label>
            <label className="text-sm">Fim
              <input type="datetime-local" className="mt-1 w-full rounded border px-2 py-2" value={form.end} onChange={e=>setForm(f=>({...f, end: e.target.value}))} />
            </label>
            <label className="text-sm flex items-center gap-2">
              <input type="checkbox" checked={form.all_day} onChange={e=>setForm(f=>({...f, all_day: e.currentTarget.checked}))} /> Dia inteiro
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="text-sm">Local
                <input className="mt-1 w-full rounded border px-2 py-2" value={form.location} onChange={e=>setForm(f=>({...f, location: e.target.value}))} />
              </label>
              <label className="text-sm flex items-center gap-2">
                <input type="checkbox" checked={form.is_virtual} onChange={e=>setForm(f=>({...f, is_virtual: e.currentTarget.checked}))} /> Evento virtual
              </label>
              {form.is_virtual && (
                <label className="text-sm md:col-span-2">Link de reunião
                  <input className="mt-1 w-full rounded border px-2 py-2" value={form.virtual_meeting_url} onChange={e=>setForm(f=>({...f, virtual_meeting_url: e.target.value}))} />
                </label>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4">
          <div className="text-sm font-medium mb-2">Descrição</div>
          <div className="flex items-center gap-2 mb-2 text-sm">
            <button type="button" className="px-2 py-1 rounded border" onClick={()=>onToolbar('bold')}>N</button>
            <button type="button" className="px-2 py-1 rounded border" onClick={()=>onToolbar('italic')}>Itálico</button>
            <button type="button" className="px-2 py-1 rounded border" onClick={()=>onToolbar('underline')}>Sublinhar</button>
            <button type="button" className="px-2 py-1 rounded border" onClick={()=>onToolbar('insertUnorderedList')}>• Lista</button>
            <button type="button" className="px-2 py-1 rounded border" onClick={()=>{ const url = prompt('URL'); if(url) document.execCommand('createLink', false, url) }}>Link</button>
          </div>
          <div
            className="min-h-[160px] rounded border p-3 prose dark:prose-invert max-w-none"
            contentEditable
            onInput={(e)=> setDesc((e.target as HTMLElement).innerHTML)}
            suppressContentEditableWarning
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded bg-amber-600 text-white disabled:opacity-60" onClick={()=>create.mutate()} disabled={create.isPending}>Salvar</button>
          <a className="px-4 py-2 rounded border" href="/app/calendario">Cancelar</a>
        </div>
      </section>
    </AppShell>
  )
}
