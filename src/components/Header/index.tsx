import { MapPin, User, Bank } from 'phosphor-react'
import { Minicart } from '@/components/Minicart'

export function Header() {
  const hasUser = false

  return (
    <header className="flex justify-between items-center py-8 px-2">
      <div>
        <a href="/">Icoffee</a>
      </div>

      <div className="flex items-center gap-3">
        {hasUser ? (
          <div className="flex items-center gap-2">
            <button className="bg-purple-50 p-2 flex items-center gap-1 rounded-md hover:opacity-90 hover:transition-all">
              <Bank size={22} weight="fill" className="text-purple-500" />
              <p className="text-purple-900 font-normal text-sm ">
                Entre como empresa
              </p>
            </button>
            <button className="bg-yellow-50 p-2 flex items-center gap-1 rounded-md hover:opacity-90 hover:transition-all">
              <User size={22} weight="fill" className="text-yellow-500" />
              <p className="text-yellow-900 font-normal text-sm ">
                Entre como usuário
              </p>
            </button>
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
