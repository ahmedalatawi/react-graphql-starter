import { useEffect, useState, type FormEvent } from 'react'
import { Button, Checkbox, Input, Modal, Spinner, TextArea } from '@/components'
import { useCelebrityQuery, type CelebrityFragment } from '@/generated/graphql'
import { formatDateForInput } from '@/utils/formatDate'

type CelebrityKeys = keyof CelebrityFragment

interface Props {
  celebrityId?: string
  showModal: boolean
  onHideModal: () => void
}

const Celebrity = ({ celebrityId, showModal, onHideModal }: Props) => {
  const { data, loading, error } = useCelebrityQuery({
    variables: { id: celebrityId! },
    skip: !celebrityId,
  })

  const [celebrity, setCelebrity] = useState<CelebrityFragment>({
    id: '',
    name: '',
    bio: '',
    dateOfBirth: '',
    birthPlace: '',
    editable: true,
    photoUrl: '',
  })

  console.log('celebrity: ', celebrity)

  useEffect(() => {
    const celebrity = data?.celebrity
    if (celebrity) setCelebrity(celebrity)
  }, [data])

  const handleUpdateCelebrity = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: CelebrityKeys
  ) => {
    const value = e.currentTarget.value

    setCelebrity((currentValue) => ({
      ...currentValue,
      [key]: value,
    }))
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
      {loading ? (
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
            value={celebrity.name}
            onChange={(e) => handleUpdateCelebrity(e, 'name')}
          />
          <Input
            type="date"
            label="Birth date"
            value={formatDateForInput(celebrity.dateOfBirth)}
            onChange={(e) => handleUpdateCelebrity(e, 'dateOfBirth')}
          />
          <Input
            type="text"
            placeholder="City, state, country"
            label="Birth place"
            value={celebrity.birthPlace ?? ''}
            onChange={(e) => handleUpdateCelebrity(e, 'birthPlace')}
          />
          <Input
            type="text"
            placeholder="Photo link"
            label="Photo url"
            value={celebrity.photoUrl ?? ''}
            onChange={(e) => handleUpdateCelebrity(e, 'photoUrl')}
          />

          <Checkbox
            label="Editable"
            disabled={!celebrity.editable}
            checked={celebrity.editable ?? true}
            onCheck={(checked) =>
              setCelebrity((currentValue) => ({
                ...currentValue,
                editable: checked,
              }))
            }
          />

          <TextArea
            type="text"
            placeholder="Bio"
            label="Bio"
            value={celebrity.bio ?? ''}
            onChange={(e) => handleUpdateCelebrity(e, 'bio')}
          />
        </form>
      )}
    </Modal>
  )
}

export default Celebrity
