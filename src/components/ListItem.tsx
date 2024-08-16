import type { Item } from '@/types'
import { memo } from 'react'

interface Props {
  item: Item
  onClick: (item: Item) => void
}

const ListItem = memo(({ item, onClick }: Props) => (
  <li className="app-list-item" onClick={() => onClick(item)}>
    {item.name}
  </li>
))

ListItem.displayName = 'ListItem'

export default ListItem
