import React from 'react'
import { usePhoneMask } from '../hooks/usePhoneMask'
import { Input, InputProps } from '@ui/Input'

export const InputTel = ({ size = 'lg' }: InputProps): React.JSX.Element => {
  const { tel } = usePhoneMask()

  return <Input data="tel" size={size} type="tel" name="tel" ref={tel} />
}
