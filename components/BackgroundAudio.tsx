'use client'

import { useEffect, useRef } from 'react'
import { useForgeStore } from '@/lib/store'

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { isMusicPlaying } = useForgeStore()

  useEffect(() => {
    // Créer l'élément audio au montage
    if (!audioRef.current) {
      audioRef.current = new Audio()
      // Utiliser une URL de musique lo-fi/synthwave libre de droits
      // Tu peux remplacer par ta propre musique
      audioRef.current.src = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3'
      audioRef.current.loop = true
      audioRef.current.volume = 0.3
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play().catch(err => {
          console.log('Audio playback failed:', err)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isMusicPlaying])

  return null
}
