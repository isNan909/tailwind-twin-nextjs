import tw, { styled } from 'twin.macro'

const Card = styled.div(({variant}) => [
  tw`p-10 bg-white rounded-2xl border shadow-xl`,
  variant === 'big' &&
  tw `max-w-lg`
])

export default Card