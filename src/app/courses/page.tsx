'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Credit from '@/components/layout/Credit'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
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
  Award,
  Search,
  Filter
} from 'lucide-react'

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
    color: "primary",
    lessons: 24,
    certificate: true,
    category: "Foundation"
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
    color: "secondary",
    lessons: 32,
    certificate: true,
    category: "Grammar"
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
    certificate: true,
    category: "Vocabulary"
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
    certificate: true,
    category: "Speaking"
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
    certificate: true,
    category: "Writing"
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
    certificate: true,
    category: "Listening"
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
    certificate: true,
    category: "Business"
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
    certificate: true,
    category: "Advanced"
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
    certificate: true,
    category: "Test Prep"
  }
]

const categories = ["All", "Foundation", "Grammar", "Vocabulary", "Speaking", "Writing", "Listening", "Business", "Advanced", "Test Prep"]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCardStyles = (course: any) => {
    const isPrimary = course.color === "primary"
    return isPrimary 
      ? "bg-[#0a233b] text-white border-yellow-400 shadow-lg"
      : "bg-yellow-400 text-[#0a233b] border-[#0a233b] shadow-lg"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0a233b] to-[#1a3a52] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Courses</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose from our comprehensive range of courses designed to take your English skills to the next level
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-white text-gray-900 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <Button className="bg-yellow-400 text-[#0a233b] hover:bg-yellow-300 px-6 py-3 font-semibold">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? "bg-[#0a233b] text-white hover:bg-[#1a3a52]"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredCourses.map((course) => {
                const Icon = course.icon
                
                return (
                  <Card
                    key={course.id}
                    className={`cursor-pointer transition-all duration-300 border-2 rounded-xl hover:scale-105 hover:shadow-2xl ${getCardStyles(course)}`}
                  >
                    <CardContent className="p-6">
                      {/* Course Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 rounded-lg bg-white/10">
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
                        <div className="flex items-center space-x-3">
                          {course.certificate && (
                            <div className="flex items-center space-x-1">
                              <Award className="w-3 h-3" />
                              <span>Certificate</span>
                            </div>
                          )}
                          {course.type !== "FREE" && (
                            <Lock className="w-3 h-3 opacity-70" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0a233b] to-[#1a3a52] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our free course today and start your English learning journey with 50,000+ other students.
            </p>
            <Button 
              size="lg"
              className="bg-yellow-400 text-[#0a233b] hover:bg-yellow-300 px-8 py-4 text-lg font-semibold"
            >
              Start Free Course
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <Credit />
    </div>
  )
}