import { useEffect, useState, type FormEvent } from 'react'
import { Button, Checkbox, Input, Modal, Spinner, TextArea } from '@/components'
import { useCelebrityQuery, type CelebrityFragment } from '@/generated/graphql'

type CelebrityKeys = keyof CelebrityFragment

interface Props {
  celebrityId?: string
  showModal: boolean
  onHideModal: () => void
}

const Celebrity = ({ celebrityId, showModal, onHideModal }: Props) => {
  const [isChecked, setIsChecked] = useState(false)
  const { data, loading, error } = useCelebrityQuery({
    variables: { id: celebrityId! },
    skip: !celebrityId,
  })

  const [celebrity, setCelebrity] = useState<CelebrityFragment | null>(null)

  console.log('celebrity: ', celebrity)

  useEffect(() => {
    const celebrity = data?.celebrity
    if (celebrity) setCelebrity(celebrity)
  }, [data])

  const handleUpdateCelebrity = (
    e: FormEvent<HTMLInputElement>,
    key: CelebrityKeys
  ) => {
    const value = e.currentTarget.value

    setCelebrity((currentValue) =>
      currentValue
        ? {
            ...currentValue,
            [key]: value,
          }
        : null
    )
  }

  return (
    <Modal
      modalStyles={{ width: '32rem' }}
      title="Add celebrity"
      visible={showModal}
      onClose={onHideModal}
      footer={
        <div className="modal-footer">
          <Button size="sm" shape="rounded" onClick={onHideModal}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" shape="rounded">
            Save
          </Button>
        </div>
      }
    >
      {loading || (!celebrity && !error) ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <form className="celebrity-form">
          <Input
            type="text"
            placeholder="Name"
            label="Name"
            value={celebrity?.name}
            onChange={(e) => handleUpdateCelebrity(e, 'name')}
          />
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
      )}
    </Modal>
  )
}

export default Celebrity
