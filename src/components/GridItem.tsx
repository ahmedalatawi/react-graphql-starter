import type { Item } from '@/types'

interface Props {
  item: Item
  onClick: (item: Item) => void
}

function GridItem({ item, onClick }: Props) {
  const { name, photoUrl } = item

  return (
    <div className="app-grid-item" onClick={() => onClick(item)}>
      <img src={photoUrl} alt={name} loading="lazy" />
      <h3>{name}</h3>
    </div>
  )
}

export default GridItem
