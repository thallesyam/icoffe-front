import { ProductCard } from '@/components/ProductCard'

export function Results() {
  return (
    <section className="mb-28">
      <h2 className="font-extrabold font-cursive text-[2rem] text-gray-800 mb-11">
        Nossos cafés
      </h2>

      <section className="grid grid-cols-4 items-center gap-8">
        <ProductCard
          company="starbucks"
          title="Expresso Tradicional"
          price={9.9}
          imageUrl="/coffee-placeholder.png"
          description="O tradicional café feito com água quente e grãos moídos"
        />
      </section>
    </section>
  )
}
