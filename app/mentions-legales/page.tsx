'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { 
  Scale, 
  Building2, 
  Globe, 
  Server, 
  User, 
  Mail, 
  ArrowLeft,
  Shield,
  FileText
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const sections = [
  {
    icon: Building2,
    title: "Éditeur du Site",
    content: [
      { label: "Raison sociale", value: "Stream Forge" },
      { label: "Forme juridique", value: "SAS (Société par Actions Simplifiée)" },
      { label: "Capital social", value: "10 000 €" },
      { label: "Siège social", value: "123 Avenue du Streaming, 75001 Paris, France" },
      { label: "SIRET", value: "123 456 789 00012" },
      { label: "RCS", value: "Paris B 123 456 789" },
      { label: "TVA Intracommunautaire", value: "FR 12 123456789" },
    ]
  },
  {
    icon: User,
    title: "Direction de la Publication",
    content: [
      { label: "Directeur de la publication", value: "Florian Directeur" },
      { label: "Email", value: "direction@streamforge.fr" },
      { label: "Téléphone", value: "+33 1 23 45 67 89" },
    ]
  },
  {
    icon: Server,
    title: "Hébergement",
    content: [
      { label: "Hébergeur", value: "Vercel Inc." },
      { label: "Adresse", value: "440 N Barranca Ave #4133, Covina, CA 91723, USA" },
      { label: "Site web", value: "vercel.com" },
    ]
  },
  {
    icon: Globe,
    title: "Propriété Intellectuelle",
    content: [
      { 
        label: "Contenu", 
        value: "L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels) est la propriété exclusive de Stream Forge ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle." 
      },
      { 
        label: "Reproduction", 
        value: "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Stream Forge." 
      },
    ]
  },
]

export default function MentionsLegales() {
  return (
    <main className="relative min-h-screen bg-forge-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 cyber-grid opacity-5" />
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[150px]" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />

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
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 mb-6 shadow-lg shadow-violet-500/30"
            >
              <Scale className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
              <span className="text-white">Mentions </span>
              <span className="gradient-text">Légales</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Informations légales concernant l'éditeur, l'hébergeur et les conditions d'utilisation du site Stream Forge.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <FileText className="w-4 h-4" />
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-500">
                  {/* Gradient line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
                  
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/30 flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4 pl-16">
                    {section.content.map((item, i) => (
                      <div key={i} className="group/item">
                        <div className="text-sm font-mono text-cyan-400 uppercase tracking-wide mb-1">
                          {item.label}
                        </div>
                        <div className="text-gray-300 leading-relaxed">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">Protection des Données</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                  </p>
                  <Link href="/confidentialite">
                    <Button variant="secondary" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Voir notre politique de confidentialité
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
