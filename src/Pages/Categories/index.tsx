import Loader from '../../components/Loader'
import ProductList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simutalionGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductList
        id="action"
        games={actionGames}
        background="black"
        title="Ação"
        isLoading={isLoadingAction}
      />
      <ProductList
        id="sports"
        games={sportsGames}
        background="gray"
        title="Esportes"
        isLoading={isLoadingSports}
      />
      <ProductList
        id="fight"
        games={fightGames}
        background="black"
        title="Luta"
        isLoading={isLoadingFight}
      />
      <ProductList
        id="rpg"
        games={rpgGames}
        background="gray"
        title="RPG"
        isLoading={isLoadingRpg}
      />
      <ProductList
        id="simulation"
        games={simutalionGames}
        background="black"
        title="Simulação"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
