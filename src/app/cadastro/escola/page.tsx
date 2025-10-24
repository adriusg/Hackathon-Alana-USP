'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CadastroEscolaRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/cadastre-sua-escola')
  }, [router])
  return null
}
