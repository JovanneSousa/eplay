import Botao from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => {
  return (
    <Banner>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 250,00</span>
            Por R$ 190,00
          </p>
          <Botao
            variant="primary"
            type="button"
            title="clique aqui para adicionar este jogo ao carrinho"
          >
            Adicionar ao carrinho
          </Botao>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
