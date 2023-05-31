import { User, Bank, SignOut } from 'phosphor-react'
import { Link, useLocation } from 'react-router-dom'
import { Minicart } from '@/components/Minicart'
import { useUser } from '@/contexts/UserContext'

export function Header() {
  const { user, handleLoginWithGoogle } = useUser()
  const hasUser = !!user
  const location = useLocation()

  function handleLoginWithCompany() {
    const from =
      ((location.state as any)?.from.pathname as string) ||
      '/profile?type=company'

    handleLoginWithGoogle(from)
  }

  function handleLoginWithUser() {
    const from =
      ((location.state as any)?.from.pathname as string) || '/profile'

    handleLoginWithGoogle(from)
  }

  function handleLogout() {
    localStorage.removeItem('@icoffee:user')
    window.location.reload()
  }

  return (
    <header className="flex justify-between items-center py-8 px-2">
      <div>
        <a href="/">Icoffee</a>
      </div>

      <div className="flex items-center gap-3">
        {!hasUser ? (
          <div className="flex items-center gap-2">
            <button
              onClick={handleLoginWithCompany}
              className="bg-purple-50 p-2 flex items-center gap-1 rounded-md hover:opacity-90 hover:transition-all"
            >
              <Bank size={22} weight="fill" className="text-purple-500" />
              <p className="text-purple-900 font-normal text-sm ">
                Entre como empresa
              </p>
            </button>
            <button
              onClick={handleLoginWithUser}
              className="bg-yellow-50 p-2 flex items-center gap-1 rounded-md hover:opacity-90 hover:transition-all"
            >
              <User size={22} weight="fill" className="text-yellow-500" />
              <p className="text-yellow-900 font-normal text-sm ">
                Entre como usuário
              </p>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to="/profile"
              title="Perfil"
              className="bg-purple-50 p-2 flex items-center gap-1 rounded-md hover:opacity-90 hover:transition-all"
            >
              <User size={22} weight="fill" className="text-purple-500" />
              <p className="text-purple-500 font-normal text-sm ">Perfil</p>
            </Link>
            <Minicart />
            <button
              title="Sair"
              onClick={handleLogout}
              className="bg-purple-50 p-2 flex items-center gap-1 rounded-md hover:opacity-90 hover:transition-all"
            >
              <SignOut size={22} weight="fill" className="text-purple-500" />
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
