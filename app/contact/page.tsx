'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { 
  Mail, 
  MessageCircle, 
  Send,
  MapPin,
  Clock,
  ArrowLeft,
  CheckCircle,
  Sparkles,
  Zap,
  HelpCircle,
  Bug,
  Handshake,
  AlertCircle,
  Loader2
} from 'lucide-react'
import Link from 'next/link'

const contactReasons = [
  { id: 'question', label: 'Question générale', icon: HelpCircle, color: 'from-blue-500 to-cyan-500' },
  { id: 'bug', label: 'Signaler un bug', icon: Bug, color: 'from-red-500 to-orange-500' },
  { id: 'partnership', label: 'Partenariat', icon: Handshake, color: 'from-violet-500 to-purple-500' },
  { id: 'suggestion', label: 'Suggestion', icon: Sparkles, color: 'from-amber-500 to-yellow-500' },
]

const faqs = [
  {
    question: "Combien coûte Stream Forge ?",
    answer: "Stream Forge est 100% gratuit ! Le configurateur, les formations et tous les outils sont accessibles sans frais."
  },
  {
    question: "Comment fonctionne le configurateur ?",
    answer: "Répondez à 3 questions simples (budget, type de contenu, style) et notre algorithme génère une recommandation personnalisée avec les meilleurs produits pour votre setup."
  },
  {
    question: "Les prix des produits sont-ils exacts ?",
    answer: "Les prix sont indicatifs et basés sur les tarifs moyens constatés. Ils peuvent varier selon les revendeurs et les promotions en cours."
  },
  {
    question: "Puis-je partager mon setup ?",
    answer: "Absolument ! Utilisez les boutons Partager ou Télécharger PDF pour sauvegarder et partager votre configuration de setup."
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const reasonLabels: Record<string, string> = {
      'question': 'Question générale',
      'bug': 'Signaler un bug',
      'partnership': 'Partenariat',
      'suggestion': 'Suggestion'
    }
    
    try {
      // Envoi via Web3Forms (service gratuit)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fcab6da9-159f-4af6-8058-c175f0994cf2',
          from_name: formData.name,
          email: formData.email,
          subject: `[Stream Forge] ${reasonLabels[formData.reason] || 'Contact'} - ${formData.name}`,
          message: `Nom: ${formData.name}\nEmail: ${formData.email}\nSujet: ${reasonLabels[formData.reason]}\n\nMessage:\n${formData.message}`,
          to: 'florian.jove.garcia@gmail.com'
        }),
      })
      
      const result = await response.json()
      
      if (result.success) {
        setIsSubmitted(true)
      } else {
        // Fallback vers mailto si Web3Forms échoue
        const subject = encodeURIComponent(`[Stream Forge] ${reasonLabels[formData.reason] || 'Contact'} - ${formData.name}`)
        const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\nSujet: ${reasonLabels[formData.reason]}\n\nMessage:\n${formData.message}`)
        window.location.href = `mailto:florian.jove.garcia@gmail.com?subject=${subject}&body=${body}`
        setIsSubmitted(true)
      }
    } catch {
      // Fallback vers mailto en cas d'erreur
      const subject = encodeURIComponent(`[Stream Forge] ${reasonLabels[formData.reason] || 'Contact'} - ${formData.name}`)
      const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\nSujet: ${reasonLabels[formData.reason]}\n\nMessage:\n${formData.message}`)
      window.location.href = `mailto:florian.jove.garcia@gmail.com?subject=${subject}&body=${body}`
      setIsSubmitted(true)
    }
    
    setIsSubmitting(false)
  }

  return (
    <main className="relative min-h-screen bg-forge-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 cyber-grid opacity-5" />
      <div className="fixed top-0 left-1/3 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[180px]" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <Navigation />

      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 mb-6 shadow-lg shadow-pink-500/30"
            >
              <MessageCircle className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
              <span className="text-white">Contacte-</span>
              <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">nous</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Une question ? Une suggestion ? Un partenariat ? On est là pour toi ! Réponse garantie sous 24h.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Send className="w-6 h-6 text-pink-400" />
                  Envoie-nous un message
                </h2>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wide">
                          Ton nom
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wide">
                          Ton email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      {/* Reason */}
                      <div>
                        <label className="block text-sm font-mono text-gray-400 mb-3 uppercase tracking-wide">
                          Sujet
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {contactReasons.map((reason) => (
                            <button
                              key={reason.id}
                              type="button"
                              onClick={() => setFormData({...formData, reason: reason.id})}
                              className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${
                                formData.reason === reason.id
                                  ? 'border-pink-500/50 bg-pink-500/10'
                                  : 'border-white/10 bg-white/5 hover:border-white/20'
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${reason.color} flex items-center justify-center`}>
                                <reason.icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm text-gray-300">{reason.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wide">
                          Ton message
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all resize-none"
                          placeholder="Décris ta demande en détail..."
                        />
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        glow
                        className="w-full"
                        disabled={isSubmitting || !formData.reason}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Envoyer le message
                          </>
                        )}
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center"
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="font-display text-2xl font-bold text-white mb-3">Message envoyé ! 🎉</h3>
                      <p className="text-gray-400 mb-6">
                        Merci pour ton message ! On te répond sous 24h maximum.
                      </p>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({ name: '', email: '', reason: '', message: '' })
                        }}
                      >
                        Envoyer un autre message
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Info & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-pink-500/30 transition-all">
                  <Mail className="w-8 h-8 text-pink-400 mb-3" />
                  <h3 className="font-display text-lg font-bold text-white mb-1">Email</h3>
                  <a href="mailto:florian.jove.garcia@gmail.com" className="text-gray-400 text-sm hover:text-pink-400 transition-colors">
                    florian.jove.garcia@gmail.com
                  </a>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
                  <Clock className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="font-display text-lg font-bold text-white mb-1">Réponse</h3>
                  <p className="text-gray-400 text-sm">Sous 24h max</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all">
                  <MapPin className="w-8 h-8 text-violet-400 mb-3" />
                  <h3 className="font-display text-lg font-bold text-white mb-1">Localisation</h3>
                  <p className="text-gray-400 text-sm">Paris, France 🇫🇷</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all">
                  <Zap className="w-8 h-8 text-amber-400 mb-3" />
                  <h3 className="font-display text-lg font-bold text-white mb-1">Urgence</h3>
                  <a href="mailto:florian.jove.garcia@gmail.com" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">
                    florian.jove.garcia@gmail.com
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-cyan-400" />
                  Questions fréquentes
                </h3>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-white/10 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                      >
                        <span className="text-sm font-medium text-white">{faq.question}</span>
                        <motion.div
                          animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <AlertCircle className="w-4 h-4 text-gray-400" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {expandedFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-4 pb-4 text-sm text-gray-400">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discord CTA */}
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Besoin d'aide rapide ?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Rejoins notre Discord pour une assistance en temps réel !
                </p>
                <Button variant="secondary" size="sm">
                  Rejoindre Discord
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
