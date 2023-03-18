import { MapPin, User, Bank } from 'phosphor-react'
import { Link, useLocation } from 'react-router-dom'
import { Minicart } from '@/components/Minicart'
import { getGoogleUrl } from '@/service/getUrlFromGoogle'

export function Header() {
  const hasUser = false
  const location = useLocation()
  const from = ((location.state as any)?.from.pathname as string) || '/profile'

  return (
    <header className="flex justify-between items-center py-8 px-2">
      <div>
        <a href="/">Icoffee</a>
      </div>

      <div className="flex items-center gap-3">
        {!hasUser ? (
          <div className="flex items-center gap-2">
            <Link
              to={getGoogleUrl(from)}
              className="bg-purple-50 p-2 flex items-center gap-1 rounded-md hover:opacity-90 hover:transition-all"
            >
              <Bank size={22} weight="fill" className="text-purple-500" />
              <p className="text-purple-900 font-normal text-sm ">
                Entre como empresa
              </p>
            </Link>
            <Link
              to={getGoogleUrl(from)}
              className="bg-yellow-50 p-2 flex items-center gap-1 rounded-md hover:opacity-90 hover:transition-all"
            >
              <User size={22} weight="fill" className="text-yellow-500" />
              <p className="text-yellow-900 font-normal text-sm ">
                Entre como usuário
              </p>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <a
              href="/profile"
              className="bg-purple-50 p-2 flex items-center gap-1 rounded-md hover:opacity-90 hover:transition-all"
            >
              <MapPin size={22} weight="fill" className="text-purple-500" />
              <p className="text-purple-900 font-normal text-sm ">
                São Paulo, SP
              </p>
            </a>
            <Minicart />
          </div>
        )}
      </div>
    </header>
  )
}
