"use client"

import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import toast from 'react-hot-toast'

export function EventQuickForm() {
  const queryClient = useQueryClient()
  const [form, setForm] = React.useState({
    title: '',
    date: new Date().toISOString().slice(0,10),
    timeStart: '09:00',
    timeEnd: '10:00',
    category: 'escola',
    allDay: false,
    requiresRsvp: false,
    rsvpDeadline: '',
    allowGuests: false,
    maxAttendees: '' as any,
  })
  const [lastCreated, setLastCreated] = React.useState<{ id: number; title: string } | null>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    setForm(f => ({ ...f, [name]: value as any }))
  }

  const mutation = useMutation({
    mutationFn: async () => {
      const start = new Date(`${form.date}T${form.timeStart}:00`)
      const end = new Date(`${form.date}T${form.timeEnd}:00`)
      const payload = {
        title: form.title,
        start_datetime: start.toISOString(),
        end_datetime: end.toISOString(),
        all_day: form.allDay,
        category: form.category,
        requires_rsvp: form.requiresRsvp,
        rsvp_deadline: form.rsvpDeadline ? new Date(form.rsvpDeadline).toISOString() : undefined,
        allow_guests: form.allowGuests,
        max_attendees: form.maxAttendees ? Number(form.maxAttendees) : undefined,
      }
      return apiClient.createEvent(payload)
    },
    onSuccess: (data: any) => {
      setForm(f => ({ ...f, title: '' }))
      if (data && typeof data.id === 'number') {
        setLastCreated({ id: Number(data.id), title: String(data.title || 'Evento') })
      }
      queryClient.invalidateQueries({ queryKey: ['events','month'] })
      queryClient.invalidateQueries({ queryKey: ['events','week'] })
      toast.success('Evento criado')
    },
    onError: () => toast.error('Falha ao criar evento')
  })

  const deleteLast = useMutation({
    mutationFn: async () => {
      if (!lastCreated) return
      return apiClient.deleteEvent(lastCreated.id)
    },
    onSuccess: () => {
      setLastCreated(null)
      queryClient.invalidateQueries({ queryKey: ['events','month'] })
      queryClient.invalidateQueries({ queryKey: ['events','week'] })
      toast.success('Evento excluído')
    },
    onError: () => toast.error('Falha ao excluir evento')
  })

  return (
    <div className="rounded-xl border bg-white border-gray-200 p-4">
      <div className="text-sm font-semibold mb-3">Criar evento rápido</div>
      <form onSubmit={(e)=>{e.preventDefault(); if(!form.title) return; mutation.mutate()}} className="grid grid-cols-1 md:grid-cols-6 gap-2 items-end">
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Título</label>
          <input name="title" value={form.title} onChange={onChange} className="w-full rounded border px-2 py-1" placeholder="Ex.: Reunião de pais" />
        </div>
        <div>
          <label className="block text-sm mb-1">Data</label>
          <input type="date" name="date" value={form.date} onChange={onChange} className="w-full rounded border px-2 py-1" />
        </div>
        <div className="flex gap-2">
          <div>
            <label className="block text-sm mb-1">Início</label>
            <input type="time" name="timeStart" value={form.timeStart} onChange={onChange} className="w-full rounded border px-2 py-1" />
          </div>
          <div>
            <label className="block text-sm mb-1">Fim</label>
            <input type="time" name="timeEnd" value={form.timeEnd} onChange={onChange} className="w-full rounded border px-2 py-1" />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1">Categoria</label>
          <select name="category" value={form.category} onChange={onChange} className="w-full rounded border px-2 py-1">
            <option value="escola">Escola</option>
            <option value="clube">Clube</option>
            <option value="passeio">Passeio</option>
            <option value="prazo">Prazo</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">RSVP</label>
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="requiresRsvp" checked={form.requiresRsvp} onChange={onChange} /> Solicitar RSVP</label>
          </div>
          {form.requiresRsvp && (
            <div className="mt-2 space-y-2">
              <label className="block text-sm">
                Prazo do RSVP
                <input type="datetime-local" name="rsvpDeadline" value={form.rsvpDeadline} onChange={onChange} className="w-full rounded border px-2 py-1 mt-1" />
              </label>
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="allowGuests" checked={form.allowGuests} onChange={onChange} /> Permitir acompanhantes</label>
                <input type="number" name="maxAttendees" value={form.maxAttendees} onChange={onChange} placeholder="Vagas" className="w-24 rounded border px-2 py-1 text-sm" />
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="allDay" checked={form.allDay} onChange={onChange} /> Dia inteiro</label>
          <button type="submit" disabled={!form.title || mutation.isPending} className="ml-auto px-3 py-2 rounded bg-amber-600 text-white disabled:opacity-60">{mutation.isPending?'Criando...':'Criar'}</button>
        </div>
      </form>
      {lastCreated && (
        <div className="mt-3 flex items-center justify-between rounded border border-amber-200 bg-amber-50 p-2 text-sm">
          <div>
            Último evento criado: <span className="font-medium">{lastCreated.title}</span>
          </div>
          <button
            className="px-3 py-1 rounded border border-amber-300 text-amber-800 hover:bg-amber-100"
            onClick={()=> deleteLast.mutate()}
            disabled={deleteLast.isPending}
          >Excluir</button>
        </div>
      )}
    </div>
  )
}
