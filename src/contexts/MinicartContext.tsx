import { parseCookies, setCookie } from 'nookies'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type CartProps = {
  name: string
  productId: string
  unitPrice: number
  description: string
  imageUrl: string
  company: string
  quantity: number
}

type CartContextProps = {
  cartItems: CartProps[]
  total: number
  handleAddItemsOnCart: (cart: CartProps) => void
  handleDeleteCartItems: (itemId: string) => void
  handleUpdateCartItemQuantity: (
    itemId: string,
    type: 'increment' | 'decrement'
  ) => void
}

type Props = {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartProps[]>([])
  const [total, setTotal] = useState(0)
  const cartItems = parseCookies(null, '@icoffee:cart')['@icoffee:cart']

  function handleAddItemsOnCart(cart: CartProps) {
    setCart((prevProps: CartProps[]) => [...prevProps, cart])
  }

  function handleDeleteCartItems(itemId: string) {
    const cartItems = cart.filter(
      (cart: CartProps) => cart.productId !== itemId
    )
    setCart(cartItems)
  }

  function handleUpdateCartItemQuantity(
    itemId: string,
    type: 'increment' | 'decrement'
  ) {
    const item = cart.find((cart: CartProps) => cart.productId === itemId)
    if (!item) return
    setCart((prevProps: any) => {
      return [
        ...prevProps,
        {
          ...item,
          quantity:
            type === 'increment'
              ? item.quantity + 1
              : item.quantity > 0 && item.quantity - 1,
        },
      ]
    })
  }

  function calcTotal() {
    let total = 0
    cart.map((item) => {
      total = item.unitPrice * item.quantity
    })
    setTotal(total + 5)
  }

  useEffect(() => {
    setCart(JSON.parse(cartItems))
    calcTotal()
  }, [])

  useEffect(() => {
    setCookie(null, '@icoffee:cart', JSON.stringify(cart))
    calcTotal()
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cartItems: cart,
        total,
        handleAddItemsOnCart,
        handleDeleteCartItems,
        handleUpdateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
