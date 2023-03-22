import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'phosphor-react'
import { api } from '@/service/api'
import { useUser } from '@/contexts/UserContext'
import { CompanyProfile } from '@/components/CompanyProfile'
import { ProductCard } from '@/components/ProductCard'
import { UserProfile } from '@/components/UserProfile'

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
  const { user } = useUser()

  const isCompanyProfile = !!user && Object.hasOwn(user, 'companyName')
  const [products, setProducts] = useState<ProductsProps[]>([])

  useEffect(() => {
    if (!isCompanyProfile) return

    api.get(`/product/company/${user.id}`).then((response) => {
      setProducts(response.data?.product)
    })
  }, [user])

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
                    key={product.id}
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
