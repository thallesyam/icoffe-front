import { Plus } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { ProfileInfo } from '@/components/ProfileInfo'

export function Profile() {
  return (
    <main className="w-full max-w-6xl m-auto">
      <Header />
      <ProfileInfo />
    </main>
  )
}
