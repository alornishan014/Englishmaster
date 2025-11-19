import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Credit from '@/components/layout/Credit'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, X, Star, Crown, Zap, Shield } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "৳0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Access to first course (English Basics)",
        "Basic grammar lessons",
        "Limited vocabulary exercises",
        "Community support",
        "Progress tracking",
        "Certificate of completion"
      ],
      notIncluded: [
        "Advanced courses",
        "Premium content",
        "1-on-1 tutoring",
        "Priority support",
        "IELTS preparation"
      ],
      color: "bg-gray-100",
      borderColor: "border-gray-300",
      buttonText: "Get Started",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      popular: false
    },
    {
      name: "Points System",
      price: "Earn Points",
      period: "as you learn",
      description: "Unlock courses with points",
      features: [
        "All free features",
        "Unlock courses 2-8 with points",
        "150 points = Grammar Master",
        "200 points = Vocabulary Builder",
        "250 points = Speaking Skills",
        "Up to 500 points for advanced courses",
        "Achievement badges",
        "Leaderboard ranking"
      ],
      notIncluded: [
        "IELTS preparation course",
        "1-on-1 tutoring",
        "Priority support"
      ],
      color: "bg-blue-50",
      borderColor: "border-blue-300",
      buttonText: "Start Earning Points",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: true
    },
    {
      name: "Premium",
      price: "৳3,000",
      period: "one-time",
      description: "Complete English mastery",
      features: [
        "Everything in Points System",
        "IELTS preparation course",
        "1-on-1 tutoring sessions",
        "Priority support",
        "Advanced writing feedback",
        "Mock interviews",
        "Job placement assistance",
        "Lifetime access",
        "Downloadable resources"
      ],
      notIncluded: [],
      color: "bg-yellow-50",
      borderColor: "border-yellow-400",
      buttonText: "Get Premium Access",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500 text-[#0a233b]",
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0a233b] to-[#1a3a52] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your <span className="text-yellow-400">Learning Path</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Select the perfect plan that fits your learning goals and budget. 
              Start free and upgrade as you progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>Instant access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative ${plan.color} ${plan.borderColor} border-2 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                    plan.popular ? 'scale-105 ring-4 ring-blue-400 ring-opacity-50' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <div className="flex items-center justify-center mb-4">
                      {plan.name === "Premium" && <Crown className="w-8 h-8 text-yellow-500 mr-2" />}
                      <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                    </div>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <Button 
                      className={`w-full py-3 text-lg font-semibold ${plan.buttonColor} transition-all duration-300`}
                      size="lg"
                    >
                      {plan.buttonText}
                    </Button>
                    
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                      
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3 opacity-60">
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500 text-sm line-through">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a233b] mb-4">
                Frequently Asked <span className="text-yellow-400">Questions</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0a233b] mb-2">How does the points system work?</h3>
                  <p className="text-gray-600">Earn points by completing lessons and exercises. 150 points unlock your first paid course, and you can earn up to 500 points for advanced courses.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0a233b] mb-2">Can I switch plans later?</h3>
                  <p className="text-gray-600">Yes! You can upgrade from free to premium anytime. Your progress and earned points will be carried over.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0a233b] mb-2">Is there a refund policy?</h3>
                  <p className="text-gray-600">We offer a 30-day money-back guarantee for premium purchases if you're not satisfied with the courses.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0a233b] mb-2">Do you offer corporate plans?</h3>
                  <p className="text-gray-600">Yes! Contact our sales team for custom corporate pricing and group enrollment options.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0a233b] to-[#1a3a52] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your English Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 50,000+ students who are already mastering English with our comprehensive courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-yellow-400 text-[#0a233b] hover:bg-yellow-300 px-8 py-4 text-lg font-semibold"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#0a233b] px-8 py-4 text-lg font-semibold"
              >
                Contact Sales
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