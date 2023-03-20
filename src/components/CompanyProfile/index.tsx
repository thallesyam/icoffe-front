import { CloudCheck } from 'phosphor-react'
import { Input } from '@/components/Input'
import { FormEvent, useState } from 'react'
import { api } from '@/service/api'

export function CompanyProfile() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [neighborhood, setNeighborhood] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (
      !name ||
      !email ||
      !companyName ||
      !phone ||
      !city ||
      !cnpj ||
      !cep ||
      !street ||
      !number ||
      !neighborhood
    ) {
      return
    }

    await api.put('/company', {
      id: '2eb95729-dbdf-4eda-95df-d5d61a87d293',
      ownerName: name,
      ownerEmail: email,
      companyName,
      phone,
      companyStreet: street,
      companyCnpj: cnpj,
      companyCity: city,
      companyCep: cep,
      companyNumber: number,
      companyNeighborhood: neighborhood,
    })
  }

  async function handleDeleteCompany() {
    await api.delete(`/company/3fc0328e-0df9-4034-b384-4b070356526a`)
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
              placeholder="Nome do proprietário"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Input.Root>
        </div>

        <div>
          <Input.Root>
            <Input.Input
              name="email"
              placeholder="Email do proprietário"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Input.Root>
        </div>

        <div>
          <Input.Root>
            <Input.Input
              name="companyName"
              placeholder="Nome da empresa"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
            />
          </Input.Root>
        </div>

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

        <div className="flex gap-3 w-full">
          <div className="w-full">
            <Input.Root>
              <Input.Input
                name="city"
                placeholder="Cidade"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </Input.Root>
          </div>

          <div className="w-full">
            <Input.Root>
              <Input.Input
                name="cnpj"
                placeholder="cnpj"
                value={cnpj}
                onChange={(event) => setCnpj(event.target.value)}
              />
            </Input.Root>
          </div>
        </div>

        <div className="flex gap-3 w-full">
          <div className="w-full">
            <Input.Root>
              <Input.Input
                name="cep"
                placeholder="CEP da empresa"
                value={cep}
                onChange={(event) => setCep(event.target.value)}
              />
            </Input.Root>
          </div>

          <div className="w-full">
            <Input.Root>
              <Input.Input
                name="street"
                placeholder="Rua"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
              />
            </Input.Root>
          </div>
        </div>

        <div className="flex gap-3 w-full">
          <div className="w-full">
            <Input.Root>
              <Input.Input
                name="number"
                placeholder="Número"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
            </Input.Root>
          </div>

          <div className="w-full">
            <Input.Root>
              <Input.Input
                name="neighborhood"
                placeholder="Bairro"
                value={neighborhood}
                onChange={(event) => setNeighborhood(event.target.value)}
              />
            </Input.Root>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="w-full max-w-[200px] py-3 bg-purple-500 text-white mt-2 rounded-md hover:transition-all hover:bg-purple-900"
          >
            Salvar dados
          </button>

          <button
            className="w-full max-w-[200px] py-3 bg-red-400 text-white mt-2 rounded-md hover:transition-all hover:bg-red-500"
            onClick={handleDeleteCompany}
            type="button"
          >
            Deletar conta
          </button>
        </div>
      </form>
    </div>
  )
}
