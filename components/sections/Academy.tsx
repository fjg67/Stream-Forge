'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
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
} from 'lucide-react'

const academySteps = [
  {
    id: 1,
    number: '01',
    title: 'Préparer son Premier Stream',
    duration: '45 min',
    modules: 12,
    students: 15420,
    description: 'De zéro à ton premier live : mindset, matériel minimum, choix de plateforme',
    icon: Play,
    color: 'from-green-500 to-emerald-500',
    resources: ['Checklist PDF', 'Template de planning', 'Script de présentation'],
  },
  {
    id: 2,
    number: '02',
    title: 'OBS Studio de A à Z',
    duration: '2h 30min',
    modules: 24,
    students: 23891,
    description: 'Maîtrise complète : scènes, sources, filtres, transitions, encodage optimal',
    icon: Video,
    color: 'from-blue-500 to-cyan-500',
    resources: ['Scene Collections', 'Profils d\'encodage', 'Cheatsheet raccourcis'],
  },
  {
    id: 3,
    number: '03',
    title: 'Overlays & Design Pro',
    duration: '1h 45min',
    modules: 16,
    students: 19234,
    description: 'Crée des overlays uniques avec Photoshop, Figma, After Effects',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
    resources: ['Pack 50 overlays PSD', 'Templates Figma', 'Assets gratuits'],
  },
  {
    id: 4,
    number: '04',
    title: 'Alerts & Soundboard',
    duration: '1h 15min',
    modules: 10,
    students: 17652,
    description: 'Streamlabs, StreamElements, alertes custom, soundboard épique',
    icon: CheckCircle2,
    color: 'from-orange-500 to-red-500',
    resources: ['Pack sons libres', 'Templates alertes', 'Widget CSS'],
  },
  {
    id: 5,
    number: '05',
    title: 'Multistream & Régie',
    duration: '1h 30min',
    modules: 14,
    students: 12843,
    description: 'Streamer sur Twitch + YouTube + TikTok simultanément comme un pro',
    icon: Users,
    color: 'from-yellow-500 to-amber-500',
    resources: ['Guide Restream', 'Setup RTMP', 'Comparatif outils'],
  },
  {
    id: 6,
    number: '06',
    title: 'Monétisation 360°',
    duration: '2h 00min',
    modules: 18,
    students: 21093,
    description: 'Subs, bits, dons, sponsors, affiliation Amazon, YouTube Revenue',
    icon: BookOpen,
    color: 'from-teal-500 to-green-500',
    resources: ['Simulateur revenus', 'Templates contrats', 'Liste sponsors'],
  },
  {
    id: 7,
    number: '07',
    title: 'Growth Hacking Ultime',
    duration: '3h 00min',
    modules: 28,
    students: 25671,
    description: 'Algorithmes décryptés, stratégie clips, réseaux sociaux, collaborations',
    icon: FileText,
    color: 'from-rose-500 to-pink-500',
    resources: ['Social Media Kit', 'Calendar template', 'Scripts viraux'],
  },
]

export function Academy() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null)

  return (
    <section id="academy" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-forge-black-light to-forge-black" />
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text mb-6">
            Académie du Stream
          </h2>
          <p className="font-body text-xl text-gray-400 max-w-3xl mx-auto">
            De 0 à Pro en 7 étapes – 100+ heures de contenu, templates, checklists
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-purple-500 to-pink-500 opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
            {academySteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center font-display text-2xl font-black text-white shadow-2xl cursor-pointer relative z-10`}
                    onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Step Card */}
                <Card
                  variant="glass"
                  hover
                  className={`transition-all duration-300 ${
                    selectedStep === step.id ? 'neon-glow-violet scale-105' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-3 leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                      {step.description}
                    </p>

                    {/* Stats */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-2 text-forge-cyan" />
                        {step.duration}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <BookOpen className="w-3 h-3 mr-2 text-forge-violet" />
                        {step.modules} modules
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Users className="w-3 h-3 mr-2 text-forge-rose-gold" />
                        {step.students.toLocaleString()} étudiants
                      </div>
                    </div>

                    {/* Expandable Resources */}
                    {selectedStep === step.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-forge-violet-start/20 pt-4 mt-4"
                      >
                        <div className="text-xs font-mono text-forge-cyan mb-2">RESSOURCES GRATUITES</div>
                        <ul className="space-y-2">
                          {step.resources.map((resource, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-300">
                              <Download className="w-3 h-3 mr-2 text-forge-violet" />
                              {resource}
                            </li>
                          ))}
                        </ul>
                        <Button variant="primary" size="sm" className="w-full mt-4" glow>
                          <Play className="w-4 h-4 mr-2" />
                          Commencer
                        </Button>
                      </motion.div>
                    )}

                    {selectedStep !== step.id && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full"
                        onClick={() => setSelectedStep(step.id)}
                      >
                        Voir les ressources
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card variant="cyber" className="inline-block p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-left">
                <h3 className="font-display text-2xl font-bold gradient-text mb-2">
                  Accès Complet Gratuit
                </h3>
                <p className="text-gray-400">
                  Toutes les formations + tous les templates + support Discord
                </p>
              </div>
              <Button variant="primary" size="xl" glow>
                Rejoindre l'Académie
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
