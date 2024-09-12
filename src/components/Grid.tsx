import type { Item } from '@/types'
import GridItem from './GridItem'

interface Props {
  items: Item[]
  onSelect: (item: Item) => void
}

const Grid = ({ items, onSelect }: Props) => (
  <div className="app-grid">
    {items.map((item) => (
      <GridItem key={item.id} item={item} onClick={onSelect} />
    ))}
  </div>
)

export default Grid
