'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Product } from '@/lib/configurator-data'

interface SetupRenderer3DProps {
  products: Product[]
}

export function SetupRenderer3D({ products }: SetupRenderer3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const mouseRef = useRef({ x: 0, y: 0, isDown: false })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resize = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }
    resize()
    window.addEventListener('resize', resize)

    // Mouse handlers for rotation
    const handleMouseDown = (e: MouseEvent) => {
      mouseRef.current.isDown = true
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (mouseRef.current.isDown) {
        const deltaX = e.clientX - mouseRef.current.x
        const deltaY = e.clientY - mouseRef.current.y

        setRotation((prev) => ({
          x: prev.x + deltaY * 0.01,
          y: prev.y + deltaX * 0.01,
        }))

        mouseRef.current.x = e.clientX
        mouseRef.current.y = e.clientY
      }
    }

    const handleMouseUp = () => {
      mouseRef.current.isDown = false
    }

    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseup', handleMouseUp)
    canvas.addEventListener('mouseleave', handleMouseUp)

    // Draw 3D-style setup
    const drawSetup = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Apply rotation
      const cosX = Math.cos(rotation.x)
      const sinX = Math.sin(rotation.x)
      const cosY = Math.cos(rotation.y)
      const sinY = Math.sin(rotation.y)

      // Draw desk (base platform)
      ctx.save()
      ctx.translate(centerX, centerY + 100)

      // Desk shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
      ctx.beginPath()
      ctx.ellipse(0, 50, 200, 30, 0, 0, Math.PI * 2)
      ctx.fill()

      // Desk top
      const gradient = ctx.createLinearGradient(-150, -20, 150, 20)
      gradient.addColorStop(0, '#2a2a3e')
      gradient.addColorStop(1, '#1a1a2e')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.moveTo(-200, 0)
      ctx.lineTo(200, 0)
      ctx.lineTo(180, 40)
      ctx.lineTo(-180, 40)
      ctx.closePath()
      ctx.fill()

      // Desk edge highlight
      ctx.strokeStyle = 'rgba(139, 0, 255, 0.5)'
      ctx.lineWidth = 2
      ctx.stroke()

      ctx.restore()

      // Draw products as 3D boxes on desk
      products.forEach((product, index) => {
        const angle = (index / products.length) * Math.PI * 2
        const radius = 100 + (index % 2) * 50

        const x = centerX + Math.cos(angle + rotation.y) * radius
        const y = centerY + Math.sin(angle + rotation.y) * radius * 0.5 - 50

        // Product shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
        ctx.beginPath()
        ctx.ellipse(x, y + 60, 25, 8, 0, 0, Math.PI * 2)
        ctx.fill()

        // Product box with 3D effect
        ctx.save()
        ctx.translate(x, y)

        // Determine color by category
        let color = '#8B00FF' // violet default
        if (product.category === 'pc') color = '#A020F0'
        if (product.category === 'microphone') color = '#00F5FF'
        if (product.category === 'camera') color = '#FF10F0'
        if (product.category === 'light') color = '#FFB6C1'

        // Front face
        const boxGradient = ctx.createLinearGradient(-20, -30, 20, 30)
        boxGradient.addColorStop(0, color)
        boxGradient.addColorStop(1, `${color}88`)
        ctx.fillStyle = boxGradient
        ctx.fillRect(-20, -30, 40, 60)

        // Top face (3D effect)
        ctx.fillStyle = `${color}CC`
        ctx.beginPath()
        ctx.moveTo(-20, -30)
        ctx.lineTo(-10, -40)
        ctx.lineTo(30, -40)
        ctx.lineTo(20, -30)
        ctx.closePath()
        ctx.fill()

        // Right face (3D effect)
        ctx.fillStyle = `${color}66`
        ctx.beginPath()
        ctx.moveTo(20, -30)
        ctx.lineTo(30, -40)
        ctx.lineTo(30, 20)
        ctx.lineTo(20, 30)
        ctx.closePath()
        ctx.fill()

        // Glow effect
        ctx.shadowColor = color
        ctx.shadowBlur = 20
        ctx.strokeStyle = color
        ctx.lineWidth = 2
        ctx.strokeRect(-20, -30, 40, 60)
        ctx.shadowBlur = 0

        // Product icon/label
        ctx.fillStyle = '#FFFFFF'
        ctx.font = '12px monospace'
        ctx.textAlign = 'center'
        ctx.fillText(product.category.slice(0, 3).toUpperCase(), 0, 45)

        ctx.restore()

        // Connection lines between products
        if (index < products.length - 1) {
          const nextAngle = ((index + 1) / products.length) * Math.PI * 2
          const nextRadius = 100 + ((index + 1) % 2) * 50
          const nextX = centerX + Math.cos(nextAngle + rotation.y) * nextRadius
          const nextY = centerY + Math.sin(nextAngle + rotation.y) * nextRadius * 0.5 - 50

          ctx.strokeStyle = 'rgba(139, 0, 255, 0.3)'
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(nextX, nextY)
          ctx.stroke()
        }
      })

      // Center glow
      const centerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 150)
      centerGlow.addColorStop(0, 'rgba(139, 0, 255, 0.1)')
      centerGlow.addColorStop(1, 'rgba(139, 0, 255, 0)')
      ctx.fillStyle = centerGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationRef.current = requestAnimationFrame(drawSetup)
    }

    drawSetup()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousedown', handleMouseDown)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseup', handleMouseUp)
      canvas.removeEventListener('mouseleave', handleMouseUp)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [products, rotation])

  // Auto-rotate when not dragging
  useEffect(() => {
    const interval = setInterval(() => {
      if (!mouseRef.current.isDown) {
        setRotation((prev) => ({
          ...prev,
          y: prev.y + 0.005,
        }))
      }
    }, 16)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[500px] rounded-xl overflow-hidden glass"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-lg">
        <p className="text-xs text-gray-400 font-mono">
          🖱️ Glisse pour tourner • Auto-rotation active
        </p>
      </div>

      {/* Product count badge */}
      <div className="absolute top-4 right-4 glass px-4 py-2 rounded-lg">
        <p className="text-sm font-display font-bold gradient-text">
          {products.length} Produits
        </p>
      </div>
    </motion.div>
  )
}
