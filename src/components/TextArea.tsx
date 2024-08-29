import type { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLTextAreaElement> {
  label?: string
  successMsg?: string
  errorMsg?: string
  mode?: 'success' | 'error' | ''
}

const TextArea = ({
  mode = '',
  successMsg,
  errorMsg,
  label,
  ...props
}: Props) => {
  const { disabled, style } = props

  return (
    <div className="app-textarea-container">
      {label && <label>{label}</label>}
      <textarea
        className={`app-textarea ${disabled ? 'disabled' : mode}`}
        {...props}
        style={{ ...style, height: style?.height || '10rem' }}
      />
      {!disabled ? (
        successMsg ? (
          <span className="app-success-text">{successMsg}</span>
        ) : errorMsg ? (
          <span className="app-error-text">{errorMsg}</span>
        ) : null
      ) : null}
    </div>
  )
}

export default TextArea
