'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Credit from '@/components/layout/Credit'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Calendar,
  Clock,
  User,
  Search,
  BookOpen,
  MessageCircle,
  Heart,
  Share2,
  ArrowRight
} from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "10 Common English Grammar Mistakes and How to Avoid Them",
    excerpt: "Learn about the most frequent grammar errors that English learners make and discover simple strategies to correct them once and for all.",
    content: "In this comprehensive guide, we'll explore the top 10 grammar mistakes that English learners commonly make...",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Grammar",
    image: "📚",
    likes: 234,
    comments: 45,
    featured: true
  },
  {
    id: 2,
    title: "Building Vocabulary: 50 Words Every Professional Should Know",
    excerpt: "Expand your professional vocabulary with these essential business terms that will help you communicate more effectively in the workplace.",
    content: "A strong vocabulary is crucial for professional success. Here are 50 words that will elevate your business communication...",
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Vocabulary",
    image: "💼",
    likes: 189,
    comments: 32,
    featured: false
  },
  {
    id: 3,
    title: "IELTS Speaking Test: Tips for Band 7+ Score",
    excerpt: "Expert strategies and practice techniques to help you achieve a high score in the IELTS speaking test.",
    content: "The IELTS speaking test can be challenging, but with the right preparation, you can achieve your target score...",
    author: "Emma Wilson",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "IELTS",
    image: "🎯",
    likes: 412,
    comments: 67,
    featured: true
  },
  {
    id: 4,
    title: "The Power of Phrasal Verbs in Everyday English",
    excerpt: "Master phrasal verbs to sound more natural and fluent in your English conversations.",
    content: "Phrasal verbs are an essential part of natural English communication. Learn how to use them correctly...",
    author: "David Brown",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Speaking",
    image: "🗣️",
    likes: 156,
    comments: 28,
    featured: false
  },
  {
    id: 5,
    title: "Email Etiquette: Writing Professional Emails in English",
    excerpt: "Learn the proper format and tone for writing professional emails that get results.",
    content: "Professional email writing is a skill that can make or break your career opportunities...",
    author: "Lisa Anderson",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Writing",
    image: "✉️",
    likes: 203,
    comments: 41,
    featured: false
  },
  {
    id: 6,
    title: "Understanding British vs American English",
    excerpt: "Explore the key differences between British and American English and when to use each.",
    content: "While both are correct, there are significant differences between British and American English...",
    author: "James Taylor",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Culture",
    image: "🌍",
    likes: 278,
    comments: 52,
    featured: true
  }
]

const categories = ["All", "Grammar", "Vocabulary", "Speaking", "Writing", "IELTS", "Culture", "Listening"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0a233b] to-[#1a3a52] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              English Learning <span className="text-yellow-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Tips, strategies, and insights to help you master English faster and more effectively
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-white text-gray-900 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
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

        {/* Featured Posts */}
        {selectedCategory === "All" && searchTerm === "" && featuredPosts.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-[#0a233b] mb-8 text-center">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-br from-[#0a233b] to-[#1a3a52] flex items-center justify-center text-6xl">
                      {post.image}
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-yellow-400 text-[#0a233b]">{post.category}</Badge>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-gray-500">
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {post.likes}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </div>
                        </div>
                        <Button variant="ghost" className="text-[#0a233b] hover:bg-yellow-50">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0a233b] mb-8 text-center">
              {selectedCategory !== "All" || searchTerm ? "Search Results" : "Latest Articles"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                    {post.image}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-gray-300 text-gray-700">{post.category}</Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-gray-500">
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </div>
                      </div>
                      <Button variant="ghost" className="text-[#0a233b] hover:bg-yellow-50">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-[#0a233b] to-[#1a3a52] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated with English Learning Tips
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get our weekly newsletter with the latest articles, tips, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900 px-4 py-3 rounded-full"
              />
              <Button className="bg-yellow-400 text-[#0a233b] hover:bg-yellow-300 px-6 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Credit />
    </div>
  )
}