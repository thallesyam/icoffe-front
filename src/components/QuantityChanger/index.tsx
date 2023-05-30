type QuantityChangerProps = {
  quantity: number
  handleChangeItemQuantity: (action?: 'increment' | 'decrement') => void
}

export function QuantityChanger({
  handleChangeItemQuantity,
  quantity,
}: QuantityChangerProps) {
  return (
    <div className="px-2 py-3 bg-purple-50 w-[72px] h-full max-h-[38px] rounded-md flex items-center justify-between">
      <button onClick={() => handleChangeItemQuantity('decrement')}>
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

      <span className="text-gray-900 text-base">{quantity}</span>

      <button onClick={() => handleChangeItemQuantity()}>
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
  )
}
