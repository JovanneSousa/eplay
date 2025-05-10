import Product from '../Product'
import * as S from './styles'
import { Game } from '../../Pages/Home'
import { parseToBrl } from '../../utils'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
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
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
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
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductList
