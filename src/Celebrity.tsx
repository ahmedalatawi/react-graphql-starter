import { useEffect, useState, type FormEvent } from 'react'
import { Button, Checkbox, Input, Modal, Spinner, TextArea } from '@/components'
import { useCelebrityQuery, type CelebrityFragment } from '@/generated/graphql'
import { formatDateForInput } from '@/utils/formatDate'
import {
  isValidBirthDate,
  isValidBirthPlace,
  isValidName,
} from '@/utils/validations'

type CelebrityKeys = keyof CelebrityFragment

interface Props {
  celebrityId?: string
  showModal: boolean
  onHideModal: () => void
}

const newCelebrity = {
  id: '',
  name: '',
  bio: '',
  dateOfBirth: '',
  birthPlace: '',
  editable: true,
  photoUrl: '',
}

const validationDefault = {
  key: '' as CelebrityKeys,
  value: '',
}

const Celebrity = ({ celebrityId, showModal, onHideModal }: Props) => {
  const { data, loading, error } = useCelebrityQuery({
    variables: { id: celebrityId! },
    skip: !celebrityId,
  })

  const [celebrity, setCelebrity] = useState<CelebrityFragment>(newCelebrity)
  const [validationError, setValidationError] = useState<{
    key: CelebrityKeys
    value: string
  }>(validationDefault)

  useEffect(() => {
    const celebrity = data?.celebrity
    if (celebrity) setCelebrity(celebrity)
    else setCelebrity(newCelebrity)
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

    setValidationError(validationDefault)
  }

  const handleCloseModal = () => {
    onHideModal()
    setValidationError(validationDefault)
  }

  const handleSaveCelebrity = async () => {
    console.log('celebrity: ', celebrity)
    const { name, dateOfBirth, birthPlace } = celebrity

    if (!name.trim())
      setValidationError({ key: 'name', value: 'Name is required' })
    else if (!isValidName(name))
      setValidationError({
        key: 'name',
        value: 'Name must contain only alphabetic characters',
      })
    else if (!dateOfBirth)
      setValidationError({
        key: 'dateOfBirth',
        value: 'Date of birth is required',
      })
    else if (!isValidBirthDate(dateOfBirth))
      setValidationError({
        key: 'dateOfBirth',
        value: 'Date of birth can not be in the future',
      })
    else if (birthPlace?.trim() && !isValidBirthPlace(birthPlace))
      setValidationError({
        key: 'birthPlace',
        value:
          'Place of birth must be valid (only letters and commas are allowed)',
      })
  }

  return (
    <Modal
      modalStyles={{ width: '32rem' }}
      title="Add celebrity"
      visible={showModal}
      onClose={handleCloseModal}
      footer={
        <div className="modal-footer">
          <Button size="sm" shape="rounded" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            variant="primary"
            size="sm"
            shape="rounded"
            onClick={handleSaveCelebrity}
          >
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
            error={validationError.key === 'name' ? validationError.value : ''}
            value={celebrity.name}
            onChange={(e) => handleUpdateCelebrity(e, 'name')}
          />
          <Input
            type="date"
            label="Birth date"
            max={formatDateForInput(new Date().toISOString())}
            error={
              validationError.key === 'dateOfBirth' ? validationError.value : ''
            }
            value={formatDateForInput(celebrity.dateOfBirth)}
            onChange={(e) => handleUpdateCelebrity(e, 'dateOfBirth')}
          />
          <Input
            type="text"
            placeholder="City, state, country"
            label="Birth place"
            value={celebrity.birthPlace ?? ''}
            error={
              validationError.key === 'birthPlace' ? validationError.value : ''
            }
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
            checked={celebrity.editable ?? true}
            onCheck={(checked) => {
              setCelebrity((currentValue) => ({
                ...currentValue,
                editable: checked,
              }))
              setValidationError(validationDefault)
            }}
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
