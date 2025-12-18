'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  ArrowRight,
  Play, 
  Clock, 
  BookOpen, 
  Download,
  CheckCircle2,
  FileText,
  Sparkles,
  Zap,
  Users,
  Trophy,
  Menu,
  X,
  Lightbulb,
  AlertTriangle,
  Quote,
  ListChecks,
  Target
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { getCourseBySlug } from '@/lib/academy-data'
import { getLessonContent, LessonSection, QuizQuestion } from '@/lib/lesson-contents'
import Link from 'next/link'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Play,
  Sparkles,
  Zap,
  Users,
  Trophy,
  FileText,
}

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const lessonId = parseInt(params.lessonId as string) || 1
  
  const course = getCourseBySlug(slug)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number | null>>({})
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({})

  // Toggle checklist item
  const toggleCheckItem = useCallback((sectionIndex: number, itemIndex: number) => {
    const key = `${lessonId}-${sectionIndex}-${itemIndex}`
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }, [lessonId])

  // Handle quiz answer selection
  const selectQuizAnswer = useCallback((sectionIndex: number, questionIndex: number, optionIndex: number) => {
    const key = `${lessonId}-${sectionIndex}-${questionIndex}`
    if (quizSubmitted[key]) return // Can't change after submission
    setQuizAnswers(prev => ({
      ...prev,
      [key]: optionIndex
    }))
  }, [lessonId, quizSubmitted])

  // Submit quiz answer
  const submitQuizAnswer = useCallback((sectionIndex: number, questionIndex: number) => {
    const key = `${lessonId}-${sectionIndex}-${questionIndex}`
    setQuizSubmitted(prev => ({
      ...prev,
      [key]: true
    }))
  }, [lessonId])

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

  const currentLesson = course.lessons.find(l => l.id === lessonId) || course.lessons[0]
  const currentIndex = course.lessons.findIndex(l => l.id === lessonId)
  const prevLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null
  const nextLesson = currentIndex < course.lessons.length - 1 ? course.lessons[currentIndex + 1] : null
  const IconComponent = iconMap[course.icon] || Play
  const lessonContent = getLessonContent(slug, lessonId)

  const markAsComplete = () => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId])
    }
    if (nextLesson) {
      router.push(`/academy/${slug}/lesson/${nextLesson.id}`)
    }
  }

  const progress = ((completedLessons.length / course.lessons.length) * 100).toFixed(0)

  return (
    <div className="min-h-screen bg-forge-black flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: 0 }}
        animate={{ x: sidebarOpen ? 0 : -320 }}
        className={`fixed lg:relative z-40 w-80 h-screen bg-forge-black-light border-r border-white/10 flex flex-col overflow-hidden`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-white/10">
          <Link href={`/academy/${slug}`} className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center`}>
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-white text-sm truncate group-hover:text-forge-cyan transition-colors">
                {course.title}
              </h2>
              <p className="text-xs text-gray-400">{course.lessons.length} leçons</p>
            </div>
          </Link>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Progression</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${course.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {course.lessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.id)
            const isCurrent = lesson.id === lessonId
            
            return (
              <Link
                key={lesson.id}
                href={`/academy/${slug}/lesson/${lesson.id}`}
              >
                <div className={`p-3 rounded-lg transition-all cursor-pointer ${
                  isCurrent 
                    ? `bg-gradient-to-r ${course.color} text-white` 
                    : isCompleted
                      ? 'bg-green-500/10 border border-green-500/30 hover:bg-green-500/20'
                      : 'bg-white/5 hover:bg-white/10'
                }`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isCurrent 
                        ? 'bg-white/20' 
                        : isCompleted 
                          ? 'bg-green-500' 
                          : 'bg-white/10'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle2 className={`w-4 h-4 ${isCurrent ? 'text-white' : 'text-white'}`} />
                      ) : isCurrent ? (
                        <Play className="w-3 h-3 text-white" />
                      ) : (
                        <span className="text-xs font-bold text-gray-400">
                          {index + 1}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium leading-snug ${
                        isCurrent ? 'text-white' : isCompleted ? 'text-green-400' : 'text-gray-300'
                      }`}>
                        {lesson.title}
                      </p>
                      <p className={`text-xs mt-1 ${isCurrent ? 'text-white/70' : 'text-gray-500'}`}>
                        {lesson.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10">
          <Link href={`/academy/${slug}`}>
            <Button variant="ghost" size="sm" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au cours
            </Button>
          </Link>
        </div>
      </motion.aside>

      {/* Sidebar Toggle Button (Mobile) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-forge-black-light rounded-lg border border-white/10"
      >
        {sidebarOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* Main Content */}
      <main className={`flex-1 transition-all ${sidebarOpen ? 'lg:ml-0' : 'lg:ml-0'}`}>
        {/* Interactive Lesson Hero - No Video */}
        <div className="relative min-h-[500px] bg-gradient-to-b from-forge-black-light to-forge-black overflow-hidden">
          {/* Animated Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-10`} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(0,0,0,0.9)_100%)]" />
          
          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${course.color}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Lesson Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <span className={`px-2 py-1 rounded-full bg-gradient-to-r ${course.color} text-white text-xs font-bold`}>
                    Module {course.number}
                  </span>
                  <span>•</span>
                  <span>Leçon {currentIndex + 1} / {course.lessons.length}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                  {currentLesson.title}
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {currentLesson.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                    <Clock className="w-5 h-5 text-forge-cyan" />
                    <span className="text-white font-medium">{currentLesson.duration} de lecture</span>
                  </div>
                  {currentLesson.isFree && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-xl border border-green-500/30">
                      <Sparkles className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-medium">Gratuit</span>
                    </div>
                  )}
                </div>

                {/* Quick Action */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-block"
                >
                  <Button 
                    variant="primary" 
                    size="lg" 
                    glow 
                    className="group"
                    onClick={() => document.getElementById('lesson-content')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Commencer la lecture
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right: Interactive Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Main Visual Card */}
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${course.color} shadow-2xl overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '24px 24px'
                    }} />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm"
                  />

                  {/* Central Icon */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div
                      animate={{ 
                        boxShadow: ['0 0 30px rgba(255,255,255,0.2)', '0 0 60px rgba(255,255,255,0.4)', '0 0 30px rgba(255,255,255,0.2)']
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-32 h-32 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6"
                    >
                      <IconComponent className="w-16 h-16 text-white" />
                    </motion.div>

                    {/* Key Points Preview */}
                    <div className="space-y-3 w-full">
                      {['Concepts clés', 'Exemples pratiques', 'Tips pro'].map((point, i) => (
                        <motion.div
                          key={point}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl backdrop-blur-sm"
                        >
                          <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                          <span className="text-white font-medium">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-r from-forge-violet/20 to-forge-cyan/20 blur-3xl" />
              </motion.div>
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / course.lessons.length) * 100}%` }}
              className={`h-full bg-gradient-to-r ${course.color}`}
            />
          </div>
        </div>

        {/* Lesson Content */}
        <div id="lesson-content" className="p-6 lg:p-8 max-w-4xl scroll-mt-4">
          {/* Lesson Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <span>Leçon {currentIndex + 1} sur {course.lessons.length}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {currentLesson.duration}
              </span>
              {currentLesson.isFree && (
                <>
                  <span>•</span>
                  <span className="text-green-400">Gratuit</span>
                </>
              )}
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {currentLesson.title}
            </h1>
            <p className="text-lg text-gray-300">
              {currentLesson.description}
            </p>
          </motion.div>

          {/* Rich Lesson Content */}
          {lessonContent ? (
            <div className="space-y-6">
              {lessonContent.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  {/* Intro Section */}
                  {section.type === 'intro' && (
                    <Card variant="glass" className="border-l-4 border-forge-cyan">
                      <CardContent className="p-6">
                        <p className="text-lg text-gray-200 leading-relaxed">
                          {section.content}
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {/* Concept Section */}
                  {section.type === 'concept' && (
                    <Card variant="glass">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-white" />
                          </div>
                          {section.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {section.content}
                        </p>
                        {section.items && (
                          <ul className="space-y-2 mt-4">
                            {section.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-300">
                                <span className="text-lg">{item.startsWith('✅') || item.startsWith('❌') ? '' : '•'}</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {/* Steps Section */}
                  {section.type === 'steps' && (
                    <Card variant="glass" className="border border-green-500/30">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                            <ListChecks className="w-5 h-5 text-white" />
                          </div>
                          {section.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{section.content}</p>
                        {section.items && (
                          <ul className="space-y-3">
                            {section.items.map((item, i) => (
                              <motion.li 
                                key={i} 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + i * 0.05 }}
                                className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                              >
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-200">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {/* Tip Section */}
                  {section.type === 'tip' && (
                    <Card variant="glass" className="border-l-4 border-amber-500 bg-amber-500/5">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg text-amber-400 mb-3 flex items-center gap-3">
                          <Lightbulb className="w-6 h-6" />
                          {section.title || 'Conseil Pro'}
                        </h3>
                        <p className="text-gray-200 leading-relaxed">
                          {section.content}
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {/* Warning Section */}
                  {section.type === 'warning' && (
                    <Card variant="glass" className="border-l-4 border-red-500 bg-red-500/5">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg text-red-400 mb-3 flex items-center gap-3">
                          <AlertTriangle className="w-6 h-6" />
                          {section.title || 'Attention'}
                        </h3>
                        <p className="text-gray-200 leading-relaxed">
                          {section.content}
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {/* Example Section */}
                  {section.type === 'example' && (
                    <Card variant="glass" className="border border-purple-500/30 bg-purple-500/5">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg text-purple-400 mb-3 flex items-center gap-3">
                          <Target className="w-6 h-6" />
                          {section.title || 'Exemple'}
                        </h3>
                        <p className="text-gray-200 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {/* Quote Section */}
                  {section.type === 'quote' && (
                    <div className="relative py-6 px-8">
                      <Quote className="absolute top-0 left-0 w-12 h-12 text-forge-violet/30" />
                      <blockquote className="text-xl italic text-gray-300 text-center pl-8">
                        {section.content}
                      </blockquote>
                    </div>
                  )}

                  {/* Checklist Section - Interactive */}
                  {section.type === 'checklist' && (
                    <Card variant="glass" className="border border-cyan-500/30">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                            <ListChecks className="w-5 h-5 text-white" />
                          </div>
                          {section.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{section.content}</p>
                        {section.items && (
                          <ul className="space-y-2">
                            {section.items.map((item, i) => {
                              const itemKey = `${lessonId}-${index}-${i}`
                              const isChecked = checkedItems[itemKey] || false
                              return (
                                <motion.li 
                                  key={i} 
                                  onClick={() => toggleCheckItem(index, i)}
                                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 select-none ${
                                    isChecked 
                                      ? 'bg-cyan-500/20 border border-cyan-500/50' 
                                      : 'hover:bg-white/5 border border-transparent'
                                  }`}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <motion.div 
                                    className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                                      isChecked 
                                        ? 'bg-gradient-to-br from-cyan-500 to-blue-500 border-cyan-400' 
                                        : 'border-cyan-500/50 bg-transparent'
                                    }`}
                                    animate={isChecked ? { scale: [1, 1.2, 1] } : {}}
                                  >
                                    {isChecked && (
                                      <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                      >
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                      </motion.div>
                                    )}
                                  </motion.div>
                                  <span className={`text-gray-300 transition-all duration-200 ${isChecked ? 'line-through text-gray-500' : ''}`}>
                                    {item}
                                  </span>
                                  {isChecked && (
                                    <motion.span
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      className="ml-auto text-xs text-cyan-400 font-medium"
                                    >
                                      ✓ Fait
                                    </motion.span>
                                  )}
                                </motion.li>
                              )
                            })}
                          </ul>
                        )}
                        {/* Progress indicator */}
                        {section.items && (() => {
                          const totalItems = section.items.length
                          const checkedCount = section.items.filter((_, i) => checkedItems[`${lessonId}-${index}-${i}`]).length
                          const percentage = Math.round((checkedCount / totalItems) * 100)
                          return (
                            <div className="mt-6 pt-4 border-t border-white/10">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-400">Progression</span>
                                <span className="text-sm font-bold text-cyan-400">{checkedCount}/{totalItems} ({percentage}%)</span>
                              </div>
                              <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${percentage}%` }}
                                  transition={{ duration: 0.3, ease: 'easeOut' }}
                                />
                              </div>
                              {percentage === 100 && (
                                <motion.p 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="text-center text-green-400 font-bold mt-3 flex items-center justify-center gap-2"
                                >
                                  <Sparkles className="w-5 h-5" />
                                  Checklist complétée ! Bravo !
                                </motion.p>
                              )}
                            </div>
                          )
                        })()}
                      </CardContent>
                    </Card>
                  )}

                  {/* Quiz Section - Interactive */}
                  {section.type === 'quiz' && section.questions && (
                    <Card variant="glass" className="border border-purple-500/30">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <Target className="w-5 h-5 text-white" />
                          </div>
                          {section.title || 'Quiz'}
                        </h3>
                        <p className="text-gray-300 mb-6">{section.content}</p>
                        
                        <div className="space-y-8">
                          {section.questions.map((q, qIndex) => {
                            const answerKey = `${lessonId}-${index}-${qIndex}`
                            const selectedAnswer = quizAnswers[answerKey]
                            const isSubmitted = quizSubmitted[answerKey]
                            const isCorrect = selectedAnswer === q.correctIndex
                            
                            return (
                              <div key={qIndex} className="space-y-4">
                                <p className="font-semibold text-white flex items-start gap-3">
                                  <span className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm flex-shrink-0">
                                    {qIndex + 1}
                                  </span>
                                  {q.question}
                                </p>
                                
                                <div className="space-y-2 pl-10">
                                  {q.options.map((option, optIndex) => {
                                    const isSelected = selectedAnswer === optIndex
                                    const isCorrectOption = optIndex === q.correctIndex
                                    let optionClass = 'border-gray-600 hover:border-purple-500/50 hover:bg-white/5'
                                    
                                    if (isSubmitted) {
                                      if (isCorrectOption) {
                                        optionClass = 'border-green-500 bg-green-500/20'
                                      } else if (isSelected && !isCorrectOption) {
                                        optionClass = 'border-red-500 bg-red-500/20'
                                      }
                                    } else if (isSelected) {
                                      optionClass = 'border-purple-500 bg-purple-500/20'
                                    }
                                    
                                    return (
                                      <motion.button
                                        key={optIndex}
                                        onClick={() => selectQuizAnswer(index, qIndex, optIndex)}
                                        disabled={isSubmitted}
                                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${optionClass} ${isSubmitted ? 'cursor-default' : 'cursor-pointer'}`}
                                        whileTap={!isSubmitted ? { scale: 0.98 } : {}}
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-purple-400' : 'border-gray-500'}`}>
                                            {isSelected && (
                                              <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="w-3 h-3 rounded-full bg-purple-400"
                                              />
                                            )}
                                          </div>
                                          <span className={`${isSubmitted && isCorrectOption ? 'text-green-400 font-semibold' : isSubmitted && isSelected && !isCorrectOption ? 'text-red-400' : 'text-gray-300'}`}>
                                            {option}
                                          </span>
                                          {isSubmitted && isCorrectOption && (
                                            <CheckCircle2 className="w-5 h-5 text-green-400 ml-auto" />
                                          )}
                                          {isSubmitted && isSelected && !isCorrectOption && (
                                            <X className="w-5 h-5 text-red-400 ml-auto" />
                                          )}
                                        </div>
                                      </motion.button>
                                    )
                                  })}
                                </div>
                                
                                {!isSubmitted && selectedAnswer !== null && selectedAnswer !== undefined && (
                                  <div className="pl-10">
                                    <Button
                                      variant="primary"
                                      size="sm"
                                      onClick={() => submitQuizAnswer(index, qIndex)}
                                      className="bg-gradient-to-r from-purple-500 to-pink-500"
                                    >
                                      Valider ma réponse
                                    </Button>
                                  </div>
                                )}
                                
                                {isSubmitted && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`pl-10 p-4 rounded-lg ${isCorrect ? 'bg-green-500/10 border border-green-500/30' : 'bg-orange-500/10 border border-orange-500/30'}`}
                                  >
                                    <p className={`font-semibold ${isCorrect ? 'text-green-400' : 'text-orange-400'}`}>
                                      {isCorrect ? '✓ Bonne réponse !' : '✗ Pas tout à fait...'}
                                    </p>
                                    {q.explanation && (
                                      <p className="text-gray-300 mt-2 text-sm">{q.explanation}</p>
                                    )}
                                  </motion.div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                        
                        {/* Quiz Progress */}
                        {(() => {
                          const totalQuestions = section.questions.length
                          const answeredCount = section.questions.filter((_, qIndex) => quizSubmitted[`${lessonId}-${index}-${qIndex}`]).length
                          const correctCount = section.questions.filter((q, qIndex) => {
                            const key = `${lessonId}-${index}-${qIndex}`
                            return quizSubmitted[key] && quizAnswers[key] === q.correctIndex
                          }).length
                          
                          if (answeredCount === totalQuestions) {
                            const percentage = Math.round((correctCount / totalQuestions) * 100)
                            return (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30"
                              >
                                <p className="text-center text-white font-bold text-lg flex items-center justify-center gap-2">
                                  <Sparkles className="w-6 h-6 text-purple-400" />
                                  Score : {correctCount}/{totalQuestions} ({percentage}%)
                                </p>
                                {percentage === 100 && (
                                  <p className="text-center text-green-400 mt-2">Parfait ! Tu maîttrises ce sujet ! 🎉</p>
                                )}
                                {percentage >= 50 && percentage < 100 && (
                                  <p className="text-center text-yellow-400 mt-2">Bien joué ! Continue d'apprendre ! 💪</p>
                                )}
                                {percentage < 50 && (
                                  <p className="text-center text-orange-400 mt-2">Relis la leçon et réessaie ! 📚</p>
                                )}
                              </motion.div>
                            )
                          }
                          return null
                        })()}
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              ))}

              {/* Key Takeaways */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card variant="cyber" className="border-2 border-forge-violet/50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forge-violet-start to-forge-violet-end flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      À retenir de cette leçon
                    </h3>
                    <ul className="space-y-3">
                      {lessonContent.keyTakeaways.map((takeaway, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-forge-violet/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-forge-violet" />
                          </div>
                          <span className="text-gray-200">{takeaway}</span>
                        </motion.li>
                      ))}
                    </ul>
                    {lessonContent.nextSteps && (
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <p className="text-gray-400 italic">
                          👉 {lessonContent.nextSteps}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ) : (
            // Fallback pour les leçons sans contenu détaillé
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <Card variant="glass">
                <CardContent className="p-6">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-forge-cyan" />
                    À propos de cette leçon
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dans cette leçon, tu vas apprendre les concepts essentiels liés à "{currentLesson.title}". 
                    Prends des notes et n'hésite pas à revoir le contenu pour bien assimiler chaque notion.
                    Une fois que tu te sens prêt(e), passe à la leçon suivante !
                  </p>
                  <div className="mt-6 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
                    <p className="text-amber-400 text-sm flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Contenu détaillé bientôt disponible !
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10"
          >
            {prevLesson && (
              <Link href={`/academy/${slug}/lesson/${prevLesson.id}`} className="flex-1">
                <Button variant="ghost" className="w-full justify-start">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Précédent</div>
                    <div className="text-sm truncate">{prevLesson.title}</div>
                  </div>
                </Button>
              </Link>
            )}
            
            <Button 
              variant="primary" 
              className="flex-1" 
              glow
              onClick={markAsComplete}
            >
              {nextLesson ? (
                <>
                  Terminer et continuer
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Terminer le cours
                </>
              )}
            </Button>

            {nextLesson && !prevLesson && <div className="flex-1" />}
          </motion.div>
        </div>
      </main>
    </div>
  )
}
