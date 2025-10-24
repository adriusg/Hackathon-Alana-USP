'use client'

import LoginForm from '@/components/auth/LoginForm'

export default function LoginAlunoPage(){
  return (
    <LoginForm
      title="Login do Aluno"
      expectedRoles={['student']}
      redirectByRole={{ student: '/app/aluno' }}
    />
  )
}
