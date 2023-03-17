import { ShoppingCart } from 'phosphor-react'

export function ProductCard() {
  return (
    <div className="w-100 max-w-[256px] bg-gray-50 px-6 py-5 text-center rounded-[36px]">
      <img
        src="/coffee-placeholder.png"
        alt=""
        className="w-100 max-w-[120px] m-auto relative -top-10 object-cover"
      />

      <p className="w-100 max-w-[81px] flex items-center justify-center bg-yellow-50 m-auto -mt-5 mb-4 p-1 rounded-full">
        <span className="text-yellow-900 text-[10px] font-bold uppercase">
          Tradicional
        </span>
      </p>

      <p className="font-extrabold font-cursive text-xl text-gray-800 mb-2">
        Expresso Tradicional
      </p>
      <span className="text-sm text-[#8D8686] font-normal mb-8 block">
        O tradicional café feito com água quente e grãos moídos
      </span>

      <div className="flex items center justify-between">
        <p className="flex gap-1 items-center">
          <span className="font-normal text-xs">R$</span>
          <span className="font-extrabold font-cursive text-2xl">9,90</span>
        </p>

        <div className="flex items center gap-2">
          <div className="px-2 py-3 bg-purple-50 w-[72px] max-h-[38px] rounded-md flex items-center justify-between">
            <button>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.53125 7C1.53125 6.63756 1.82506 6.34375 2.1875 6.34375H11.8125C12.1749 6.34375 12.4688 6.63756 12.4688 7C12.4688 7.36244 12.1749 7.65625 11.8125 7.65625H2.1875C1.82506 7.65625 1.53125 7.36244 1.53125 7Z"
                  fill="#8047F8"
                />
              </svg>
            </button>

            <span className="text-gray-900 text-base">1</span>

            <button>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.53125 7C1.53125 6.63756 1.82506 6.34375 2.1875 6.34375H11.8125C12.1749 6.34375 12.4688 6.63756 12.4688 7C12.4688 7.36244 12.1749 7.65625 11.8125 7.65625H2.1875C1.82506 7.65625 1.53125 7.36244 1.53125 7Z"
                  fill="#8047F8"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 1.53125C7.36244 1.53125 7.65625 1.82506 7.65625 2.1875V11.8125C7.65625 12.1749 7.36244 12.4688 7 12.4688C6.63756 12.4688 6.34375 12.1749 6.34375 11.8125V2.1875C6.34375 1.82506 6.63756 1.53125 7 1.53125Z"
                  fill="#8047F8"
                />
              </svg>
            </button>
          </div>

          <button className="p-2 bg-purple-900 rounded-md hover:bg-purple-500 hover:transition-all max-w-[38px] max-h-[38px]">
            <ShoppingCart size={22} weight="fill" className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
