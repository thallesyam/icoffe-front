import { MapPin } from 'phosphor-react'
import { Minicart } from '@/components/Minicart'

export function Header() {
  return (
    <header className="flex justify-between items-center py-8 px-2">
      <div>
        <p>Icoffee</p>
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-purple-50 p-2 flex items-center gap-1 rounded-md hover:opacity-90 hover:transition-all">
          <MapPin size={22} weight="fill" className="text-purple-500" />
          <p className="text-purple-900 font-normal text-sm ">São Paulo, SP</p>
        </button>

        <Minicart />
      </div>
    </header>
  )
}
