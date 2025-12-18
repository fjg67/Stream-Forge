'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import {
  Play,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Download,
  Video,
  FileText,
  Sparkles,
  Trophy,
  Zap,
  ArrowRight,
  Star,
  GraduationCap,
} from 'lucide-react'

const academySteps = [
  {
    id: 1,
    slug: 'premier-stream',
    number: '01',
    title: 'Préparer son Premier Stream',
    duration: '45 min',
    modules: 12,
    students: 15420,
    description: 'De zéro à ton premier live : mindset, matériel minimum, choix de plateforme',
    icon: Play,
    color: 'from-emerald-400 via-green-500 to-teal-600',
    shadowColor: 'shadow-emerald-500/30',
    bgGlow: 'bg-emerald-500',
    resources: ['Checklist PDF', 'Template de planning', 'Script de présentation'],
    difficulty: 'Débutant',
  },
  {
    id: 2,
    slug: 'obs-studio',
    number: '02',
    title: 'OBS Studio Masterclass',
    duration: '2h 30min',
    modules: 24,
    students: 23891,
    description: 'Maîtrise complète : scènes, sources, filtres, transitions, encodage optimal',
    icon: Video,
    color: 'from-cyan-400 via-blue-500 to-indigo-600',
    shadowColor: 'shadow-blue-500/30',
    bgGlow: 'bg-blue-500',
    resources: ['Scene Collections', 'Profils d\'encodage', 'Cheatsheet raccourcis'],
    difficulty: 'Intermédiaire',
  },
  {
    id: 3,
    slug: 'overlays-design',
    number: '03',
    title: 'Overlays & Design Pro',
    duration: '1h 45min',
    modules: 16,
    students: 19234,
    description: 'Crée des overlays uniques avec Photoshop, Figma, After Effects',
    icon: Sparkles,
    color: 'from-violet-400 via-purple-500 to-fuchsia-600',
    shadowColor: 'shadow-purple-500/30',
    bgGlow: 'bg-purple-500',
    resources: ['Pack 50 overlays PSD', 'Templates Figma', 'Assets gratuits'],
    difficulty: 'Avancé',
  },
  {
    id: 4,
    slug: 'alerts-soundboard',
    number: '04',
    title: 'Alerts & Soundboard',
    duration: '1h 15min',
    modules: 10,
    students: 17652,
    description: 'Streamlabs, StreamElements, alertes custom, soundboard épique',
    icon: Zap,
    color: 'from-orange-400 via-amber-500 to-yellow-500',
    shadowColor: 'shadow-orange-500/30',
    bgGlow: 'bg-orange-500',
    resources: ['Pack sons libres', 'Templates alertes', 'Widget CSS'],
    difficulty: 'Intermédiaire',
  },
  {
    id: 5,
    slug: 'multistream-regie',
    number: '05',
    title: 'Multistream & Régie',
    duration: '1h 30min',
    modules: 14,
    students: 12843,
    description: 'Streamer sur Twitch + YouTube + TikTok simultanément comme un pro',
    icon: Users,
    color: 'from-pink-400 via-rose-500 to-red-500',
    shadowColor: 'shadow-pink-500/30',
    bgGlow: 'bg-pink-500',
    resources: ['Guide Restream', 'Setup RTMP', 'Comparatif outils'],
    difficulty: 'Avancé',
  },
  {
    id: 6,
    slug: 'monetisation',
    number: '06',
    title: 'Monétisation 360°',
    duration: '2h 00min',
    modules: 18,
    students: 21093,
    description: 'Subs, bits, dons, sponsors, affiliation Amazon, YouTube Revenue',
    icon: Trophy,
    color: 'from-lime-400 via-green-500 to-emerald-600',
    shadowColor: 'shadow-lime-500/30',
    bgGlow: 'bg-lime-500',
    resources: ['Simulateur revenus', 'Templates contrats', 'Liste sponsors'],
    difficulty: 'Expert',
  },
  {
    id: 7,
    slug: 'growth-hacking',
    number: '07',
    title: 'Growth Hacking Ultime',
    duration: '3h 00min',
    modules: 28,
    students: 25671,
    description: 'Algorithmes décryptés, stratégie clips, réseaux sociaux, collaborations',
    icon: FileText,
    color: 'from-fuchsia-400 via-pink-500 to-rose-600',
    shadowColor: 'shadow-fuchsia-500/30',
    bgGlow: 'bg-fuchsia-500',
    resources: ['Social Media Kit', 'Calendar template', 'Scripts viraux'],
    difficulty: 'Expert',
  },
]

const difficultyColors: Record<string, string> = {
  'Débutant': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Intermédiaire': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Avancé': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Expert': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
}

export function Academy() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const totalStudents = academySteps.reduce((acc, step) => acc + step.students, 0)
  const totalModules = academySteps.reduce((acc, step) => acc + step.modules, 0)

  return (
    <section id="academy" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-forge-black via-forge-black-light to-forge-black" />
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 px-6 py-2 rounded-full mb-8"
          >
            <GraduationCap className="w-5 h-5 text-violet-400" />
            <span className="text-sm font-mono text-violet-300">FORMATION COMPLÈTE GRATUITE</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <h2 className="font-display text-5xl md:text-7xl font-black mb-6">
            <span className="text-white">Académie du </span>
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Stream</span>
          </h2>
          
          <p className="font-body text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            De 0 à Pro en 7 étapes – Le programme complet utilisé par +{(totalStudents / 1000).toFixed(0)}k streamers
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '7', label: 'Modules', icon: BookOpen },
              { value: `${totalModules}+`, label: 'Leçons', icon: Video },
              { value: `${(totalStudents / 1000).toFixed(0)}k+`, label: 'Étudiants', icon: Users },
              { value: '100%', label: 'Gratuit', icon: Star },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-forge-cyan group-hover:scale-110 transition-transform" />
                  <span className="font-display text-3xl font-black text-white">{stat.value}</span>
                </div>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Progress Line */}
        <div className="hidden lg:block relative mb-4">
          <div className="absolute top-10 left-[5%] right-[5%] h-1 bg-white/5 rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Course Grid */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {academySteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
                className="relative"
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Step Number Circle */}
                <div className="flex justify-center mb-4 lg:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    animate={hoveredStep === step.id ? { scale: 1.1 } : { scale: 1 }}
                    className={`relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center font-display text-xl lg:text-2xl font-black text-white cursor-pointer ${step.shadowColor} shadow-xl`}
                    onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-full ${step.bgGlow} opacity-30 blur-xl`} />
                    <span className="relative z-10">{step.number}</span>
                    
                    {/* Pulse Ring */}
                    {hoveredStep === step.id && (
                      <motion.div
                        className={`absolute inset-0 rounded-full border-2 border-white/50`}
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Step Card */}
                <motion.div
                  animate={hoveredStep === step.id ? { y: -8 } : { y: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="h-full"
                >
                  <Card
                    variant="glass"
                    className={`relative transition-all duration-500 ${
                      selectedStep === step.id 
                        ? 'ring-2 ring-violet-500 shadow-2xl shadow-violet-500/20' 
                        : hoveredStep === step.id 
                          ? 'shadow-xl' 
                          : ''
                    }`}
                  >
                    {/* Top Gradient Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
                    
                    {/* Glow on Hover */}
                    {hoveredStep === step.id && (
                      <div className={`absolute inset-0 ${step.bgGlow} opacity-5`} />
                    )}

                    <CardContent className="p-5 relative">
                      {/* Icon & Difficulty */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ${step.shadowColor}`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className={`text-[10px] font-mono px-2 py-1 rounded-full border ${difficultyColors[step.difficulty]}`}>
                          {step.difficulty}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-base lg:text-lg font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-violet-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-white/5">
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Clock className="w-3 h-3 text-cyan-400" />
                          </div>
                          <div className="text-xs font-bold text-white">{step.duration}</div>
                        </div>
                        <div className="text-center border-x border-white/5">
                          <div className="flex items-center justify-center mb-1">
                            <BookOpen className="w-3 h-3 text-violet-400" />
                          </div>
                          <div className="text-xs font-bold text-white">{step.modules}</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Users className="w-3 h-3 text-pink-400" />
                          </div>
                          <div className="text-xs font-bold text-white">{(step.students / 1000).toFixed(1)}k</div>
                        </div>
                      </div>

                      {/* Expandable Resources */}
                      <AnimatePresence>
                        {selectedStep === step.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="text-[10px] font-mono text-cyan-400 mb-2 flex items-center gap-1">
                              <Download className="w-3 h-3" />
                              RESSOURCES GRATUITES
                            </div>
                            <ul className="space-y-2 mb-4">
                              {step.resources.map((resource, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center text-xs text-gray-300 hover:text-white transition-colors cursor-pointer group"
                                >
                                  <CheckCircle2 className="w-3 h-3 mr-2 text-green-400 group-hover:scale-110 transition-transform" />
                                  {resource}
                                </motion.li>
                              ))}
                            </ul>
                            <Link href={`/academy/${step.slug}`} className="block mt-2">
                              <Button variant="primary" size="sm" className="w-full text-xs py-3" glow>
                                <Play className="w-3 h-3 mr-1" />
                                Commencer le cours
                              </Button>
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* CTA Button */}
                      {selectedStep !== step.id && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full group/btn"
                          onClick={() => setSelectedStep(step.id)}
                        >
                          <span className="text-xs">Voir +</span>
                          <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
