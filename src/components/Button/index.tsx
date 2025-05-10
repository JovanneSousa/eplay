import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Botao = ({
  variant = 'primary',
  type,
  children,
  title,
  onClick,
  to
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.BotaoContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
      >
        {children}
      </S.BotaoContainer>
    )
  } else {
    return (
      <S.BotaoLink to={to as string} title={title}>
        {children}
      </S.BotaoLink>
    )
  }
}

export default Botao
