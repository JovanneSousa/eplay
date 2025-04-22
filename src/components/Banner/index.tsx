import { Imagem, Preco, Titulo } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Botao from '../Button'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>Marvel&apos;s Spider-man: Miles Morales PS4 e PS5</Titulo>
          <Preco>
            De <span>R$ 250,00</span> <br />
            por apenas R$ 99,90
          </Preco>
        </div>
        <Botao
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Botao>
      </div>
    </Imagem>
  )
}

export default Banner
