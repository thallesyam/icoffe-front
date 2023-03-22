import { useEffect, useState } from 'react'
import { ProductCard, ProductCardProps } from '@/components/ProductCard'
import { api } from '@/service/api'

type ProductsProps = {
  imageUrl: string
  name: string
  description: string
  id: string
  company: {
    companyName: string
  }
  price: number
}

type ResultsProps = {
  title?: string
  products?: ProductCardProps[]
}

export function Results({ title = 'Nossos Cafés' }: ResultsProps) {
  const [products, setProducts] = useState<ProductsProps[]>([])

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data?.products)
    })
  }, [])

  return (
    <section className="mb-28">
      <h2 className="font-extrabold font-cursive text-[2rem] text-gray-800 mb-11">
        {title}
      </h2>

      <section className="grid grid-cols-4 items-center gap-8">
        {products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              productId={product.id}
              company={product.company.companyName}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              description={product.description}
            />
          )
        })}
      </section>
    </section>
  )
}
