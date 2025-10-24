"use client"

import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'

type SummaryItem = { category: string; total: number; prioridade: number }

export function NotificationsBell() {
  const [open, setOpen] = React.useState(false)
  const [mutedUntil, setMutedUntil] = React.useState<number | null>(null)
  const queryClient = useQueryClient()

  const { data: summary } = useQuery({
    queryKey: ['notifications','summary'],
    queryFn: () => apiClient.getNotificationsSummary(),
    staleTime: 30_000,
  })

  const { data: prefs } = useQuery({
    queryKey: ['notifications','preferences'],
    queryFn: () => apiClient.getNotificationPreferences(),
    staleTime: 60_000,
  })

  const [channels, setChannels] = React.useState({ app: true, email: true, sms: false })
  React.useEffect(() => {
    if (prefs?.preferences?.default) {
      const p = prefs.preferences.default
      setChannels({ app: !!p.in_app, email: !!p.email, sms: !!p.sms })
    }
  }, [prefs])

  const markAllReadMutation = useMutation({
    mutationFn: () => apiClient.markAllNotificationsRead(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notifications','summary'] }),
  })

  const updatePrefsMutation = useMutation({
    mutationFn: (payload: any) => apiClient.updateNotificationPreferences(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notifications','preferences'] }),
  })

  const items: SummaryItem[] = Array.isArray(summary?.items) ? summary.items : []
  const total = typeof summary?.total === 'number' ? summary.total : 0
  const now = Date.now()
  const isMuted = mutedUntil !== null && mutedUntil > now

  const markAllRead = () => markAllReadMutation.mutate()

  const silence24h = () => setMutedUntil(Date.now() + 24 * 60 * 60 * 1000)

  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className={`relative rounded-full p-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 ${isMuted ? 'opacity-60' : ''}`}
        aria-label="Notificações"
      >
        <span aria-hidden>🔔</span>
        {total > 0 && (
          <span className="absolute -top-1 -right-1 text-[10px] leading-none bg-red-600 text-white rounded-full px-1.5 py-0.5">
            {total}
          </span>
        )}
      </button>

      {open && (
        <div role="dialog" aria-label="Notificações" className="absolute right-0 mt-2 w-[360px] max-w-[90vw] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl z-50">
          <div className="p-3 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <div className="font-semibold">Notificações</div>
            <div className="text-xs text-gray-500">{isMuted ? 'Silenciado' : 'Ativo'}</div>
          </div>

          <div className="max-h-[360px] overflow-auto divide-y divide-gray-100 dark:divide-gray-800">
            {items.length === 0 ? (
              <div className="p-3 text-sm text-gray-500">Sem novas notificações</div>
            ) : (
              items.map((it) => (
                <div key={it.category} className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{it.category}</div>
                    <div className="text-xs text-gray-500">{it.total} não lidos • {it.prioridade} prioridade</div>
                  </div>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li className="text-gray-500">Abra a lista para ver detalhes</li>
                  </ul>
                </div>
              ))
            )}
          </div>

          <div className="p-3 border-t border-gray-200 dark:border-gray-800 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="font-medium">Canais</div>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1"><input type="checkbox" checked={channels.app} onChange={(e)=>{ const v=e.currentTarget.checked; setChannels({...channels, app:v}); updatePrefsMutation.mutate({ preferences: { default: { in_app: v, email: channels.email, sms: channels.sms }}})}}/> app</label>
                <label className="flex items-center gap-1"><input type="checkbox" checked={channels.email} onChange={(e)=>{ const v=e.currentTarget.checked; setChannels({...channels, email:v}); updatePrefsMutation.mutate({ preferences: { default: { in_app: channels.app, email: v, sms: channels.sms }}})}}/> e-mail</label>
                <label className="flex items-center gap-1"><input type="checkbox" checked={channels.sms} onChange={(e)=>{ const v=e.currentTarget.checked; setChannels({...channels, sms:v}); updatePrefsMutation.mutate({ preferences: { default: { in_app: channels.app, email: channels.email, sms: v }}})}}/> SMS</label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button className="text-sm text-amber-700 hover:underline" onClick={markAllRead}>Marcar tudo como lido</button>
              <div className="flex items-center gap-3">
                <button className="text-sm text-gray-600 hover:underline" onClick={silence24h}>Silenciar 24h</button>
                <a href="/app/notificacoes" className="text-sm text-amber-700 hover:underline">Abrir lista</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
