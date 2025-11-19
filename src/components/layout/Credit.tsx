'use client'

import Link from 'next/link'

const Credit = () => {
  return (
    <div className="bg-[#0a233b] text-white py-6 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © 2025 English Master. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-center">
            <span className="text-sm">Made with ❤️ by</span>
            <Link 
              href="https://taskkora.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors text-sm"
            >
              Taskkora
            </Link>
            <span className="text-sm">- A Freelancing Marketplace</span>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credit