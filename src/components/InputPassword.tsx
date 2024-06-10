import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { InputProps } from '@ui/Input'
import { InputIcon } from '@ui/InputIcon'
import { InputDefault } from '@components/InputDefault'

export const InputPassword = ({
  size = 'lg',
  value,
  name,
  className,
  maxLength,
  placeholder,
  onInput = undefined,
  onKeyDown = undefined,
  onPaste = undefined,
  children,
}: InputProps) => {
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
      value={value}
      maxLength={maxLength}
      name={name}
      placeholder={placeholder}
      onInput={onInput}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
    >
      <InputIcon
        className="pr-4 text-2xl text-black opacity-50"
        id={id}
        right={true}
        pointer={true}
        onClick={onClickHandler}
      />
      {children}
    </InputDefault>
  )
}
