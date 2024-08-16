import type { Item } from '@/types'
import ListItem from './ListItem'

interface Props {
  items: Item[]
  onSelect: (item: Item) => void
}

const List = ({ items, onSelect }: Props) => (
  <ul className="app-list">
    {items.map((item) => (
      <ListItem key={item.id} item={item} onClick={onSelect} />
    ))}
  </ul>
)

export default List
