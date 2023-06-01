import { GeneratePDFButton } from '@/components/PdfButton'
import { api } from '@/service/api'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export type ProductsProps = {
  imageUrl: string
  name: string
  description: string
  id: string
  companyId: string
  price: number
}

export type ClientProps = {
  clientEmail: string
  clientName: string
}

export function Success() {
  const [products, setProducts] = useState<ProductsProps[]>([])
  const [client, setClient] = useState<ClientProps | undefined>(undefined)
  const [address, setAddress] = useState<string | undefined>(undefined)
  const [order, setOrder] = useState<any>(undefined)
  const defineGrid =
    products?.length > 3 ? 'grid-cols-3' : `grid-cols-${products.length}`
  const { search } = useLocation()
  const [, checkoutId] = search.split('?session_id=')

  useEffect(() => {
    api.get(`/session/${checkoutId}`).then((response) => {
      if (response.data.session.address) {
        setAddress(response.data.session.address)
      }

      setOrder(response.data.session)
      setProducts(response.data.session.products)
      setClient({
        clientEmail: response.data.session.clientEmail,
        clientName: response.data.session.clientName,
      })
    })
  }, [search])

  return (
    <main className="w-screen h-screen max-w-[1200px] m-auto items-center justify-center flex flex-col">
      <h1 className="mb-16 text-gray-900 font-bold text-xl">
        Compra Efetuada!
      </h1>

      <section
        className={`grid ${defineGrid} gap-5 items-center justify-center align-middle`}
      >
        {products?.map((product) => (
          <section
            key={product.id}
            className="flex flex-col justify-center items-center"
          >
            <div className="rounded-lg flex items-center justify-center mb-8">
              <img
                alt={product.name ?? ''}
                src={product.imageUrl ?? ''}
                width={100}
                height={100}
                className="rounded-lg h-[100px] w-[100px]"
              />
            </div>

            <p className="font-light max-w-[300px] text-center mb-20 text-gray-800 text-lg">
              Seu produto <b className="text-purple-900">{product.name}</b> já
              está sendo preparado.
            </p>
          </section>
        ))}
      </section>
      <span className="mb-20">
        A entrega será realizada no endereço:{' '}
        <b className="text-purple-900">{address}</b>
      </span>

      <div className="flex gap-3 w-full justify-center">
        <Link
          to="/"
          className="flex items-center text-white bg-yellow-500 p-3 rounded gap-1 transition-all hover:opacity-90 w-full max-w-[200px] justify-center text-sm"
        >
          <span>Voltar para a home </span>
        </Link>

        <GeneratePDFButton order={order} />
      </div>
    </main>
  )
}
