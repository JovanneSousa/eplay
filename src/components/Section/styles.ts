import styled from 'styled-components'

import { colors } from '../../styles'
import { Card } from '../Product/styles'
import { PropsBackground } from '../ProductsList/styles'

export const Container = styled.section<PropsBackground>`
  padding: 32px 0;
  background-color: ${(props: PropsBackground) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props: PropsBackground) =>
      props.background === 'black' ? colors.gray : colors.black};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
