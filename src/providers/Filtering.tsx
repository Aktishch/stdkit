import React, { ElementType, createContext, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Button, ButtonProps } from '@ui/Button'

interface FilteringContextProps {
  filteringName: string
  filteringValue: string
  setFilteringValue: React.Dispatch<React.SetStateAction<string>>
}

interface FilteringProps extends Props {
  name: string
  value: string
}

interface FilteringCategoryProps extends ButtonProps {
  name: string
  value: string
}

interface FilteringCardProps extends Props {
  as?: ElementType
  name: string
  value: string
}

const FilterContext = createContext<FilteringContextProps>(
  {} as FilteringContextProps
)
export const useFiltering = () => useContext(FilterContext)

export const Filtering = ({
  name,
  value,
  className,
  children,
}: FilteringProps) => {
  const [filteringValue, setFilteringValue] = useState(value)
  const style: string = twMerge(className)

  return (
    <FilterContext.Provider
      value={{
        filteringName: name,
        filteringValue,
        setFilteringValue,
      }}
    >
      <div className={style}>{children}</div>
    </FilterContext.Provider>
  )
}

export const FilteringCategory = ({
  name,
  value,
  className,
  onClick,
  children,
  ...props
}: FilteringCategoryProps) => {
  const { filteringName, filteringValue, setFilteringValue } = useFiltering()
  const style: string = twMerge(
    filteringValue === value ? 'filtering-active' : null,
    className
  )

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (name === filteringName) setFilteringValue(value)
    onClick?.(event)
  }

  return (
    <Button className={style} onClick={onClickHandler} {...props}>
      {children}
    </Button>
  )
}

export const FilteringCard = ({
  as: Tag = 'div',
  name,
  value,
  className,
  children,
}: FilteringCardProps) => {
  const { filteringName, filteringValue } = useFiltering()
  const absence: boolean = value.split(' ').includes(filteringValue) === false
  const showAll: boolean = filteringValue.toLowerCase() === 'all'
  const style: string = twMerge(
    name === filteringName && absence && !showAll ? 'hidden' : '',
    className
  )

  return <Tag className={style}>{children}</Tag>
}
