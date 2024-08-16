import type { Item } from '@/types'
import GridItem from './GridItem'

interface Props {
  items: Item[]
}

const Grid = ({ items }: Props) => (
  <div className="grid">
    {items.map((item) => (
      <GridItem key={item.id} item={item} />
    ))}
  </div>
)

export default Grid
