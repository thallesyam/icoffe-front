import { parseCookies } from 'nookies'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type UserProps = {
  id: string
  name: string
  email: string
  phone: string
  cpf: string
  companyName?: string
  createdAt: string
}

export type CompanyProps = {
  id: string
  ownerName: string
  ownerEmail: string
  companyName: string
  phone: string
  companyCity: string
  companyCnpj: string
  companyCep: string
  companyStreet: string
  companyNumber: string
  companyNeighborhood: string
  createdAt: string
}

type UserContextProps = {
  user: UserProps | undefined
  isLogged: boolean
  handleLoginWithGoogle: (from: string) => void
}

type Props = {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<UserProps | undefined>(undefined)
  const isLogged = localStorage.getItem('@icoffee:user')

  function handleLoginWithGoogle(from: string) {
    const isCompany = !!from.includes('type=company')

    const popup = window.open(
      `http://localhost:5000/auth/google?${isCompany && 'type=company'}`,
      'targ etWindow',
      `toolbar=no,
        location=no,
        status=no,
        menubar=no,
        scrollbars=yes,
        resizable=yes,
        width=620,
        height=700`
    )

    window.addEventListener('message', (event) => {
      if (event.origin === 'http://localhost:5000') {
        if (event.data) {
          localStorage.setItem('@icoffee:user', JSON.stringify(event.data))

          popup?.close()
          window.location.reload()
        }
      }
    })
  }

  useEffect(() => {
    const user = localStorage.getItem('@icoffee:user')
    if (!user) return
    setUser(JSON.parse(user))
  }, [])

  return (
    <UserContext.Provider
      value={{ user, isLogged: !!isLogged, handleLoginWithGoogle }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
