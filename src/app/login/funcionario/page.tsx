'use client'

import LoginForm from '@/components/auth/LoginForm'

export default function LoginFuncionarioPage(){
  return (
    <LoginForm
      title="Login do Funcionário"
      expectedRoles={['staff']}
      redirectByRole={{ staff: '/app/func' }}
    />
  )
}
