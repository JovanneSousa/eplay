import Banner from '../../components/Banner'
import Game from '../../components/Models/Game'
import ProductList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horr',
    id: 1,
    category: 'Ação',
    title: 'Resident Evil 4',
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows'
  },
  {
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horr',
    id: 2,
    category: 'Ação',
    title: 'Resident Evil 4',
    image: starwars,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows'
  },
  {
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horr',
    id: 3,
    category: 'Ação',
    title: 'Resident Evil 4',
    image: diablo,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows'
  },
  {
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horr',
    id: 4,
    category: 'Ação',
    title: 'Resident Evil 4',
    image: zelda,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows'
  }
]

const emBreve: Game[] = [
  {
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horr',
    id: 5,
    category: 'RPG',
    title: 'Zelda',
    image: zelda,
    infos: ['17/05'],
    system: 'Windows'
  },
  {
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horr',
    id: 6,
    category: 'RPG',
    title: 'Zelda',
    image: zelda,
    infos: ['17/05'],
    system: 'Windows'
  },
  {
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horr',
    id: 7,
    category: 'RPG',
    title: 'Zelda',
    image: zelda,
    infos: ['17/05'],
    system: 'Windows'
  },
  {
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horr',
    id: 8,
    category: 'RPG',
    title: 'Zelda',
    image: zelda,
    infos: ['17/05'],
    system: 'Windows'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} background="gray" title="Promoções" />
    <ProductList games={emBreve} background="black" title="Em Breve" />
  </>
)

export default Home
