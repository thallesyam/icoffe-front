import { MapPinLine, CurrencyDollar, CreditCard } from 'phosphor-react'
import { Input } from '@/components/Input'

export function PaymentInfo() {
  const selected = 'credit'

  return (
    <section className="w-full">
      <h2 className="font-extrabold font-cursive text-[2rem] text-gray-800 mb-11">
        Complete seu pedido
      </h2>

      <div className="p-10 bg-gray-50 rounded-md w-full mb-3">
        <div className="flex items-start gap-2 mb-8">
          <MapPinLine size={22} className="text-yellow-900" />

          <div className="flex flex-col gap-1">
            <p className="text-base text-gray-800">Endereço de Entrega</p>
            <span className="text-xs text-gray-700">
              Informe o endereço onde deseja receber seu pedido
            </span>
          </div>
        </div>

        <section className="flex flex-col gap-4">
          <div className="max-w-[200px]">
            <Input.Root>
              <Input.Input name="cep" placeholder="CEP" />
            </Input.Root>
          </div>

          <div>
            <Input.Root>
              <Input.Input name="street" placeholder="Rua" />
            </Input.Root>
          </div>

          <div className="flex gap-3 w-full">
            <div className="w-full max-w-[200px]">
              <Input.Root>
                <Input.Input name="number" placeholder="Número" />
              </Input.Root>
            </div>

            <div className="w-full">
              <Input.Root>
                <Input.Input name="complement" placeholder="Complemento" />
              </Input.Root>
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <div className="w-full max-w-[200px]">
              <Input.Root>
                <Input.Input name="neighborhood" placeholder="Bairro" />
              </Input.Root>
            </div>

            <div className="w-full">
              <Input.Root>
                <Input.Input name="city" placeholder="Cidade" />
              </Input.Root>
            </div>

            <div className="w-full max-w-[60px]">
              <Input.Root>
                <Input.Input name="uf" placeholder="UF" />
              </Input.Root>
            </div>
          </div>
        </section>
      </div>

      <div className="p-10 bg-gray-50 rounded-md w-full">
        <div className="flex items-start gap-2 mb-8">
          <CurrencyDollar size={22} className="text-purple-500" />

          <div className="flex flex-col gap-1">
            <p className="text-base text-gray-800">Pagamento</p>
            <span className="text-xs text-gray-700">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>

        <section className="grid grid-cols-3 items-center gap-3">
          <button
            className={`
              bg-[#E6E5E5] p-4  flex items-center gap-3 rounded-md hover:bg-gray-300 hover:transition-all focus:outline-purple-500 
              ${selected === 'credit' && 'border border-purple-500'}
            `}
          >
            <CreditCard size={22} className="text-purple-500" />
            <span className="text-xs font-normal text-gray-700 uppercase">
              Cartão de crédito
            </span>
          </button>

          <button
            className={`
            bg-[#E6E5E5] p-4  flex items-center gap-3 rounded-md hover:bg-gray-300 hover:transition-all focus:outline-purple-500 
              ${selected === 'debit' && 'border border-purple-500'}
            `}
          >
            <CreditCard size={22} className="text-purple-500" />
            <span className="text-xs font-normal text-gray-700 uppercase">
              Cartão de débito
            </span>
          </button>

          <button
            className={`
              bg-[#E6E5E5] p-4  flex items-center gap-3 rounded-md hover:bg-gray-300 hover:transition-all focus:outline-purple-500 
              ${selected === 'money' && 'border border-purple-500'}
            `}
          >
            <CreditCard size={22} className="text-purple-500" />
            <span className="text-xs font-normal text-gray-700 uppercase">
              Dinheiro
            </span>
          </button>
        </section>
      </div>
    </section>
  )
}
