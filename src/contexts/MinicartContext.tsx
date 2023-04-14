import { parseCookies } from 'nookies'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type CartProps = {
  id: string
}

type CartContextProps = {
  cart: any | undefined
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
  const [cart, setCart] = useState<any | undefined>(undefined)
  const cartItems = parseCookies(null, '@icoffee:cart')['@icoffee:cart']

  function handleAddItemsOnCart(cart: CartProps) {
    setCart((prevProps: any) => [...prevProps, cart])
  }

  function handleDeleteCartItems(itemId: string) {
    const cartItems = cart.filter((cart: CartProps) => cart.id !== itemId)
    setCart(cartItems)
  }

  function handleUpdateCartItemQuantity(
    itemId: string,
    type: 'increment' | 'decrement'
  ) {
    const item = cart.find((cart: CartProps) => cart.id === itemId)
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

  useEffect(() => {
    const items = parseCookies(null, '@icoffee:cart')['@icoffee:cart']
    if (!items) return
    setCart(JSON.parse(cartItems))
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
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
