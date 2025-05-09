import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import { Props } from '.'

export const BotaoContainer = styled.button<Props>`
  background-color: ${(props: Props) =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  color: ${cores.branco};
  border: 2px solid
    ${(props: Props) =>
      props.variant === 'primary' ? cores.verde : cores.branco};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`

export const BotaoLink = styled(Link)`
  background-color: transparent;
  color: ${cores.branco};
  border: 2px solid ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
`
