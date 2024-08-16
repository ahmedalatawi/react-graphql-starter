import { useCelebritiesQuery } from '@/generated/graphql'
import { useCallback } from 'react'
import Tabs from './components/Tabs'
import Tab from './components/Tab'
import List from './components/List'
import type { Item } from './types'
import Grid from './components/Grid'

const Celebrities = () => {
  const { data, loading, error } = useCelebritiesQuery()

  console.log(data)

  // const formatDate = (date: string) => {
  //   return new Date(date).toLocaleDateString('en-US', {
  //     timeZone: 'UTC',
  //     month: 'long',
  //     day: 'numeric',
  //     year: 'numeric',
  //   })
  // }

  const handleSelect = useCallback((item: Item) => {
    console.log(item)
  }, [])

  const celebrities = data?.celebrities
    ? data?.celebrities?.map((cel) => ({
        id: cel?.id ?? '',
        name: cel?.name ?? '',
        photoUrl: cel?.photoUrl ?? '',
      }))
    : []

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error: ${error.message}</p>

  return (
    <div className="container">
      <h1 className="title">Celebrities</h1>
      <Tabs>
        <Tab title="List view">
          <List items={celebrities} onSelect={handleSelect} />
        </Tab>
        <Tab title="Grid view">
          <Grid items={celebrities} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Celebrities
