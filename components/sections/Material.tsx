'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import { PRODUCTS, CATEGORIES, BUDGET_FILTERS, SORT_OPTIONS, type Product } from '@/lib/products'
import {
  Monitor,
  Mic,
  Camera,
  Headphones,
  Lightbulb,
  Cpu,
  Filter,
  Star,
  TrendingUp,
  ExternalLink,
  ShoppingCart,
  Sparkles,
} from 'lucide-react'

// Mapping des icônes pour les catégories
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Filter,
  Camera,
  Mic,
  Headphones,
  Lightbulb,
  Cpu,
  Monitor,
}

// Badges dynamiques basés sur le produit
const getBadge = (product: Product): string | null => {
  if (product.rating >= 4.9) return '⭐ Top Rated'
  if (product.trending) return '🔥 Tendance'
  if (product.budget === 'debutant') return '💚 Budget Friendly'
  if (product.budget === 'pro') return '💎 Pro Choice'
  return null
}

export function Material() {
  const [selectedCategory, setSelectedCategory] = useState('tout')
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState('trending')
  const [visibleCount, setVisibleCount] = useState(9)

  // Filtrage et tri des produits
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS]

    // Filtre par catégorie
    if (selectedCategory !== 'tout') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Filtre par budget
    if (selectedBudget) {
      result = result.filter((p) => p.budget === selectedBudget)
    }

    // Tri
    result.sort((a, b) => {
      switch (sortBy) {
        case 'trending':
          if (a.trending && !b.trending) return -1
          if (!a.trending && b.trending) return 1
          return b.reviews - a.reviews
        case 'rating':
          return b.rating - a.rating
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'reviews':
          return b.reviews - a.reviews
        default:
          return 0
      }
    })

    return result
  }, [selectedCategory, selectedBudget, sortBy])

  const displayedProducts = filteredProducts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProducts.length

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, filteredProducts.length))
  }

  const resetFilters = () => {
    setSelectedCategory('tout')
    setSelectedBudget(null)
    setSortBy('trending')
    setVisibleCount(9)
  }

  return (
    <section id="material" className="relative py-32 overflow-hidden bg-gradient-to-b from-forge-black to-forge-black-light">
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-forge-violet" />
            <span className="text-sm font-mono text-forge-cyan">Testé par la communauté</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text mb-6">
            Matériel Ultime 2025
          </h2>
          <p className="font-body text-xl text-gray-400 max-w-3xl mx-auto">
            {PRODUCTS.length}+ produits testés, comparés, notés par la communauté Stream Forge
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          {CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Filter
            return (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'primary' : 'ghost'}
                size="md"
                onClick={() => {
                  setSelectedCategory(cat.id)
                  setVisibleCount(9)
                }}
                className={selectedCategory === cat.id ? 'neon-glow-violet' : ''}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {cat.name}
              </Button>
            )
          })}
        </motion.div>

        {/* Budget Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          <span className="text-sm text-gray-400 self-center mr-2">Budget:</span>
          {BUDGET_FILTERS.map((budget) => (
            <button
              key={budget.id}
              onClick={() => {
                setSelectedBudget(selectedBudget === budget.id ? null : budget.id)
                setVisibleCount(9)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedBudget === budget.id
                  ? `${budget.color} text-white shadow-lg scale-105`
                  : 'glass text-gray-300 hover:text-white hover:scale-105'
              }`}
            >
              {budget.label}
            </button>
          ))}
          {(selectedCategory !== 'tout' || selectedBudget) && (
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-full text-sm font-medium text-red-400 hover:text-red-300 transition-colors underline"
            >
              Réinitialiser
            </button>
          )}
        </motion.div>

        {/* Sort & Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-between items-center mb-8 gap-4"
        >
          <div className="text-gray-400">
            <span className="text-forge-cyan font-bold">{filteredProducts.length}</span> produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
          </div>
          <div className="glass px-4 py-2 rounded-lg flex items-center gap-4">
            <span className="text-sm text-gray-400">Trier par:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-forge-cyan font-mono text-sm focus:outline-none cursor-pointer"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.icon} {option.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product, index) => {
              const badge = getBadge(product)
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Card variant="glass" hover glow className="h-full group overflow-hidden">
                    {/* Product Image */}
                    <div className="relative h-56 overflow-hidden rounded-t-xl">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${product.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-transparent to-transparent" />

                      {/* Dynamic Badge */}
                      {badge && (
                        <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                          <span className="text-xs font-mono text-forge-cyan">{badge}</span>
                        </div>
                      )}

                      {/* Trending Badge */}
                      {product.trending && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 rounded-full flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-white" />
                          <span className="text-xs font-bold text-white">HOT</span>
                        </div>
                      )}

                      {/* Brand Badge */}
                      <div className="absolute bottom-4 left-4 glass px-2 py-1 rounded">
                        <span className="text-xs font-mono text-white/80">{product.brand}</span>
                      </div>

                      {/* Stock indicator */}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <span className="text-red-400 font-bold">Rupture de stock</span>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-6">
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {product.rating} ({product.reviews.toLocaleString()})
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Specs Preview */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.specs.slice(0, 3).map((spec, i) => (
                          <span
                            key={i}
                            className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-display text-2xl font-black gradient-text">
                            {formatPrice(product.price)}
                          </div>
                          <div className="text-xs text-gray-500">via {product.affiliate}</div>
                        </div>
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Button variant="secondary" size="sm" className="group-hover:neon-glow-cyan">
                            <ShoppingCart className="w-4 h-4" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-400 mb-4">Aucun produit ne correspond à vos critères</p>
            <Button variant="primary" onClick={resetFilters}>
              Réinitialiser les filtres
            </Button>
          </motion.div>
        )}

        {/* Load More / View All Button */}
        {filteredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            {hasMore ? (
              <Button variant="cyber" size="xl" glow onClick={loadMore}>
                Voir plus ({filteredProducts.length - visibleCount} restants)
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            ) : (
              <p className="text-gray-400">
                Vous avez vu tous les {filteredProducts.length} produits de cette catégorie
              </p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
