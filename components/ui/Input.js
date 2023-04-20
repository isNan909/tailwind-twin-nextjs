import tw, { styled } from 'twin.macro'

const containerVariants = {
  block: tw`w-auto`,
  full: tw`w-full`,
}

const Input = styled.input(({type, placeholder, hasError}) => [
  tw`border-2 rounded-lg h-12 px-4 text-gray-800 flex align-middle border-gray-300`, hasError && tw`border-red-700`,
  {type: type},
  {placeholder: placeholder},
  ({ variant = 'full' }) => containerVariants[variant],
  ({ variant = 'block' }) => containerVariants[variant],
])

export default Input