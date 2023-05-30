import { Trash } from 'phosphor-react'
import { QuantityChanger } from '@/components/QuantityChanger'
import { useState } from 'react'

type OrderCardProps = {
  imageUrl: string
  title: string
  price: number
  quantity?: number
}

export function OrderCard({
  imageUrl,
  title,
  quantity: cartQuantity,
  price,
}: OrderCardProps) {
  const [quantity, setQuantity] = useState(cartQuantity ?? 1)

  function handleChangeItemQuantity(
    action: 'increase' | 'decrease' = 'increase'
  ) {
    const validateQuantityIfDecrease = quantity <= 1 ? quantity : quantity - 1
    const calc =
      action === 'increase' ? quantity + 1 : validateQuantityIfDecrease

    setQuantity(calc)
  }

  return (
    <div className="flex items-start justify-between border-b border-[#E6E5E5] pb-6 mb-6">
      <div className="flex gap-5">
        <img src={imageUrl} alt={title} className="w-16 h-16 rounded" />
        <div>
          <p className="text-base text-gray-800">{title}</p>

          <div className="flex gap-2 h-8 mt-2">
            <QuantityChanger
              quantity={quantity}
              handleChangeItemQuantity={handleChangeItemQuantity}
            />
            <button className="bg-[#E6E5E5] p-2 max-h-8 flex items-center gap-1 rounded-md hover:bg-gray-300 hover:transition-all focus:outline-purple-500 uppercase">
              <Trash size={16} className="text-purple-500" />
              <span className="text-gray-700 text-xs">Remover</span>
            </button>
          </div>
        </div>
      </div>
      <p className="text-base text-gray-800 font-bold">
        <span>R$</span>
        <span>{price}</span>
      </p>
    </div>
  )
}
