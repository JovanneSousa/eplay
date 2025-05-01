import { Game } from '../../Pages/Home'
import Botao from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

import { formataPreco } from '../ProductsList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Botao
              variant="primary"
              type="button"
              title="clique aqui para adicionar este jogo ao carrinho"
            >
              Adicionar ao carrinho
            </Botao>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
