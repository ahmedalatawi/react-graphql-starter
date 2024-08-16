import type { ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

const Tab = ({ children }: Props) => <div>{children}</div>

export default Tab
