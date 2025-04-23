import Product from '../Product'
import { Container, List } from './styles'
import Game from '../Models/Game'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((games) => (
          <Product
            key={games.id}
            category={games.category}
            description={games.description}
            image={games.image}
            infos={games.infos}
            system={games.system}
            title={games.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
