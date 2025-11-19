'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const TestimonialSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Student",
      content: "English Master transformed my confidence in speaking English. The courses are well-structured and the instructors are amazing!",
      rating: 5,
      avatar: "👩‍🎓",
      course: "IELTS Preparation"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Professional",
      content: "The Business English course helped me secure a better job. I now communicate with international clients confidently.",
      rating: 5,
      avatar: "👨‍💼",
      course: "Business English"
    },
    {
      id: 3,
      name: "Fatima Al-Rashid",
      role: "Homemaker",
      content: "I started with the free course and now I'm enrolled in advanced courses. The learning journey has been incredible!",
      rating: 5,
      avatar: "👩‍🏫",
      course: "English Basics"
    },
    {
      id: 4,
      name: "David Chen",
      role: "Software Engineer",
      content: "The grammar and vocabulary courses are comprehensive. My writing skills have improved significantly.",
      rating: 5,
      avatar: "👨‍💻",
      course: "Grammar Master"
    },
    {
      id: 5,
      name: "Maria Rodriguez",
      role: "Travel Enthusiast",
      content: "Thanks to English Master, I can now travel the world and communicate with people from different cultures.",
      rating: 5,
      avatar: "✈️",
      course: "Speaking Skills"
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      role: "Medical Student",
      content: "The advanced fluency course prepared me for international medical conferences. Highly recommended!",
      rating: 5,
      avatar: "👨‍⚕️",
      course: "Advanced Fluency"
    },
    {
      id: 7,
      name: "Lisa Thompson",
      role: "Teacher",
      content: "As a teacher, I appreciate the structured approach. My students have shown remarkable progress.",
      rating: 5,
      avatar: "👩‍🏫",
      course: "Writing Excellence"
    },
    {
      id: 8,
      name: "Carlos Mendez",
      role: "Entrepreneur",
      content: "The investment in IELTS preparation was worth every penny. I scored 8.0 and got into my dream university!",
      rating: 5,
      avatar: "🎓",
      course: "IELTS Preparation"
    }
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 1 // pixels per frame

    const scroll = () => {
      scrollPosition += scrollSpeed
      
      // Reset to start when reaching the end
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 30) // ~33fps

    return () => clearInterval(intervalId)
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-r from-[#0a233b] to-[#1a3a52]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-yellow-400">Students</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied learners who have transformed their English skills with us
          </p>
        </div>

        {/* Auto-scrolling Testimonials Container */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Render testimonials twice for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${index}`}
                className="min-w-[350px] max-w-[350px] bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="w-8 h-8 text-yellow-400" />
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-gray-200 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="text-xs text-yellow-400 bg-yellow-400/20 px-2 py-1 rounded-full">
                      {testimonial.course}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section Footer */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-white">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 5).map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-10 h-10 rounded-full bg-yellow-400 text-[#0a233b] flex items-center justify-center text-sm font-bold border-2 border-white"
                >
                  {testimonial.avatar}
                </div>
              ))}
            </div>
            <p className="text-lg">
              <span className="font-bold text-yellow-400">50,000+</span> satisfied students
            </p>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default TestimonialSection