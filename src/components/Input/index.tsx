import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface InputRootProps {
  children: ReactNode
}

function InputRoot({ children }: InputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-4 w-full rounded bg-[#EEEDED] border border-[#E6E5E5]">
      {children}
    </div>
  )
}

export interface InputIconProps {
  children: ReactNode
}

function InputIcon({ children }: InputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
}

export interface InputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function InputInput(props: InputInputProps) {
  return (
    <input
      {...props}
      className="bg-transparent flex-1 text-gray-700 text-xs placeholder:text-[#8D8686] outline-none"
    />
  )
}

InputRoot.displayName = 'Input.Root'
InputInput.displayName = 'Input.Input'
InputIcon.displayName = 'Input.Icon'

export const Input = {
  Root: InputRoot,
  Input: InputInput,
  Icon: InputIcon,
}
