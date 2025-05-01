import { useState } from 'react'

import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'

type Game = {}

const Home = () => {
  const [promocoes, setPromocoes] = useState([])
  const [emBreve, setEmBreve] = useState([])

  return (
    <>
      <Banner />
      <ProductList games={promocoes} background="gray" title="Promoções" />
      <ProductList games={emBreve} background="black" title="Em Breve" />
    </>
  )
}

export default Home
