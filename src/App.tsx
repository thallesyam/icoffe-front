import { BrowserRouter } from 'react-router-dom'
import { Router } from '@/Router'
import { UserProvider } from './contexts/UserContext'
import { CartProvider } from './contexts/MinicartContext'

export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  )
}
