import { ShoppingCart } from 'phosphor-react'
import { QuantityChanger } from '@/components/QuantityChanger'

export type ProductCardProps = {
  imageUrl: string
  title: string
  description: string
  company: string
  price: number
  isProfilePage?: boolean
}

export function ProductCard({
  company,
  description,
  imageUrl,
  price,
  title,
  isProfilePage = false,
}: ProductCardProps) {
  return (
    <div className="w-full max-w-[256px] bg-gray-50 px-6 py-5 text-center rounded-[36px]">
      <img
        src={imageUrl}
        alt={title}
        className="w-full max-w-[120px] m-auto relative -top-10 object-cover"
      />

      <p className="w-full max-w-[81px] flex items-center justify-center bg-yellow-50 m-auto -mt-5 mb-4 p-1 rounded-full">
        <span className="text-yellow-900 text-[10px] font-bold uppercase">
          {company}
        </span>
      </p>

      <p className="font-extrabold font-cursive text-xl text-gray-800 mb-2">
        {title}
      </p>
      <span className="text-sm text-[#8D8686] font-normal mb-8 block">
        {description}
      </span>

      <div className="flex items center justify-between">
        {isProfilePage ? (
          <div className="flex items-center gap-2  w-full">
            <button className="w-full text-xs py-4 bg-orange-500 text-white mt-2 rounded-md hover:transition-all hover:bg-orange-900">
              Editar produto
            </button>

            <button className="w-full text-xs py-4 bg-red-400 text-white mt-2 rounded-md hover:transition-all hover:bg-red-500">
              Deletar produto
            </button>
          </div>
        ) : (
          <>
            <p className="flex gap-1 items-center">
              <span className="font-normal text-xs">R$</span>
              <span className="font-extrabold font-cursive text-2xl">
                {price}
              </span>
            </p>
            <div className="flex items center gap-2">
              <QuantityChanger />

              <button className="p-2 bg-purple-900 rounded-md hover:bg-purple-500 hover:transition-all max-w-[38px] max-h-[38px]">
                <ShoppingCart size={22} weight="fill" className="text-white" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
