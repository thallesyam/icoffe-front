import { Header } from '@/components/Header'
import { ProductEdit } from '@/components/ProductEdit'

export function Product() {
  return (
    <main className="w-full max-w-6xl m-auto">
      <Header />
      <section className="w-full">
        <div className="flex justify-between items-center">
          <h2 className="font-extrabold font-cursive text-[2rem] text-gray-800 mb-4">
            Editar produto
          </h2>
        </div>
      </section>

      <ProductEdit />
    </main>
  )
}
