import { CloudCheck } from 'phosphor-react'
import { Input } from '@/components/Input'

export function UserProfile() {
  return (
    <div className="p-10 bg-gray-50 rounded-md w-full mb-3">
      <div className="flex items-start gap-2 mb-8">
        <CloudCheck size={22} className="text-purple-500" />

        <div className="flex flex-col gap-1">
          <p className="text-base text-gray-800">
            Mantenha os seus dados atualizados
          </p>
          <span className="text-xs text-gray-700">
            É importante manter todos os dados da conta atualizados
          </span>
        </div>
      </div>

      <section className="flex flex-col gap-4">
        <div>
          <Input.Root>
            <Input.Input name="name" placeholder="Nome" />
          </Input.Root>
        </div>

        <div>
          <Input.Root>
            <Input.Input name="email" placeholder="Email" />
          </Input.Root>
        </div>

        <div className="flex gap-3 w-full">
          <div className="w-full">
            <Input.Root>
              <Input.Input name="phone" placeholder="Telefone" />
            </Input.Root>
          </div>

          <div className="w-full">
            <Input.Root>
              <Input.Input name="cpf" placeholder="CPF" />
            </Input.Root>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="w-full max-w-[200px] py-3 bg-purple-500 text-white mt-2 rounded-md hover:transition-all hover:bg-purple-900">
            Salvar dados
          </button>

          <button className="w-full max-w-[200px] py-3 bg-red-500 text-white mt-2 rounded-md hover:transition-all hover:bg-red-600">
            Deletar conta
          </button>
        </div>
      </section>
    </div>
  )
}
