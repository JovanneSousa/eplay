class Game {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string
  ) {
    this.category = category
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
  }
}

export default Game
