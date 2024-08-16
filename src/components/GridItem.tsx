import type { Item } from '@/types'

interface Props {
  item: Item
}

function GridItem({ item }: Props) {
  const { name, photoUrl } = item

  return (
    <div className="grid-item">
      <img src={photoUrl} alt={name} className="img" />
      <h3>{name}</h3>
    </div>
  )
}

export default GridItem
