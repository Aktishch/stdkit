import React from 'react'
import { usePhoneMask } from '../hooks/usePhoneMask'
import { Input } from './Input'

export const InputTel = ({ size = 'lg' }): React.JSX.Element => {
  const { tel } = usePhoneMask()

  return <Input size={size} type="tel" data="tel" name="tel" ref={tel} />
}
