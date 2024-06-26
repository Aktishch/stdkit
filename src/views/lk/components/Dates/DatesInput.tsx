import { twMerge } from 'tailwind-merge'
import { Input, InputProps } from '@ui/Form/Input'

export const DatesInput = ({ className, ...props }: InputProps) => {
  const style: string = twMerge('form-label', className)

  return (
    <label className={style}>
      <div className="form-wrapper">
        <div className="input-cover">
          <Input type="date" {...props} />
        </div>
      </div>
    </label>
  )
}
