import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//place-hold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag> Categoria</Tag>
    <Tag> windows</Tag>
    <Descricao>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
      molestias officiis, placeat autem ipsam explicabo quas saepe facere quia
      blanditiis nam recusandae eaque quod, reiciendis, doloribus doloremque
      voluptatibus tempore corrupti?
    </Descricao>
  </Card>
)
export default Product
