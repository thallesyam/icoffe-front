import { OrderCard } from '@/components/OrderCard'
import { useCart } from '@/contexts/MinicartContext'
import { api } from '@/service/api'
import { getStripeJs } from '@/service/stripe-js'
import { FormEvent } from 'react'

export function Order() {
  const { cartItems, total } = useCart()
  const format = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(total)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const response = await api.post('/payment', {
      cartItems,
      total,
    })

    const stripe = (await getStripeJs()) as any
    await stripe.redirectToCheckout({ sessionId: response.data.checkoutId })
  }

  return (
    <section className="w-full max-w-[448px]">
      <h2 className="font-extrabold font-cursive text-[2rem] text-gray-800 mb-4">
        Cafés selecionados
      </h2>

      <form
        className="p-10 bg-gray-50 rounded-[44px] rounded-tl-sm w-full mb-3 flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        {cartItems.map((item) => (
          <OrderCard
            key={item.productId}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
            title={item.name}
            price={item.unitPrice}
          />
        ))}
        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 text-sm">Entrega</p>
            <p className="text-gray-700 text-base">R$ 3,50</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-xl font-bold">Total</p>
            <p className="text-gray-500 text-xl font-bold">{format}</p>
          </div>
        </div>

        <button
          className="w-full py-3 bg-yellow-500 text-white mt-6 rounded-md hover:transition-all hover:bg-yellow-900"
          type="submit"
        >
          Confirmar Pedido
        </button>
      </form>
    </section>
  )
}
