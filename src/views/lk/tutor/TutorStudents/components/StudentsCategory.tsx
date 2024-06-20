import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { FilteringCategory } from '@providers/Filtering'

interface StudentsCategoryProps extends Props {
  value: string
}

export const StudentsCategory = ({
  className,
  value,
  children,
}: StudentsCategoryProps) => {
  const style: string = twMerge(
    'px-1 text-black students__category text-opacity-70 active:transform-none after:content-auto after:absolute after:left-0 after:right-0 after:bottom-0 after:w-full after:h-px after:bg-primary after:invisible after:opacity-0 after:duration-200',
    className
  )

  return (
    <FilteringCategory
      className={style}
      color="grey"
      variant={null}
      waved="dark"
      name="students"
      value={value}
    >
      {children}
    </FilteringCategory>
  )
}
