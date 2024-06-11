import { LockSimpleOpen } from 'phosphor-react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  title: string
}

export default function BuyButton2({ title }: ButtonProps) {
  return (
    <>
      <ButtonContainer href="https://pepper.com.br/checkout/index.html?p=100668&o=117314">
        <LockSimpleOpen size={30} color="#fff" weight="fill" /> {title}
      </ButtonContainer>
    </>
  )
}
