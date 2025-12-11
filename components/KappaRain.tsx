'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForgeStore } from '@/lib/store'

export function KappaRain() {
  const { showKappaRain } = useForgeStore()

  useEffect(() => {
    if (!showKappaRain) return

    const audio = new Audio('/sounds/kappa.mp3') // Add this sound file
    audio.volume = 0.3
    audio.play().catch(() => {}) // Ignore if audio fails

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [showKappaRain])

  if (!showKappaRain) return null

  // Generate random Kappas
  const kappas = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    rotation: Math.random() * 360,
  }))

  return (
    <AnimatePresence>
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        {kappas.map((kappa) => (
          <motion.div
            key={kappa.id}
            initial={{ y: -100, x: `${kappa.left}vw`, opacity: 0, rotate: 0 }}
            animate={{
              y: '110vh',
              opacity: [0, 1, 1, 0],
              rotate: kappa.rotation,
            }}
            transition={{
              duration: kappa.duration,
              delay: kappa.delay,
              ease: 'linear',
            }}
            className="absolute text-6xl"
            style={{ left: 0 }}
          >
            <div className="animate-pulse-glow">
              {/* Kappa Emote - Using a similar emoji */}
              😏
            </div>
          </motion.div>
        ))}

        {/* Overlay Message */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-strong p-8 rounded-2xl text-center neon-glow-violet"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text mb-4">
            KAPPA PRIDE
          </h2>
          <p className="text-gray-300 text-xl font-body">
            Tu as trouvé l'easter egg ! 🎉
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
