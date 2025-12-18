'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { SetupConfigurator } from '@/components/sections/SetupConfigurator'
import { Academy } from '@/components/sections/Academy'
import { Footer } from '@/components/Footer'
import { KappaRain } from '@/components/KappaRain'
import { BackgroundAudio } from '@/components/BackgroundAudio'

// Dynamic imports for 3D components (client-side only)
const ParticleBackground = dynamic(
  () => import('@/components/3d/ParticleBackground').then((mod) => mod.ParticleBackground),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="relative min-h-screen bg-forge-black text-white overflow-x-hidden">
      {/* Background Audio */}
      <BackgroundAudio />

      {/* Particle Background */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Setup Configurator */}
        <SetupConfigurator />

        {/* Academy Section */}
        <Academy />

        {/* Footer */}
        <Footer />
      </div>

      {/* Easter Eggs */}
      <KappaRain />

      {/* Scroll-to-top indicator could be added here */}
    </main>
  )
}

