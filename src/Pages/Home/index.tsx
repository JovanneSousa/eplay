import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductList
        id="on-sale"
        games={onSaleGames}
        background="gray"
        title="Promoções"
        isLoading={isLoadingSale}
      />
      <ProductList
        id="coming-soon"
        games={soonGames}
        background="black"
        title="Em Breve"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
