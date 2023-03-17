import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { Results } from '@/components/Results'

export function Home() {
  return (
    <main className="w-100 max-w-6xl m-auto">
      <Header />
      <HeroSection />
      <Results />
    </main>
  )
}
