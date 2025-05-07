import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductList
          id="on-sale"
          games={onSaleGames}
          background="gray"
          title="Promoções"
        />
        <ProductList
          id="coming-soon"
          games={soonGames}
          background="black"
          title="Em Breve"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
