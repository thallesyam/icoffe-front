import { useForm } from 'react-hook-form'
import { FormEvent } from 'react'

import { api } from '@/service/api'
import { getStripeJs } from '@/service/stripe-js'

import { Header } from '@/components/Header'
import { Order } from '@/components/Order'
import { PaymentInfo } from '@/components/PaymentInfo'
import { useCart } from '@/contexts/MinicartContext'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useUser } from '@/contexts/UserContext'

export type IOrderForm = {
  cep: number
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  uf: string
}

const orderSchema = yup.object().shape({
  cep: yup.string().required('Cep obrigatório'),
  street: yup.string().required('Rua obrigatória'),
  number: yup.string().required('Número obrigatório'),
  complement: yup.string(),
  neighborhood: yup.string().required('Bairro obrigatório'),
  city: yup.string().required('Cidade obrigatória'),
  uf: yup.string().required('UF obrigatório'),
})

export function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IOrderForm>({
    resolver: yupResolver(orderSchema),
    mode: 'all',
  })
  const { cartItems, total, handleClearCart } = useCart()
  const { isLogged } = useUser()

  async function handleCreateOrder(values: IOrderForm) {
    if (!cartItems?.length) {
      alert('Não existe nenhum produto no seu carrinho')
      return
    }

    const response = await api.post('/payment', {
      cartItems,
      total,
      address: {
        ...values,
      },
    })

    handleClearCart()
    const stripe = (await getStripeJs()) as any
    await stripe.redirectToCheckout({ sessionId: response.data.checkoutId })
  }

  if (!isLogged) {
    return (window.location.href = '/')
  }

  return (
    <main className="w-full max-w-6xl m-auto mb-4">
      <Header />

      <form
        className="flex item-center gap-8 w-full"
        onSubmit={handleSubmit(handleCreateOrder)}
      >
        <PaymentInfo register={register} errors={errors} />
        <Order isValid={isValid} />
      </form>
    </main>
  )
}
