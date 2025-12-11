'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'cyber'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  glow?: boolean
  animated?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', glow = false, animated = true, children, ...props }, ref) => {
    const baseStyles = 'relative font-display font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-gradient-to-r from-forge-violet-start to-forge-violet-end text-white hover:shadow-2xl hover:scale-105',
      secondary: 'glass text-forge-cyan border-forge-cyan hover:bg-forge-cyan hover:text-forge-black',
      ghost: 'bg-transparent text-forge-violet border border-forge-violet-start hover:bg-forge-violet-start/10',
      cyber: 'bg-forge-black text-forge-cyan border-2 border-forge-cyan relative before:absolute before:inset-0 before:bg-forge-cyan before:opacity-0 hover:before:opacity-20 before:transition-opacity',
    }

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
      xl: 'px-12 py-6 text-lg',
    }

    const glowStyles = glow ? (variant === 'primary' ? 'neon-glow-violet' : 'neon-glow-cyan') : ''

    const ButtonComponent = animated ? motion.button : 'button'
    const animationProps = animated ? {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      transition: { type: 'spring', stiffness: 400, damping: 17 }
    } : {}

    return (
      <ButtonComponent
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          glowStyles,
          'btn-pulse',
          className
        )}
        {...animationProps}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </ButtonComponent>
    )
  }
)

Button.displayName = 'Button'
