"use client"

import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import toast from 'react-hot-toast'

export function EventList({ startISO, endISO, canManage = false }: { startISO: string; endISO: string; canManage?: boolean }) {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['events','month', startISO, endISO],
    queryFn: () => apiClient.listEvents({ start: startISO, end: endISO }),
    staleTime: 30_000,
  })

  const [editingId, setEditingId] = React.useState<number | null>(null)
  const [form, setForm] = React.useState<{ title: string; date: string; timeStart: string; timeEnd: string; category: string }>({
    title: '',
    date: new Date().toISOString().slice(0,10),
    timeStart: '09:00',
    timeEnd: '10:00',
    category: 'escola',
  })

  const startEdit = (ev: any) => {
    const sd = new Date(ev.start_datetime)
    const ed = new Date(ev.end_datetime)
    setEditingId(ev.id)
    setForm({
      title: ev.title || '',
      date: sd.toISOString().slice(0,10),
      timeStart: sd.toTimeString().slice(0,5),
      timeEnd: ed.toTimeString().slice(0,5),
      category: ev.category || 'escola',
    })
  }

  const cancelEdit = () => setEditingId(null)

  const updateMutation = useMutation({
    mutationFn: async () => {
      if (!editingId) return
      const start = new Date(`${form.date}T${form.timeStart}:00`)
      const end = new Date(`${form.date}T${form.timeEnd}:00`)
      return apiClient.updateEvent(editingId, {
        title: form.title,
        category: form.category,
        start_datetime: start.toISOString(),
        end_datetime: end.toISOString(),
      })
    },
    onSuccess: () => {
      toast.success('Evento atualizado')
      setEditingId(null)
      queryClient.invalidateQueries({ queryKey: ['events','month'] })
      queryClient.invalidateQueries({ queryKey: ['events','week'] })
    },
    onError: () => toast.error('Falha ao atualizar evento'),
  })

  const deleteMutation = useMutation({
    mutationFn: (id: number) => apiClient.deleteEvent(id),
    onSuccess: () => {
      toast.success('Evento excluído')
      queryClient.invalidateQueries({ queryKey: ['events','month'] })
      queryClient.invalidateQueries({ queryKey: ['events','week'] })
    },
    onError: () => toast.error('Falha ao excluir evento'),
  })

  const rsvpMutation = useMutation({
    mutationFn: ({ id, response }: { id: number; response: 'going'|'maybe'|'not_going' }) => apiClient.rsvpEvent(id, { response }),
    onSuccess: (_data, variables) => {
      toast.success('RSVP atualizado')
      setMyRsvps((m) => ({ ...m, [variables.id]: variables.response }))
    },
    onError: () => toast.error('Falha ao enviar RSVP'),
  })

  const [myRsvps, setMyRsvps] = React.useState<Record<number, string>>({})
  const loadMyRsvp = async (id: number) => {
    try {
      const r = await apiClient.getMyRSVP(id)
      if (r) setMyRsvps((m) => ({ ...m, [id]: r.response }))
    } catch {}
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  return (
    <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-semibold">Eventos do mês</div>
      </div>
      {isLoading && <div className="text-sm text-gray-600 dark:text-gray-400">Carregando...</div>}
      {isError && <div className="text-sm text-red-600">Erro ao carregar eventos</div>}
      {!isLoading && !isError && (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800 text-left">
              <tr>
                <th className="px-3 py-2">Título</th>
                <th className="px-3 py-2">Data</th>
                <th className="px-3 py-2">Início</th>
                <th className="px-3 py-2">Fim</th>
                <th className="px-3 py-2">Categoria</th>
                <th className="px-3 py-2">RSVP</th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {(data || []).map((ev: any) => (
                <tr key={ev.id} className="border-t border-gray-100 dark:border-gray-800">
                  {editingId === ev.id ? (
                    <>
                      <td className="px-3 py-2"><input name="title" value={form.title} onChange={onChange} className="w-full rounded border px-2 py-1" /></td>
                      <td className="px-3 py-2"><input type="date" name="date" value={form.date} onChange={onChange} className="w-full rounded border px-2 py-1" /></td>
                      <td className="px-3 py-2"><input type="time" name="timeStart" value={form.timeStart} onChange={onChange} className="w-full rounded border px-2 py-1" /></td>
                      <td className="px-3 py-2"><input type="time" name="timeEnd" value={form.timeEnd} onChange={onChange} className="w-full rounded border px-2 py-1" /></td>
                      <td className="px-3 py-2">
                        <select name="category" value={form.category} onChange={onChange} className="w-full rounded border px-2 py-1">
                          <option value="escola">Escola</option>
                          <option value="clube">Clube</option>
                          <option value="passeio">Passeio</option>
                          <option value="prazo">Prazo</option>
                        </select>
                      </td>
                      <td className="px-3 py-2 text-xs text-gray-500">—</td>
                      <td className="px-3 py-2">
                        {canManage && (
                          <div className="flex gap-2">
                            <button className="px-2 py-1 rounded bg-amber-600 text-white" onClick={()=>updateMutation.mutate()} disabled={updateMutation.isPending}>Salvar</button>
                            <button className="px-2 py-1 rounded border" onClick={cancelEdit}>Cancelar</button>
                          </div>
                        )}
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-3 py-2">{ev.title}</td>
                      <td className="px-3 py-2">{new Date(ev.start_datetime).toLocaleDateString('pt-BR')}</td>
                      <td className="px-3 py-2">{new Date(ev.start_datetime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</td>
                      <td className="px-3 py-2">{new Date(ev.end_datetime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</td>
                      <td className="px-3 py-2">{ev.category || '-'}</td>
                      <td className="px-3 py-2">
                        {ev.requires_rsvp ? (
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs text-gray-500">Meu: {myRsvps[ev.id] || '-'}</span>
                            <button className="px-2 py-1 rounded border" onClick={()=>loadMyRsvp(Number(ev.id))}>Ver</button>
                            <button className="px-2 py-1 rounded border" onClick={()=>rsvpMutation.mutate({ id: Number(ev.id), response: 'going' })} disabled={rsvpMutation.isPending}>Vou</button>
                            <button className="px-2 py-1 rounded border" onClick={()=>rsvpMutation.mutate({ id: Number(ev.id), response: 'maybe' })} disabled={rsvpMutation.isPending}>Talvez</button>
                            <button className="px-2 py-1 rounded border" onClick={()=>rsvpMutation.mutate({ id: Number(ev.id), response: 'not_going' })} disabled={rsvpMutation.isPending}>Não vou</button>
                          </div>
                        ) : (
                          <span className="text-xs text-gray-500">—</span>
                        )}
                      </td>
                      <td className="px-3 py-2">
                        {canManage && (
                          <div className="flex gap-2">
                            <button className="px-2 py-1 rounded border" onClick={()=>startEdit(ev)}>Editar</button>
                            <button className="px-2 py-1 rounded border text-red-700" onClick={()=>deleteMutation.mutate(Number(ev.id))}>Excluir</button>
                          </div>
                        )}
                      </td>
                    </>
                  )}
                </tr>
              ))}
              {(!data || data.length === 0) && (
                <tr><td className="px-3 py-4 text-gray-500" colSpan={7}>Nenhum evento encontrado.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
