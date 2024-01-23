import React, { createContext, useState, useEffect, useRef, useContext } from 'react'
import classnames from 'classnames'

interface FilterContextProps {
  currentName: string
  currentValue: string
  setCurrentValue: () => void
  width: string
  setWidth: () => void
  left: string
  setLeft: () => void
}

interface FilterProps extends React.PropsWithChildren {
  name: string
  value: string
  className?: string
}

export const FilterContext = createContext<FilterContextProps>({})

export const Filter = ({ name, value, className, children }: FilterProps): React.JSX.Element => {
  const classNames: string = classnames(className)
  const [currentValue, setCurrentValue] = useState(value)
  const [width, setWidth] = useState('')
  const [left, setLeft] = useState('')

  return (
    <FilterContext.Provider
      value={{
        currentName: name,
        currentValue: currentValue,
        setCurrentValue: setCurrentValue,
        width: width,
        setWidth: setWidth,
        left: left,
        setLeft: setLeft,
      }}
    >
      <div className={classNames}>{children}</div>
    </FilterContext.Provider>
  )
}

export const FilterToggle = ({ name, value, className, children }: FilterProps): React.JSX.Element => {
  const toggle = useRef<HTMLButtonElement>(null)
  const { currentName, currentValue, setCurrentValue, setWidth, setLeft } = useContext(FilterContext)
  const classNames: string = classnames('cursor-pointer', currentValue === value ? 'filter-active' : null, className)

  const onClickHandler = (): void => {
    if (name === currentName) setCurrentValue(value)
  }

  useEffect((): void => {
    if (value === currentValue) {
      const width: string = `${(toggle.current as HTMLElement).offsetWidth}px`
      const left: string = `${(toggle.current as HTMLElement).offsetLeft}px`

      setWidth(width)
      setLeft(left)
    }
  }, [currentValue])

  return (
    <button className={classNames} onClick={onClickHandler} ref={toggle}>
      {children}
    </button>
  )
}

export const FilterCategory = ({ name, value, className, children }: FilterProps): React.JSX.Element => {
  const { currentName, currentValue } = useContext(FilterContext)
  const absence: boolean = value.split(' ').includes(currentValue) === false
  const showAll: boolean = currentValue.toLowerCase() === 'all'

  const classNames: string = classnames(
    name === currentName && absence && !showAll ? 'hidden' : 'filter-show',
    className
  )

  return <div className={classNames}>{children}</div>
}
