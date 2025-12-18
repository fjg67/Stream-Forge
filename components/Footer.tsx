'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Zap,
  Twitter,
  Instagram,
  Youtube,
  Twitch,
  MessageCircle,
  TrendingUp,
  Heart,
} from 'lucide-react'

const footerLinks = {
  'Ressources': [
    { name: 'Configurateur Setup', href: '#configurator' },
    { name: 'Académie (gratuit)', href: '#academy' },
    { name: 'Templates OBS', href: '#' },
    { name: 'Overlays Gratuits', href: '#' },
  ],
  'Communauté': [
    { name: 'Discord (20K membres)', href: '#' },
    { name: 'Success Stories', href: '#' },
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
    { name: 'Mentions Légales', href: '/mentions-legales' },
    { name: 'Politique de Confidentialité', href: '/confidentialite' },
    { name: 'CGU', href: '/cgu' },
    { name: 'Contact', href: '/contact' },
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
  return (
    <footer className="relative bg-forge-black border-t border-forge-violet-start/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forge-violet-start to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
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
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden neon-glow-violet flex items-center justify-center">
                    <Image 
                      src="/logo.png" 
                      alt="Stream Forge Logo" 
                      fill
                      className="object-contain p-1"
                    />
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
                      {link.href.startsWith('/') ? (
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-forge-cyan transition-colors text-sm inline-block hover:translate-x-1 transform duration-200"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-forge-cyan transition-colors text-sm inline-block hover:translate-x-1 transform duration-200"
                        >
                          {link.name}
                        </a>
                      )}
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
