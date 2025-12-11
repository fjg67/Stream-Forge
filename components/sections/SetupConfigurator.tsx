'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useForgeStore } from '@/lib/store'
import { formatPrice } from '@/lib/utils'
import {
  Monitor,
  Mic,
  Camera,
  Headphones,
  Keyboard,
  Speaker,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Share2,
  Download,
} from 'lucide-react'

interface SetupItem {
  id: string
  name: string
  category: string
  price: number
  image: string
  icon: any
}

const budgetRanges = [
  { value: 300, label: '300€ - Budget Débutant', color: 'from-green-500 to-emerald-500' },
  { value: 800, label: '800€ - Intermédiaire', color: 'from-blue-500 to-cyan-500' },
  { value: 1500, label: '1500€ - Avancé', color: 'from-purple-500 to-pink-500' },
  { value: 3000, label: '3000€ - Pro', color: 'from-orange-500 to-red-500' },
  { value: 5000, label: '5000€+ - Elite', color: 'from-yellow-500 to-amber-500' },
]

const gameTypes = [
  { id: 'fps', name: 'FPS Compétitif', icon: '🎯' },
  { id: 'mmo', name: 'MMO/RPG', icon: '⚔️' },
  { id: 'strategy', name: 'Stratégie', icon: '🧠' },
  { id: 'casual', name: 'Casual/Variété', icon: '🎮' },
  { id: 'irl', name: 'IRL/Just Chatting', icon: '💬' },
]

const aestheticStyles = [
  { id: 'cyberpunk', name: 'Cyberpunk', preview: 'linear-gradient(135deg, #8B00FF, #00F5FF)' },
  { id: 'minimal', name: 'Minimaliste', preview: 'linear-gradient(135deg, #000000, #434343)' },
  { id: 'rgb', name: 'RGB Gaming', preview: 'linear-gradient(135deg, #FF0080, #7928CA, #00F5FF)' },
  { id: 'wood', name: 'Chaleureux/Bois', preview: 'linear-gradient(135deg, #8B4513, #D2691E)' },
]

const mockSetups: Record<number, SetupItem[]> = {
  300: [
    { id: '1', name: 'Logitech C920', category: 'Webcam', price: 80, image: '', icon: Camera },
    { id: '2', name: 'Blue Snowball', category: 'Microphone', price: 60, image: '', icon: Mic },
    { id: '3', name: 'Ring Light 10"', category: 'Éclairage', price: 30, image: '', icon: Speaker },
    { id: '4', name: 'Casque HyperX Cloud', category: 'Audio', price: 70, image: '', icon: Headphones },
    { id: '5', name: 'Clavier Mécanique K552', category: 'Périphérique', price: 60, image: '', icon: Keyboard },
  ],
  800: [
    { id: '1', name: 'Elgato Facecam', category: 'Webcam', price: 180, image: '', icon: Camera },
    { id: '2', name: 'Elgato Wave:3', category: 'Microphone', price: 160, image: '', icon: Mic },
    { id: '3', name: 'Elgato Key Light', category: 'Éclairage', price: 120, image: '', icon: Speaker },
    { id: '4', name: 'Audio-Technica ATH-M50x', category: 'Audio', price: 150, image: '', icon: Headphones },
    { id: '5', name: 'Clavier Corsair K70', category: 'Périphérique', price: 190, image: '', icon: Keyboard },
  ],
  1500: [
    { id: '1', name: 'Sony A6400', category: 'Caméra', price: 900, image: '', icon: Camera },
    { id: '2', name: 'Shure SM7B + interface', category: 'Microphone', price: 500, image: '', icon: Mic },
    { id: '3', name: 'Elgato Key Light Air x2', category: 'Éclairage', price: 260, image: '', icon: Speaker },
    { id: '4', name: 'Beyerdynamic DT 770 Pro', category: 'Audio', price: 150, image: '', icon: Headphones },
    { id: '5', name: 'Stream Deck XL', category: 'Contrôle', price: 250, image: '', icon: Monitor },
  ],
  3000: [
    { id: '1', name: 'Sony A7 III + objectif', category: 'Caméra', price: 2000, image: '', icon: Camera },
    { id: '2', name: 'Shure SM7B + GoXLR', category: 'Setup Audio Pro', price: 900, image: '', icon: Mic },
    { id: '3', name: 'Aputure MC RGBWW x4', category: 'Éclairage Pro', price: 400, image: '', icon: Speaker },
    { id: '4', name: 'Écran 4K 32" x2', category: 'Moniteurs', price: 1200, image: '', icon: Monitor },
  ],
  5000: [
    { id: '1', name: 'Sony FX3 Cinema', category: 'Caméra Cinéma', price: 4000, image: '', icon: Camera },
    { id: '2', name: 'Neumann TLM 103 + RME', category: 'Audio Broadcast', price: 1500, image: '', icon: Mic },
    { id: '3', name: 'Setup Lumière Cinéma', category: 'Éclairage Studio', price: 1200, image: '', icon: Speaker },
    { id: '4', name: 'ATEM Mini Extreme', category: 'Régie Vidéo', price: 1000, image: '', icon: Monitor },
  ],
}

export function SetupConfigurator() {
  const [step, setStep] = useState(0)
  const [selectedBudget, setSelectedBudget] = useState(800)
  const [selectedGame, setSelectedGame] = useState('')
  const [selectedAesthetic, setSelectedAesthetic] = useState('')
  const [showResults, setShowResults] = useState(false)

  const { setSetupBudget } = useForgeStore()

  const steps = [
    { title: 'Budget', description: 'Combien veux-tu investir ?' },
    { title: 'Usage', description: 'Que vas-tu streamer ?' },
    { title: 'Style', description: 'Quelle ambiance veux-tu créer ?' },
  ]

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      setSetupBudget(selectedBudget)
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handleReset = () => {
    setStep(0)
    setSelectedBudget(800)
    setSelectedGame('')
    setSelectedAesthetic('')
    setShowResults(false)
  }

  const setupItems = mockSetups[selectedBudget] || mockSetups[800]
  const totalPrice = setupItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <section id="configurator" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-forge-cyan" />
            <span className="text-sm font-mono text-forge-cyan">Le Joyau de Stream Forge</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text mb-6">
            Configurateur de Setup Intelligent
          </h2>
          <p className="font-body text-xl text-gray-400 max-w-3xl mx-auto">
            Réponds à 3 questions, obtiens ton setup parfait personnalisé en 3D
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="configurator"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl mx-auto"
            >
              <Card variant="cyber" className="p-8 md:p-12">
                {/* Progress Bar */}
                <div className="mb-12">
                  <div className="flex justify-between mb-4">
                    {steps.map((s, i) => (
                      <div
                        key={i}
                        className={`flex items-center ${i < steps.length - 1 ? 'flex-1' : ''}`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                            i <= step
                              ? 'bg-gradient-to-r from-forge-violet-start to-forge-cyan text-white neon-glow-violet'
                              : 'glass text-gray-500'
                          }`}
                        >
                          {i + 1}
                        </div>
                        {i < steps.length - 1 && (
                          <div className={`flex-1 h-1 mx-4 rounded ${i < step ? 'bg-gradient-to-r from-forge-violet-start to-forge-cyan' : 'bg-gray-700'}`} />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {steps[step].title}
                    </h3>
                    <p className="text-gray-400">{steps[step].description}</p>
                  </div>
                </div>

                {/* Step Content */}
                <div className="min-h-[400px]">
                  {step === 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      {budgetRanges.map((range) => (
                        <motion.button
                          key={range.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedBudget(range.value)}
                          className={`w-full p-6 rounded-xl border-2 transition-all ${
                            selectedBudget === range.value
                              ? 'border-forge-violet-start bg-forge-violet-start/10 neon-glow-violet'
                              : 'border-gray-700 glass hover:border-forge-violet-start/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-left">
                              <div className="font-display text-xl font-bold text-white mb-1">
                                {range.label}
                              </div>
                              <div className="text-sm text-gray-400">
                                Setup {range.value <= 500 ? 'débutant' : range.value <= 1000 ? 'intermédiaire' : range.value <= 2000 ? 'avancé' : 'professionnel'}
                              </div>
                            </div>
                            <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${range.color}`} />
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {gameTypes.map((game) => (
                        <motion.button
                          key={game.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedGame(game.id)}
                          className={`p-8 rounded-xl border-2 transition-all ${
                            selectedGame === game.id
                              ? 'border-forge-cyan bg-forge-cyan/10 neon-glow-cyan'
                              : 'border-gray-700 glass hover:border-forge-cyan/50'
                          }`}
                        >
                          <div className="text-5xl mb-4">{game.icon}</div>
                          <div className="font-display text-lg font-bold text-white">
                            {game.name}
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {aestheticStyles.map((style) => (
                        <motion.button
                          key={style.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedAesthetic(style.id)}
                          className={`p-8 rounded-xl border-2 transition-all overflow-hidden ${
                            selectedAesthetic === style.id
                              ? 'border-forge-rose-gold bg-forge-rose-gold/10'
                              : 'border-gray-700 glass hover:border-forge-rose-gold/50'
                          }`}
                        >
                          <div
                            className="w-full h-24 rounded-lg mb-4"
                            style={{ background: style.preview }}
                          />
                          <div className="font-display text-lg font-bold text-white">
                            {style.name}
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12">
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={handleBack}
                    disabled={step === 0}
                    className="disabled:opacity-30"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Retour
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleNext}
                    glow
                    disabled={
                      (step === 0 && !selectedBudget) ||
                      (step === 1 && !selectedGame) ||
                      (step === 2 && !selectedAesthetic)
                    }
                  >
                    {step === steps.length - 1 ? 'Générer mon Setup' : 'Suivant'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-6xl mx-auto"
            >
              <Card variant="cyber" className="p-8 md:p-12">
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="inline-block"
                  >
                    <Sparkles className="w-16 h-16 text-forge-cyan mx-auto mb-4 animate-pulse-glow" />
                  </motion.div>
                  <h3 className="font-display text-3xl md:text-5xl font-black gradient-text mb-4">
                    Ton Setup Parfait
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Basé sur ton budget de <span className="text-forge-cyan font-bold">{formatPrice(selectedBudget)}</span>
                  </p>
                </div>

                {/* Setup Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {setupItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card variant="glass" hover className="h-full">
                        <CardContent className="p-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-forge-violet-start to-forge-cyan rounded-lg flex items-center justify-center mb-4">
                            <item.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-xs text-forge-cyan font-mono mb-2">
                            {item.category}
                          </div>
                          <h4 className="font-display text-lg font-bold text-white mb-3">
                            {item.name}
                          </h4>
                          <div className="text-2xl font-black gradient-text">
                            {formatPrice(item.price)}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Total Price */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="glass-strong rounded-xl p-8 mb-8"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gray-400 mb-2">Prix Total du Setup</div>
                      <div className="font-display text-4xl md:text-5xl font-black gradient-text">
                        {formatPrice(totalPrice)}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="secondary" size="lg">
                        <Share2 className="w-5 h-5 mr-2" />
                        Partager
                      </Button>
                      <Button variant="primary" size="lg" glow>
                        <Download className="w-5 h-5 mr-2" />
                        Télécharger PDF
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Reset Button */}
                <div className="text-center">
                  <Button variant="ghost" size="lg" onClick={handleReset}>
                    Créer un nouveau setup
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
