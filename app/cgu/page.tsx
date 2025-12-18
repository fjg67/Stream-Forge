'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { 
  FileText, 
  UserCheck, 
  Ban, 
  AlertTriangle, 
  CreditCard,
  RefreshCw,
  Scale,
  Shield,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Scroll
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const sections = [
  {
    id: 'objet',
    number: '1',
    icon: Scroll,
    title: "Objet des CGU",
    content: `Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités d'accès et d'utilisation du site Stream Forge (ci-après "le Site").

En accédant au Site, vous acceptez sans réserve les présentes CGU. Si vous n'acceptez pas ces conditions, vous êtes invité à ne pas utiliser le Site.

Stream Forge se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le Site.`
  },
  {
    id: 'acces',
    number: '2',
    icon: UserCheck,
    title: "Accès au Site",
    content: `**Conditions d'accès :**
• Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet
• Les coûts d'accès à Internet sont à la charge exclusive de l'utilisateur
• L'accès à certaines fonctionnalités peut nécessiter la création d'un compte
• Vous devez être âgé d'au moins 13 ans pour utiliser le Site

**Disponibilité :**
• Stream Forge s'efforce d'assurer la disponibilité du Site 24h/24, 7j/7
• Des interruptions pour maintenance peuvent survenir sans préavis
• Stream Forge ne peut être tenu responsable en cas d'indisponibilité du Site`
  },
  {
    id: 'compte',
    number: '3',
    icon: Shield,
    title: "Compte Utilisateur",
    content: `**Création de compte :**
• L'inscription est gratuite et nécessite une adresse email valide
• Vous vous engagez à fournir des informations exactes et à les maintenir à jour
• Un seul compte par personne est autorisé
• Le partage de compte est interdit

**Sécurité :**
• Vous êtes responsable de la confidentialité de votre mot de passe
• Toute activité effectuée depuis votre compte est réputée être la vôtre
• En cas de compromission, prévenez-nous immédiatement

**Résiliation :**
• Vous pouvez supprimer votre compte à tout moment depuis les paramètres
• Stream Forge peut suspendre ou supprimer un compte en cas de violation des CGU`
  },
  {
    id: 'interdictions',
    number: '4',
    icon: Ban,
    title: "Comportements Interdits",
    content: `Il est strictement interdit de :

• **Contenu illicite** : Publier du contenu illégal, diffamatoire, discriminatoire ou portant atteinte aux droits d'autrui
• **Spam** : Envoyer des messages non sollicités ou publicitaires
• **Hacking** : Tenter d'accéder sans autorisation aux systèmes du Site
• **Collecte** : Collecter des données personnelles d'autres utilisateurs
• **Robots** : Utiliser des bots, scrapers ou outils automatisés
• **Usurpation** : Se faire passer pour une autre personne ou entité
• **Nuisance** : Harceler, menacer ou intimider d'autres utilisateurs
• **Manipulation** : Contourner les mesures de sécurité du Site

Le non-respect de ces règles entraîne la suspension immédiate du compte.`
  },
  {
    id: 'propriete',
    number: '5',
    icon: FileText,
    title: "Propriété Intellectuelle",
    content: `**Contenu du Site :**
• L'ensemble du contenu de Stream Forge est protégé par le droit d'auteur
• Logos, marques, textes, images et code sont la propriété exclusive de Stream Forge
• Toute reproduction sans autorisation écrite préalable est interdite

**Contenu utilisateur :**
• Vous conservez vos droits sur le contenu que vous publiez
• En publiant, vous accordez à Stream Forge une licence mondiale, non exclusive et gratuite d'utilisation
• Cette licence est limitée aux besoins de fonctionnement du Service

**Templates et ressources :**
• Les templates téléchargés sont soumis à une licence d'utilisation personnelle
• La revente ou redistribution des ressources est interdite`
  },
  {
    id: 'responsabilite',
    number: '6',
    icon: AlertTriangle,
    title: "Responsabilité",
    content: `**Limitations de responsabilité :**
• Le Site est fourni "tel quel", sans garantie de résultat
• Stream Forge ne garantit pas l'exactitude des recommandations de setup
• Les prix des produits recommandés sont indicatifs et peuvent varier

**Exclusions :**
Stream Forge ne peut être tenu responsable :
• Des dommages directs ou indirects résultant de l'utilisation du Site
• Des contenus publiés par les utilisateurs ou tiers
• Des liens vers des sites externes
• Des interruptions ou erreurs techniques

**Force majeure :**
Stream Forge est exonéré de toute responsabilité en cas de force majeure (catastrophe naturelle, cyberattaque, etc.).`
  },
  {
    id: 'tarifs',
    number: '7',
    icon: CreditCard,
    title: "Tarifs & Paiements",
    content: `**Gratuité :**
• L'accès au configurateur de setup est entièrement gratuit
• Les formations de l'Académie sont accessibles gratuitement
• Aucun paiement n'est requis pour utiliser les fonctionnalités de base

**Liens affiliés :**
• Certains liens vers des produits sont des liens affiliés
• Stream Forge peut percevoir une commission sur les achats
• Cela n'affecte pas le prix payé par l'utilisateur
• Nous recommandons uniquement des produits que nous estimons de qualité

**Services premium (futur) :**
• Des services payants pourront être proposés ultérieurement
• Les tarifs seront clairement affichés avant tout achat`
  },
  {
    id: 'modification',
    number: '8',
    icon: RefreshCw,
    title: "Modification des CGU",
    content: `Stream Forge se réserve le droit de modifier les présentes CGU à tout moment.

**Notification :**
• Les utilisateurs seront informés par email en cas de modification substantielle
• La date de dernière mise à jour est indiquée en haut de page
• L'utilisation continue du Site vaut acceptation des nouvelles CGU

**Archivage :**
• Les versions antérieures des CGU peuvent être demandées par email
• Il est recommandé de consulter régulièrement cette page`
  },
  {
    id: 'juridiction',
    number: '9',
    icon: Scale,
    title: "Droit Applicable",
    content: `**Loi applicable :**
Les présentes CGU sont régies par le droit français.

**Juridiction compétente :**
En cas de litige, et après échec d'une tentative de résolution amiable, les tribunaux de Paris seront seuls compétents.

**Médiation :**
Conformément aux dispositions du Code de la consommation, vous pouvez recourir à la médiation. Le médiateur compétent est :
Centre de Médiation et d'Arbitrage de Paris (CMAP)
39 Avenue Franklin D. Roosevelt, 75008 Paris
www.cmap.fr

**Contact :**
Pour toute question : legal@streamforge.fr`
  },
]

const highlights = [
  { icon: CheckCircle, text: "100% Gratuit", color: "text-green-400" },
  { icon: Shield, text: "Données protégées", color: "text-blue-400" },
  { icon: Scale, text: "Droit français", color: "text-violet-400" },
  { icon: XCircle, text: "Pas de spam", color: "text-red-400" },
]

export default function CGU() {
  return (
    <main className="relative min-h-screen bg-forge-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 cyber-grid opacity-5" />
      <div className="fixed top-1/4 right-0 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[150px]" />
      <div className="fixed bottom-1/4 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]" />

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
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 mb-6 shadow-lg shadow-emerald-500/30"
            >
              <FileText className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
              <span className="text-white">Conditions Générales </span>
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">d'Utilisation</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Les règles du jeu pour utiliser Stream Forge en toute sérénité. Spoiler : c'est gratuit et on respecte ta vie privée.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <Scroll className="w-4 h-4" />
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 p-6 bg-white/[0.02] border border-white/10 rounded-2xl"
          >
            <h3 className="font-mono text-sm text-emerald-400 mb-4 uppercase tracking-wide">Navigation rapide</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center text-xs font-mono text-emerald-400 group-hover:from-emerald-500 group-hover:to-green-500 group-hover:text-white transition-all">
                    {section.number}
                  </span>
                  <span className="text-sm">{section.title}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="relative group scroll-mt-32"
              >
                {/* Card */}
                <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
                  {/* Top gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 opacity-50" />
                  
                  {/* Number */}
                  <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/10 to-green-500/10 flex items-center justify-center">
                    <span className="font-display text-4xl font-black text-white/10">{section.number}</span>
                  </div>
                  
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-wide">Article {section.number}</span>
                      <h2 className="font-display text-xl font-bold text-white">{section.title}</h2>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="prose prose-invert prose-sm max-w-none">
                    {section.content.split('\n').map((line, i) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <h4 key={i} className="text-white font-semibold mt-4 mb-2">{line.replace(/\*\*/g, '')}</h4>
                      }
                      if (line.startsWith('•')) {
                        const parts = line.substring(2).split('**')
                        return (
                          <p key={i} className="flex items-start gap-2 text-gray-300 my-1.5 ml-4">
                            <span className="text-emerald-400 mt-0.5">•</span>
                            <span>
                              {parts.map((part, j) => (
                                j % 2 === 1 ? <strong key={j} className="text-white">{part}</strong> : part
                              ))}
                            </span>
                          </p>
                        )
                      }
                      if (line.startsWith('**')) {
                        const parts = line.split('**')
                        return (
                          <p key={i} className="text-gray-300 leading-relaxed">
                            {parts.map((part, j) => (
                              j % 2 === 1 ? <strong key={j} className="text-white">{part}</strong> : part
                            ))}
                          </p>
                        )
                      }
                      return line && <p key={i} className="text-gray-300 leading-relaxed">{line}</p>
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Accept Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 relative bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center"
          >
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-white mb-3">En utilisant Stream Forge</h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Vous acceptez les présentes Conditions Générales d'Utilisation. Merci de votre confiance !
            </p>
            <Link href="/">
              <Button variant="primary" size="lg" glow>
                Retour à l'accueil
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
