'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { User, Briefcase, Users, GraduationCap, Shield } from 'lucide-react'

const USER_TYPES = [
  { id: 'student', label: 'Aluno', icon: GraduationCap, color: 'text-blue-600' },
  { id: 'guardian', label: 'Responsável', icon: Users, color: 'text-green-600' },
  { id: 'teacher', label: 'Professor', icon: User, color: 'text-purple-600' },
  { id: 'staff', label: 'Funcionário', icon: Briefcase, color: 'text-orange-600' },
  { id: 'manager', label: 'Gestor', icon: Shield, color: 'text-red-600' },
]

const LOGIN_ROUTES: Record<string, string> = {
  student: '/login/aluno',
  guardian: '/login/responsavel',
  teacher: '/login/professor',
  staff: '/login/funcionario',
  manager: '/login/gestor',
}

const SIGNUP_LABELS: Record<string, string> = {
  student: 'Criar conta de aluno',
  guardian: 'Criar conta de responsável',
  teacher: 'Criar conta de professor',
  staff: 'Criar conta de funcionário',
  manager: 'Criar conta de gestor',
}

export default function LoginPage() {
  const [selectedType] = useState<string>('')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 p-4">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Bem-vindo à Plataforma Solar</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Selecione seu perfil e faça login
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {USER_TYPES.map((type) => {
            const Icon = type.icon
            const href = LOGIN_ROUTES[type.id]
            return (
              <Link key={type.id} href={href} className="block">
                <Card className="transition-all hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <CardContent className="flex flex-col items-center justify-center p-6 min-h-[200px]">
                    <Icon className={`h-12 w-12 mb-4 ${type.color}`} />
                    <h3 className="text-lg font-semibold text-center">
                      {type.label}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Precisa cadastrar a escola? <Link href="/cadastro/escola" className="text-primary hover:underline">Cadastre sua escola</Link>
        </div>
      </div>
    </div>
  )
}
