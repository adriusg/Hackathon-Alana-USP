'use client'

import LoginForm from '@/components/auth/LoginForm'

export default function LoginGestorPage(){
  return (
    <LoginForm
      title="Login do Gestor"
      expectedRoles={['manager']}
      redirectByRole={{ manager: '/app/gestao' }}
    />
  )
}
