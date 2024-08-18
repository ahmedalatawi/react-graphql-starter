import type { Item } from '@/types'
import { getAge } from '@/utils/calculateAge'
import { memo } from 'react'

interface Props {
  item: Item
  onClick: (item: Item) => void
}

const ListItem = memo(({ item, onClick }: Props) => (
  <li className="app-list-item" onClick={() => onClick(item)}>
    <span>{item.name}</span>, from {item.birthPlace}, age{' '}
    {getAge(item.dateOfBirth)}
  </li>
))

ListItem.displayName = 'ListItem'

export default ListItem
