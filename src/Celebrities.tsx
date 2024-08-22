import { useCelebritiesQuery } from '@/generated/graphql'
import { useCallback, useState } from 'react'
import Tabs from '@/components/Tabs'
import Tab from '@/components/Tab'
import List from '@/components/List'
import type { Item } from '@/types'
import Grid from '@/components/Grid'
import Button from '@/components/Button'
import Spinner from '@/components/Spinner'
import { formatDate } from '@/utils/formatDate'
import Modal from '@/components/Modal'
import { Input } from '@/components/Input'

const Celebrities = () => {
  const { data, loading, error } = useCelebritiesQuery()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => setIsModalVisible(true)

  const hideModal = () => setIsModalVisible(false)

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
        <Modal
          modalStyles={{ width: '32rem' }}
          title="Add celebrity"
          visible={isModalVisible}
          onClose={hideModal}
          footer={
            <div className="modal-footer">
              <Button size="sm" shape="rounded" onClick={hideModal}>
                Cancel
              </Button>
              <Button variant="primary" size="sm" shape="rounded">
                Save
              </Button>
            </div>
          }
        >
          <form className="celebrity-form">
            <Input type="text" placeholder="Name" label="Name" />
            <Input type="date" label="Birth date" />
            <Input
              type="text"
              placeholder="City, state, country"
              label="Birth place"
            />
            <Input type="text" placeholder="Photo link" label="Photo url" />
          </form>
        </Modal>
        <Button shape="rounded" disabled={loading} onClick={showModal}>
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
