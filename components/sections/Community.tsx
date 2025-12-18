'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  Twitter,
  Instagram,
  Youtube,
  Twitch,
  MessageCircle,
  TrendingUp,
  Users,
  Calendar,
  Zap,
  Target,
  Award,
} from 'lucide-react'

const socialStrategies = [
  {
    platform: 'TikTok',
    icon: '🎵',
    color: 'from-pink-500 to-rose-500',
    strategy: 'Clips 15-60s de moments forts',
    tips: [
      'Post 2-3 clips par jour',
      'Utilise les sons tendance',
      'Sous-titres auto pour +400% vues',
      'Call-to-action clair vers Twitch',
    ],
    growth: '+2000 followers/mois',
  },
  {
    platform: 'Twitter/X',
    icon: Twitter,
    color: 'from-blue-400 to-cyan-500',
    strategy: 'Threads + réactions + communauté',
    tips: [
      'Thread quotidien sur ton domaine',
      'Engage avec les gros comptes',
      'Annonce tes lives 1h avant',
      'Partage tes wins & apprentissages',
    ],
    growth: '+500 followers/mois',
  },
  {
    platform: 'Instagram',
    icon: Instagram,
    color: 'from-purple-500 via-pink-500 to-orange-500',
    strategy: 'Reels + Stories + Setup pics',
    tips: [
      '3-5 Reels/semaine de highlights',
      'Stories quotidiennes (behind the scenes)',
      'Carrousel "Top 10" tips stream',
      'Collaborations avec autres créateurs',
    ],
    growth: '+800 followers/mois',
  },
  {
    platform: 'YouTube',
    icon: Youtube,
    color: 'from-red-500 to-red-600',
    strategy: 'VODs + compilations + tutoriels',
    tips: [
      'Upload 2-3 vidéos/semaine minimum',
      'Thumbnails custom ultra-cliquables',
      'Titres optimisés SEO + émotionnels',
      'Playlists thématiques organisées',
    ],
    growth: '+1000 subs/mois',
  },
  {
    platform: 'Discord',
    icon: MessageCircle,
    color: 'from-indigo-500 to-purple-600',
    strategy: 'Communauté engagée & fidèle',
    tips: [
      'Serveur bien organisé (rôles, salons)',
      'Events hebdomadaires (game nights)',
      'Système de niveaux & récompenses',
      'Modération active & bienveillante',
    ],
    growth: '+300 membres/mois',
  },
  {
    platform: 'Twitch Clips',
    icon: Twitch,
    color: 'from-purple-600 to-purple-700',
    strategy: 'Moments forts viralisables',
    tips: [
      'Encourage viewers à clip les moments forts',
      'Récompense les meilleurs clips',
      'Partage sur tous tes réseaux',
      'Crée des compilations mensuelles',
    ],
    growth: '+40% reach organique',
  },
]

const growthTools = [
  {
    name: 'Calendrier Éditorial',
    description: 'Planifie ton contenu sur 30 jours',
    icon: Calendar,
    action: 'Télécharger Template',
    url: '/downloads/calendrier-editorial-stream-forge.csv',
  },
  {
    name: 'Tracker de Croissance',
    description: 'Dashboard pour suivre tes KPIs',
    icon: TrendingUp,
    action: 'Obtenir le Tracker',
    url: '/downloads/tracker-croissance-stream-forge.csv',
  },
  {
    name: 'Pack Templates Canva',
    description: '50+ designs pour réseaux sociaux',
    icon: Target,
    action: 'Accéder au Pack',
    url: 'https://www.canva.com/templates/?query=twitch%20streamer',
  },
  {
    name: 'Scripts Vidéo Viraux',
    description: 'Frameworks de vidéos qui marchent',
    icon: Zap,
    action: 'Voir les Scripts',
    url: '/academy/growth-hacking',
  },
]

export function Community() {
  return (
    <section id="community" className="relative py-32 overflow-hidden bg-gradient-to-b from-forge-black to-forge-black-light">
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-forge-cyan" />
            <span className="text-sm font-mono text-forge-cyan">Growth Hacking 2025</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text mb-6">
            Construis Ta Légion
          </h2>
          <p className="font-body text-xl text-gray-400 max-w-3xl mx-auto">
            Stratégies ultra-précises pour exploser sur chaque plateforme
          </p>
        </motion.div>

        {/* Social Strategies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {socialStrategies.map((strat, index) => (
            <motion.div
              key={strat.platform}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="glass" hover className="h-full">
                <CardContent className="p-6">
                  {/* Platform Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${strat.color} flex items-center justify-center text-2xl`}>
                      {typeof strat.icon === 'string' ? (
                        strat.icon
                      ) : (
                        <strat.icon className="w-7 h-7 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {strat.platform}
                      </h3>
                      <div className={`text-xs font-mono bg-gradient-to-r ${strat.color} bg-clip-text text-transparent font-bold`}>
                        {strat.growth}
                      </div>
                    </div>
                  </div>

                  {/* Strategy */}
                  <div className="mb-4">
                    <div className="text-xs font-mono text-forge-cyan mb-2">STRATÉGIE</div>
                    <p className="text-sm text-gray-300 font-semibold">{strat.strategy}</p>
                  </div>

                  {/* Tips */}
                  <div>
                    <div className="text-xs font-mono text-forge-violet mb-3">ACTIONS CLÉS</div>
                    <ul className="space-y-2">
                      {strat.tips.map((tip, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-400">
                          <Award className="w-4 h-4 mr-2 text-forge-rose-gold flex-shrink-0 mt-0.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Growth Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-3xl md:text-4xl font-black text-center gradient-text mb-12">
            Outils Gratuits de Croissance
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="bordered" hover className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-forge-violet-start to-forge-cyan rounded-xl flex items-center justify-center">
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-white mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-sm text-gray-400 mb-4">{tool.description}</p>
                    <a 
                      href={tool.url} 
                      target={tool.url.startsWith('http') ? '_blank' : '_self'} 
                      rel="noopener noreferrer"
                      className="block"
                      download={tool.url.endsWith('.csv') ? true : undefined}
                    >
                      <Button variant="ghost" size="sm" className="w-full">
                        {tool.action}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Discord CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card variant="cyber" glow className="inline-block">
            <CardContent className="p-8 md:p-12">
              <MessageCircle className="w-16 h-16 text-forge-cyan mx-auto mb-6 animate-pulse-glow" />
              <h3 className="font-display text-3xl md:text-4xl font-black gradient-text mb-4">
                Rejoins la Communauté
              </h3>
              <p className="text-gray-400 text-lg mb-6 max-w-2xl">
                20 000+ streamers s'entraident sur le Discord Stream Forge
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="xl" glow>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Rejoindre le Discord
                </Button>
                <Button variant="secondary" size="xl">
                  <Users className="w-5 h-5 mr-2" />
                  Voir les Success Stories
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
