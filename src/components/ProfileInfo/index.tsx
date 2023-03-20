import { api } from '@/service/api'
import { Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CompanyProfile } from '../CompanyProfile'
import { ProductCard } from '../ProductCard'
import { UserProfile } from '../UserProfile'

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

export function ProfileInfo() {
  const isCompanyProfile = true
  const [products, setProducts] = useState<ProductsProps[]>([])

  useEffect(() => {
    if (!isCompanyProfile) return

    api
      .get(`/product/2eb95729-dbdf-4eda-95df-d5d61a87d293`)
      .then((response) => {
        setProducts(response.data?.product)
      })
  }, [])

  return (
    <section className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="font-extrabold font-cursive text-[2rem] text-gray-800 mb-4">
          Dados do perfil
        </h2>
      </div>

      {isCompanyProfile ? (
        <section>
          <CompanyProfile />

          <section className="mt-10 mb-28">
            <div className="flex justify-between items-center">
              <h2 className="font-extrabold font-cursive text-[2rem] text-gray-800 ">
                Cafés Cadastrados
              </h2>

              <Link
                to={`/starbucks/new/product`}
                className="bg-purple-500 p-2 max-h-8 flex items-center gap-1 rounded-md hover:bg-purple-900 hover:transition-all focus:outline-purple-500 uppercase"
              >
                <Plus size={16} className="text-white" />
                <span className="text-white text-xs">
                  Adicionar novo produto
                </span>
              </Link>
            </div>

            <section className="grid grid-cols-4 items-center gap-8 mt-11">
              {products?.map((product) => {
                return (
                  <ProductCard
                    productId={product.id}
                    company={product.company.companyName}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    description={product.description}
                    isProfilePage
                  />
                )
              })}
            </section>
          </section>
        </section>
      ) : (
        <UserProfile />
      )}
    </section>
  )
}
