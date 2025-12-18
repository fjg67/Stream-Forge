'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface QuizProgressProps {
  currentStep: number
  totalSteps: number
  steps: { title: string; description: string }[]
}

export function QuizProgress({ currentStep, totalSteps, steps }: QuizProgressProps) {
  return (
    <div className="w-full mb-12">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center flex-1">
            {/* Step Circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-center"
            >
              <div
                className={cn(
                  'relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg transition-all duration-300',
                  index <= currentStep
                    ? 'bg-gradient-to-r from-forge-violet-start to-forge-cyan text-white neon-glow-violet'
                    : 'glass text-gray-500'
                )}
              >
                {index + 1}
              </div>

              {/* Pulsing ring for active step */}
              {index === currentStep && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-forge-violet-start"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>

            {/* Connection Line */}
            {index < totalSteps - 1 && (
              <div className="flex-1 h-1 mx-4 rounded-full overflow-hidden glass">
                <motion.div
                  className="h-full bg-gradient-to-r from-forge-violet-start to-forge-cyan"
                  initial={{ width: '0%' }}
                  animate={{ width: index < currentStep ? '100%' : '0%' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Current Step Info */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="font-display text-2xl md:text-3xl font-black gradient-text mb-2">
          {steps[currentStep].title}
        </h3>
        <p className="text-gray-400 text-lg">
          {steps[currentStep].description}
        </p>
      </motion.div>
    </div>
  )
}
