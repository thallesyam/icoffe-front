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
}

type Props = {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<UserProps | undefined>(undefined)
  const isLogged = parseCookies(null, '@icoffee:user')['@icoffee:user']

  useEffect(() => {
    const user = parseCookies(null, '@icoffee:user')['@icoffee:user']
    if (!user) return
    setUser(JSON.parse(user))
  }, [])

  return (
    <UserContext.Provider value={{ user, isLogged: !!isLogged }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
