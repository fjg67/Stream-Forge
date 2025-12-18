'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Flame, Star, DollarSign, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SortOption {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const SORT_OPTIONS: SortOption[] = [
  { id: 'trending', label: 'Tendances', icon: Flame },
  { id: 'rating', label: 'Mieux notés', icon: Star },
  { id: 'price-asc', label: 'Prix croissant', icon: TrendingUp },
  { id: 'price-desc', label: 'Prix décroissant', icon: DollarSign },
]

interface SortDropdownProps {
  currentSort: string
  onSortChange: (sortId: string) => void
}

export function SortDropdown({ currentSort, onSortChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentOption = SORT_OPTIONS.find((opt) => opt.id === currentSort) || SORT_OPTIONS[0]
  const CurrentIcon = currentOption.icon

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (sortId: string) => {
    onSortChange(sortId)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="relative">
      {/* Dropdown Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-3 px-6 py-3.5 rounded-2xl',
          'glass border-2 transition-all duration-300',
          isOpen
            ? 'border-forge-cyan shadow-[0_0_30px_rgba(0,245,255,0.4)]'
            : 'border-gray-700 hover:border-forge-cyan/50'
        )}
      >
        {/* Icon with special animation for Trending */}
        {currentSort === 'trending' ? (
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <CurrentIcon className="w-5 h-5 text-orange-500" />
          </motion.div>
        ) : (
          <CurrentIcon className="w-5 h-5 text-forge-cyan" />
        )}

        <span className="font-display font-bold text-sm uppercase tracking-wider text-white">
          {currentOption.label}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 w-64 glass rounded-2xl border-2 border-forge-cyan/50 overflow-hidden z-20"
            style={{
              boxShadow: '0 0 40px rgba(0, 245, 255, 0.3)',
            }}
          >
            <div className="p-2 space-y-1">
              {SORT_OPTIONS.map((option, index) => {
                const Icon = option.icon
                const isActive = currentSort === option.id
                const isTrending = option.id === 'trending'

                return (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleSelect(option.id)}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-3 rounded-xl',
                      'transition-all duration-300 text-left',
                      isActive
                        ? 'bg-gradient-to-r from-forge-cyan/20 to-forge-violet-start/20 border border-forge-cyan/50'
                        : 'hover:bg-gray-800/50 border border-transparent'
                    )}
                  >
                    {/* Icon */}
                    {isTrending ? (
                      <motion.div
                        animate={{
                          scale: isActive ? [1, 1.3, 1] : 1,
                        }}
                        transition={{
                          duration: 1,
                          repeat: isActive ? Infinity : 0,
                          ease: 'easeInOut',
                        }}
                      >
                        <Icon
                          className={cn(
                            'w-5 h-5',
                            isActive ? 'text-orange-500' : 'text-orange-400'
                          )}
                        />
                      </motion.div>
                    ) : (
                      <Icon
                        className={cn(
                          'w-5 h-5 transition-colors',
                          isActive ? 'text-forge-cyan' : 'text-gray-400'
                        )}
                      />
                    )}

                    {/* Label */}
                    <span
                      className={cn(
                        'font-body font-medium transition-colors',
                        isActive ? 'text-white' : 'text-gray-300'
                      )}
                    >
                      {option.label}
                    </span>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 rounded-full bg-forge-cyan"
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>

            {/* Info Footer */}
            <div className="px-4 py-3 border-t border-gray-800 bg-forge-black/50">
              <div className="flex items-start gap-2">
                <Flame className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5 animate-pulse" />
                <p className="text-xs text-gray-400 leading-relaxed">
                  Les produits <span className="text-orange-500 font-bold">Trending</span> sont
                  les plus populaires actuellement
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
