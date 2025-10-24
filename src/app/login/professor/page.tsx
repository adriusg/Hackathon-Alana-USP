'use client'

import LoginForm from '@/components/auth/LoginForm'

export default function LoginProfessorPage(){
  return (
    <LoginForm
      title="Login do Professor"
      expectedRoles={['teacher']}
      redirectByRole={{ teacher: '/app/prof' }}
    />
  )
}
