'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import {
  Zap,
  Mail,
  Twitter,
  Instagram,
  Youtube,
  Twitch,
  MessageCircle,
  TrendingUp,
  Gift,
  ArrowRight,
  Heart,
} from 'lucide-react'

const footerLinks = {
  'Ressources': [
    { name: 'Configurateur Setup', href: '#configurator' },
    { name: 'Guide Matériel 2025', href: '#material' },
    { name: 'Académie (gratuit)', href: '#academy' },
    { name: 'Templates OBS', href: '#' },
    { name: 'Overlays Gratuits', href: '#' },
  ],
  'Communauté': [
    { name: 'Discord (20K membres)', href: '#' },
    { name: 'Success Stories', href: '#' },
    { name: 'Hall of Fame', href: '#halloffame' },
    { name: 'Soumettre ton Setup', href: '#' },
    { name: 'Devenir Partenaire', href: '#' },
  ],
  'Guides': [
    { name: 'Débuter sur Twitch', href: '#' },
    { name: 'Monétisation', href: '#' },
    { name: 'Growth Hacking', href: '#community' },
    { name: 'OBS Studio A-Z', href: '#' },
    { name: 'Streaming IRL', href: '#' },
  ],
  'Légal': [
    { name: 'Mentions Légales', href: '#' },
    { name: 'Politique de Confidentialité', href: '#' },
    { name: 'CGU', href: '#' },
    { name: 'Contact', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Discord', icon: MessageCircle, href: '#', color: 'hover:text-indigo-400' },
  { name: 'Twitch', icon: Twitch, href: '#', color: 'hover:text-purple-400' },
  { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-400' },
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
  { name: 'TikTok', icon: TrendingUp, href: '#', color: 'hover:text-cyan-400' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setSubscribed(true)
    setTimeout(() => {
      setEmail('')
      setSubscribed(false)
    }, 3000)
  }

  return (
    <footer className="relative bg-forge-black border-t border-forge-violet-start/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forge-violet-start to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 border-b border-forge-violet-start/20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
              <Gift className="w-4 h-4 text-forge-rose-gold" />
              <span className="text-sm font-mono text-forge-rose-gold">Pack Exclusif Offert</span>
            </div>

            <h3 className="font-display text-3xl md:text-5xl font-black gradient-text mb-4">
              Reçois 10 Overlays Premium
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              + Les meilleures astuces stream chaque semaine dans ta boîte mail
            </p>

            <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ton-email@exemple.com"
                    required
                    className="w-full pl-12 pr-4 py-4 glass rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-forge-violet-start transition-all font-body"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  glow
                  disabled={subscribed}
                  className="sm:w-auto"
                >
                  {subscribed ? (
                    <>
                      <Heart className="w-5 h-5 mr-2 animate-pulse-glow" />
                      Merci !
                    </>
                  ) : (
                    <>
                      Recevoir le Pack
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Aucun spam. Désabonne-toi quand tu veux. On respecte ta vie privée.
              </p>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-forge-violet-start to-forge-cyan rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold gradient-text">
                      STREAM FORGE
                    </h3>
                    <p className="text-xs text-gray-500">L'Atelier du Streamer</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  La référence absolue pour tous les streamers francophones. Du premier stream à 100k followers.
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-forge-cyan transition-colors text-sm inline-block hover:translate-x-1 transform duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-forge-violet-start/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                © 2025 Stream Forge. Fait avec{' '}
                <Heart className="inline w-4 h-4 text-forge-rose-gold animate-pulse-glow" />{' '}
                pour la communauté streaming FR.
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="font-mono">Powered by</span>
                <span className="font-display gradient-text font-bold">Next.js 15</span>
                <span>•</span>
                <span className="font-display gradient-text font-bold">React 18</span>
                <span>•</span>
                <span className="font-display gradient-text font-bold">Three.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Easter Egg Hint */}
      <div className="absolute bottom-4 right-4 opacity-20 hover:opacity-100 transition-opacity">
        <p className="text-xs font-mono text-gray-600">
          Psst... tape "KAPPAPRIDE" pour une surprise 👀
        </p>
      </div>
    </footer>
  )
}
