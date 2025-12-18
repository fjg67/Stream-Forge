import { PRODUCTS, Product } from './configurator-data'

export interface UserChoices {
  budget: number
  contentType: string
  aesthetic: string
  preferences: string[]
}

export interface RecommendedSetup {
  items: Product[]
  total: number
  savings: number
  tier: 'beginner' | 'intermediate' | 'advanced'
}

export function generateSetup(choices: UserChoices): RecommendedSetup {
  const { budget, contentType, aesthetic, preferences } = choices

  // Determine tier based on budget
  const tier: 'beginner' | 'intermediate' | 'advanced' =
    budget <= 400 ? 'beginner' : budget <= 1000 ? 'intermediate' : 'advanced'

  const selectedProducts: Product[] = []
  let currentTotal = 0

  // === PC/Laptop Selection ===
  const isPortable = preferences.includes('portable')

  let pc = PRODUCTS.find(
    (p) =>
      p.category === 'pc' &&
      p.tier === tier &&
      p.suitableFor.includes(contentType) &&
      (isPortable ? p.specs?.includes('Portable') : !p.specs?.includes('Portable'))
  )

  // Fallback if no exact match
  if (!pc) {
    pc = PRODUCTS.find((p) => p.category === 'pc' && p.tier === tier)
  }

  if (pc) {
    selectedProducts.push(pc)
    currentTotal += pc.price
  }

  // === Microphone Selection ===
  const needsHighQualityAudio = contentType === 'music'

  let microphone = PRODUCTS.find(
    (p) =>
      p.category === 'microphone' &&
      p.tier === tier &&
      p.suitableFor.includes(contentType)
  )

  if (!microphone) {
    microphone = PRODUCTS.find((p) => p.category === 'microphone' && p.tier === tier)
  }

  if (microphone && currentTotal + microphone.price <= budget * 1.1) {
    selectedProducts.push(microphone)
    currentTotal += microphone.price
  }

  // === Audio Interface (for music/advanced setups) ===
  if (contentType === 'music' && tier !== 'beginner') {
    const audioInterface = PRODUCTS.find(
      (p) => p.category === 'audio' && p.tier === tier
    )

    if (audioInterface && currentTotal + audioInterface.price <= budget * 1.15) {
      selectedProducts.push(audioInterface)
      currentTotal += audioInterface.price
    }
  }

  // === Camera Selection ===
  const needsGoodCamera = contentType === 'irl' || contentType === 'creative'
  const cameraTier = needsGoodCamera && tier === 'intermediate' ? 'intermediate' : tier

  let camera = PRODUCTS.find(
    (p) =>
      p.category === 'camera' &&
      p.tier === cameraTier &&
      p.suitableFor.includes(contentType)
  )

  if (!camera) {
    camera = PRODUCTS.find((p) => p.category === 'camera' && p.tier === tier)
  }

  if (camera && currentTotal + camera.price <= budget * 1.1) {
    selectedProducts.push(camera)
    currentTotal += camera.price
  }

  // === Lighting ===
  const needsGoodLighting = contentType === 'creative' || contentType === 'irl'
  const lightTier = needsGoodLighting && tier === 'intermediate' ? 'intermediate' : tier

  let light = PRODUCTS.find(
    (p) => p.category === 'light' && p.tier === lightTier
  )

  if (!light) {
    light = PRODUCTS.find((p) => p.category === 'light' && p.tier === tier)
  }

  if (light && currentTotal + light.price <= budget * 1.1) {
    selectedProducts.push(light)
    currentTotal += light.price
  }

  // === Accessories based on preferences ===
  if (preferences.includes('multi')) {
    const headset = PRODUCTS.find((p) => p.id === 'acc-headset-1')
    if (headset && currentTotal + headset.price <= budget * 1.15) {
      selectedProducts.push(headset)
      currentTotal += headset.price
    }
  }

  if (preferences.includes('greenscreen')) {
    const greenScreen = PRODUCTS.find((p) => p.id === 'acc-greenscreen-1')
    if (greenScreen && currentTotal + greenScreen.price <= budget * 1.1) {
      selectedProducts.push(greenScreen)
      currentTotal += greenScreen.price
    }
  }

  // === Aesthetic Modifiers ===
  if (aesthetic === 'rgb' && tier !== 'beginner') {
    // Already included in product selection
  }

  if (aesthetic === 'pro' && tier === 'intermediate') {
    // Add Stream Deck if budget allows
    const streamDeck = PRODUCTS.find((p) => p.id === 'acc-streamdeck-1')
    if (streamDeck && currentTotal + streamDeck.price <= budget * 1.2) {
      selectedProducts.push(streamDeck)
      currentTotal += streamDeck.price
    }
  }

  // Add mic arm for advanced/pro setups
  if (tier !== 'beginner' && contentType === 'music') {
    const micArm = PRODUCTS.find((p) => p.id === 'acc-armmic-1')
    if (micArm && currentTotal + micArm.price <= budget * 1.15) {
      selectedProducts.push(micArm)
      currentTotal += micArm.price
    }
  }

  // Calculate savings (if under budget)
  const savings = Math.max(0, budget - currentTotal)

  return {
    items: selectedProducts,
    total: currentTotal,
    savings,
    tier,
  }
}

export function generateShareableURL(choices: UserChoices, setup: RecommendedSetup): string {
  const params = new URLSearchParams({
    budget: choices.budget.toString(),
    type: choices.contentType,
    aesthetic: choices.aesthetic,
    prefs: choices.preferences.join(','),
    total: setup.total.toFixed(2),
  })

  return `${typeof window !== 'undefined' ? window.location.origin : ''}/configurator?${params.toString()}`
}

export function parseURLParams(): Partial<UserChoices> | null {
  if (typeof window === 'undefined') return null

  const params = new URLSearchParams(window.location.search)
  const budget = params.get('budget')
  const type = params.get('type')
  const aesthetic = params.get('aesthetic')
  const prefs = params.get('prefs')

  if (!budget || !type || !aesthetic) return null

  return {
    budget: parseInt(budget),
    contentType: type,
    aesthetic,
    preferences: prefs ? prefs.split(',') : [],
  }
}
