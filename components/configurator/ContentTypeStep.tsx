'use client'

import { motion } from 'framer-motion'
import { CONTENT_TYPES } from '@/lib/configurator-data'
import { cn } from '@/lib/utils'

interface ContentTypeStepProps {
  selectedType: string | null
  onSelect: (type: string) => void
}

export function ContentTypeStep({ selectedType, onSelect }: ContentTypeStepProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {CONTENT_TYPES.map((type, index) => (
        <motion.button
          key={type.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, type: 'spring' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(type.id)}
          className={cn(
            'relative p-8 rounded-2xl border-2 transition-all duration-300 group overflow-hidden',
            selectedType === type.id
              ? 'border-forge-cyan bg-forge-cyan/10 neon-glow-cyan'
              : 'border-gray-700 glass hover:border-forge-cyan/50'
          )}
        >
          {/* Animated gradient background */}
          <div
            className={cn(
              'absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br',
              type.color
            )}
          />

          <div className="relative z-10">
            {/* Icon */}
            <div className="text-7xl mb-4">{type.icon}</div>

            {/* Label */}
            <h4 className="font-display text-2xl font-bold text-white mb-2">
              {type.label}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-400">
              {type.description}
            </p>

            {/* Priority tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {type.priorities.map((priority) => (
                <span
                  key={priority}
                  className="text-xs font-mono px-2 py-1 rounded glass text-forge-cyan"
                >
                  {priority}
                </span>
              ))}
            </div>

            {/* Selected Indicator */}
            {selectedType === type.id && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="absolute top-4 right-4"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-forge-cyan to-forge-violet-start flex items-center justify-center neon-glow-cyan">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </motion.div>
            )}
          </div>
        </motion.button>
      ))}
    </div>
  )
}
