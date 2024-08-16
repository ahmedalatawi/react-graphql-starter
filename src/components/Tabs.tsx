import { useState, type ReactElement } from 'react'
import TabHeader from './TabHeader'

interface Props {
  children: ReactElement[]
}

const Tabs = ({ children }: Props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  return (
    <>
      <ul className="tabs">
        {children.map((tab, index) => (
          <TabHeader
            key={index}
            title={tab.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </ul>
      {children[selectedTabIndex]}
    </>
  )
}

export default Tabs
