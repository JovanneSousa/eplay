import Botao from '../Button'
import Tag from '../Tag'
import * as S from './styles'

import { parseToBrl } from '../../utils'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {parseToBrl(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Botao
              onClick={addToCart}
              variant="primary"
              type="button"
              title="clique aqui para adicionar este jogo ao carrinho"
            >
              Adicionar ao carrinho
            </Botao>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
