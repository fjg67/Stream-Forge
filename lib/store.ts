import { create } from 'zustand'

interface ForgeStore {
  isUltraNeonMode: boolean
  isMusicPlaying: boolean
  showKappaRain: boolean
  setupBudget: number
  setupCategory: string
  toggleUltraNeon: () => void
  toggleMusic: () => void
  triggerKappaRain: () => void
  setSetupBudget: (budget: number) => void
  setSetupCategory: (category: string) => void
}

export const useForgeStore = create<ForgeStore>((set) => ({
  isUltraNeonMode: false,
  isMusicPlaying: false,
  showKappaRain: false,
  setupBudget: 500,
  setupCategory: 'gaming',

  toggleUltraNeon: () => set((state) => {
    const newMode = !state.isUltraNeonMode
    if (typeof document !== 'undefined') {
      if (newMode) {
        document.documentElement.classList.add('ultra-neon')
      } else {
        document.documentElement.classList.remove('ultra-neon')
      }
    }
    return { isUltraNeonMode: newMode }
  }),

  toggleMusic: () => set((state) => ({ isMusicPlaying: !state.isMusicPlaying })),

  triggerKappaRain: () => {
    set({ showKappaRain: true })
    setTimeout(() => set({ showKappaRain: false }), 5000)
  },

  setSetupBudget: (budget) => set({ setupBudget: budget }),
  setSetupCategory: (category) => set({ setupCategory: category }),
}))
