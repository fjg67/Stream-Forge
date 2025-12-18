'use client'

import { motion } from 'framer-motion'
import { BUDGET_OPTIONS } from '@/lib/configurator-data'
import { cn } from '@/lib/utils'

interface BudgetStepProps {
  selectedBudget: number | null
  onSelect: (budget: number) => void
}

export function BudgetStep({ selectedBudget, onSelect }: BudgetStepProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {BUDGET_OPTIONS.map((option, index) => (
        <motion.button
          key={option.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: 'spring' }}
          whileHover={{ scale: 1.03, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(option.value)}
          className={cn(
            'relative p-8 rounded-2xl border-2 transition-all duration-300 group',
            selectedBudget === option.value
              ? 'border-forge-violet-start bg-forge-violet-start/10 neon-glow-violet'
              : 'border-gray-700 glass hover:border-forge-violet-start/50'
          )}
        >
          {/* Gradient Background on Hover */}
          <div
            className={cn(
              'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br',
              option.color
            )}
            style={{ opacity: selectedBudget === option.value ? 0.1 : 0 }}
          />

          <div className="relative z-10">
            {/* Icon */}
            <div className="text-6xl mb-4">{option.icon}</div>

            {/* Label */}
            <h4 className="font-display text-xl font-bold text-white mb-2">
              {option.label}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-4">
              {option.description}
            </p>

            {/* Selected Indicator */}
            {selectedBudget === option.value && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-4 right-4"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-forge-violet-start to-forge-cyan flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
