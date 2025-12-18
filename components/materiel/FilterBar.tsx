'use client'

import { motion } from 'framer-motion'
import { Camera, Mic, Headphones, Lightbulb, Cpu, Monitor, Filter } from 'lucide-react'
import { cn } from '@/lib/utils'

const CATEGORY_ICONS = {
  tout: Filter,
  cameras: Camera,
  micros: Mic,
  audio: Headphones,
  eclairage: Lightbulb,
  pc: Cpu,
  ecrans: Monitor,
}

interface FilterBarProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: 'tout', name: 'Tout' },
  { id: 'cameras', name: 'Caméras' },
  { id: 'micros', name: 'Micros' },
  { id: 'audio', name: 'Audio' },
  { id: 'eclairage', name: 'Éclairage' },
  { id: 'pc', name: 'PC/Config' },
  { id: 'ecrans', name: 'Écrans' },
]

export function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap gap-4 justify-center mb-16"
    >
      {categories.map((category, index) => {
        const Icon = CATEGORY_ICONS[category.id as keyof typeof CATEGORY_ICONS]
        const isActive = activeCategory === category.id

        return (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              'group relative px-6 py-3.5 rounded-2xl font-display font-bold text-sm uppercase tracking-wider transition-all duration-300',
              'border-2 overflow-hidden',
              isActive
                ? 'bg-gradient-to-r from-forge-violet-start to-forge-violet-end border-forge-violet-start text-white'
                : 'glass border-forge-violet-start/30 text-gray-300 hover:border-forge-violet-start/60'
            )}
            style={{
              boxShadow: isActive
                ? '0 0 30px rgba(139, 0, 255, 0.6), 0 0 60px rgba(139, 0, 255, 0.3)'
                : 'none',
            }}
          >
            {/* Animated background glow */}
            {isActive && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-forge-violet-start to-forge-cyan opacity-50"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}

            {/* Content */}
            <div className="relative z-10 flex items-center gap-2">
              <Icon
                className={cn(
                  'w-4 h-4 transition-all duration-300',
                  isActive
                    ? 'text-white'
                    : 'text-gray-400 group-hover:text-forge-cyan'
                )}
              />
              <span>{category.name}</span>
            </div>

            {/* Hover glow effect */}
            {!isActive && (
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                  boxShadow: '0 0 20px rgba(139, 0, 255, 0.4)',
                }}
              />
            )}
          </motion.button>
        )
      })}
    </motion.div>
  )
}
