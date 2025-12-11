'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid' | 'bordered' | 'cyber'
  hover?: boolean
  glow?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', hover = true, glow = false, children, ...props }, ref) => {
    const variants = {
      glass: 'glass',
      solid: 'bg-forge-black-light border border-forge-violet-start/30',
      bordered: 'bg-transparent border-2 border-forge-cyan',
      cyber: 'bg-forge-black border-2 border-forge-violet-start relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-forge-violet-start/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity',
    }

    const hoverStyles = hover ? 'card-hover-lift cursor-pointer' : ''
    const glowStyles = glow ? 'neon-glow-violet' : ''

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          'rounded-xl p-6',
          variants[variant],
          hoverStyles,
          glowStyles,
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mb-4', className)} {...props} />
)

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('font-display text-2xl font-bold gradient-text', className)} {...props} />
)

export const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-gray-400 mt-2', className)} {...props} />
)

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('', className)} {...props} />
)
