'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function AcessoPage() {
  const router = useRouter()
  React.useEffect(() => { router.replace('/login') }, [router])
  return null
}
