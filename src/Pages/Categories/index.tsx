import { useEffect, useState } from 'react'

import ProductList from '../../components/ProductsList'
import { Game } from '../Home'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simutalionGames } = useGetSimulationGamesQuery()
  const { data: sportsGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simutalionGames && sportsGames) {
    return (
      <>
        <ProductList
          id="action"
          games={actionGames}
          background="black"
          title="Ação"
        />
        <ProductList
          id="sports"
          games={sportsGames}
          background="gray"
          title="Esportes"
        />
        <ProductList
          id="fight"
          games={fightGames}
          background="black"
          title="Luta"
        />
        <ProductList id="rpg" games={rpgGames} background="gray" title="RPG" />
        <ProductList
          id="simulation"
          games={simutalionGames}
          background="black"
          title="Simulação"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
