'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Trophy, Users, TrendingUp, ExternalLink, Sparkles } from 'lucide-react'

const streamers = [
  {
    name: 'ZeratoR',
    followers: '1.2M',
    platform: 'Twitch',
    category: 'Variété',
    setupBudget: '15000€+',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600',
    keyGear: ['Sony A7S III', 'Neumann U87', 'ATEM Constellation', 'Multiple 4K Displays'],
    achievement: 'Z Event - 10M€+ collectés',
  },
  {
    name: 'Domingo',
    followers: '890K',
    platform: 'Twitch',
    category: 'Just Chatting',
    setupBudget: '8000€',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600',
    keyGear: ['Sony A6400', 'Shure SM7B', 'GoXLR', 'Elgato Stream Deck XL'],
    achievement: 'Top FR streamer IRL',
  },
  {
    name: 'Locklear',
    followers: '620K',
    platform: 'Twitch',
    category: 'League of Legends',
    setupBudget: '12000€',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    keyGear: ['Canon R5', 'Sennheiser MKH 416', 'Aputure Lighting', 'Dual PC Setup'],
    achievement: 'Production qualité broadcast',
  },
  {
    name: 'Sardoche',
    followers: '580K',
    platform: 'Twitch',
    category: 'Gaming',
    setupBudget: '10000€',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600',
    keyGear: ['Sony A7III', 'Shure SM7B', 'RME Interface', 'Custom RGB Setup'],
    achievement: 'Croissance organique explosive',
  },
  {
    name: 'Squeezie',
    followers: '2.1M',
    platform: 'Twitch',
    category: 'Multi-Platform',
    setupBudget: '20000€+',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600',
    keyGear: ['RED Komodo', 'Multiple Broadcast Cameras', 'Studio Lighting Rig', 'Full Production Team'],
    achievement: 'Multi-plateforme dominance',
  },
  {
    name: 'Jeel',
    followers: '450K',
    platform: 'Twitch',
    category: 'IRL/Travel',
    setupBudget: '5000€',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600',
    keyGear: ['GoPro Hero 12', 'DJI Mic', 'Portable Streaming Backpack', 'Bonding Router'],
    achievement: 'Pioneer IRL streaming FR',
  },
]

export function HallOfFame() {
  return (
    <section id="halloffame" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-forge-black-light via-forge-black to-forge-black-light" />
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-mono text-yellow-400">Les Légendes</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text mb-6">
            Hall of Fame
          </h2>
          <p className="font-body text-xl text-gray-400 max-w-3xl mx-auto">
            Les setups des plus grands streamers francophones décryptés
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {streamers.map((streamer, index) => (
            <motion.div
              key={streamer.name}
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card variant="glass" hover glow className="h-full group overflow-hidden">
                {/* Streamer Image */}
                <div className="relative h-80 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${streamer.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-forge-black/50 to-transparent" />

                  {/* Overlay Info */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="glass px-3 py-1 rounded-full">
                      <span className="text-xs font-mono text-forge-cyan">{streamer.platform}</span>
                    </div>
                    <div className="glass px-3 py-1 rounded-full flex items-center gap-1">
                      <Users className="w-3 h-3 text-forge-violet" />
                      <span className="text-xs font-bold text-white">{streamer.followers}</span>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-3xl font-black text-white mb-1 neon-text-cyan">
                      {streamer.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-400">{streamer.category}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-forge-rose-gold font-mono">{streamer.setupBudget}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Achievement */}
                  <div className="flex items-center gap-2 mb-4 p-3 bg-gradient-to-r from-forge-violet-start/20 to-forge-cyan/20 rounded-lg border border-forge-violet-start/30">
                    <Trophy className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm text-white font-semibold">{streamer.achievement}</span>
                  </div>

                  {/* Key Gear */}
                  <div className="mb-4">
                    <div className="text-xs font-mono text-forge-cyan mb-3">SETUP PRINCIPAL</div>
                    <ul className="space-y-2">
                      {streamer.keyGear.map((gear, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-400">
                          <Sparkles className="w-3 h-3 mr-2 text-forge-violet flex-shrink-0" />
                          {gear}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="primary" size="sm" className="w-full group-hover:neon-glow-violet">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le Setup Complet
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Community Showcase CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card variant="cyber" glow className="inline-block">
            <CardContent className="p-8 md:p-12">
              <TrendingUp className="w-16 h-16 text-forge-violet mx-auto mb-6 animate-float" />
              <h3 className="font-display text-3xl md:text-4xl font-black gradient-text mb-4">
                Ton Setup Mérite d'Être Ici
              </h3>
              <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
                Partage ton setup avec la communauté et inspire les futurs streamers
              </p>
              <Button variant="primary" size="xl" glow>
                <Trophy className="w-5 h-5 mr-2" />
                Soumettre Mon Setup
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
