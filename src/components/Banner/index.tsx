import { formataPreco } from '../ProductsList'

import { Imagem, Preco, Titulo } from './styles'
import Tag from '../Tag'
import Botao from '../Button'
import { useGetFeatruredGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game } = useGetFeatruredGameQuery()

  if (!game) {
    return <h3>Carregando</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Preco>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Preco>
        </div>
        <Botao
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Botao>
      </div>
    </Imagem>
  )
}

export default Banner
