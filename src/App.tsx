import { BrowserRouter } from 'react-router-dom'
import { Router } from '@/Router'
import { UserProvider } from './contexts/UserContext'

export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Router />
      </UserProvider>
    </BrowserRouter>
  )
}
