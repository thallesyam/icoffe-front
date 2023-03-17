import { Input } from '@/components/Input'

export function ProductRegister() {
  return (
    <div className="p-10 bg-gray-50 rounded-md w-full mb-3">
      <section className="flex flex-col gap-4">
        <div>
          <Input.Root>
            <Input.Input name="imageUrl" placeholder="Url da imagem" />
          </Input.Root>
        </div>

        <div>
          <Input.Root>
            <Input.Input name="name" placeholder="Nome do produto" />
          </Input.Root>
        </div>

        <div className="flex gap-3 w-full">
          <div className="w-full">
            <Input.Root>
              <Input.Input name="price" placeholder="Preço da unidade" />
            </Input.Root>
          </div>

          <div className="w-full">
            <Input.Root>
              <Input.Input name="description" placeholder="Descrição" />
            </Input.Root>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="w-full max-w-[200px] py-3 bg-purple-500 text-white mt-2 rounded-md hover:transition-all hover:bg-purple-900">
            Salvar produto
          </button>
        </div>
      </section>
    </div>
  )
}
