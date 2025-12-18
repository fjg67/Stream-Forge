'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Confetti from 'react-confetti'
import {
  Check,
  Star,
  Trophy,
  Play,
  Zap,
  Crown,
  Sparkles,
  GraduationCap,
  Video,
  Download,
  MessageCircle,
  Award,
  Rocket,
  PartyPopper,
  Gift,
  ChevronRight,
  BookOpen,
  Users
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { ACADEMY_COURSES } from '@/lib/academy-data'

const welcomeFeatures = [
  { icon: Video, label: '7 formations débloquées', sublabel: '+50 heures de contenu' },
  { icon: Download, label: 'Templates & ressources', sublabel: 'Overlays, alertes, guides...' },
  { icon: MessageCircle, label: 'Accès Discord VIP', sublabel: 'Support 24/7 par la communauté' },
  { icon: Award, label: 'Certificats', sublabel: 'Valide tes compétences' },
]

const quickStartSteps = [
  { step: 1, title: 'Choisis ta formation', description: 'Commence par "Premier Stream" si tu débutes' },
  { step: 2, title: 'Suis les leçons', description: 'Vidéos courtes et pratiques' },
  { step: 3, title: 'Applique et stream !', description: 'Mets en pratique immédiatement' },
]

export default function WelcomePage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [showConfetti, setShowConfetti] = useState(true)
  const [username, setUsername] = useState('Streamer')

  useEffect(() => {
    // Get username from localStorage if available
    const storedName = localStorage.getItem('streamforge_username')
    if (storedName) {
      setUsername(storedName)
    }

    // Set window size for confetti
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    
    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-forge-black overflow-hidden relative">
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          colors={['#8B5CF6', '#EC4899', '#06B6D4', '#F59E0B', '#10B981']}
        />
      )}

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.1),transparent_50%)]" />
        
        {/* Animated Stars */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ 
                  boxShadow: ['0 0 20px rgba(16,185,129,0.5)', '0 0 60px rgba(16,185,129,0.8)', '0 0 20px rgba(16,185,129,0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center"
              >
                <Check className="w-16 h-16 text-white" strokeWidth={3} />
              </motion.div>
              
              {/* Floating Icons */}
              <motion.div
                animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4"
              >
                <PartyPopper className="w-10 h-10 text-yellow-400" />
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-4 -left-4"
              >
                <Crown className="w-10 h-10 text-amber-400" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -bottom-2 -right-6"
              >
                <Sparkles className="w-8 h-8 text-violet-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Bienvenue,{' '}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {username}
              </span>
              ! 🎉
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ton compte a été créé avec succès ! Tu fais maintenant partie de la plus grande communauté de streamers francophones.
            </p>
          </motion.div>

          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <Card variant="glass" className="overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Statut : Membre Premium</h2>
                      <p className="text-white/80">Accès illimité à toutes les formations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                    <Check className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">Compte activé</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* What's Unlocked */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              🎁 Ce que tu as débloqué
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {welcomeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <Card variant="glass" hover className="h-full">
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{feature.label}</h3>
                        <p className="text-gray-400 text-sm">{feature.sublabel}</p>
                      </div>
                      <Check className="w-6 h-6 text-green-400 ml-auto flex-shrink-0" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Start Guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              🚀 Par où commencer ?
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {quickStartSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <Card variant="glass" className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                        {item.step}
                      </div>
                      <h3 className="font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recommended First Course */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              ⭐ Formation recommandée pour toi
            </h2>
            <Card variant="glass" hover className="overflow-hidden group cursor-pointer">
              <Link href={`/academy/${ACADEMY_COURSES[0]?.slug || 'premier-stream'}`}>
                <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                  <motion.div
                    animate={{ 
                      boxShadow: ['0 0 20px rgba(139,92,246,0.3)', '0 0 40px rgba(139,92,246,0.5)', '0 0 20px rgba(139,92,246,0.3)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  >
                    <Rocket className="w-12 h-12 text-white" />
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/50 rounded-full text-amber-400 text-sm mb-2">
                      <Star className="w-4 h-4 fill-amber-400" />
                      Recommandé pour débuter
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                      {ACADEMY_COURSES[0]?.title || 'Préparer son Premier Stream'}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {ACADEMY_COURSES[0]?.description || 'Apprends tout ce qu\'il faut pour lancer ton premier stream avec succès.'}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 justify-center md:justify-start">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {ACADEMY_COURSES[0]?.lessons.length || 18} leçons
                      </span>
                      <span className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        {ACADEMY_COURSES[0]?.duration || '2h30'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {ACADEMY_COURSES[0]?.students?.toLocaleString() || '24,500'} étudiants
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center group-hover:bg-violet-500 transition-colors">
                      <ChevronRight className="w-6 h-6 text-violet-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/#academy">
              <Button variant="primary" size="xl" glow className="px-10">
                <Play className="w-6 h-6 mr-2" />
                Explorer toutes les formations
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="xl" className="px-10">
                Retour à l'accueil
              </Button>
            </Link>
          </motion.div>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 text-sm">
              Des questions ? Rejoins notre{' '}
              <a href="#" className="text-violet-400 hover:underline">serveur Discord</a>
              {' '}— notre équipe est là pour t'aider 24/7 !
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
