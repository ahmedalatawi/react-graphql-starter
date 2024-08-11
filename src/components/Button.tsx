import React, { type ReactNode } from 'react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'danger' | 'success'
  size?: 'lg' | 'md' | 'sm'
  shape?: 'rounded' | 'circle'
  disabled?: boolean
}

const Button = ({ children, variant, shape, size, ...props }: Props) => (
  <button
    className={`app-btn app-btn-${variant} app-btn-${shape} app-btn-${size}`}
    {...props}
  >
    {children}
  </button>
)

export default Button
