'use client'

import LoginForm from '@/components/auth/LoginForm'

export default function LoginResponsavelPage(){
  return (
    <LoginForm
      title="Login do Responsável"
      expectedRoles={['guardian']}
      redirectByRole={{ guardian: '/app/responsavel' }}
    />
  )
}
