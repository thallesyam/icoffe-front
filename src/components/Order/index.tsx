import { OrderCard } from '@/components/OrderCard'

export function Order() {
  return (
    <section className="w-full max-w-[448px]">
      <h2 className="font-extrabold font-cursive text-[2rem] text-gray-800 mb-4">
        Cafés selecionados
      </h2>

      <div className="p-10 bg-gray-50 rounded-[44px] rounded-tl-sm w-full mb-3 flex flex-col justify-center">
        <OrderCard
          imageUrl="/coffee-placeholder.png"
          title="Expresso Tradicional"
          price={9.9}
        />
        <OrderCard
          imageUrl="/coffee-placeholder.png"
          title="Expresso Tradicional"
          price={9.9}
        />

        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 text-sm">Total de itens</p>
            <p className="text-gray-700 text-base">R$ 29,70</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-700 text-sm">Entrega</p>
            <p className="text-gray-700 text-base">R$ 3,50</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-xl font-bold">Total</p>
            <p className="text-gray-500 text-xl font-bold">R$ 33,20</p>
          </div>
        </div>

        <button className="w-full py-3 bg-yellow-500 text-white mt-6 rounded-md hover:transition-all hover:bg-yellow-900">
          Confirmar Pedido
        </button>
      </div>
    </section>
  )
}
