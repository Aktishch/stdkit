import React from 'react'

const Button = ({ children, disabled, onClick }) => {
  return (
    <button className="btn btn-primary btn-lg btn-fill" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export { Button }
