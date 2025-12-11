'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { SetupConfigurator } from '@/components/sections/SetupConfigurator'
import { Material } from '@/components/sections/Material'
import { Academy } from '@/components/sections/Academy'
import { Community } from '@/components/sections/Community'
import { HallOfFame } from '@/components/sections/HallOfFame'
import { Footer } from '@/components/Footer'
import { KappaRain } from '@/components/KappaRain'

// Dynamic imports for 3D components (client-side only)
const ParticleBackground = dynamic(
  () => import('@/components/3d/ParticleBackground').then((mod) => mod.ParticleBackground),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="relative min-h-screen bg-forge-black text-white overflow-x-hidden">
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

        {/* Material Section */}
        <Material />

        {/* Academy Section */}
        <Academy />

        {/* Community Section */}
        <Community />

        {/* Hall of Fame */}
        <HallOfFame />

        {/* Footer */}
        <Footer />
      </div>

      {/* Easter Eggs */}
      <KappaRain />

      {/* Scroll-to-top indicator could be added here */}
    </main>
  )
}
