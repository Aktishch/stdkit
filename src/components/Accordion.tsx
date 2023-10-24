import React from 'react'
// import classnames from 'classnames'
import { useAccordion } from '../hooks/useAccordion'

export const Accordion = ({ children }) => {
  const { status, toggle } = useAccordion()

  return (
    <div className="">
      <div onClick={toggle}>{children}</div>
      {status ? <div>text</div> : ''}
    </div>
  )
}
