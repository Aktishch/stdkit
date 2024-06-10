import { twMerge } from 'tailwind-merge'
import { InputProps } from '@ui/Input'
import { InputIcon } from '@ui/InputIcon'
import { InputDefault } from '@components/InputDefault'

export const Select = ({
  size = 'lg',
  value,
  name,
  className,
  placeholder,
  onInput,
  onKeyDown,
  onPaste,
  options,
  children,
}: InputProps) => {
  const style: string = twMerge(className)

  return (
    <InputDefault
      tag="select"
      className={style}
      size={size}
      value={value}
      name={name}
      placeholder={placeholder}
      onInput={onInput}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      options={options}
    >
      <InputIcon
        className="text-sm text-black opacity-50"
        id="arrow-right"
        right={true}
      />
      {children}
    </InputDefault>
  )
}
