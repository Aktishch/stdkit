import React from 'react'

export const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center fixed z-10 inset-0 bg-white dark:bg-black duration-5">
      <div className="preloader preloader--circles">
        <div className="preloader-circle"></div>
      </div>
    </div>
  )
}
