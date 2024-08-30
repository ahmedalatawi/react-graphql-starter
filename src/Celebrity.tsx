import { useState } from 'react'
import { Button, Checkbox, Input, Modal, TextArea } from '@/components'

interface Props {
  showModal: boolean
  onHideModal: () => void
}

const Celebrity = ({ showModal, onHideModal }: Props) => {
  const [isChecked, setIsChecked] = useState(false)

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
      <form className="celebrity-form">
        <Input type="text" placeholder="Name" label="Name" />
        <Input type="date" label="Birth date" />
        <Input
          type="text"
          placeholder="City, state, country"
          label="Birth place"
        />
        <Input type="text" placeholder="Photo link" label="Photo url" />

        <Checkbox label="Editable" checked={isChecked} onCheck={setIsChecked} />

        <TextArea type="text" placeholder="Bio" label="Bio" />
      </form>
    </Modal>
  )
}

export default Celebrity
