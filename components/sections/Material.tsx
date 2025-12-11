'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
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
} from 'lucide-react'

const categories = [
  { id: 'all', name: 'Tout', icon: Filter },
  { id: 'camera', name: 'Caméras', icon: Camera },
  { id: 'micro', name: 'Micros', icon: Mic },
  { id: 'audio', name: 'Audio', icon: Headphones },
  { id: 'light', name: 'Éclairage', icon: Lightbulb },
  { id: 'pc', name: 'PC/Config', icon: Cpu },
  { id: 'screen', name: 'Écrans', icon: Monitor },
]

const products = [
  {
    id: 1,
    name: 'Shure SM7B',
    category: 'micro',
    price: 399,
    rating: 4.9,
    reviews: 2847,
    badge: 'Le Graal',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400',
    description: 'Le micro légende utilisé par les plus grands streamers',
    trending: true,
  },
  {
    id: 2,
    name: 'Sony A6400',
    category: 'camera',
    price: 899,
    rating: 4.8,
    reviews: 1432,
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1606980639964-d4a6087d1e15?w=400',
    description: 'Qualité cinéma pour ton stream',
    trending: true,
  },
  {
    id: 3,
    name: 'Elgato Key Light',
    category: 'light',
    price: 199,
    rating: 4.7,
    reviews: 3219,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1557980147-7862c2c2c581?w=400',
    description: 'Éclairage parfait, ajustable depuis OBS',
    trending: false,
  },
  {
    id: 4,
    name: 'GoXLR',
    category: 'audio',
    price: 449,
    rating: 4.8,
    reviews: 1876,
    badge: 'Pro',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400',
    description: 'Console de mixage ultime pour streamers',
    trending: true,
  },
  {
    id: 5,
    name: 'LG 27" 4K IPS',
    category: 'screen',
    price: 549,
    rating: 4.6,
    reviews: 987,
    badge: 'Top Qualité',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
    description: 'Dalle IPS avec calibration colorimétrique parfaite',
    trending: false,
  },
  {
    id: 6,
    name: 'PC AMD Ryzen 7950X + RTX 4080',
    category: 'pc',
    price: 2499,
    rating: 5.0,
    reviews: 456,
    badge: 'Beast Mode',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400',
    description: 'Stream + jeu en ultra sans compromis',
    trending: true,
  },
]

export function Material() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('trending')

  const filteredProducts = products
    .filter((p) => selectedCategory === 'all' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'trending') return b.trending ? 1 : -1
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <section id="material" className="relative py-32 overflow-hidden bg-gradient-to-b from-forge-black to-forge-black-light">
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text mb-6">
            Matériel Ultime 2025
          </h2>
          <p className="font-body text-xl text-gray-400 max-w-3xl mx-auto">
            500+ produits testés, comparés, notés par la communauté Stream Forge
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'primary' : 'ghost'}
              size="md"
              onClick={() => setSelectedCategory(cat.id)}
              className={selectedCategory === cat.id ? 'neon-glow-violet' : ''}
            >
              <cat.icon className="w-4 h-4 mr-2" />
              {cat.name}
            </Button>
          ))}
        </motion.div>

        {/* Sort Options */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-end mb-8"
        >
          <div className="glass px-4 py-2 rounded-lg flex items-center gap-4">
            <span className="text-sm text-gray-400">Trier par:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-forge-cyan font-mono text-sm focus:outline-none cursor-pointer"
            >
              <option value="trending">🔥 Tendances</option>
              <option value="rating">⭐ Notes</option>
              <option value="price-low">💰 Prix croissant</option>
              <option value="price-high">💎 Prix décroissant</option>
            </select>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="glass" hover glow className="h-full group overflow-hidden">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-transparent to-transparent" />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                      <span className="text-xs font-mono text-forge-cyan">{product.badge}</span>
                    </div>
                  )}

                  {/* Trending Badge */}
                  {product.trending && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-white" />
                      <span className="text-xs font-bold text-white">HOT</span>
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
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="font-display text-2xl font-black gradient-text">
                      {formatPrice(product.price)}
                    </div>
                    <Button variant="secondary" size="sm" className="group-hover:neon-glow-cyan">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="cyber" size="xl" glow>
            Voir les 500+ Produits
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
