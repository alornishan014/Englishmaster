'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Lock, 
  Gift,
  Trophy,
  Target,
  Globe,
  MessageSquare,
  PenTool,
  Headphones,
  Award
} from 'lucide-react'

const CourseCardsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const courses = [
    {
      id: 1,
      title: "English Basics",
      description: "Start your English journey with fundamental grammar, vocabulary, and basic communication skills.",
      type: "FREE",
      pointsRequired: 0,
      price: 0,
      duration: "30 days",
      level: "Beginner",
      enrolledCount: 15420,
      rating: 4.8,
      icon: BookOpen,
      color: "primary", // #0a233b background
      lessons: 24,
      certificate: true
    },
    {
      id: 2,
      title: "Grammar Master",
      description: "Master English grammar with detailed lessons, exercises, and practical applications.",
      type: "POINTS",
      pointsRequired: 150,
      price: 0,
      duration: "45 days",
      level: "Beginner",
      enrolledCount: 12350,
      rating: 4.9,
      icon: PenTool,
      color: "secondary", // yellow background
      lessons: 32,
      certificate: true
    },
    {
      id: 3,
      title: "Vocabulary Builder",
      description: "Expand your vocabulary with 3000+ essential words and phrases for everyday use.",
      type: "POINTS",
      pointsRequired: 200,
      price: 0,
      duration: "60 days",
      level: "Intermediate",
      enrolledCount: 10890,
      rating: 4.7,
      icon: Target,
      color: "primary",
      lessons: 40,
      certificate: true
    },
    {
      id: 4,
      title: "Speaking Skills",
      description: "Develop fluent speaking abilities with pronunciation practice and conversation techniques.",
      type: "POINTS",
      pointsRequired: 250,
      price: 0,
      duration: "90 days",
      level: "Intermediate",
      enrolledCount: 9876,
      rating: 4.8,
      icon: MessageSquare,
      color: "secondary",
      lessons: 48,
      certificate: true
    },
    {
      id: 5,
      title: "Writing Excellence",
      description: "Learn to write compelling essays, emails, reports, and creative content.",
      type: "POINTS",
      pointsRequired: 300,
      price: 0,
      duration: "75 days",
      level: "Intermediate",
      enrolledCount: 8765,
      rating: 4.6,
      icon: PenTool,
      color: "primary",
      lessons: 36,
      certificate: true
    },
    {
      id: 6,
      title: "Listening Comprehension",
      description: "Improve your listening skills with various accents and real-world conversations.",
      type: "POINTS",
      pointsRequired: 350,
      price: 0,
      duration: "60 days",
      level: "Intermediate",
      enrolledCount: 7654,
      rating: 4.7,
      icon: Headphones,
      color: "secondary",
      lessons: 30,
      certificate: true
    },
    {
      id: 7,
      title: "Business English",
      description: "Professional communication skills for meetings, presentations, and workplace success.",
      type: "POINTS",
      pointsRequired: 400,
      price: 0,
      duration: "80 days",
      level: "Advanced",
      enrolledCount: 6543,
      rating: 4.8,
      icon: Trophy,
      color: "primary",
      lessons: 42,
      certificate: true
    },
    {
      id: 8,
      title: "Advanced Fluency",
      description: "Achieve native-like fluency with advanced grammar, idioms, and cultural nuances.",
      type: "POINTS",
      pointsRequired: 500,
      price: 0,
      duration: "120 days",
      level: "Advanced",
      enrolledCount: 5432,
      rating: 4.9,
      icon: Globe,
      color: "secondary",
      lessons: 60,
      certificate: true
    },
    {
      id: 9,
      title: "IELTS Preparation",
      description: "Comprehensive IELTS training with mock tests, strategies, and band 7+ guarantee.",
      type: "PREMIUM",
      pointsRequired: 0,
      price: 3000,
      duration: "90 days",
      level: "Advanced",
      enrolledCount: 3210,
      rating: 4.9,
      icon: Award,
      color: "primary",
      lessons: 50,
      certificate: true
    }
  ]

  const getCardStyles = (course: any, isHovered: boolean) => {
    const isPrimary = course.color === "primary"
    
    if (isHovered) {
      return isPrimary 
        ? "bg-yellow-400 text-[#0a233b] border-[#0a233b] shadow-2xl scale-105"
        : "bg-[#0a233b] text-white border-yellow-400 shadow-2xl scale-105"
    }
    
    return isPrimary 
      ? "bg-[#0a233b] text-white border-yellow-400 shadow-lg"
      : "bg-yellow-400 text-[#0a233b] border-[#0a233b] shadow-lg"
  }

  const handleCardClick = (courseId: number) => {
    // In a real app, this would navigate to the course page
    console.log(`Navigating to course ${courseId}`)
    // router.push(`/courses/${courseId}`)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a233b] mb-4">
            Our <span className="text-yellow-400">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to take your English skills to the next level
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {courses.map((course) => {
            const Icon = course.icon
            const isHovered = hoveredCard === course.id
            
            return (
              <Card
                key={course.id}
                className={`cursor-pointer transition-all duration-300 border-2 rounded-xl ${getCardStyles(course, isHovered)}`}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(course.id)}
              >
                <CardContent className="p-6">
                  {/* Course Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg ${isHovered ? "bg-[#0a233b]/10" : "bg-white/10"}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <Badge 
                          variant={course.type === "FREE" ? "secondary" : course.type === "PREMIUM" ? "default" : "outline"}
                          className={`mb-2 ${
                            course.type === "FREE" 
                              ? "bg-green-500 text-white" 
                              : course.type === "PREMIUM" 
                              ? "bg-red-500 text-white"
                              : "bg-blue-500 text-white"
                          }`}
                        >
                          {course.type === "FREE" && <Gift className="w-3 h-3 mr-1" />}
                          {course.type === "FREE" ? "FREE" : course.type === "PREMIUM" ? "PREMIUM" : `${course.pointsRequired} POINTS`}
                        </Badge>
                        <h3 className="text-xl font-bold">{course.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Course Description */}
                  <p className="text-sm mb-4 opacity-90 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{course.enrolledCount.toLocaleString()} students</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4" />
                        <span>{course.level}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    {course.type === "PREMIUM" && (
                      <div className="flex items-center justify-between text-sm font-bold">
                        <span>Price:</span>
                        <span className="text-lg">৳{course.price.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  {/* Course Features */}
                  <div className="flex items-center justify-between text-xs">
                    <span>{course.lessons} Lessons</span>
                    {course.certificate && (
                      <div className="flex items-center space-x-1">
                        <Award className="w-3 h-3" />
                        <span>Certificate</span>
                      </div>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  {isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-xl">
                      <div className="text-center">
                        <p className="text-lg font-bold mb-2">
                          {course.type === "FREE" ? "Start Now" : course.type === "PREMIUM" ? "Enroll Now" : "Unlock with Points"}
                        </p>
                        <div className="w-12 h-1 bg-current mx-auto rounded-full"></div>
                      </div>
                    </div>
                  )}

                  {/* Lock Icon for Non-Free Courses */}
                  {course.type !== "FREE" && (
                    <div className="absolute top-4 right-4">
                      <Lock className="w-4 h-4 opacity-70" />
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Section Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Earn points by completing courses and unlock premium content
          </p>
          <Button 
            size="lg"
            className="bg-yellow-400 text-[#0a233b] hover:bg-[#0a233b] hover:text-yellow-400 border-2 border-yellow-400 transition-all duration-300"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CourseCardsSection