import React from 'react'
import { colors } from '../data/colors'
import { FilterContext, Filter, FilterToggle, FilterCategory } from '../contexts/Filter'
import { Title } from '../components/Title'
import { Movement } from '../components/Movement'

export const Sorting = (): React.JSX.Element => {
  return (
    <section className="container container-xs flex flex-col items-center justify-center bg-white dark:bg-black">
      <Movement variant="blend" className="mb-5 md:mb-10">
        <Title>Sorting</Title>
      </Movement>
      <Filter name="sorting" value="all" className="filtering w-full max-w-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-4 relative bg-grey md:bg-opacity-0 text-second md:text-black dark:text-white rounded-4 md:rounded-none md:border-b md:border-solid md:border-black dark:md:border-white overflow-hidden mb-5 md:mb-10 md:pb-4">
          <FilterToggle
            name="sorting"
            value="all"
            className="filtering__category flex-grow text-center text-20 w-full p-4 md:p-0"
          >
            All
          </FilterToggle>
          <FilterToggle
            name="sorting"
            value="primary"
            className="filtering__category flex-grow text-center text-20 w-full p-4 md:p-0"
          >
            Primary
          </FilterToggle>
          <FilterToggle
            name="sorting"
            value="second"
            className="filtering__category flex-grow text-center text-20 w-full p-4 md:p-0"
          >
            Second
          </FilterToggle>
          <FilterToggle
            name="sorting"
            value="green"
            className="filtering__category flex-grow text-center text-20 w-full p-4 md:p-0"
          >
            Green
          </FilterToggle>
          <FilterToggle
            name="sorting"
            value="mix"
            className="filtering__category flex-grow text-center text-20 w-full p-4 md:p-0"
          >
            Mix
          </FilterToggle>
          <FilterContext.Consumer>
            {({ width, left }) => (
              <span
                className="hidden md:block absolute left-0 bottom-0 bg-primary rounded-t-2 h-1 ease-linear duration-3"
                style={{ width: width, left: left }}
              />
            )}
          </FilterContext.Consumer>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
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
