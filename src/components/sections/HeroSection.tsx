'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, PlayCircle, BookOpen, Trophy } from 'lucide-react'

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  
  const floatingLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const floatingWords = ['Grammar', 'Vocabulary', 'Speaking', 'Writing', 'Reading', 'Listening', 'Pronunciation', 'Fluency']
  
  const words = [
    'Master English',
    'Speak Fluently',
    'Learn Grammar',
    'Build Vocabulary'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a233b] via-[#1a3a52] to-[#0a233b]">
      {/* Animated Background Letters */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingLetters.map((letter, index) => (
          <div
            key={`letter-${index}`}
            className="absolute text-white/5 font-bold text-6xl md:text-8xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {letter}
          </div>
        ))}
        
        {floatingWords.map((word, index) => (
          <div
            key={`word-${index}`}
            className="absolute text-yellow-400/10 font-semibold text-xl md:text-3xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            {word}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Trusted by 50,000+ Students</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white block">{words[currentWordIndex].split(' ')[0]}</span>
              <span className="text-yellow-400 block">{words[currentWordIndex].split(' ')[1] || ''}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your English skills with our comprehensive courses. 
              From beginner to advanced, we make learning engaging and effective.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">50K+</div>
              <div className="text-sm md:text-base text-gray-300">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">100+</div>
              <div className="text-sm md:text-base text-gray-300">Expert Tutors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">95%</div>
              <div className="text-sm md:text-base text-gray-300">Success Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-yellow-400 text-[#0a233b] hover:bg-[#0a233b] hover:text-yellow-400 border-2 border-yellow-400 px-8 py-6 text-lg font-semibold transition-all duration-300 group"
            >
              <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Learning Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="bg-[#0a233b] text-white hover:bg-white hover:text-[#0a233b] border-2 border-white px-8 py-6 text-lg font-semibold transition-all duration-300 group"
            >
              <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-yellow-400 text-3xl mb-3">🎯</div>
              <h3 className="text-white font-semibold text-lg mb-2">Personalized Learning</h3>
              <p className="text-gray-300 text-sm">Adaptive courses that match your learning style and pace</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-yellow-400 text-3xl mb-3">🏆</div>
              <h3 className="text-white font-semibold text-lg mb-2">Expert Instructors</h3>
              <p className="text-gray-300 text-sm">Learn from certified English language experts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-yellow-400 text-3xl mb-3">🎮</div>
              <h3 className="text-white font-semibold text-lg mb-2">Gamified Experience</h3>
              <p className="text-gray-300 text-sm">Fun games and interactive exercises to keep you engaged</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection