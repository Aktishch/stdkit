import React from 'react'
import { Icon } from './Icon'

export const Loader = () => {
  return (
    <div className="loader">
      <span className="loader-progress">
        <Icon id="loader" />
      </span>
    </div>
  )
}
