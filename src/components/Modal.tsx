import type { CSSProperties, MouseEvent, ReactNode } from 'react'

export interface Props {
  title: string
  visible: boolean
  children: ReactNode
  footer?: ReactNode
  placement?: 'top' | 'center'
  modalStyles?: CSSProperties
  onClose: () => void
}

const Modal = ({
  visible,
  onClose,
  children,
  title,
  footer,
  placement,
  modalStyles,
  ...props
}: Props) => {
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains('app-modal-container'))
      onClose()
  }

  return (
    <div
      className={
        visible
          ? `app-modal-container active ${placement}`
          : `app-modal-container ${placement}`
      }
      {...props}
      onClick={handleBackdropClick}
    >
      <div
        className={visible ? 'app-modal active' : 'app-modal'}
        style={modalStyles}
      >
        <div className="app-modal-header">
          {title}
          <button className="app-modal-close" onClick={onClose}>
            x
          </button>
        </div>
        <div className="app-modal-content">{children}</div>
        {footer && <div className="app-modal-footer">{footer}</div>}
      </div>
    </div>
  )
}

export default Modal
