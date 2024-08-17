interface Props {
  index: number
  title: string
  isActive: boolean
  setSelectedTab: (index: number) => void
}

const TabHeader = ({ index, title, isActive, setSelectedTab }: Props) => (
  <li
    className={`app-tab-header ${isActive ? 'active' : ''}`}
    onClick={() => setSelectedTab(index)}
  >
    {title}
  </li>
)

export default TabHeader
