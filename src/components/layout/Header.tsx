'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { 
  Menu, 
  Search, 
  BookOpen, 
  Gamepad2, 
  FileText, 
  CreditCard,
  UserPlus,
  LogIn
} from 'lucide-react'

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  // Mock search suggestions - in real app, this would come from API
  const allSuggestions = [
    'English Grammar Basics',
    'Advanced Vocabulary',
    'IELTS Preparation',
    'Business English',
    'English Speaking Course',
    'Writing Skills',
    'Pronunciation Guide',
    'English Literature',
    'Creative Writing',
    'English for Beginners'
  ]

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSearchSuggestions(filtered.slice(0, 5))
    } else {
      setSearchSuggestions([])
    }
  }, [searchQuery])

  const handleSearch = (query: string) => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setSearchQuery('')
      setSearchSuggestions([])
      setIsSearchOpen(false)
    }
  }

  const menuItems = [
    { href: '/pricing', label: 'Pricing', icon: CreditCard },
    { href: '/courses', label: 'Courses', icon: BookOpen },
    { href: '/game', label: 'Game', icon: Gamepad2 },
    { href: '/blog', label: 'Blog', icon: FileText },
  ]

  return (
    <header className="bg-[#0a233b] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-2xl font-bold hover:text-yellow-400 transition-colors"
          >
            <BookOpen className="w-8 h-8 text-yellow-400" />
            <span>English Master</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1 hover:text-yellow-400 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                  onFocus={() => setIsSearchOpen(true)}
                  onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                  className="pl-10 pr-4 py-2 bg-white text-gray-900 rounded-full w-64 focus:w-80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              {/* Search Suggestions */}
              {isSearchOpen && searchSuggestions.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 max-h-60 overflow-y-auto">
                  {searchSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(suggestion)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 text-gray-900 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/signup">
              <Button 
                variant="outline" 
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0a233b] transition-all duration-300"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Sign Up
              </Button>
            </Link>
            <Link href="/login">
              <Button 
                className="bg-yellow-400 text-[#0a233b] hover:bg-[#0a233b] hover:text-yellow-400 border-2 border-yellow-400 transition-all duration-300"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:text-yellow-400 hover:bg-yellow-400/20"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0a233b] text-white border-l-yellow-400">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                    className="pl-10 pr-4 py-2 bg-white text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-3 hover:text-yellow-400 transition-colors py-2"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-lg">{item.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* Mobile Auth */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-600">
                  <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      variant="outline" 
                      className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0a233b] transition-all duration-300"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Sign Up
                    </Button>
                  </Link>
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      className="w-full bg-yellow-400 text-[#0a233b] hover:bg-[#0a233b] hover:text-yellow-400 border-2 border-yellow-400 transition-all duration-300"
                    >
                      <LogIn className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header