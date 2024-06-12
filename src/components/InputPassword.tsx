import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { InputIcon } from '@ui/InputIcon'
import { InputDefault, InputDefaultProps } from '@components/InputDefault'

export const InputPassword = ({
  size = 'lg',
  className,
  placeholder,
  error,
  maxLength,
  ...props
}: InputDefaultProps) => {
  const [password, setPassword] = useState('password')
  const [id, setId] = useState('eye-visible')
  const style: string = twMerge(className)

  const onClickHandler = (): void => {
    switch (password) {
      case 'password': {
        setPassword('text')
        setId('eye-hidden')
        break
      }

      case 'text': {
        setPassword('password')
        setId('eye-visible')
        break
      }
    }
  }

  return (
    <InputDefault
      className={style}
      size={size}
      type={password}
      placeholder={placeholder}
      error={error}
      maxLength={maxLength}
      autoComplete="new-password"
      {...props}
    >
      <InputIcon
        className="pr-4 text-2xl text-black opacity-50"
        id={id}
        right={true}
        pointer={true}
        onClick={onClickHandler}
      />
    </InputDefault>
  )
}
