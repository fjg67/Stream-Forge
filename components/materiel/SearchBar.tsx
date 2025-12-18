'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function SearchBar({ onSearch, placeholder = 'Rechercher un produit...' }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const debounce = setTimeout(() => {
      onSearch(query)
    }, 300)

    return () => clearTimeout(debounce)
  }, [query, onSearch])

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div
        className={cn(
          'relative glass rounded-2xl border-2 transition-all duration-300',
          isFocused
            ? 'border-forge-cyan shadow-[0_0_30px_rgba(0,245,255,0.4)]'
            : 'border-gray-700 hover:border-forge-cyan/50'
        )}
      >
        {/* Search Icon */}
        <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
          <Search
            className={cn(
              'w-5 h-5 transition-colors duration-300',
              isFocused ? 'text-forge-cyan' : 'text-gray-500'
            )}
          />
        </div>

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={cn(
            'w-full pl-14 pr-14 py-4 bg-transparent',
            'font-body text-white placeholder:text-gray-500',
            'outline-none transition-all duration-300',
            'rounded-2xl'
          )}
        />

        {/* Clear Button */}
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleClear}
              className="absolute right-5 top-1/2 -translate-y-1/2 p-1.5 rounded-full glass border border-gray-700 hover:border-forge-cyan transition-all hover:scale-110"
            >
              <X className="w-4 h-4 text-gray-400 hover:text-white" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Animated Underline */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-forge-cyan via-forge-violet-start to-forge-cyan"
            style={{ originX: 0.5 }}
          />
        )}
      </AnimatePresence>

      {/* Search Tips */}
      <AnimatePresence>
        {isFocused && !query && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 left-0 right-0 glass rounded-xl border border-gray-800 p-4 z-10"
          >
            <div className="text-xs text-gray-400 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-forge-cyan" />
                <span>Recherche par nom de produit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-forge-violet-start" />
                <span>Recherche par marque (Elgato, Shure, etc.)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-forge-rose-gold" />
                <span>Recherche par specs (4K, USB, XLR, etc.)</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
