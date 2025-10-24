'use client'

import LoginForm from '@/components/auth/LoginForm'

export default function LoginEscolaPage(){
  return (
    <LoginForm
      title="Login da Escola (Gestão)"
      expectedRoles={['manager']}
      redirectByRole={{ manager: '/app/gestao' }}
    />
  )
}
