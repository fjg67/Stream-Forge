'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useForgeStore } from '@/lib/store'
import { formatPrice } from '@/lib/utils'
import { productDatabase, findClosestBudget } from '@/lib/streaming-products'
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
  Check,
  Star,
  Zap,
  ExternalLink,
  RefreshCw,
  Cpu,
  Tv,
  Sliders,
  Video,
} from 'lucide-react'

interface SetupItem {
  id: string
  name: string
  category: string
  price: number
  description: string
  icon: any
  brand?: string
  rating: number
  whyRecommended: string
}

interface SetupRecommendation {
  items: SetupItem[]
  tips: string[]
  styleNote: string
}

const budgetRanges = [
  { value: 300, label: '300€ - Budget Débutant', description: 'Parfait pour commencer', color: 'from-green-500 to-emerald-500' },
  { value: 800, label: '800€ - Intermédiaire', description: 'Qualité professionnelle accessible', color: 'from-blue-500 to-cyan-500' },
  { value: 1500, label: '1500€ - Avancé', description: 'Setup semi-pro complet', color: 'from-purple-500 to-pink-500' },
  { value: 3000, label: '3000€ - Pro', description: 'Équipement broadcast', color: 'from-orange-500 to-red-500' },
  { value: 5000, label: '5000€+ - Elite', description: 'Le meilleur du marché', color: 'from-yellow-500 to-amber-500' },
]

const gameTypes = [
  { id: 'fps', name: 'FPS Compétitif', icon: '🎯', description: 'CS2, Valorant, Apex...' },
  { id: 'mmo', name: 'MMO/RPG', icon: '⚔️', description: 'WoW, FF14, Diablo...' },
  { id: 'strategy', name: 'Stratégie', icon: '🧠', description: 'LoL, Dota, Civ...' },
  { id: 'casual', name: 'Casual/Variété', icon: '🎮', description: 'Un peu de tout !' },
  { id: 'irl', name: 'IRL/Just Chatting', icon: '💬', description: 'Discussion, cuisine, vlogs...' },
  { id: 'console', name: 'Console Gaming', icon: '🎮', description: 'PS5, Xbox, Switch...' },
]

const aestheticStyles = [
  { id: 'cyberpunk', name: 'Cyberpunk', preview: 'linear-gradient(135deg, #8B00FF, #00F5FF)', description: 'Néons, futuriste' },
  { id: 'minimal', name: 'Minimaliste', preview: 'linear-gradient(135deg, #1a1a1a, #434343)', description: 'Clean, épuré' },
  { id: 'rgb', name: 'RGB Gaming', preview: 'linear-gradient(135deg, #FF0080, #7928CA, #00F5FF)', description: 'Couleurs vives' },
  { id: 'cozy', name: 'Cosy/Chaleureux', preview: 'linear-gradient(135deg, #8B4513, #D2691E, #F4A460)', description: 'Bois, plantes, lumière chaude' },
]

// Recommandations spécifiques par style de jeu
const gameSpecificTips: Record<string, { priority: string; tips: string[] }> = {
  fps: {
    priority: 'Micro de qualité prioritaire - les callouts sont cruciaux. Casque fermé pour l\'immersion.',
    tips: [
      '🎯 Privilégie un casque fermé pour mieux entendre les pas ennemis',
      '🎤 Le micro dynamique réduit le bruit de ton clavier mécanique',
      '💡 Éclairage indirect pour éviter les reflets sur ton écran',
    ],
  },
  mmo: {
    priority: 'Confort long terme essentiel - sessions de plusieurs heures. Webcam qualité pour les raids en groupe.',
    tips: [
      '⚔️ Casque léger et aéré pour les longues sessions',
      '📹 Webcam de qualité pour les streams de progression de guilde',
      '🖥️ Pense au double écran pour le chat + le jeu',
    ],
  },
  strategy: {
    priority: 'Micro clair pour les analyses. Second écran recommandé pour les overlays de stats.',
    tips: [
      '🧠 Micro condensateur pour une voix claire pendant les analyses',
      '💡 Bon éclairage pour être visible pendant les phases de réflexion',
      '🎮 Stream Deck pour les raccourcis de scènes commentaires',
    ],
  },
  casual: {
    priority: 'Polyvalence importante - setup qui s\'adapte à tous les contenus.',
    tips: [
      '🎮 Privilégie la polyvalence du matériel',
      '📹 Bonne webcam car tu seras souvent visible',
      '🎤 Micro qui fonctionne bien à distance pour bouger',
    ],
  },
  irl: {
    priority: 'Caméra et éclairage prioritaires - tu es le contenu principal !',
    tips: [
      '💬 Investis d\'abord dans la caméra et l\'éclairage',
      '📹 Le flou d\'arrière-plan (bokeh) est un gros plus',
      '🎤 Micro-cravate ou perche selon ton setup',
      '💡 Lumières RGB pour dynamiser ton fond',
    ],
  },
  console: {
    priority: 'Carte capture indispensable ! Choisis selon ta résolution et tes FPS cibles.',
    tips: [
      '🎮 Carte capture 4K60 pour PS5/Xbox Series X en qualité max',
      '📺 Vérifie le passthrough pour jouer sans latence',
      '🔊 Audio optique ou HDMI extractor si tu veux le son séparé',
      '🖥️ Double écran : un pour jouer, un pour OBS et le chat',
    ],
  },
}

// Notes par style esthétique
const styleNotes: Record<string, string> = {
  cyberpunk: '💜 Style Cyberpunk : Ajoute des LED strips violettes/cyan derrière ton bureau et tes écrans. Les nanoleafs ou Govee sont parfaits. Privilégie le noir mat pour le mobilier.',
  minimal: '⬛ Style Minimaliste : Cache tes câbles avec des goulottes. Un seul accent de couleur (ta key light par ex). Bureau blanc ou noir uni. Moins = Plus.',
  rgb: '🌈 Style RGB : Les Nanoleaf ou Govee Glide pour les murs. Tout doit être synchronisé avec Razer Chroma ou SignalRGB. Prends du matos compatible RGB.',
  cozy: '🪴 Style Cosy : Ajoute des plantes (même fausses), une lampe à lumière chaude, du bois naturel. Évite les LED froides. Un tapis épais sous le bureau.',
}

// Fonction pour trouver le produit le plus proche d'un budget dans une catégorie
function findProductForBudget(category: Record<number, any>, targetBudget: number): { key: number; product: any } {
  const budgets = Object.keys(category).map(Number).sort((a, b) => a - b)
  
  // Trouver le budget le plus proche mais <= au budget cible
  let bestKey = budgets[0]
  for (const b of budgets) {
    if (b <= targetBudget) {
      bestKey = b
    } else {
      break
    }
  }
  
  return { key: bestKey, product: category[bestKey] }
}

function generateRecommendation(budget: number, gameType: string, aesthetic: string): SetupRecommendation {
  // RÉPARTITION DU BUDGET TOTAL
  // Le budget est divisé entre toutes les catégories essentielles
  // PC : 40%, Périphériques : 60%
  
  const pcBudgetRatio = 0.40
  const peripheralBudgetRatio = 0.60
  
  // Répartition des périphériques (60% du budget total)
  const peripheralRatios = {
    webcam: 0.15,      // 15% du total = 25% des périphériques
    microphone: 0.12,  // 12%
    lighting: 0.08,    // 8%
    audio: 0.08,       // 8%
    micArm: 0.05,      // 5%
    accessory: 0.07,   // 7% (Stream Deck)
    monitor: 0.05,     // 5% si inclus
  }
  
  // Calculer les budgets par catégorie
  const pcBudget = Math.floor(budget * pcBudgetRatio)
  const webcamBudget = Math.floor(budget * peripheralRatios.webcam)
  const micBudget = Math.floor(budget * peripheralRatios.microphone)
  const lightingBudget = Math.floor(budget * peripheralRatios.lighting)
  const audioBudget = Math.floor(budget * peripheralRatios.audio)
  const micArmBudget = Math.floor(budget * peripheralRatios.micArm)
  const accessoryBudget = Math.floor(budget * peripheralRatios.accessory)
  const monitorBudget = Math.floor(budget * peripheralRatios.monitor)
  
  // Ajuster selon le type de jeu
  let finalWebcamBudget = webcamBudget
  let finalMicBudget = micBudget
  
  if (gameType === 'irl') {
    finalWebcamBudget = Math.floor(webcamBudget * 1.5) // +50% sur webcam pour IRL
    finalMicBudget = Math.floor(micBudget * 0.8) // -20% sur micro
  } else if (gameType === 'fps') {
    finalMicBudget = Math.floor(micBudget * 1.3) // +30% sur micro pour FPS
    finalWebcamBudget = Math.floor(webcamBudget * 0.8) // -20% sur webcam
  }
  
  // Options conditionnelles
  const needsCaptureCard = gameType === 'console'
  const includeMonitor = budget >= 1500
  const includeGreenScreen = budget >= 2000 && (gameType === 'irl' || gameType === 'casual')
  const includeAccessory = budget >= 600

  const items: SetupItem[] = []
  
  // 1. PC - TOUJOURS INCLUS
  const pcResult = findProductForBudget(productDatabase.pc, pcBudget)
  items.push({
    id: '1',
    ...pcResult.product,
    category: 'PC Gaming / Streaming',
    icon: Cpu,
    whyRecommended: gameType === 'fps' ? 'Puissance gaming + encodage NVENC' : 'Le cœur de ton setup streaming',
  })
  
  // 2. Webcam
  const webcamResult = findProductForBudget(productDatabase.webcam, finalWebcamBudget)
  items.push({
    id: '2',
    ...webcamResult.product,
    category: 'Webcam / Caméra',
    icon: Camera,
    whyRecommended: gameType === 'irl' ? 'Priorité pour ton style IRL' : 'Essentiel pour tout streamer',
  })
  
  // 3. Microphone
  const micResult = findProductForBudget(productDatabase.microphone, finalMicBudget)
  items.push({
    id: '3',
    ...micResult.product,
    category: 'Microphone',
    icon: Mic,
    whyRecommended: gameType === 'fps' ? 'Crucial pour les callouts' : 'Ta voix est ton outil principal',
  })
  
  // 4. Éclairage
  const lightingResult = findProductForBudget(productDatabase.lighting, lightingBudget)
  items.push({
    id: '4',
    ...lightingResult.product,
    category: 'Éclairage',
    icon: Speaker,
    whyRecommended: 'Un bon éclairage transforme ta qualité vidéo',
  })
  
  // 5. Casque Audio
  const audioResult = findProductForBudget(productDatabase.audio, audioBudget)
  items.push({
    id: '5',
    ...audioResult.product,
    category: 'Casque Audio',
    icon: Headphones,
    whyRecommended: gameType === 'fps' ? 'Essentiel pour entendre les ennemis' : 'Pour un monitoring précis',
  })
  
  // 6. Bras Micro
  const micArmResult = findProductForBudget(productDatabase.micArm, micArmBudget)
  items.push({
    id: '6',
    ...micArmResult.product,
    category: 'Bras Micro',
    icon: Sliders,
    whyRecommended: 'Libère ton bureau et positionne le micro parfaitement',
  })
  
  // 7. Stream Deck (si budget >= 600€)
  if (includeAccessory) {
    const accessoryResult = findProductForBudget(productDatabase.accessory, accessoryBudget)
    items.push({
      id: '7',
      ...accessoryResult.product,
      category: 'Stream Deck & Accessoires',
      icon: Keyboard,
      whyRecommended: 'Améliore ton workflow de stream',
    })
  }
  
  // 8. Écran (si budget >= 1500€)
  if (includeMonitor) {
    const monitorResult = findProductForBudget(productDatabase.monitor, monitorBudget)
    items.push({
      id: '8',
      ...monitorResult.product,
      category: 'Écran',
      icon: Monitor,
      whyRecommended: gameType === 'fps' ? '144Hz+ essentiel en FPS' : 'Moniteur pour stream + jeu',
    })
  }
  
  // 9. Carte Capture (si console)
  if (needsCaptureCard) {
    const captureResult = findProductForBudget(productDatabase.captureCard, Math.floor(budget * 0.1))
    items.push({
      id: '9',
      ...captureResult.product,
      category: 'Carte Capture',
      icon: Video,
      whyRecommended: 'Indispensable pour capturer ta console',
    })
  }
  
  // 10. Fond Vert (si IRL et budget suffisant)
  if (includeGreenScreen) {
    const greenScreenResult = findProductForBudget(productDatabase.greenScreen, Math.floor(budget * 0.05))
    items.push({
      id: '10',
      ...greenScreenResult.product,
      category: 'Fond Vert',
      icon: Tv,
      whyRecommended: gameType === 'irl' ? 'Pour un fond pro personnalisé' : 'Pour les overlays et effets',
    })
  }

  const tips = gameSpecificTips[gameType]?.tips || []
  let styleNote = styleNotes[aesthetic] || ''
  
  // Ajouter une note selon le budget
  if (!includeMonitor) {
    styleNote = '🖥️ Ce setup ne comprend pas d\'écran - on suppose que tu en as déjà un. ' + styleNote
  }

  return { items, tips, styleNote }
}


export function SetupConfigurator() {
  const [step, setStep] = useState(0)
  const [selectedBudget, setSelectedBudget] = useState<number | null>(null)
  const [selectedGame, setSelectedGame] = useState('')
  const [selectedAesthetic, setSelectedAesthetic] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [recommendation, setRecommendation] = useState<SetupRecommendation | null>(null)
  const [shareMessage, setShareMessage] = useState('')

  const { setSetupBudget } = useForgeStore()

  const steps = [
    { title: 'Budget', description: 'Combien veux-tu investir ?', icon: '💰' },
    { title: 'Contenu', description: 'Que vas-tu streamer ?', icon: '🎮' },
    { title: 'Ambiance', description: 'Quel style te correspond ?', icon: '✨' },
  ]

  const canProceed = () => {
    if (step === 0) return selectedBudget !== null
    if (step === 1) return selectedGame !== ''
    if (step === 2) return selectedAesthetic !== ''
    return false
  }

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      // Générer la recommandation personnalisée
      if (selectedBudget !== null) {
        const rec = generateRecommendation(selectedBudget, selectedGame, selectedAesthetic)
        setRecommendation(rec)
        setSetupBudget(selectedBudget)
        setShowResults(true)
      }
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handleReset = () => {
    setStep(0)
    setSelectedBudget(null)
    setSelectedGame('')
    setSelectedAesthetic('')
    setShowResults(false)
    setRecommendation(null)
  }

  const totalPrice = recommendation?.items.reduce((sum, item) => sum + item.price, 0) || 0

  // Fonction de partage
  const handleShare = async () => {
    const gameTypeName = gameTypes.find(g => g.id === selectedGame)?.name || selectedGame
    const shareText = `🎮 Mon Setup Streaming Stream Forge\n\n` +
      `💰 Budget: ${formatPrice(selectedBudget || 0)}\n` +
      `🎯 Type: ${gameTypeName}\n` +
      `💵 Prix total: ${formatPrice(totalPrice)}\n\n` +
      `📦 Mon équipement:\n` +
      recommendation?.items.map(item => `• ${item.category}: ${item.name} (${formatPrice(item.price)})`).join('\n') +
      `\n\n🔗 Crée ton setup sur Stream Forge !`
    
    // Essayer Web Share API d'abord (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mon Setup Stream Forge',
          text: shareText,
          url: window.location.href
        })
        setShareMessage('Partagé avec succès !')
      } catch (err) {
        // L'utilisateur a annulé ou erreur
        console.log('Partage annulé')
      }
    } else {
      // Fallback: copier dans le presse-papier
      try {
        await navigator.clipboard.writeText(shareText + '\n\n' + window.location.href)
        setShareMessage('✅ Copié dans le presse-papier !')
        setTimeout(() => setShareMessage(''), 3000)
      } catch (err) {
        setShareMessage('❌ Erreur lors de la copie')
        setTimeout(() => setShareMessage(''), 3000)
      }
    }
  }

  // Fonction de téléchargement PDF - Design ULTRA PREMIUM
  const handleDownloadPDF = () => {
    const gameTypeName = gameTypes.find(g => g.id === selectedGame)?.name || selectedGame
    const aestheticName = aestheticStyles.find(s => s.id === selectedAesthetic)?.name || selectedAesthetic
    const aestheticGradient = aestheticStyles.find(s => s.id === selectedAesthetic)?.preview || 'linear-gradient(135deg, #8B5CF6, #06B6D4)'
    
    // Créer le contenu HTML du PDF avec design ULTRA PREMIUM
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Mon Setup Stream Forge</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    @page { 
      size: A4; 
      margin: 0; 
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: 'Inter', -apple-system, sans-serif;
      background: #030014;
      color: #ffffff;
      min-height: 100vh;
      position: relative;
      overflow-x: hidden;
    }
    
    /* Background Effects */
    .bg-grid {
      position: fixed;
      inset: 0;
      background-image: 
        linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      z-index: 0;
    }
    .orb-1 {
      position: fixed;
      top: -200px;
      right: -200px;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(80px);
      z-index: 0;
    }
    .orb-2 {
      position: fixed;
      bottom: -300px;
      left: -200px;
      width: 700px;
      height: 700px;
      background: radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(100px);
      z-index: 0;
    }
    .orb-3 {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(60px);
      z-index: 0;
    }
    
    .container {
      position: relative;
      z-index: 1;
      max-width: 900px;
      margin: 0 auto;
      padding: 50px 40px;
    }
    
    /* Header */
    .header {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 40px;
      border-bottom: 1px solid rgba(139, 92, 246, 0.2);
    }
    .logo-container {
      display: inline-block;
      position: relative;
      margin-bottom: 20px;
    }
    .logo-glow {
      position: absolute;
      inset: -20px;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5));
      filter: blur(30px);
      border-radius: 50%;
      z-index: -1;
    }
    .logo {
      font-family: 'Orbitron', sans-serif;
      font-size: 48px;
      font-weight: 900;
      background: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #EC4899 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
      letter-spacing: 4px;
    }
    .tagline {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
      letter-spacing: 6px;
      text-transform: uppercase;
      margin-top: 10px;
    }
    
    /* Info Cards */
    .info-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 50px;
    }
    .info-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 25px;
      text-align: center;
      backdrop-filter: blur(10px);
      position: relative;
      overflow: hidden;
    }
    .info-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #8B5CF6, #06B6D4);
    }
    .info-icon {
      font-size: 32px;
      margin-bottom: 15px;
    }
    .info-label {
      font-size: 11px;
      color: rgba(255, 255, 255, 0.5);
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 8px;
    }
    .info-value {
      font-family: 'Orbitron', sans-serif;
      font-size: 22px;
      font-weight: 700;
      color: #06B6D4;
    }
    
    /* Section Title */
    .section-header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 30px;
    }
    .section-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, rgba(139, 92, 246, 0.5), transparent);
    }
    .section-title {
      font-family: 'Orbitron', sans-serif;
      font-size: 20px;
      font-weight: 700;
      color: #8B5CF6;
      text-transform: uppercase;
      letter-spacing: 3px;
    }
    
    /* Items Grid */
    .items-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-bottom: 40px;
    }
    .item {
      background: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
      border: 1px solid rgba(139, 92, 246, 0.2);
      border-radius: 16px;
      padding: 20px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(180deg, #8B5CF6, #06B6D4);
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
    }
    .item-category {
      font-size: 10px;
      font-weight: 600;
      color: #06B6D4;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      padding: 4px 10px;
      background: rgba(6, 182, 212, 0.15);
      border-radius: 20px;
    }
    .item-rating {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #FBBF24;
      font-size: 12px;
    }
    .item-name {
      font-size: 15px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .item-desc {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
      line-height: 1.5;
      margin-bottom: 15px;
    }
    .item-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    .item-brand {
      font-size: 11px;
      color: rgba(255, 255, 255, 0.4);
    }
    .item-price {
      font-family: 'Orbitron', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #10B981;
    }
    
    /* Tips Box */
    .tips-box {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%);
      border: 1px solid rgba(16, 185, 129, 0.3);
      border-radius: 20px;
      padding: 25px;
      margin-bottom: 40px;
      position: relative;
    }
    .tips-box::before {
      content: '💡';
      position: absolute;
      top: -15px;
      left: 25px;
      font-size: 28px;
      background: #030014;
      padding: 0 10px;
    }
    .tips-title {
      font-family: 'Orbitron', sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: #10B981;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 15px;
    }
    .tips-list {
      list-style: none;
      display: grid;
      gap: 10px;
    }
    .tips-list li {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.7);
      padding-left: 20px;
      position: relative;
    }
    .tips-list li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #10B981;
    }
    
    /* Total Box */
    .total-box {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.15) 50%, rgba(236, 72, 153, 0.15) 100%);
      border: 2px solid transparent;
      border-image: linear-gradient(135deg, #8B5CF6, #06B6D4, #EC4899) 1;
      border-radius: 24px;
      padding: 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .total-box::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
      animation: pulse 4s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.1); opacity: 1; }
    }
    .total-content {
      position: relative;
      z-index: 1;
    }
    .total-label {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 15px;
    }
    .total-price {
      font-family: 'Orbitron', sans-serif;
      font-size: 64px;
      font-weight: 900;
      background: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #EC4899 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1;
      margin-bottom: 15px;
    }
    .total-savings {
      display: inline-block;
      padding: 8px 20px;
      background: rgba(16, 185, 129, 0.2);
      border: 1px solid rgba(16, 185, 129, 0.3);
      border-radius: 30px;
      font-size: 13px;
      color: #10B981;
    }
    
    /* Footer */
    .footer {
      text-align: center;
      margin-top: 50px;
      padding-top: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    .footer-logo {
      font-family: 'Orbitron', sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: #8B5CF6;
      margin-bottom: 10px;
    }
    .footer-info {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.4);
    }
    .footer-date {
      margin-top: 5px;
      font-size: 11px;
      color: rgba(255, 255, 255, 0.3);
    }
    
    /* Style Badge */
    .style-badge {
      display: inline-block;
      padding: 15px 30px;
      background: ${aestheticGradient};
      border-radius: 30px;
      margin-bottom: 40px;
      font-weight: 600;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    
    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .orb-1, .orb-2, .orb-3 { display: block; }
    }
  </style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="orb-1"></div>
  <div class="orb-2"></div>
  <div class="orb-3"></div>
  
  <div class="container">
    <!-- Header -->
    <div class="header">
      <div class="logo-container">
        <div class="logo-glow"></div>
        <div class="logo">🔥 Stream Forge</div>
      </div>
      <div class="tagline">Setup Streaming Personnalisé</div>
    </div>
    
    <!-- Style Badge -->
    <div style="text-align: center;">
      <div class="style-badge">Style ${aestheticName}</div>
    </div>
    
    <!-- Info Cards -->
    <div class="info-grid">
      <div class="info-card">
        <div class="info-icon">💰</div>
        <div class="info-label">Budget</div>
        <div class="info-value">${formatPrice(selectedBudget || 0)}</div>
      </div>
      <div class="info-card">
        <div class="info-icon">🎮</div>
        <div class="info-label">Type de contenu</div>
        <div class="info-value">${gameTypeName}</div>
      </div>
      <div class="info-card">
        <div class="info-icon">📦</div>
        <div class="info-label">Produits</div>
        <div class="info-value">${recommendation?.items.length || 0} items</div>
      </div>
    </div>
    
    <!-- Section Title -->
    <div class="section-header">
      <div class="section-line"></div>
      <div class="section-title">Ton Équipement</div>
      <div class="section-line" style="background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.5));"></div>
    </div>
    
    <!-- Items Grid -->
    <div class="items-grid">
      ${recommendation?.items.map((item, index) => `
        <div class="item">
          <div class="item-header">
            <div class="item-category">${item.category}</div>
            <div class="item-rating">⭐ ${item.rating?.toFixed(1) || '4.5'}</div>
          </div>
          <div class="item-name">${item.name}</div>
          <div class="item-desc">${item.description}</div>
          <div class="item-footer">
            <div class="item-brand">${item.brand || 'Premium'}</div>
            <div class="item-price">${formatPrice(item.price)}</div>
          </div>
        </div>
      `).join('')}
    </div>
    
    ${recommendation?.tips && recommendation.tips.length > 0 ? `
      <!-- Tips Box -->
      <div class="tips-box">
        <div class="tips-title">Conseils Pro pour ${gameTypeName}</div>
        <ul class="tips-list">
          ${recommendation.tips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
      </div>
    ` : ''}
    
    <!-- Total Box -->
    <div class="total-box">
      <div class="total-content">
        <div class="total-label">Prix Total du Setup</div>
        <div class="total-price">${formatPrice(totalPrice)}</div>
        <div class="total-savings">
          ${totalPrice <= (selectedBudget || 0) 
            ? `✅ Dans le budget ! Économie de ${formatPrice((selectedBudget || 0) - totalPrice)}`
            : `Budget dépassé de ${formatPrice(totalPrice - (selectedBudget || 0))}`
          }
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="footer">
      <div class="footer-logo">STREAM FORGE</div>
      <div class="footer-info">streamforge.fr • Le configurateur de setup streaming #1</div>
      <div class="footer-date">Généré le ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
    </div>
  </div>
</body>
</html>
    `
    
    // Ouvrir dans une nouvelle fenêtre pour impression/sauvegarde en PDF
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(htmlContent)
      printWindow.document.close()
      
      // Attendre que le contenu et les fonts soient chargés
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print()
        }, 500)
      }
    }
  }



  return (
    <section id="configurator" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-forge-violet-start" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-[100px] opacity-20 bg-forge-cyan" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-forge-cyan" />
            <span className="text-sm font-mono text-forge-cyan">Intelligence Artificielle</span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text mb-6">
            Configurateur de Setup
          </h2>
          <p className="font-body text-xl text-gray-400 max-w-3xl mx-auto">
            3 questions → Ton setup parfait personnalisé
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="configurator"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl mx-auto"
            >
              <Card variant="cyber" className="p-8 md:p-12">
                {/* Progress Bar */}
                <div className="mb-12">
                  <div className="flex justify-between mb-6">
                    {steps.map((s, i) => (
                      <div
                        key={i}
                        className={`flex items-center ${i < steps.length - 1 ? 'flex-1' : ''}`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl transition-all ${
                            i <= step
                              ? 'bg-gradient-to-r from-forge-violet-start to-forge-cyan text-white shadow-lg shadow-forge-violet-start/30'
                              : 'glass text-gray-500'
                          }`}
                        >
                          {i < step ? <Check className="w-6 h-6" /> : s.icon}
                        </motion.div>
                        {i < steps.length - 1 && (
                          <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-500 ${i < step ? 'bg-gradient-to-r from-forge-violet-start to-forge-cyan' : 'bg-gray-700'}`} />
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
                <div className="min-h-[420px]">
                  <AnimatePresence mode="wait">
                    {step === 0 && (
                      <motion.div
                        key="budget"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="space-y-4"
                      >
                        {budgetRanges.map((range) => (
                          <motion.button
                            key={range.value}
                            whileHover={{ scale: 1.02, x: 10 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedBudget(range.value)}
                            className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                              selectedBudget === range.value
                                ? 'border-forge-violet-start bg-forge-violet-start/10 shadow-lg shadow-forge-violet-start/20'
                                : 'border-gray-700/50 glass hover:border-forge-violet-start/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-display text-xl font-bold text-white mb-1">
                                  {range.label}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {range.description}
                                </div>
                              </div>
                              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${range.color} flex items-center justify-center`}>
                                {selectedBudget === range.value && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring' }}
                                  >
                                    <Check className="w-8 h-8 text-white" />
                                  </motion.div>
                                )}
                              </div>
                            </div>
                          </motion.button>
                        ))}
                      </motion.div>
                    )}

                    {step === 1 && (
                      <motion.div
                        key="game"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {gameTypes.map((game) => (
                          <motion.button
                            key={game.id}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setSelectedGame(game.id)}
                            className={`p-6 rounded-xl border-2 transition-all text-left ${
                              selectedGame === game.id
                                ? 'border-forge-cyan bg-forge-cyan/10 shadow-lg shadow-forge-cyan/20'
                                : 'border-gray-700/50 glass hover:border-forge-cyan/50'
                            }`}
                          >
                            <div className="text-4xl mb-3">{game.icon}</div>
                            <div className="font-display text-lg font-bold text-white mb-1">
                              {game.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {game.description}
                            </div>
                            {selectedGame === game.id && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-3 flex items-center text-forge-cyan text-sm"
                              >
                                <Check className="w-4 h-4 mr-1" /> Sélectionné
                              </motion.div>
                            )}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="aesthetic"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {aestheticStyles.map((style) => (
                          <motion.button
                            key={style.id}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setSelectedAesthetic(style.id)}
                            className={`p-6 rounded-xl border-2 transition-all overflow-hidden text-left ${
                              selectedAesthetic === style.id
                                ? 'border-forge-rose-gold bg-forge-rose-gold/10 shadow-lg shadow-forge-rose-gold/20'
                                : 'border-gray-700/50 glass hover:border-forge-rose-gold/50'
                            }`}
                          >
                            <div
                              className="w-full h-20 rounded-lg mb-4"
                              style={{ background: style.preview }}
                            />
                            <div className="font-display text-lg font-bold text-white mb-1">
                              {style.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {style.description}
                            </div>
                            {selectedAesthetic === style.id && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-3 flex items-center text-forge-rose-gold text-sm"
                              >
                                <Check className="w-4 h-4 mr-1" /> Sélectionné
                              </motion.div>
                            )}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                    disabled={!canProceed()}
                    className="disabled:opacity-50"
                  >
                    {step === steps.length - 1 ? (
                      <>
                        <Zap className="w-5 h-5 mr-2" />
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
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-6xl mx-auto"
            >
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="inline-block"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-forge-violet-start to-forge-cyan flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
                <h3 className="font-display text-3xl md:text-5xl font-black gradient-text mb-4">
                  Ton Setup Parfait 🔥
                </h3>
                <p className="text-gray-400 text-lg">
                  Personnalisé pour <span className="text-forge-cyan font-bold">{gameTypes.find(g => g.id === selectedGame)?.name}</span> 
                  {' '}avec un budget de <span className="text-forge-violet-start font-bold">{formatPrice(selectedBudget || 0)}</span>
                </p>
              </div>

              {/* Conseil prioritaire */}
              {selectedGame && gameSpecificTips[selectedGame] && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-forge-violet-start/20 to-forge-cyan/20 border border-forge-violet-start/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💡</div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-white mb-2">Conseil pour toi</h4>
                      <p className="text-gray-300">{gameSpecificTips[selectedGame].priority}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Setup Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {recommendation?.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card variant="glass" hover className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-forge-violet-start to-forge-cyan rounded-xl flex items-center justify-center">
                            <item.icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm text-gray-400">{item.rating}</span>
                          </div>
                        </div>
                        <div className="text-xs text-forge-cyan font-mono mb-2 uppercase tracking-wider">
                          {item.category}
                        </div>
                        <h4 className="font-display text-lg font-bold text-white mb-2">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                          <div className="text-2xl font-black gradient-text">
                            {formatPrice(item.price)}
                          </div>
                          <Button variant="ghost" size="sm" className="text-forge-cyan">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Voir
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Tips basés sur le jeu */}
              {recommendation?.tips && recommendation.tips.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8 p-6 rounded-2xl glass border border-white/10"
                >
                  <h4 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-forge-cyan" />
                    Tips pour ton type de contenu
                  </h4>
                  <ul className="space-y-2">
                    {recommendation.tips.map((tip, i) => (
                      <li key={i} className="text-gray-300">{tip}</li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Style Note */}
              {recommendation?.styleNote && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mb-8 p-6 rounded-2xl"
                  style={{ background: aestheticStyles.find(s => s.id === selectedAesthetic)?.preview }}
                >
                  <p className="text-white font-medium">{recommendation.styleNote}</p>
                </motion.div>
              )}

              {/* Total Price */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="glass-strong rounded-2xl p-8 mb-8"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-gray-400 mb-2">Prix Total du Setup</div>
                    <div className="font-display text-5xl md:text-6xl font-black gradient-text">
                      {formatPrice(totalPrice)}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      Budget initial : {formatPrice(selectedBudget || 0)} • Différence : {formatPrice(Math.abs(totalPrice - (selectedBudget || 0)))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative">
                      <Button variant="secondary" size="lg" onClick={handleShare}>
                        <Share2 className="w-5 h-5 mr-2" />
                        Partager
                      </Button>
                      {shareMessage && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-forge-cyan text-black px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                          {shareMessage}
                        </div>
                      )}
                    </div>
                    <Button variant="primary" size="lg" glow onClick={handleDownloadPDF}>
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger PDF
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Reset Button */}
              <div className="text-center">
                <Button variant="ghost" size="lg" onClick={handleReset}>
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Créer un nouveau setup
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
