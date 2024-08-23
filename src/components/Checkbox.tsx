import { type InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  checked?: boolean
  onCheck?: (checked: boolean) => void
}

const Checkbox = ({ label, checked, onCheck, ...props }: Props) => (
  <label className="app-checkbox">
    <input
      type="checkbox"
      checked={checked}
      onChange={() => onCheck?.(!checked)}
      className={checked ? 'checked' : ''}
      {...props}
    />
    <span>{label}</span>
  </label>
)

export default Checkbox
