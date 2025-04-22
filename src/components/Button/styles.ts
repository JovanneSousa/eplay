import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const BotaoContainer = styled.button`
  background-color: transparent;
  color: ${cores.branco};
  border: 2px solid ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
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
