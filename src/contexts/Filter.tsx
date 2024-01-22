import React, { createContext, useState, useEffect, useRef, useContext } from 'react'
import classnames from 'classnames'

interface FilterContextProps {
  filterName: string
  filterValue: string
  setFilterValue: () => void
  filterWidth: string
  setFilterWidth: () => void
  filterLeft: string
  setFilterLeft: () => void
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
  const [currentWidth, setCurrentWidth] = useState('')
  const [currentLeft, setCurrentLeft] = useState('')

  return (
    <FilterContext.Provider
      value={{
        filterName: name,
        filterValue: currentValue,
        setFilterValue: setCurrentValue,
        filterWidth: currentWidth,
        setFilterWidth: setCurrentWidth,
        filterLeft: currentLeft,
        setFilterLeft: setCurrentLeft,
      }}
    >
      <div className={classNames}>{children}</div>
    </FilterContext.Provider>
  )
}

export const FilterToggle = ({ name, value, className, children }: FilterProps): React.JSX.Element => {
  const toggle = useRef<HTMLButtonElement>(null)
  const { filterName, filterValue, setFilterValue, setFilterWidth, setFilterLeft } = useContext(FilterContext)
  const classNames: string = classnames('cursor-pointer', filterValue === value ? 'filter-active' : null, className)

  const onClickHandler = (): void => {
    if (name === filterName) setFilterValue(value)
  }

  useEffect((): void => {
    if (value === filterValue) {
      const width: string = `${(toggle.current as HTMLElement).offsetWidth}px`
      const left: string = `${(toggle.current as HTMLElement).offsetLeft}px`

      setFilterWidth(width)
      setFilterLeft(left)
    }
  }, [filterValue])

  return (
    <button className={classNames} onClick={onClickHandler} ref={toggle}>
      {children}
    </button>
  )
}

export const FilterCategory = ({ name, value, className, children }: FilterProps): React.JSX.Element => {
  const { filterName, filterValue } = useContext(FilterContext)
  const absence: boolean = value.split(' ').includes(filterValue) === false
  const showAll: boolean = filterValue.toLowerCase() === 'all'

  const classNames: string = classnames(
    name === filterName && absence && !showAll ? 'hidden' : 'filter-show',
    className
  )

  return <div className={classNames}>{children}</div>
}
