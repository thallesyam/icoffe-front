import { useCart } from '@/contexts/MinicartContext'
import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Minicart() {
  const { cartItems } = useCart()

  return (
    <Link
      to="/cart"
      title="Carrinho"
      className="p-2 bg-yellow-50 rounded-md hover:opacity-90 hover:transition-all relative"
    >
      {cartItems?.length > 0 && (
        <span className="text-xs text-purple-900 absolute -top-3 -right-2 w-5 h-5 border border-purple-900 rounded-full bg-purple-50 flex justify-center items-center">
          {cartItems?.length}
        </span>
      )}
      <ShoppingCart size={22} weight="fill" className="text-yellow-900" />
    </Link>
  )
}
