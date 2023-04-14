import { Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Checkout } from '@/pages/Checkout'
import { Profile } from '@/pages/Profile'
import { Cart } from '@/pages/Cart'
import { Product as ProductAddPage } from '@/pages/Company/New/Product'
import { Product as ProductEditPage } from '@/pages/Company/Edit/Product'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/:company/new/product" element={<ProductAddPage />} />
      <Route path="/:company/edit/:productId" element={<ProductEditPage />} />
    </Routes>
  )
}
