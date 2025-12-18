'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { 
  Shield, 
  Lock, 
  Eye, 
  Cookie, 
  Database, 
  UserCheck, 
  Globe,
  Mail,
  ArrowLeft,
  FileText,
  CheckCircle2
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const sections = [
  {
    id: 'collecte',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    title: "Collecte des Données",
    content: `Nous collectons uniquement les données nécessaires au bon fonctionnement de nos services :

• **Données d'identification** : nom, prénom, adresse email lors de l'inscription
• **Données de navigation** : pages visitées, durée de session, appareil utilisé
• **Données de préférences** : paramètres de personnalisation, préférences de setup
• **Données de communication** : messages envoyés via le formulaire de contact

Ces données sont collectées de manière transparente et avec votre consentement explicite.`
  },
  {
    id: 'utilisation',
    icon: Eye,
    color: 'from-violet-500 to-purple-500',
    title: "Utilisation des Données",
    content: `Vos données personnelles sont utilisées pour :

• **Personnalisation** : Adapter les recommandations de setup à vos besoins
• **Communication** : Vous envoyer des notifications importantes et newsletters (avec votre accord)
• **Amélioration** : Analyser l'utilisation du site pour améliorer nos services
• **Support** : Répondre à vos demandes d'assistance
• **Sécurité** : Prévenir et détecter les activités frauduleuses

Nous ne vendons jamais vos données à des tiers.`
  },
  {
    id: 'cookies',
    icon: Cookie,
    color: 'from-amber-500 to-orange-500',
    title: "Cookies & Traceurs",
    content: `Notre site utilise différents types de cookies :

• **Cookies essentiels** : Nécessaires au fonctionnement du site (session, sécurité)
• **Cookies analytiques** : Nous aident à comprendre comment vous utilisez le site (Google Analytics anonymisé)
• **Cookies de préférences** : Mémorisent vos choix (thème, langue, paramètres)
• **Cookies marketing** : Avec votre consentement, pour des publicités pertinentes

Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau de consentement ou les paramètres de votre navigateur.`
  },
  {
    id: 'conservation',
    icon: Lock,
    color: 'from-emerald-500 to-green-500',
    title: "Conservation & Sécurité",
    content: `Nous prenons la sécurité de vos données très au sérieux :

• **Durée de conservation** : Vos données sont conservées 3 ans après votre dernière activité
• **Chiffrement** : Toutes les données sensibles sont chiffrées (TLS 1.3)
• **Accès restreint** : Seuls les employés autorisés peuvent accéder aux données
• **Hébergement sécurisé** : Serveurs hébergés dans l'UE (conformité RGPD)
• **Sauvegardes** : Sauvegardes régulières et sécurisées
• **Audits** : Audits de sécurité réguliers par des tiers`
  },
  {
    id: 'droits',
    icon: UserCheck,
    color: 'from-pink-500 to-rose-500',
    title: "Vos Droits RGPD",
    content: `Conformément au RGPD, vous disposez des droits suivants :

• **Droit d'accès** : Obtenir une copie de vos données personnelles
• **Droit de rectification** : Corriger des données inexactes
• **Droit à l'effacement** : Demander la suppression de vos données
• **Droit à la portabilité** : Recevoir vos données dans un format structuré
• **Droit d'opposition** : Vous opposer au traitement de vos données
• **Droit de limitation** : Limiter le traitement de vos données

Pour exercer ces droits, contactez-nous à : florian.jove.garcia@gmail.com`
  },
  {
    id: 'transferts',
    icon: Globe,
    color: 'from-indigo-500 to-blue-500',
    title: "Transferts Internationaux",
    content: `Vos données peuvent être transférées vers :

• **Union Européenne** : Hébergement principal (Vercel EU)
• **États-Unis** : Certains sous-traitants (conformité Privacy Shield / SCC)

Tout transfert hors UE est encadré par des garanties appropriées (Clauses Contractuelles Types) pour assurer un niveau de protection équivalent au RGPD.`
  },
]

const rights = [
  { icon: CheckCircle2, text: "Accéder à vos données" },
  { icon: CheckCircle2, text: "Rectifier vos informations" },
  { icon: CheckCircle2, text: "Supprimer votre compte" },
  { icon: CheckCircle2, text: "Exporter vos données" },
  { icon: CheckCircle2, text: "Retirer votre consentement" },
  { icon: CheckCircle2, text: "Contacter le DPO" },
]

export default function Confidentialite() {
  return (
    <main className="relative min-h-screen bg-forge-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 cyber-grid opacity-5" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-violet-500/10 rounded-full blur-[200px]" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <Navigation />

      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
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
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 shadow-lg shadow-cyan-500/30"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
              <span className="text-white">Politique de </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Confidentialité</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Chez Stream Forge, la protection de vos données personnelles est une priorité absolue. Découvrez comment nous collectons, utilisons et protégeons vos informations.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <FileText className="w-4 h-4" />
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </motion.div>

          {/* Quick Rights Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl"
          >
            <h3 className="font-display text-lg font-bold text-white mb-4 text-center">Vos droits en un coup d'œil</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {rights.map((right, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex flex-col items-center text-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <right.icon className="w-5 h-5 text-cyan-400 mb-2" />
                  <span className="text-xs text-gray-300">{right.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 p-6 bg-white/[0.02] border border-white/10 rounded-2xl"
          >
            <h3 className="font-mono text-sm text-cyan-400 mb-4 uppercase tracking-wide">Sommaire</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {sections.map((section, i) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-mono group-hover:bg-violet-500/20">
                    {i + 1}
                  </span>
                  <span className="text-sm">{section.title}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative group scroll-mt-32"
              >
                {/* Card */}
                <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500">
                  {/* Number badge */}
                  <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-sm font-mono font-bold shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6 ml-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  {/* Content */}
                  <div className="pl-6 ml-12">
                    <div className="prose prose-invert prose-sm max-w-none">
                      {section.content.split('\n').map((line, i) => {
                        if (line.startsWith('•')) {
                          const parts = line.substring(2).split('**')
                          return (
                            <p key={i} className="flex items-start gap-2 text-gray-300 my-2">
                              <span className="text-cyan-400 mt-1">→</span>
                              <span>
                                {parts.map((part, j) => (
                                  j % 2 === 1 ? <strong key={j} className="text-white">{part}</strong> : part
                                ))}
                              </span>
                            </p>
                          )
                        }
                        return line && <p key={i} className="text-gray-300 leading-relaxed">{line}</p>
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact DPO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 relative bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-2xl p-8 text-center"
          >
            <Mail className="w-12 h-12 text-violet-400 mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-white mb-3">Contacter notre DPO</h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Pour toute question concernant le traitement de vos données personnelles ou pour exercer vos droits, n'hésitez pas à contacter notre Délégué à la Protection des Données.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg" glow>
                <Mail className="w-5 h-5 mr-2" />
                florian.jove.garcia@gmail.com
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
