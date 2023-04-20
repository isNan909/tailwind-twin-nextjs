import tw, { styled } from 'twin.macro'

const containerVariants = {
  block: tw`w-auto`,
  full: tw`w-full`,
}

const Button = styled.button(({ variant }) => [
  tw`px-4 py-2 transform duration-200 rounded bg-red-600 text-white font-medium border-2 border-transparent whitespace-nowrap rounded-md`,
  tw`focus:(outline-none ring-2 ring-pink-500 ring-opacity-50)`,
  tw`hover:(scale-[1.02] shadow-lg)`,
  tw`active:scale-100`,
  variant === 'ghost' &&
  tw`bg-transparent text-red-400 border-current border-opacity-50`,
  tw`hover:(bg-red-500 shadow-lg text-white)`,
  ({ variant = 'full' }) => containerVariants[variant],
  ({ variant = 'block' }) => containerVariants[variant]
])

export default Button