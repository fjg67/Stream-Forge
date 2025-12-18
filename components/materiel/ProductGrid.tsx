'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProductCard3D } from './ProductCard3D'
import { ProductModal } from './ProductModal'
import { Product } from '@/lib/products'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {products.map((product, index) => (
            <ProductCard3D
              key={product.id}
              product={product}
              index={index}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {products.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-20"
        >
          <div className="text-6xl mb-4 opacity-30">🔍</div>
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            Aucun produit trouvé
          </h3>
          <p className="text-gray-400 text-center max-w-md">
            Essaye de modifier les filtres ou la recherche pour trouver le matériel parfait.
          </p>
        </motion.div>
      )}

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
