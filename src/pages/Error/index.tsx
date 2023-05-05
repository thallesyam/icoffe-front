import { Link } from 'react-router-dom'

export function Error() {
  return (
    <main className="w-screen h-screen max-w-[1200px] m-auto items-center justify-center flex flex-col">
      <h1 className="mb-16">Ops Ocorreu algum erro!</h1>

      <p className="font-light max-w-[300px] text-center mb-20 text-gray-500 text-lg">
        Ocorreu algum erro durante o pagamento do pedido, tente novamente mais
        tarde ou entre em contato com o suporte
      </p>

      <Link
        to="/"
        className="flex items-center text-green-900 gap-1 transition-all hover:opacity-90"
      >
        <span>Voltar ao catálogo </span>
      </Link>
    </main>
  )
}
