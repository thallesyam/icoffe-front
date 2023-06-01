import { Header } from '@/components/Header'
import { OrderCard } from '@/components/OrderCard'
import { useCart } from '@/contexts/MinicartContext'
import { useUser } from '@/contexts/UserContext'
import { Link } from 'react-router-dom'

export function Cart() {
  const { cartItems, total } = useCart()
  const { isLogged } = useUser()

  const format = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(total)

  if (!isLogged) {
    return (window.location.href = '/')
  }

  return (
    <main className="w-full max-w-6xl m-auto mb-4">
      <Header />

      <section className="flex item-center gap-8 w-full">
        <section className="w-full">
          <h2 className="font-extrabold font-cursive text-[2rem] text-gray-800 mb-4">
            Meus itens do carrinho
          </h2>

          <div className="p-10 bg-gray-50 w-full mb-3 flex flex-col justify-center">
            {cartItems.map((item) => (
              <OrderCard
                key={item.productId}
                productId={item.productId}
                imageUrl={item.imageUrl}
                quantity={item.quantity}
                title={item.name}
                price={item.unitPrice}
              />
            ))}
            <div className="w-full flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <p className="text-gray-700 text-sm">Entrega</p>
                <p className="text-gray-700 text-base">R$ 5,00</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xl font-bold">Total</p>
                <p className="text-gray-500 text-xl font-bold">{format}</p>
              </div>
            </div>
            <Link
              to="/checkout"
              className="w-full max-w-[200px] py-3 bg-yellow-500 text-white mt-6 rounded-md hover:transition-all hover:bg-yellow-900 flex justify-center"
            >
              Ir para o pagamento
            </Link>
          </div>
        </section>
      </section>
    </main>
  )
}
