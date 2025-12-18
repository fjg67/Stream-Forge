'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  Users, 
  BookOpen, 
  Download,
  CheckCircle2,
  Lock,
  Trophy,
  Star,
  Video,
  Sparkles,
  FileText,
  Zap,
  GraduationCap,
  Award,
  Calendar,
  Target,
  AlertCircle
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { getCourseBySlug, ACADEMY_COURSES } from '@/lib/academy-data'
import Link from 'next/link'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Play,
  Video,
  Sparkles,
  Zap,
  Users,
  Trophy,
  FileText,
}

const difficultyColors: Record<string, string> = {
  'Débutant': 'bg-green-500/20 text-green-400 border-green-500/50',
  'Intermédiaire': 'bg-blue-500/20 text-blue-400 border-blue-500/50',
  'Avancé': 'bg-purple-500/20 text-purple-400 border-purple-500/50',
  'Expert': 'bg-amber-500/20 text-amber-400 border-amber-500/50',
}

export default function CoursePage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const course = getCourseBySlug(slug)

  if (!course) {
    return (
      <div className="min-h-screen bg-forge-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Cours non trouvé</h1>
          <Link href="/#academy">
            <Button variant="primary">
              Retour à l'Académie
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = iconMap[course.icon] || Play
  const totalDuration = course.lessons.reduce((acc, lesson) => {
    const parts = lesson.duration.split(' ')
    const num = parseInt(parts[0])
    return acc + num
  }, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-forge-black via-forge-black-light to-forge-black">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-10`} />
        <div className="absolute inset-0 cyber-grid opacity-5" />
        <div className={`absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br ${course.color} opacity-20 blur-3xl rounded-full`} />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/#academy">
              <Button variant="ghost" size="sm" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Retour à l'Académie
              </Button>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className={`text-sm font-mono px-4 py-2 rounded-full border ${difficultyColors[course.difficulty]}`}>
                    {course.difficulty}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Mis à jour : {course.lastUpdated}
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-2xl flex-shrink-0`}>
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-gray-400 mb-1">Module {course.number}</div>
                    <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
                      {course.title}
                    </h1>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed whitespace-pre-line">
                  {course.longDescription}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
                  {[
                    { icon: Clock, value: course.duration, label: 'Durée totale' },
                    { icon: BookOpen, value: `${course.lessons.length} leçons`, label: 'Contenu' },
                    { icon: Users, value: `${(course.students / 1000).toFixed(1)}k`, label: 'Étudiants' },
                    { icon: Star, value: '4.9/5', label: 'Note moyenne' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10">
                      <stat.icon className="w-5 h-5 text-forge-cyan" />
                      <div>
                        <div className="font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Instructeur</div>
                    <div className="font-bold text-white text-lg">{course.instructor}</div>
                    <div className="text-sm text-gray-400">{course.instructorBio}</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Card - Sticky */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card variant="glass" className="sticky top-4 border border-violet-500/30 overflow-hidden">
                  {/* Top Gradient */}
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                  
                  <CardContent className="p-6">
                    {/* Price */}
                    <div className="text-center mb-6">
                      <div className="text-gray-400 line-through text-lg">49,99€</div>
                      <div className="text-5xl font-black text-green-400">GRATUIT</div>
                      <div className="text-sm text-gray-400 mt-1">Accès illimité à vie</div>
                    </div>

                    {/* CTA Button */}
                    <Link href={`/academy/${slug}/lesson/1`}>
                      <Button variant="primary" size="xl" className="w-full mb-4 text-lg" glow>
                        <Play className="w-5 h-5 mr-2" />
                        Commencer le cours
                      </Button>
                    </Link>

                    <p className="text-center text-xs text-gray-400 mb-6">
                      +{course.students.toLocaleString()} étudiants inscrits
                    </p>

                    {/* What's Included */}
                    <div className="border-t border-white/10 pt-6">
                      <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-400" />
                        Ce cours inclut :
                      </h4>
                      <ul className="space-y-3">
                        {[
                          `${course.lessons.length} leçons vidéo HD`,
                          'Accès à vie illimité',
                          'Certificat de complétion',
                          'Support Discord 24/7',
                          'Mises à jour gratuites',
                        ].map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="glass" className="border border-green-500/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-7 h-7 text-green-400" />
                Ce que tu vas apprendre
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.whatYouLearn.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Requirements */}
      <div className="container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="glass" className="border border-amber-500/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertCircle className="w-7 h-7 text-amber-400" />
                Prérequis
              </h2>
              <div className="space-y-3">
                {course.requirements.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Lessons List */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-7 h-7 text-forge-cyan" />
                Contenu du cours
                <span className="text-sm font-normal text-gray-400">({course.lessons.length} leçons)</span>
              </h2>

              <div className="space-y-3">
                {course.lessons.map((lesson, index) => (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(index * 0.03, 0.5) }}
                  >
                    <Link href={`/academy/${slug}/lesson/${lesson.id}`}>
                      <Card variant="glass" hover className="group cursor-pointer border border-transparent hover:border-violet-500/30 transition-all">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${lesson.isFree ? course.color : 'from-gray-600 to-gray-700'} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                            {lesson.isFree ? (
                              <Play className="w-5 h-5 text-white" />
                            ) : (
                              <span className="text-sm font-bold text-white">{index + 1}</span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-white group-hover:text-forge-cyan transition-colors truncate">
                                {lesson.title}
                              </h4>
                              {lesson.isFree && (
                                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30">
                                  Gratuit
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-400 truncate">{lesson.description}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400 flex-shrink-0">
                            <Clock className="w-4 h-4" />
                            {lesson.duration}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Other Courses */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-7 h-7 text-forge-cyan" />
                Autres cours
              </h2>
              <div className="space-y-3">
                {ACADEMY_COURSES.filter(c => c.id !== course.id).slice(0, 4).map((c) => (
                  <Link key={c.id} href={`/academy/${c.slug}`}>
                    <Card variant="glass" hover className="group cursor-pointer border border-transparent hover:border-cyan-500/30 transition-all">
                      <CardContent className="p-3 flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                          <span className="text-sm font-bold text-white">{c.number}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-white group-hover:text-forge-cyan transition-colors truncate">
                            {c.title}
                          </h4>
                          <p className="text-xs text-gray-400">{c.lessons.length} leçons</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card variant="cyber" className="border border-violet-500/30 overflow-hidden">
            <div className={`h-1 bg-gradient-to-r ${course.color}`} />
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Prêt(e) à maîtriser <span className="gradient-text">{course.title}</span> ?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Rejoins +{course.students.toLocaleString()} étudiants qui ont déjà transformé leur streaming grâce à ce cours.
              </p>
              <Link href={`/academy/${slug}/lesson/1`}>
                <Button variant="primary" size="xl" glow className="px-12 text-lg">
                  <Play className="w-6 h-6 mr-2" />
                  Commencer maintenant - C'est gratuit !
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
