'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ChevronDown, Sparkles, Zap } from 'lucide-react'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const title = "FORGE TON EMPIRE EN DIRECT"
  const subtitle = "Du premier stream à 100k followers – tout le matos, toutes les astuces, toute la vérité."

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-forge-black/50 via-forge-black/70 to-forge-black z-10" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.coverr.co/videos/coverr-neon-lit-gaming-setup-8657/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-20 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center space-x-2 glass px-4 py-2 rounded-full"
        >
          <Sparkles className="w-4 h-4 text-forge-cyan" />
          <span className="text-sm font-mono text-forge-cyan">La Référence Absolue du Streaming FR</span>
        </motion.div>

        {/* Animated Title */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-4xl md:text-6xl lg:text-8xl font-black mb-6 leading-tight"
        >
          {title.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={char === ' ' ? 'inline-block w-4' : 'inline-block gradient-text'}
              style={{
                textShadow: '0 0 40px rgba(139, 0, 255, 0.5)',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-body text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            variant="primary"
            size="xl"
            glow
            className="group"
            onClick={() => document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Construis ton Setup Idéal
          </Button>

          <Button
            variant="ghost"
            size="xl"
            onClick={() => document.getElementById('academy')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Découvrir l'Académie
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '500+', label: 'Produits Testés' },
            { value: '100+', label: 'Guides Détaillés' },
            { value: '20K+', label: 'Communauté' },
            { value: '100%', label: 'Gratuit' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-xl"
            >
              <div className="font-display text-3xl md:text-4xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="font-body text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm font-mono text-gray-400 mb-2">Scroll pour découvrir</span>
          <ChevronDown className="w-6 h-6 text-forge-cyan" />
        </motion.div>
      </motion.div>
    </section>
  )
}
