'use client'

import { motion } from 'framer-motion'
import { AESTHETIC_PREFS, SETUP_PREFS } from '@/lib/configurator-data'
import { cn } from '@/lib/utils'

interface PreferencesStepProps {
  selectedAesthetic: string | null
  selectedPrefs: string[]
  onSelectAesthetic: (aesthetic: string) => void
  onTogglePref: (pref: string) => void
}

export function PreferencesStep({
  selectedAesthetic,
  selectedPrefs,
  onSelectAesthetic,
  onTogglePref,
}: PreferencesStepProps) {
  return (
    <div className="space-y-12">
      {/* Aesthetic Selection */}
      <div>
        <h4 className="font-display text-xl font-bold text-white mb-6">
          Style Esthétique
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {AESTHETIC_PREFS.map((aesthetic, index) => (
            <motion.button
              key={aesthetic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectAesthetic(aesthetic.id)}
              className={cn(
                'p-6 rounded-xl border-2 transition-all duration-300',
                selectedAesthetic === aesthetic.id
                  ? 'border-forge-rose-gold bg-forge-rose-gold/10'
                  : 'border-gray-700 glass hover:border-forge-rose-gold/50'
              )}
            >
              <div className="text-5xl mb-3">{aesthetic.icon}</div>
              <h5 className="font-display text-lg font-bold text-white mb-1">
                {aesthetic.label}
              </h5>
              <p className="text-xs text-gray-400 mb-2">
                {aesthetic.description}
              </p>
              {aesthetic.priceModifier > 0 && (
                <span className="text-xs font-mono text-forge-cyan">
                  +{aesthetic.priceModifier}€
                </span>
              )}

              {selectedAesthetic === aesthetic.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-3"
                >
                  <div className="w-full h-1 rounded-full bg-gradient-to-r from-forge-rose-gold to-forge-violet-start" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Setup Preferences (Multi-select) */}
      <div>
        <h4 className="font-display text-xl font-bold text-white mb-6">
          Options Supplémentaires
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SETUP_PREFS.map((pref, index) => {
            const isSelected = selectedPrefs.includes(pref.value)

            return (
              <motion.button
                key={pref.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onTogglePref(pref.value)}
                className={cn(
                  'p-5 rounded-xl border-2 transition-all duration-300 text-left relative',
                  isSelected
                    ? 'border-forge-cyan bg-forge-cyan/10'
                    : 'border-gray-700 glass hover:border-forge-cyan/50'
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-body text-white font-medium">
                    {pref.label}
                  </span>

                  {/* Checkbox */}
                  <div
                    className={cn(
                      'w-6 h-6 rounded border-2 transition-all duration-300 flex items-center justify-center',
                      isSelected
                        ? 'bg-forge-cyan border-forge-cyan'
                        : 'border-gray-600'
                    )}
                  >
                    {isSelected && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4 text-forge-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    )}
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
