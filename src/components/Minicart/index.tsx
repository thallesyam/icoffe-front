import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Minicart() {
  return (
    <Link
      to="/cart"
      title="Carrinho"
      className="p-2 bg-yellow-50 rounded-md hover:opacity-90 hover:transition-all"
    >
      <ShoppingCart size={22} weight="fill" className="text-yellow-900" />
    </Link>
  )
}
