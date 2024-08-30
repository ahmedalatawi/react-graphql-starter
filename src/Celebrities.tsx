import { useCelebritiesQuery } from '@/generated/graphql'
import { useCallback, useState } from 'react'
import type { Item } from '@/types'
import { formatDate } from '@/utils/formatDate'
import { Button, Grid, List, Spinner, Tab, Tabs } from '@/components'
import Celebrity from '@/Celebrity'

const Celebrities = () => {
  const { data, loading, error } = useCelebritiesQuery()
  const [showModal, setShowModal] = useState(false)

  console.log(data)

  const handleSelect = useCallback((item: Item) => {
    console.log(item)
  }, [])

  const celebrities = data?.celebrities
    ? data?.celebrities?.map((cel) => ({
        id: cel?.id ?? '',
        name: cel?.name ?? '',
        dateOfBirth: cel?.dateOfBirth ? formatDate(cel.dateOfBirth) : '',
        birthPlace: cel?.birthPlace ?? '',
        photoUrl: cel?.photoUrl ?? '',
      }))
    : []

  if (error) return <p>Error: ${error.message}</p>

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Celebrities</h1>
        <Celebrity
          showModal={showModal}
          onHideModal={() => setShowModal(false)}
        />
        <Button
          shape="rounded"
          disabled={loading}
          onClick={() => setShowModal(true)}
        >
          Add celebrity
        </Button>
      </div>
      {loading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <Tabs>
          <Tab title="List view">
            <List items={celebrities} onSelect={handleSelect} />
          </Tab>
          <Tab title="Grid view">
            <Grid items={celebrities} />
          </Tab>
        </Tabs>
      )}
    </div>
  )
}

export default Celebrities
