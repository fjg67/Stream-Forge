'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { QuizProgress } from '@/components/configurator/QuizProgress'
import { BudgetStep } from '@/components/configurator/BudgetStep'
import { ContentTypeStep } from '@/components/configurator/ContentTypeStep'
import { PreferencesStep } from '@/components/configurator/PreferencesStep'
import { SetupResults } from '@/components/configurator/SetupResults'
import { generateSetup, generateShareableURL, parseURLParams, UserChoices } from '@/lib/recommendation-engine'
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'

const QUIZ_STEPS = [
  { title: 'Budget', description: 'Combien veux-tu investir ?' },
  { title: 'Type de Stream', description: 'Quel est ton style principal ?' },
  { title: 'Préférences', description: 'Personnalise ton setup idéal' },
]

export default function ConfiguratorPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedBudget, setSelectedBudget] = useState<number | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedAesthetic, setSelectedAesthetic] = useState<string | null>(null)
  const [selectedPrefs, setSelectedPrefs] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [generatedSetup, setGeneratedSetup] = useState<any>(null)
  const [shareURL, setShareURL] = useState('')

  const handleGenerateSetup = (choices?: UserChoices) => {
    const userChoices: UserChoices = choices || {
      budget: selectedBudget!,
      contentType: selectedType!,
      aesthetic: selectedAesthetic!,
      preferences: selectedPrefs,
    }

    const setup = generateSetup(userChoices)
    setGeneratedSetup(setup)

    const url = generateShareableURL(userChoices, setup)
    setShareURL(url)

    setShowResults(true)
  }

  // Parse URL params on mount (for shared links)
  useEffect(() => {
    const params = parseURLParams()
    if (params && params.budget && params.contentType && params.aesthetic) {
      setSelectedBudget(params.budget)
      setSelectedType(params.contentType)
      setSelectedAesthetic(params.aesthetic)
      setSelectedPrefs(params.preferences || [])
      // Auto-generate setup from shared link
      handleGenerateSetup({
        budget: params.budget,
        contentType: params.contentType,
        aesthetic: params.aesthetic,
        preferences: params.preferences || [],
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNext = () => {
    if (currentStep < QUIZ_STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleGenerateSetup()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setSelectedBudget(null)
    setSelectedType(null)
    setSelectedAesthetic(null)
    setSelectedPrefs([])
    setShowResults(false)
    setGeneratedSetup(null)
    setShareURL('')

    // Clear URL params
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/configurator')
    }
  }

  const togglePref = (pref: string) => {
    setSelectedPrefs((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    )
  }

  const canProceed =
    (currentStep === 0 && selectedBudget !== null) ||
    (currentStep === 1 && selectedType !== null) ||
    (currentStep === 2 && selectedAesthetic !== null)

  return (
    <main className="relative min-h-screen bg-forge-black text-white py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forge-black/50 to-forge-black" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        {!showResults && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-forge-cyan" />
              <span className="text-sm font-mono text-forge-cyan">Le Joyau de Stream Forge</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black gradient-text mb-6">
              Configurateur de Setup Intelligent
            </h1>
            <p className="font-body text-xl text-gray-400 max-w-3xl mx-auto">
              Réponds à 3 questions, obtiens ton setup parfait personnalisé en 3D
            </p>
          </motion.div>
        )}

        {/* Quiz or Results */}
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-6xl mx-auto"
            >
              {/* Progress */}
              <QuizProgress
                currentStep={currentStep}
                totalSteps={QUIZ_STEPS.length}
                steps={QUIZ_STEPS}
              />

              {/* Quiz Content */}
              <div className="min-h-[500px] mb-12">
                <AnimatePresence mode="wait">
                  {currentStep === 0 && (
                    <motion.div
                      key="step-0"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                    >
                      <BudgetStep
                        selectedBudget={selectedBudget}
                        onSelect={setSelectedBudget}
                      />
                    </motion.div>
                  )}

                  {currentStep === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                    >
                      <ContentTypeStep
                        selectedType={selectedType}
                        onSelect={setSelectedType}
                      />
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                    >
                      <PreferencesStep
                        selectedAesthetic={selectedAesthetic}
                        selectedPrefs={selectedPrefs}
                        onSelectAesthetic={setSelectedAesthetic}
                        onTogglePref={togglePref}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center max-w-6xl mx-auto">
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="disabled:opacity-30"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Retour
                </Button>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleNext}
                  disabled={!canProceed}
                  glow={canProceed}
                  className="disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentStep === QUIZ_STEPS.length - 1 ? (
                    <>
                      <Sparkles className="w-5 h-5 mr-2 animate-pulse-glow" />
                      Générer mon Setup
                    </>
                  ) : (
                    <>
                      Suivant
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-6xl mx-auto"
            >
              <SetupResults
                products={generatedSetup.items}
                total={generatedSetup.total}
                budget={selectedBudget!}
                savings={generatedSetup.savings}
                shareURL={shareURL}
                onReset={handleReset}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
