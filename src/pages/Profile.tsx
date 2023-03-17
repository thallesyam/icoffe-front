import { Header } from '@/components/Header'
import { ProfileInfo } from '@/components/ProfileInfo'

export function Profile() {
  return (
    <main className="w-full max-w-6xl m-auto">
      <Header />
      <ProfileInfo />
    </main>
  )
}
