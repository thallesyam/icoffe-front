import { Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Checkout } from '@/pages/Checkout'
import { Profile } from './pages/Profile'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
