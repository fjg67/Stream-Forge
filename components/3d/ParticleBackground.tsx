'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const particlesCount = 2000

  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    ref.current.rotation.x = time * 0.05
    ref.current.rotation.y = time * 0.075

    // Mouse interaction
    const mouseX = (state.mouse.x * 0.5)
    const mouseY = (state.mouse.y * 0.5)
    ref.current.rotation.x += mouseY * 0.01
    ref.current.rotation.y += mouseX * 0.01
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8B00FF"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ParticleField />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  )
}
