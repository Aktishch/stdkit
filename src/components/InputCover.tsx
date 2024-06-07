import React, { useState } from 'react'
import classnames from 'classnames'
import { Label } from '@ui/Label'
import { Wrapper } from '@ui/Wrapper'
import { Cover } from '@ui/Cover'
import { Placeholder } from '@ui/Placeholder'
import { Input, InputProps } from '@ui/Input'

export const InputWrapper = ({
  tag = 'input',
  size = 'lg',
  type = 'text',
  value,
  name,
  className,
  maxLength,
  placeholder,
  onInput = undefined,
  onKeyDown = undefined,
  onPaste = undefined,
}: InputProps): React.JSX.Element => {
  const [empty, setEmpty] = useState('')
  const classNames: string = classnames(className)

  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    if (onInput !== undefined) onInput(event)

    setEmpty((event.target as HTMLInputElement).value)
  }

  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (onKeyDown !== undefined) onKeyDown(event)

    setEmpty((event.target as HTMLInputElement).value)
  }

  return (
    <Label>
      <Wrapper>
        <Cover>
          <Input
            className={classNames}
            tag={tag}
            size={size}
            type={type}
            value={value}
            maxLength={maxLength}
            name={name}
            onInput={onInputHandler}
            onKeyDown={onKeyDownHandler}
            onPaste={onPaste}
          />
        </Cover>
        {placeholder !== null ? (
          <Placeholder
            className={
              empty !== ''
                ? 'text-primary text-14 -top-2 bg-white'
                : 'text-black text-opacity-50 text-16 top-1/2 -translate-y-1/2'
            }
          >
            {placeholder}
          </Placeholder>
        ) : (
          ''
        )}
      </Wrapper>
    </Label>
  )
}
