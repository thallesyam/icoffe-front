import { MapPinLine } from 'phosphor-react'
import { Input } from '@/components/Input'

export function PaymentInfo() {
  return (
    <section className="w-full max-w-[640px]">
      <h2 className="font-extrabold font-cursive text-[2rem] text-gray-800 mb-4">
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
    </section>
  )
}
