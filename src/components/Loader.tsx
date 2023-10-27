import React from 'react'
import { Icon } from './Icon'

export const Loader = (): React.JSX.Element => {
  return (
    <div className="loader">
      <span className="loader-progress">
        <Icon id="loader" />
      </span>
    </div>
  )
}
