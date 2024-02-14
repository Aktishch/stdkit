import React from 'react'
import { colors } from '../data/colors'
import { FilterContext, Filter, FilterToggle, FilterCategory } from '../contexts/Filter'
import { Title } from '../components/Title'
import { Movement } from '../components/Movement'

export const Sorting = (): React.JSX.Element => {
  return (
    <section className="container flex flex-col items-center justify-center bg-white container-xs dark:bg-black">
      <Movement variant="blend" className="mb-5 md:mb-10">
        <Title>Sorting</Title>
      </Movement>
      <Filter name="sorting" value="all" className="w-full max-w-xl mx-auto filtering">
        <div className="relative flex flex-col items-center justify-between gap-0 mb-5 overflow-hidden md:flex-row md:gap-4 bg-grey md:bg-opacity-0 text-second md:text-black dark:text-white rounded-4 md:rounded-none md:border-b md:border-solid md:border-black dark:md:border-white md:mb-10 md:pb-4">
          <FilterToggle
            name="sorting"
            value="all"
            className="flex-grow w-full p-4 text-center filtering__category text-20 md:p-0"
          >
            All
          </FilterToggle>
          <FilterToggle
            name="sorting"
            value="primary"
            className="flex-grow w-full p-4 text-center filtering__category text-20 md:p-0"
          >
            Primary
          </FilterToggle>
          <FilterToggle
            name="sorting"
            value="second"
            className="flex-grow w-full p-4 text-center filtering__category text-20 md:p-0"
          >
            Second
          </FilterToggle>
          <FilterToggle
            name="sorting"
            value="green"
            className="flex-grow w-full p-4 text-center filtering__category text-20 md:p-0"
          >
            Green
          </FilterToggle>
          <FilterToggle
            name="sorting"
            value="mix"
            className="flex-grow w-full p-4 text-center filtering__category text-20 md:p-0"
          >
            Mix
          </FilterToggle>
          <FilterContext.Consumer>
            {({ width, left }) => (
              <span
                className="absolute bottom-0 left-0 hidden h-1 ease-linear md:block bg-primary rounded-t-2 duration-3"
                style={{ width: width, left: left }}
              />
            )}
          </FilterContext.Consumer>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-10">
          {colors.map((item) => (
            <FilterCategory
              name="sorting"
              value={item.value}
              className={`filtering__card ${item.bg} py-10`}
              key={item.id}
            ></FilterCategory>
          ))}
        </div>
      </Filter>
    </section>
  )
}
