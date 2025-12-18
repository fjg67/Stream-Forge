'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Fuse from 'fuse.js'
import { PRODUCTS, Product } from '@/lib/products'
import { FilterBar } from '@/components/materiel/FilterBar'
import { SearchBar } from '@/components/materiel/SearchBar'
import { SortDropdown } from '@/components/materiel/SortDropdown'
import { ProductGrid } from '@/components/materiel/ProductGrid'
import { Sparkles, Package } from 'lucide-react'

export default function MaterielPage() {
  const [activeCategory, setActiveCategory] = useState('tout')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('trending')

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(
    () =>
      new Fuse(PRODUCTS, {
        keys: ['name', 'brand', 'category', 'specs'],
        threshold: 0.3,
        ignoreLocation: true,
      }),
    []
  )

  // Filter, search, and sort products
  const filteredProducts = useMemo(() => {
    let results: Product[] = PRODUCTS

    // Apply category filter
    if (activeCategory !== 'tout') {
      results = results.filter((product) => product.category === activeCategory)
    }

    // Apply search
    if (searchQuery.trim()) {
      const fuseResults = fuse.search(searchQuery)
      const searchedIds = new Set(fuseResults.map((r) => r.item.id))
      results = results.filter((product) => searchedIds.has(product.id))
    }

    // Apply sorting
    switch (sortBy) {
      case 'trending':
        results = [...results].sort((a, b) => {
          if (a.trending && !b.trending) return -1
          if (!a.trending && b.trending) return 1
          return b.rating - a.rating
        })
        break
      case 'rating':
        results = [...results].sort((a, b) => b.rating - a.rating)
        break
      case 'price-asc':
        results = [...results].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        results = [...results].sort((a, b) => b.price - a.price)
        break
    }

    return results
  }, [activeCategory, searchQuery, sortBy, fuse])

  return (
    <div className="relative min-h-screen py-32">
      {/* Cyber Grid Background */}
      <div className="cyber-grid" />

      <div className="container-custom relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-forge-cyan/30 mb-6"
          >
            <Sparkles className="w-5 h-5 text-forge-cyan animate-pulse-glow" />
            <span className="font-mono text-sm text-forge-cyan uppercase tracking-wider font-bold">
              Matériel Testé & Approuvé 2025
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black gradient-text mb-6 leading-tight">
            Matériel Ultime
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvre les <span className="text-forge-cyan font-bold">500+ produits</span> testés
            par la communauté Stream Forge. Du débutant au pro, trouve ton setup parfait.
          </p>
        </motion.div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1">
            <SearchBar onSearch={setSearchQuery} />
          </div>
          <div>
            <SortDropdown currentSort={sortBy} onSortChange={setSortBy} />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-12">
          <FilterBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <Package className="w-5 h-5 text-forge-cyan" />
            <span className="font-mono text-sm text-gray-400">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé
              {filteredProducts.length > 1 ? 's' : ''}
            </span>
          </div>

          {searchQuery && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setSearchQuery('')}
              className="text-sm text-gray-500 hover:text-forge-cyan transition-colors underline"
            >
              Effacer la recherche
            </motion.button>
          )}
        </motion.div>

        {/* Products Grid */}
        <ProductGrid products={filteredProducts} />

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Produits Testés', value: '500+', icon: '🔬' },
            { label: 'Avis Communauté', value: '50K+', icon: '⭐' },
            { label: 'Setups Créés', value: '10K+', icon: '🎮' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-8 border border-forge-violet-start/30 text-center hover:border-forge-cyan transition-all duration-300"
              style={{
                boxShadow: '0 0 30px rgba(139, 0, 255, 0.2)',
              }}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="font-display text-4xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 glass rounded-3xl p-12 border-2 border-forge-violet-start/30 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-forge-violet-start/10 to-forge-cyan/10" />
          <div className="relative z-10">
            <h3 className="font-display text-3xl md:text-5xl font-black gradient-text mb-4">
              Ton Setup Parfait t'Attend
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Utilise notre configurateur intelligent pour obtenir des recommandations
              personnalisées basées sur ton budget et ton type de contenu.
            </p>
            <motion.a
              href="/configurator"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-forge-violet-start to-forge-violet-end border-2 border-forge-violet-start font-display font-bold text-white uppercase tracking-wider transition-all duration-300"
              style={{
                boxShadow: '0 0 40px rgba(139, 0, 255, 0.6)',
              }}
            >
              <Sparkles className="w-5 h-5" />
              Créer Mon Setup
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
