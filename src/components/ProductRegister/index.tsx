import { FormEvent, useState } from 'react'
import { api } from '@/service/api'
import { CompanyProps, useUser } from '@/contexts/UserContext'
import { Input } from '@/components/Input'

export function ProductRegister() {
  const { user } = useUser()
  const company = user as unknown as CompanyProps
  const [imageUrl, setImageUrl] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!imageUrl || !name || !price || !description) {
      return
    }

    await api.post('/product', {
      imageUrl,
      name,
      description,
      ownerId: company.id,
      price: Number(price),
    })

    window.location.href = '/'
  }

  return (
    <div className="p-10 bg-gray-50 rounded-md w-full mb-3">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <Input.Root>
            <Input.Input
              name="imageUrl"
              placeholder="Url da imagem"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
            />
          </Input.Root>
        </div>

        <div>
          <Input.Root>
            <Input.Input
              name="name"
              placeholder="Nome do produto"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Input.Root>
        </div>

        <div className="flex gap-3 w-full">
          <div className="w-full">
            <Input.Root>
              <Input.Input
                name="price"
                placeholder="Preço da unidade"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </Input.Root>
          </div>

          <div className="w-full">
            <Input.Root>
              <Input.Input
                name="description"
                placeholder="Descrição"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Input.Root>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="w-full max-w-[200px] py-3 bg-purple-500 text-white mt-2 rounded-md hover:transition-all hover:bg-purple-900">
            Salvar produto
          </button>
        </div>
      </form>
    </div>
  )
}
