import type { HTMLProps, ReactNode } from 'react'

export interface Props extends HTMLProps<HTMLInputElement> {
  type: 'date' | 'number' | 'password' | 'text' | 'email'
  disabled?: boolean
  label?: string
  error?: string
  success?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const Input = ({
  label,
  type,
  error,
  success,
  disabled,
  leftIcon,
  rightIcon,
  ...props
}: Props) => {
  const isSuccess = !error && success
  const isError = error && !success

  let className = 'app-input-container'

  if (isSuccess) className = 'app-input-container app-input-success'

  if (isError) className = 'app-input-container app-input-error'

  if (disabled) className = 'app-input-container app-input-disabled'

  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <div className="app-input">
        {leftIcon && leftIcon}
        <input {...props} type={type} />
        {rightIcon && rightIcon}
      </div>
      {error && !disabled && !success && (
        <span className="app-error-text">{error}</span>
      )}
      {success && !disabled && !error && (
        <span className="app-success-text">{success}</span>
      )}
    </div>
  )
}

export default Input
