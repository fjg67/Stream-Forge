'use client'

import { motion } from 'framer-motion'
import { X, Star, ExternalLink, ShoppingCart, Check, Flame } from 'lucide-react'
import { Product } from '@/lib/products'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              'w-5 h-5',
              star <= rating
                ? 'fill-forge-cyan text-forge-cyan'
                : 'text-gray-700'
            )}
          />
        ))}
        <span className="ml-2 text-sm font-mono text-gray-400">
          {rating}/5 ({product.reviews.toLocaleString()} avis)
        </span>
      </div>
    )
  }

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl glass rounded-3xl border-2 border-forge-violet-start/30 overflow-hidden"
          style={{
            boxShadow: '0 0 60px rgba(139, 0, 255, 0.4), 0 0 120px rgba(139, 0, 255, 0.2)',
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-3 rounded-full glass border border-gray-700 hover:border-forge-cyan transition-all hover:scale-110"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>

          {/* Header with Image */}
          <div className="relative h-80 bg-gradient-to-br from-forge-black via-gray-900 to-forge-violet-start/20 overflow-hidden">
            {/* Trending Badge */}
            {product.trending && (
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 border border-orange-400/50">
                <Flame className="w-4 h-4 text-white animate-pulse" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  Trending
                </span>
              </div>
            )}

            {/* Category Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-9xl opacity-20 filter blur-sm"
              >
                {product.category === 'cameras' && '📷'}
                {product.category === 'micros' && '🎙️'}
                {product.category === 'audio' && '🎚️'}
                {product.category === 'eclairage' && '💡'}
                {product.category === 'pc' && '🖥️'}
                {product.category === 'ecrans' && '📺'}
              </motion.div>
            </div>

            {/* Animated Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-forge-violet-start/30 via-forge-cyan/30 to-forge-violet-start/30"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Brand & Category */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-forge-cyan uppercase tracking-widest">
                {product.brand}
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-forge-violet-start/20 text-forge-violet-start border border-forge-violet-start/30 uppercase">
                {product.category}
              </span>
            </div>

            {/* Product Name */}
            <h2 className="font-display text-4xl font-black gradient-text leading-tight">
              {product.name}
            </h2>

            {/* Rating */}
            <div>{renderStars(product.rating)}</div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* Specs */}
            <div>
              <h4 className="font-display text-xl font-bold text-white mb-4">
                Caractéristiques Techniques
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.specs.map((spec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg glass border border-gray-800"
                  >
                    <Check className="w-4 h-4 text-forge-cyan flex-shrink-0" />
                    <span className="text-sm text-gray-300">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Price & Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-800">
              <div>
                <div className="text-sm text-gray-500 font-mono mb-2">Prix</div>
                <div className="font-display text-5xl font-black gradient-text">
                  {product.price}€
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open(product.url, '_blank')}
                  className="group w-full sm:w-auto"
                >
                  <ExternalLink className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Voir sur {product.affiliate}
                </Button>

                <Button
                  variant="primary"
                  size="lg"
                  glow
                  onClick={() => window.open(product.url, '_blank')}
                  className="w-full sm:w-auto"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Acheter Maintenant
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass rounded-xl p-4 border border-forge-cyan/30">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💡</div>
                <div>
                  <h5 className="font-display text-sm font-bold text-white mb-1">
                    Conseil Stream Forge
                  </h5>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Ce produit est recommandé pour les streamers recherchant un excellent rapport qualité/prix.
                    Compatible avec OBS, Streamlabs, et tous les logiciels de streaming populaires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
