'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ChevronDown, Sparkles, Zap, Play, Star } from 'lucide-react'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.3
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 150,
      },
    },
  }

  const glowVariants = {
    animate: {
      textShadow: [
        '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(139, 0, 255, 0.3)',
        '0 0 40px rgba(139, 0, 255, 0.8), 0 0 80px rgba(0, 255, 255, 0.5)',
        '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(139, 0, 255, 0.3)',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  const line1 = "FORGE TON"
  const line2 = "EMPIRE"
  const subtitle = "Du premier stream à 100k followers – tout le matos, toutes les astuces, toute la vérité."

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 30%, rgba(139, 0, 255, 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 70%, rgba(0, 255, 255, 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse at 50% 50%, rgba(139, 0, 255, 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 30%, rgba(139, 0, 255, 0.15) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-forge-black/60 via-forge-black/80 to-forge-black z-10" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://cdn.coverr.co/videos/coverr-neon-lit-gaming-setup-8657/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(139, 0, 255, 0.6) 0%, transparent 70%)',
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[80px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, transparent 70%)',
          x: mousePosition.x * -1.5,
          y: mousePosition.y * -1.5,
        }}
      />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-10 z-10" />

      {/* Content */}
      <motion.div 
        className="relative z-20 container mx-auto px-4 text-center"
        style={{ y, opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="mb-8 inline-flex items-center space-x-2 glass px-5 py-2.5 rounded-full border border-forge-cyan/30"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-5 h-5 text-forge-cyan" />
          </motion.div>
          <span className="text-sm md:text-base font-mono text-forge-cyan font-medium">
            La Référence Absolue du Streaming FR
          </span>
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </motion.div>

        {/* Main Title - Line 1 */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-2 leading-none"
        >
          <motion.div className="overflow-hidden">
            {line1.split('').map((char, index) => (
              <motion.span
                key={`l1-${index}`}
                variants={letterVariants}
                className={char === ' ' ? 'inline-block w-4 md:w-8' : 'inline-block'}
                style={{
                  background: 'linear-gradient(135deg, #00FFFF 0%, #8B5CF6 50%, #EC4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.h1>

        {/* Main Title - Line 2 with special effect */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="relative mb-8"
        >
          <motion.h1
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-none relative inline-block"
            variants={glowVariants}
            animate="animate"
          >
            {line2.split('').map((char, index) => (
              <motion.span
                key={`l2-${index}`}
                variants={letterVariants}
                className="inline-block relative"
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #00FFFF 50%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: [-5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          {/* Underline Effect */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
            className="absolute -bottom-2 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-transparent via-forge-cyan to-transparent origin-center"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-body text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="primary"
              size="xl"
              glow
              className="group relative overflow-hidden"
              onClick={() => document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-forge-cyan/20 to-forge-violet-start/20"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse relative z-10" />
              <span className="relative z-10">Construis ton Setup</span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="xl"
              className="group"
              onClick={() => document.getElementById('academy')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-5 h-5 mr-2 group-hover:text-forge-cyan transition-colors" />
              Découvrir l'Académie
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '500+', label: 'Produits Testés', icon: '🎮' },
            { value: '100+', label: 'Guides Détaillés', icon: '📚' },
            { value: '20K+', label: 'Communauté', icon: '👥' },
            { value: '100%', label: 'Gratuit', icon: '✨' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'rgba(0, 255, 255, 0.5)',
              }}
              className="glass p-4 md:p-6 rounded-2xl border border-white/5 hover:border-forge-cyan/30 transition-all duration-300 cursor-default"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-display text-2xl md:text-4xl font-black gradient-text mb-1">
                {stat.value}
              </div>
              <div className="font-body text-xs md:text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-mono text-gray-500 mb-2 tracking-wider uppercase">Scroll</span>
          <motion.div
            className="p-2 rounded-full border border-forge-cyan/30 glass"
            whileHover={{ scale: 1.1, borderColor: 'rgba(0, 255, 255, 0.6)' }}
          >
            <ChevronDown className="w-5 h-5 text-forge-cyan" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
