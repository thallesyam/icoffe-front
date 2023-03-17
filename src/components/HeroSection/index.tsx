import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function HeroSection() {
  return (
    <section className="flex justify-between items-center gap-14 my-24">
      <div>
        <article className="flex flex-col gap-4 max-w-[580px] mb-16">
          <h1 className="font-cursive text-5xl font-extrabold text-gray-900">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-xl text-gray-800 font-normal">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </article>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-orange-900 w-8 h-8 rounded-full">
              <ShoppingCart size={16} className="text-white" weight="fill" />
            </div>
            <p className="text-gray-700 text-base">Compra simples e segura</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-gray-700 w-8 h-8 rounded-full">
              <Package size={16} className="text-white" weight="fill" />
            </div>
            <p className="text-gray-700 text-base">
              Embalagem mantém o café intacto
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-orange-500 w-8 h-8 rounded-full">
              <Timer size={16} className="text-white" weight="fill" />
            </div>
            <p className="text-gray-700 text-base">
              Entrega rápida e rastreada
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-purple-500 w-8 h-8 rounded-full">
              <Coffee size={16} className="text-white" weight="fill" />
            </div>
            <p className="text-gray-700 text-base">
              O café chega fresquinho até você
            </p>
          </div>
        </div>
      </div>

      <div>
        <img
          src="/hero-image.png"
          className="w-100 max-w-[476px] h-100 max-h-[360px]"
        />
      </div>
    </section>
  )
}
