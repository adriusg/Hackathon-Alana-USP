"use client"

import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import toast from 'react-hot-toast'

export function EventDetailsDrawer({ eventId, open, onClose }: { eventId: number | null; open: boolean; onClose: () => void }) {
  const queryClient = useQueryClient()

  const { data: ev, isLoading: evLoading, isError: evError } = useQuery({
    queryKey: ['event', eventId],
    queryFn: () => apiClient.getEvent(Number(eventId)),
    enabled: open && !!eventId,
    staleTime: 15_000,
  })

  const { data: myRsvp } = useQuery({
    queryKey: ['event', eventId, 'myrsvp'],
    queryFn: () => apiClient.getMyRSVP(Number(eventId)),
    enabled: open && !!eventId,
    staleTime: 10_000,
  })

  const rsvpMutation = useMutation({
    mutationFn: (response: 'going'|'maybe'|'not_going') => apiClient.rsvpEvent(Number(eventId), { response }),
    onSuccess: () => {
      toast.success('RSVP atualizado')
      queryClient.invalidateQueries({ queryKey: ['event', eventId, 'myrsvp'] })
    },
    onError: () => toast.error('Falha ao enviar RSVP'),
  })

  const visible = open && !!eventId
  const close = () => onClose()

  return (
    <div className={`fixed inset-0 z-50 ${visible ? '' : 'pointer-events-none'}`} aria-hidden={!visible}>
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`}
        onClick={close}
      />
      {/* drawer */}
      <aside
        role="dialog"
        aria-label="Detalhes do evento"
        className={`absolute right-0 top-0 h-full w-full sm:w-[460px] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-xl transition-transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <div className="font-semibold">Detalhes do evento</div>
          <button onClick={close} aria-label="Fechar" className="rounded border px-2 py-1">✕</button>
        </div>

        <div className="p-4 space-y-3 overflow-auto h-[calc(100%-56px)]">
          {evLoading && <div className="text-sm text-gray-600 dark:text-gray-400">Carregando...</div>}
          {evError && <div className="text-sm text-red-600">Erro ao carregar evento</div>}
          {!evLoading && !evError && ev && (
            <>
              <div>
                <div className="text-xl font-bold mb-1">{ev.title}</div>
                {ev.description && <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{ev.description}</div>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="rounded border p-3">
                  <div className="text-xs text-gray-500">Início</div>
                  <div className="font-medium">{new Date(ev.start_datetime).toLocaleString('pt-BR')}</div>
                </div>
                <div className="rounded border p-3">
                  <div className="text-xs text-gray-500">Fim</div>
                  <div className="font-medium">{new Date(ev.end_datetime).toLocaleString('pt-BR')}</div>
                </div>
                <div className="rounded border p-3">
                  <div className="text-xs text-gray-500">Categoria</div>
                  <div className="font-medium">{ev.category || '-'}</div>
                </div>
                <div className="rounded border p-3">
                  <div className="text-xs text-gray-500">Modalidade</div>
                  <div className="font-medium">{ev.is_virtual ? 'Virtual' : 'Presencial'}</div>
                </div>
              </div>

              {(ev.location || ev.virtual_meeting_url) && (
                <div className="rounded border p-3 text-sm">
                  <div className="font-semibold mb-1">Local</div>
                  {ev.location && <div>{ev.location}{ev.location_details ? ` — ${ev.location_details}` : ''}</div>}
                  {ev.virtual_meeting_url && (
                    <div>
                      Link: <a href={ev.virtual_meeting_url} className="text-amber-700 hover:underline" target="_blank" rel="noreferrer">{ev.virtual_meeting_url}</a>
                    </div>
                  )}
                </div>
              )}

              {(Array.isArray(ev.accessibility_features) && ev.accessibility_features.length > 0) || ev.accessibility_notes ? (
                <div className="rounded border p-3 text-sm">
                  <div className="font-semibold mb-1">Acessibilidade</div>
                  {Array.isArray(ev.accessibility_features) && ev.accessibility_features.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {ev.accessibility_features.map((f: string, idx: number) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  )}
                  {ev.accessibility_notes && <div className="mt-2 text-gray-700 dark:text-gray-300">{ev.accessibility_notes}</div>}
                </div>
              ) : null}

              <div className="rounded border p-3 text-sm">
                <div className="font-semibold mb-2">RSVP</div>
                {ev.requires_rsvp ? (
                  <div className="space-y-2">
                    <div className="text-xs text-gray-500">Meu RSVP: <span className="font-medium">{myRsvp?.response || '-'}</span></div>
                    {ev.rsvp_deadline && (
                      <div className="text-xs text-gray-500">Prazo: {new Date(ev.rsvp_deadline).toLocaleString('pt-BR')}</div>
                    )}
                    <div className="flex items-center gap-2 flex-wrap">
                      <button className="px-2 py-1 rounded border" onClick={()=>rsvpMutation.mutate('going')} disabled={rsvpMutation.isPending}>Vou</button>
                      <button className="px-2 py-1 rounded border" onClick={()=>rsvpMutation.mutate('maybe')} disabled={rsvpMutation.isPending}>Talvez</button>
                      <button className="px-2 py-1 rounded border" onClick={()=>rsvpMutation.mutate('not_going')} disabled={rsvpMutation.isPending}>Não vou</button>
                    </div>
                  </div>
                ) : (
                  <div className="text-xs text-gray-500">Este evento não solicita RSVP.</div>
                )}
              </div>
            </>
          )}
        </div>
      </aside>
    </div>
  )
}
