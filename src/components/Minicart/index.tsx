import { ShoppingCart } from 'phosphor-react'

export function Minicart() {
  return (
    <button className="p-2 bg-yellow-50 rounded-md hover:opacity-90 hover:transition-all">
      <ShoppingCart size={22} weight="fill" className="text-yellow-900" />
    </button>
  )
}
