"use client"

import React from 'react'
import { AppShell } from '@/components/app/AppShell'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import toast from 'react-hot-toast'

export default function NotificacoesPage() {
  const queryClient = useQueryClient()

  // Papel do usuário para header correto
  const { data: me } = useQuery({
    queryKey: ['auth','me'],
    queryFn: () => apiClient.getMe(),
    staleTime: 60_000,
  })
  const roles: string[] = (me?.roles || []) as string[]
  const roleLabel: 'aluno'|'prof'|'func'|'gestao'|'responsavel' =
    roles.includes('manager') ? 'gestao' :
    roles.includes('teacher') ? 'prof' :
    roles.includes('staff') ? 'func' :
    roles.includes('guardian') ? 'responsavel' : 'aluno'

  // Filtros
  const [filters, setFilters] = React.useState<{ category: string; unread_only: boolean }>({ category: '', unread_only: false })

  const { data: list, isLoading, isError } = useQuery({
    queryKey: ['notifications','list', filters.category, filters.unread_only],
    queryFn: () => apiClient.listNotifications({ category: filters.category || undefined, unread_only: filters.unread_only }),
    staleTime: 15_000,
  })

  const markAll = useMutation({
    mutationFn: () => apiClient.markAllNotificationsRead(),
    onSuccess: () => {
      toast.success('Todas marcadas como lidas')
      queryClient.invalidateQueries({ queryKey: ['notifications'] })
    },
  })

  const markOne = useMutation({
    mutationFn: (id: number) => apiClient.markNotificationRead(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] })
    },
  })

  const items = Array.isArray(list) ? list : []

  return (
    <AppShell title="Notificações" userRole={roleLabel} nav={[{ id: 'notif', label: 'Notificações' }]}> 
      <section className="space-y-4">
        <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-3">
          <div className="flex flex-wrap items-end gap-3">
            <div>
              <label className="block text-sm mb-1">Categoria</label>
              <input
                value={filters.category}
                onChange={(e)=>setFilters(f=>({ ...f, category: e.target.value }))}
                className="rounded border px-2 py-1"
                placeholder="Ex.: comunicados"
              />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={filters.unread_only} onChange={(e)=>setFilters(f=>({ ...f, unread_only: e.currentTarget.checked }))} />
              Apenas não lidas
            </label>
            <button
              className="ml-auto px-3 py-2 rounded bg-amber-600 text-white disabled:opacity-60"
              onClick={()=>markAll.mutate()}
              disabled={markAll.isPending || items.length===0}
            >Marcar tudo como lido</button>
          </div>
        </div>

        <div className="rounded-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-x-auto">
          {isLoading && <div className="p-4 text-sm text-gray-600 dark:text-gray-400">Carregando...</div>}
          {isError && <div className="p-4 text-sm text-red-600">Erro ao carregar notificações</div>}
          {!isLoading && !isError && (
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800 text-left">
                <tr>
                  <th className="px-3 py-2">Categoria</th>
                  <th className="px-3 py-2">Título</th>
                  <th className="px-3 py-2">Mensagem</th>
                  <th className="px-3 py-2">Prioridade</th>
                  <th className="px-3 py-2">Criada em</th>
                  <th className="px-3 py-2 w-[220px]">Ações</th>
                </tr>
              </thead>
              <tbody>
                {items.map((n: any) => (
                  <tr key={n.id} className="border-t border-gray-100 dark:border-gray-800">
                    <td className="px-3 py-2">{n.category || '-'}</td>
                    <td className="px-3 py-2 font-medium">{n.title}</td>
                    <td className="px-3 py-2">{n.message}</td>
                    <td className="px-3 py-2">{n.priority}</td>
                    <td className="px-3 py-2">{new Date(n.created_at).toLocaleString('pt-BR')}</td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {n.action_url && (
                          <a href={n.action_url} className="px-2 py-1 rounded border" target="_blank" rel="noreferrer">Abrir</a>
                        )}
                        {!n.read ? (
                          <button className="px-2 py-1 rounded border" onClick={()=>markOne.mutate(Number(n.id))} disabled={markOne.isPending}>Marcar como lida</button>
                        ) : (
                          <span className="text-xs text-gray-500">Lida</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {items.length === 0 && (
                  <tr><td className="px-3 py-4 text-gray-500" colSpan={6}>Nenhuma notificação.</td></tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </AppShell>
  )
}
