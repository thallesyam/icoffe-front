import { CloudCheck } from 'phosphor-react'
import { Input } from '@/components/Input'
import { FormEvent, useState } from 'react'
import { api } from '@/service/api'

export function UserProfile() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!name || !email || !cpf || !phone) {
      return
    }

    await api.put('/user', {
      id: 'fc513a26-9ee9-468a-a3e6-6e87c72ad636',
      name,
      email,
      phone,
      cpf,
    })
  }

  async function handleDeleteUser() {
    await api.delete(`/user/1c7ad4ec-b8ff-475f-8dc8-6fee334f886a`)
  }

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

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <Input.Root>
            <Input.Input
              name="name"
              placeholder="Nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Input.Root>
        </div>

        <div>
          <Input.Root>
            <Input.Input
              name="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Input.Root>
        </div>

        <div className="flex gap-3 w-full">
          <div className="w-full">
            <Input.Root>
              <Input.Input
                name="phone"
                placeholder="Telefone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </Input.Root>
          </div>

          <div className="w-full">
            <Input.Root>
              <Input.Input
                name="cpf"
                placeholder="CPF"
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
              />
            </Input.Root>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="w-full max-w-[200px] py-3 bg-purple-500 text-white mt-2 rounded-md hover:transition-all hover:bg-purple-900">
            Salvar dados
          </button>

          <button
            className="w-full max-w-[200px] py-3 bg-red-400 text-white mt-2 rounded-md hover:transition-all hover:bg-red-500"
            onClick={handleDeleteUser}
            type="button"
          >
            Deletar conta
          </button>
        </div>
      </form>
    </div>
  )
}
