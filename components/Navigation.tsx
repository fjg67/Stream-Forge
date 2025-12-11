'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { useForgeStore } from '@/lib/store'
import { Zap, Music, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Configurateur', href: '#configurator' },
  { name: 'Matériel', href: '#material' },
  { name: 'Académie', href: '#academy' },
  { name: 'Communauté', href: '#community' },
  { name: 'Hall of Fame', href: '#halloffame' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isUltraNeonMode, toggleUltraNeon, isMusicPlaying, toggleMusic } = useForgeStore()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass-strong shadow-2xl' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-forge-violet-start to-forge-cyan rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-display text-xl font-bold gradient-text">
                  STREAM FORGE
                </h1>
                <p className="text-xs text-gray-400 font-body">L'Atelier du Streamer</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-body text-sm font-medium text-gray-300 hover:text-forge-cyan transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forge-cyan group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Ultra Neon Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleUltraNeon}
                className={cn(
                  'hidden md:flex w-10 h-10 rounded-lg items-center justify-center transition-all',
                  isUltraNeonMode
                    ? 'bg-forge-neon-pink neon-glow-violet'
                    : 'glass hover:bg-forge-violet-start/20'
                )}
                title="Mode Ultra Neon"
              >
                <Zap className={cn('w-5 h-5', isUltraNeonMode ? 'text-white' : 'text-forge-violet')} />
              </motion.button>

              {/* Music Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMusic}
                className={cn(
                  'hidden md:flex w-10 h-10 rounded-lg items-center justify-center transition-all',
                  isMusicPlaying
                    ? 'bg-forge-cyan neon-glow-cyan'
                    : 'glass hover:bg-forge-cyan/20'
                )}
                title="Musique d'ambiance"
              >
                <Music className={cn('w-5 h-5', isMusicPlaying ? 'text-forge-black' : 'text-forge-cyan')} />
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 glass rounded-lg flex items-center justify-center"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-forge-cyan" />
                ) : (
                  <Menu className="w-5 h-5 text-forge-cyan" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-y-0 right-0 z-40 w-full max-w-sm glass-strong lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-2xl font-bold text-white hover:text-forge-cyan transition-colors py-4 border-b border-forge-violet-start/20"
                >
                  {item.name}
                </motion.a>
              ))}

              <div className="mt-auto pb-8 space-y-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={toggleUltraNeon}
                >
                  {isUltraNeonMode ? 'Mode Normal' : 'Mode Ultra Neon'}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  onClick={toggleMusic}
                >
                  {isMusicPlaying ? 'Couper la Musique' : 'Activer la Musique'}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
