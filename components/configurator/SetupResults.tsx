'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Product } from '@/lib/configurator-data'
import { formatPrice } from '@/lib/utils'
import { SetupRenderer3D } from './SetupRenderer3D'
import { Share2, Download, RefreshCw, ExternalLink, Sparkles, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

interface SetupResultsProps {
  products: Product[]
  total: number
  budget: number
  savings: number
  shareURL: string
  onReset: () => void
}

export function SetupResults({ products, total, budget, savings, shareURL, onReset }: SetupResultsProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(shareURL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleDownloadJSON = () => {
    const setupData = {
      products: products.map((p) => ({
        name: p.name,
        category: p.category,
        price: p.price,
        url: p.url,
      })),
      total,
      budget,
      savings,
      date: new Date().toISOString(),
    }

    const blob = new Blob([JSON.stringify(setupData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `stream-forge-setup-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-8">
      {/* Success Message */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.2 }}
        className="text-center"
      >
        <Sparkles className="w-16 h-16 text-forge-cyan mx-auto mb-4 animate-pulse-glow" />
        <h3 className="font-display text-3xl md:text-5xl font-black gradient-text mb-4">
          Ton Setup Parfait
        </h3>
        <p className="text-gray-400 text-lg">
          Basé sur ton budget de <span className="text-forge-cyan font-bold">{formatPrice(budget)}</span>
        </p>
      </motion.div>

      {/* 3D Visualization */}
      <SetupRenderer3D products={products} />

      {/* Price Summary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Card variant="cyber" glow className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-forge-violet-start/20 to-forge-cyan/20" />
          <CardContent className="p-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-gray-400 text-sm mb-2">Prix Total du Setup</div>
                <div className="font-display text-4xl md:text-6xl font-black gradient-text">
                  {formatPrice(total)}
                </div>
                {savings > 0 && (
                  <div className="text-sm text-green-400 mt-2">
                    ✅ {formatPrice(savings)} sous le budget !
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleShare}
                  className="group"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Copié !
                    </>
                  ) : (
                    <>
                      <Share2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Partager
                    </>
                  )}
                </Button>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleDownloadJSON}
                  glow
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Products List */}
      <div>
        <h4 className="font-display text-2xl font-bold text-white mb-6">
          Produits Recommandés
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Card variant="glass" hover className="h-full">
                <CardContent className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-forge-violet-start/20 text-forge-cyan border border-forge-cyan/30">
                      {product.category.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-gray-500">
                      {product.tier.toUpperCase()}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h5 className="font-display text-lg font-bold text-white mb-2">
                    {product.name}
                  </h5>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4">
                    {product.description}
                  </p>

                  {/* Specs */}
                  {product.specs && (
                    <div className="mb-4 space-y-1">
                      {product.specs.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex items-center text-xs text-gray-500">
                          <div className="w-1 h-1 rounded-full bg-forge-cyan mr-2" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Price & Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="font-display text-2xl font-black gradient-text">
                      {formatPrice(product.price)}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(product.url, '_blank')}
                      className="group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      {product.affiliate.toUpperCase()}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <div className="text-center pt-8">
        <Button
          variant="ghost"
          size="lg"
          onClick={onReset}
          className="group"
        >
          <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
          Créer un nouveau setup
        </Button>
      </div>

      {/* Share URL Display */}
      {shareURL && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="glass p-4 rounded-xl"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 overflow-hidden">
              <div className="text-xs text-gray-500 mb-1">Lien de partage</div>
              <code className="text-xs text-forge-cyan font-mono truncate block">
                {shareURL}
              </code>
            </div>
            <button
              onClick={handleShare}
              className="p-2 rounded-lg glass hover:bg-forge-cyan/10 transition-colors"
              title="Copier le lien"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400" />
              )}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
