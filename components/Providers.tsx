'use client'

import { useEffect } from 'react'
import { useForgeStore } from '@/lib/store'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Easter egg listener
    let konami = ''
    const handleKeyPress = (e: KeyboardEvent) => {
      konami += e.key.toUpperCase()
      if (konami.includes('KAPPAPRIDE')) {
        useForgeStore.getState().triggerKappaRain()
        konami = ''
      }
      if (konami.length > 20) konami = konami.slice(-20)
    }

    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [])

  return <>{children}</>
}
