import Product from '../Product'
import { Container, List } from './styles'
import { Game } from '../../Pages/Home'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductList = ({ title, background, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((games) => (
            <li key={games.id}>
              <Product
                id={games.id}
                category={games.details.category}
                description={games.description}
                image={games.media.thumbnail}
                infos={getGameTags(games)}
                system={games.details.system}
                title={games.name}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
