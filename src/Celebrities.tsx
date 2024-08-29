import { useCelebritiesQuery } from '@/generated/graphql'
import { useCallback, useState } from 'react'
import type { Item } from '@/types'
import { formatDate } from '@/utils/formatDate'
import {
  Button,
  Checkbox,
  Grid,
  Input,
  List,
  Modal,
  Spinner,
  Tab,
  Tabs,
  TextArea,
} from '@/components'

const Celebrities = () => {
  const { data, loading, error } = useCelebritiesQuery()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

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

            <Checkbox
              label="Editable"
              checked={isChecked}
              onCheck={setIsChecked}
            />

            <TextArea type="text" placeholder="Bio" label="Bio" />
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
