import { MapPinLine } from 'phosphor-react'
import { UseFormRegister, FieldErrors } from 'react-hook-form/dist/types'
import { Input } from '@/components/Input'
import { IOrderForm } from '@/pages/Checkout'

type Props = {
  register: UseFormRegister<IOrderForm>
  errors: FieldErrors<IOrderForm>
}

export function PaymentInfo({ register, errors }: Props) {
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
              <Input.Input {...register('cep')} name="cep" placeholder="CEP" />
            </Input.Root>
            {errors?.cep && (
              <p className="text-xs text-red-500">{errors?.cep.message}</p>
            )}
          </div>

          <div>
            <Input.Root>
              <Input.Input
                {...register('street')}
                name="street"
                placeholder="Rua"
              />
            </Input.Root>
            {errors?.street && (
              <p className="text-xs text-red-500">{errors?.street.message}</p>
            )}
          </div>

          <div className="flex gap-3 w-full">
            <div className="w-full max-w-[200px]">
              <Input.Root>
                <Input.Input
                  {...register('number')}
                  name="number"
                  placeholder="Número"
                />
              </Input.Root>
              {errors?.number && (
                <p className="text-xs text-red-500">{errors?.number.message}</p>
              )}
            </div>

            <div className="w-full">
              <Input.Root>
                <Input.Input
                  {...register('complement')}
                  name="complement"
                  placeholder="Complemento"
                />
              </Input.Root>
              {errors?.complement && (
                <p className="text-xs text-red-500">
                  {errors?.complement.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <div className="w-full max-w-[200px]">
              <Input.Root>
                <Input.Input
                  {...register('neighborhood')}
                  name="neighborhood"
                  placeholder="Bairro"
                />
              </Input.Root>
              {errors?.neighborhood && (
                <p className="text-xs text-red-500">
                  {errors?.neighborhood.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <Input.Root>
                <Input.Input
                  {...register('city')}
                  name="city"
                  placeholder="Cidade"
                />
              </Input.Root>
              {errors?.city && (
                <p className="text-xs text-red-500">{errors?.city.message}</p>
              )}
            </div>

            <div className="w-full max-w-[60px]">
              <Input.Root>
                <Input.Input {...register('uf')} name="uf" placeholder="UF" />
              </Input.Root>
              {errors?.uf && (
                <p className="text-xs text-red-500">{errors?.uf.message}</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
