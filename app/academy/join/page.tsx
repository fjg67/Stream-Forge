'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Star,
  Trophy,
  Users,
  Play,
  Zap,
  Shield,
  Gift,
  Crown,
  Sparkles,
  GraduationCap,
  Video,
  Download,
  MessageCircle,
  Award,
  Clock,
  ChevronDown,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowLeft,
  Rocket,
  Target,
  TrendingUp,
  Heart,
  AlertCircle
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { ACADEMY_COURSES } from '@/lib/academy-data'
import { auth, db } from '@/lib/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

const features = [
  { icon: Video, label: '7 formations complètes', color: 'from-violet-500 to-purple-600' },
  { icon: Clock, label: '+50h de contenu', color: 'from-cyan-500 to-blue-600' },
  { icon: Download, label: 'Templates & ressources', color: 'from-green-500 to-emerald-600' },
  { icon: MessageCircle, label: 'Support Discord 24/7', color: 'from-pink-500 to-rose-600' },
  { icon: Award, label: 'Certificats de complétion', color: 'from-amber-500 to-orange-600' },
  { icon: Zap, label: 'Mises à jour à vie', color: 'from-red-500 to-pink-600' },
]

const testimonials = [
  {
    name: 'Thomas L.',
    role: 'Streamer Gaming',
    avatar: 'T',
    content: "J'ai atteint 500 viewers en 3 mois grâce aux techniques de growth hacking. Incroyable !",
    rating: 5
  },
  {
    name: 'Sarah M.',
    role: 'Just Chatting',
    avatar: 'S',
    content: "Les cours OBS m'ont fait gagner un temps fou. Mon stream est maintenant ultra pro.",
    rating: 5
  },
  {
    name: 'Lucas D.',
    role: 'Streamer Variety',
    avatar: 'L',
    content: "Meilleur investissement de ma vie de streamer. Le support Discord est top !",
    rating: 5
  },
]

const stats = [
  { value: '136K+', label: 'Streamers formés' },
  { value: '4.9/5', label: 'Note moyenne' },
  { value: '50h+', label: 'De contenu' },
  { value: '24/7', label: 'Support Discord' },
]

const faqs = [
  {
    question: "Est-ce vraiment gratuit ?",
    answer: "Oui ! L'accès à toutes les formations est 100% gratuit. Nous croyons que le savoir doit être accessible à tous les streamers."
  },
  {
    question: "Combien de temps ai-je accès aux cours ?",
    answer: "Accès illimité à vie ! Une fois inscrit, tu peux revoir les cours autant de fois que tu veux, et tu bénéficies des mises à jour gratuites."
  },
  {
    question: "Les cours sont-ils adaptés aux débutants ?",
    answer: "Absolument ! Chaque formation commence par les bases et progresse vers des techniques avancées. Quel que soit ton niveau, tu trouveras du contenu adapté."
  },
  {
    question: "Comment fonctionne le support Discord ?",
    answer: "Tu rejoins notre serveur privé avec +10 000 membres. Notre équipe et la communauté répondent à tes questions 24h/24, 7j/7."
  },
  {
    question: "Puis-je télécharger les ressources ?",
    answer: "Oui ! Tous les templates, overlays, checklists et guides sont téléchargeables. Tu les gardes pour toujours."
  },
]

export default function JoinAcademyPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // 1. Créer l'utilisateur avec Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )

      // 2. Mettre à jour le profil avec le pseudo
      await updateProfile(userCredential.user, {
        displayName: formData.name
      })

      // 3. Sauvegarder les infos dans Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        uid: userCredential.user.uid,
        pseudo: formData.name,
        email: formData.email,
        createdAt: serverTimestamp(),
        completedLessons: [],
        progress: {},
        isPremium: true,
        joinedAcademy: true
      })

      // 4. Sauvegarder le pseudo pour la page de bienvenue
      localStorage.setItem('streamforge_username', formData.name)

      // 5. Rediriger vers la page de bienvenue
      router.push('/academy/welcome')

    } catch (err: unknown) {
      console.error('Erreur inscription:', err)
      
      // Gérer les erreurs Firebase
      const firebaseError = err as { code?: string }
      if (firebaseError.code === 'auth/email-already-in-use') {
        setError('Cet email est déjà utilisé. Essaie de te connecter.')
      } else if (firebaseError.code === 'auth/weak-password') {
        setError('Le mot de passe doit contenir au moins 6 caractères.')
      } else if (firebaseError.code === 'auth/invalid-email') {
        setError('Adresse email invalide.')
      } else {
        setError('Une erreur est survenue. Réessaie dans quelques instants.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-forge-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.1),transparent_50%)]" />
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-gray-400 group-hover:text-white transition-colors">Retour</span>
          </Link>
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-violet-500" />
            <span className="font-display text-xl font-bold text-white">Stream Forge Academy</span>
          </div>
          <div className="w-20" /> {/* Spacer */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/50 rounded-full mb-6"
              >
                <Trophy className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-semibold">ACCÈS ILLIMITÉ GRATUIT</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Deviens un{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-violet-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    Streamer Pro
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Accède à <span className="text-white font-bold">7 formations complètes</span>, 
                +50 heures de contenu exclusif, et rejoins une communauté de 
                <span className="text-violet-400 font-bold"> +136 000 streamers</span>.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-violet-500/30 transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-300">{feature.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card variant="glass" className="overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Rejoins l'Académie</h2>
                      <p className="text-white/80 text-sm">100% gratuit, pour toujours</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-red-400 text-sm">{error}</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Ton pseudo de streamer
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                          placeholder="Ex: StreamerPro"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Adresse email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                          placeholder="ton@email.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Mot de passe
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={e => setFormData({...formData, password: e.target.value})}
                          className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                          placeholder="••••••••"
                          required
                          minLength={6}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-shadow disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : (
                        <>
                          Créer mon compte gratuit
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>

                    {/* Terms */}
                    <p className="text-xs text-gray-500 text-center">
                      En t'inscrivant, tu acceptes nos{' '}
                      <a href="#" className="text-violet-400 hover:underline">conditions d'utilisation</a>
                      {' '}et notre{' '}
                      <a href="#" className="text-violet-400 hover:underline">politique de confidentialité</a>.
                    </p>
                  </form>

                  {/* Divider */}
                  <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-gray-500 text-sm">ou continue avec</span>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>

                  {/* Social Login */}
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 py-3 bg-[#5865F2]/20 border border-[#5865F2]/50 rounded-xl text-white hover:bg-[#5865F2]/30 transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                      Discord
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 bg-[#9146FF]/20 border border-[#9146FF]/50 rounded-xl text-white hover:bg-[#9146FF]/30 transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                      </svg>
                      Twitch
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ce qui t'attend dans l'Académie
            </h2>
            <p className="text-gray-400 text-lg">
              7 formations complètes pour maîtriser tous les aspects du streaming
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ACADEMY_COURSES.slice(0, 7).map((course, index: number) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="glass" hover className="h-full group cursor-pointer">
                  <CardContent className="p-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <span className="text-2xl">{index + 1}</span>
                    </div>
                    <h3 className="font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{course.lessons.length} leçons</span>
                      <span>{course.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            {/* More courses card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Card variant="glass" className="h-full flex items-center justify-center border-dashed border-violet-500/30">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-violet-400" />
                  </div>
                  <p className="text-violet-400 font-semibold">
                    + Nouvelles formations chaque mois
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ils ont transformé leur stream
            </h2>
            <p className="text-gray-400 text-lg">
              Découvre ce que nos membres disent de l'Académie
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="glass" hover className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Questions fréquentes
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="glass" className="overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <span className="font-bold text-white">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-violet-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 text-gray-400">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card variant="glass" className="overflow-hidden">
              <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 p-12 text-center">
                <motion.div
                  animate={{ 
                    boxShadow: ['0 0 20px rgba(255,255,255,0.2)', '0 0 60px rgba(255,255,255,0.4)', '0 0 20px rgba(255,255,255,0.2)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Rocket className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-4xl font-black text-white mb-4">
                  Prêt à transformer ton stream ?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Rejoins +136 000 streamers qui ont déjà accès à toutes nos formations gratuitement.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-12 py-4 bg-white text-violet-600 font-bold text-lg rounded-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-shadow flex items-center gap-2 mx-auto"
                >
                  <Crown className="w-6 h-6" />
                  Créer mon compte gratuit
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <p className="mt-6 text-white/60 text-sm flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  Aucune carte bancaire requise
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-violet-500" />
            <span className="text-gray-400">Stream Forge Academy</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Stream Forge. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
