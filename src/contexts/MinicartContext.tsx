import { parseCookies, setCookie, destroyCookie } from 'nookies'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

export type CartProps = {
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
  handleClearCart: () => void
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

  function handleAddItemsOnCart(item: CartProps) {
    const productHasExists = cart.find(
      (itemCart) => itemCart.productId === item.productId
    )
    if (productHasExists) {
      handleUpdateCartItemQuantity(item.productId, 'increment')
      return
    }
    setCart((prevProps: CartProps[]) => [...prevProps, item])
  }

  function handleClearCart() {
    setCart([])
    destroyCookie(null, '@icoffee:cart')
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
      const oldArray = prevProps.filter(
        (prev: any) => prev.productId !== item.productId
      )
      return [
        ...oldArray,
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
      total += item.unitPrice * item.quantity
    })
    setTotal(total + 5)
  }

  useEffect(() => {
    if (!cartItems) return
    setCart(JSON.parse(cartItems))
    calcTotal()
  }, [])

  useEffect(() => {
    calcTotal()
    setCookie(null, '@icoffee:cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cartItems: cart,
        total,
        handleAddItemsOnCart,
        handleClearCart,
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
