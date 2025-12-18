'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Flame, ShoppingCart, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Product } from '@/lib/products'

interface ProductCard3DProps {
  product: Product
  index: number
  onClick: () => void
}

export function ProductCard3D({ product, index, onClick }: ProductCard3DProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateXValue = ((y - centerY) / centerY) * -15
    const rotateYValue = ((x - centerX) / centerX) * 15

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              'w-3.5 h-3.5',
              star <= rating
                ? 'fill-forge-cyan text-forge-cyan'
                : 'text-gray-700'
            )}
          />
        ))}
      </div>
    )
  }

  const getBudgetTierColor = (price: number) => {
    if (price < 100) return 'bg-green-500/20 text-green-400 border-green-500/30'
    if (price < 500) return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
  }

  const getBudgetTierLabel = (price: number) => {
    if (price < 100) return 'BUDGET'
    if (price < 500) return 'MID-TIER'
    return 'PREMIUM'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
      className="perspective-1000"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={cn(
          'relative group cursor-pointer',
          'glass rounded-2xl overflow-hidden',
          'border-2 border-gray-800/50',
          'hover:border-forge-violet-start/60',
          'transition-all duration-300',
          'transform-gpu preserve-3d'
        )}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Neon Glow on Hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
          style={{
            boxShadow: '0 0 40px rgba(139, 0, 255, 0.6), 0 0 80px rgba(139, 0, 255, 0.3)',
          }}
        />

        {/* Trending Badge */}
        {product.trending && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.05 + 0.3, type: 'spring' }}
            className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 border border-orange-400/50"
          >
            <Flame className="w-3.5 h-3.5 text-white animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Trending
            </span>
          </motion.div>
        )}

        {/* Budget Tier Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span
            className={cn(
              'text-xs font-mono px-2.5 py-1 rounded-full border uppercase tracking-wider font-bold',
              getBudgetTierColor(product.price)
            )}
          >
            {getBudgetTierLabel(product.price)}
          </span>
        </div>

        {/* Product Image */}
        <div className="relative w-full h-56 bg-gradient-to-br from-forge-black via-gray-900 to-forge-violet-start/10 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-8xl opacity-20 filter blur-sm"
            >
              {product.category === 'cameras' && '📷'}
              {product.category === 'micros' && '🎙️'}
              {product.category === 'audio' && '🎚️'}
              {product.category === 'eclairage' && '💡'}
              {product.category === 'pc' && '🖥️'}
              {product.category === 'ecrans' && '📺'}
            </motion.div>
          </div>

          {/* Holographic Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-forge-cyan/0 via-forge-cyan/20 to-forge-cyan/0 opacity-0 group-hover:opacity-100"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          {/* Brand */}
          <div className="text-xs font-mono text-forge-cyan uppercase tracking-widest">
            {product.brand}
          </div>

          {/* Name */}
          <h3 className="font-display text-lg font-bold text-white leading-tight group-hover:text-forge-cyan transition-colors duration-300">
            {product.name}
          </h3>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-3">
            {renderStars(product.rating)}
            <span className="text-xs text-gray-500 font-mono">
              ({product.reviews.toLocaleString()} avis)
            </span>
          </div>

          {/* Specs Preview */}
          <div className="space-y-1">
            {product.specs.slice(0, 3).map((spec, i) => (
              <div key={i} className="flex items-center text-xs text-gray-400">
                <div className="w-1 h-1 rounded-full bg-forge-violet-start mr-2" />
                <span className="truncate">{spec}</span>
              </div>
            ))}
          </div>

          {/* Price & Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <div>
              <div className="text-xs text-gray-500 font-mono mb-1">Prix</div>
              <div className="font-display text-2xl font-black gradient-text">
                {product.price}€
              </div>
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl glass border border-forge-cyan/30 hover:border-forge-cyan transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(product.url, '_blank')
                }}
              >
                <ShoppingCart className="w-4 h-4 text-forge-cyan" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl glass border border-forge-violet-start/30 hover:border-forge-violet-start transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-forge-violet-start" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* 3D Depth Effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(139,0,255,0.05) 0%, transparent 50%, rgba(0,245,255,0.05) 100%)',
            transform: 'translateZ(20px)',
          }}
        />
      </motion.div>
    </motion.div>
  )
}
