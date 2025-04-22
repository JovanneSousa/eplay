import { BotaoContainer, BotaoLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Botao = ({ type, children, title, onClick, to }: Props) => {
  if (type === 'button') {
    return (
      <BotaoContainer type="button" title={title} onClick={onClick}>
        {children}
      </BotaoContainer>
    )
  } else {
    return (
      <BotaoLink to={to as string} title={title}>
        {children}
      </BotaoLink>
    )
  }
}

export default Botao
