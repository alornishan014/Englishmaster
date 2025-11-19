import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Credit from '@/components/layout/Credit'
import EnglishLetterGame from '@/components/game/EnglishLetterGame'

export default function GamePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <EnglishLetterGame />
      </main>
      <Footer />
      <Credit />
    </div>
  )
}