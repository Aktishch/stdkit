import React from 'react'
import { FilterContext, Filter, FilterToggle, FilterCategory } from '../contexts/Filter'
import { Title } from '../components/Title'
import { Subtitle } from '../components/Subtitle'
// import { Button } from '../components/Button'
import { Pack } from '../components/Pack'
import { Loader } from '../components/Loader'
import { Picture } from '../components/Picture'
import { Movement } from '../components/Movement'

export const Tabs = (): React.JSX.Element => {
  return (
    <section className="filtering container relative bg-white dark:bg-black text-white overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <Pack size={null} className="bg-grey dark:bg-dark h-full">
          <Loader />
          <Picture
            webp="img/pictures/town-grey.webp"
            src="img/pictures/town-grey.jpg"
            className="image"
            loading="lazy"
          />
        </Pack>
      </div>
      <div className="flex flex-col items-center relative">
        <Movement variant="blend" className="mb-3">
          <Title>Tabs</Title>
        </Movement>
        <Movement variant="blend" className="mb-5 md:mb-10">
          <Subtitle>Paralax, form and other...</Subtitle>
        </Movement>
        <Filter name="filtering" value="text" className="relative w-full max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-4 relative bg-grey md:bg-opacity-0 text-second md:text-white rounded-4 md:rounded-none md:border-b md:border-solid md:border-white overflow-hidden mb-5 md:mb-10 md:pb-4">
            <FilterToggle
              name="filtering"
              value="text"
              className="filtering__category flex-grow text-center text-20 w-full p-4 md:p-0"
            >
              Text-style
            </FilterToggle>
            <FilterToggle
              name="filtering"
              value="form"
              className="filtering__category flex-grow text-center text-20 w-full p-4 md:p-0"
            >
              Form-validate
            </FilterToggle>
            <FilterToggle
              name="filtering"
              value="switches"
              className="filtering__category flex-grow text-center text-20 w-full p-4 md:p-0"
            >
              Switches
            </FilterToggle>
            <FilterToggle
              name="filtering"
              value="file"
              className="filtering__category flex-grow text-center text-20 w-full p-4 md:p-0"
            >
              File
            </FilterToggle>
            <FilterContext.Consumer>
              {({ filterWidth, filterLeft }) => (
                <span
                  className="hidden md:block absolute left-0 bottom-0 bg-primary rounded-t-2 h-1 ease-linear duration-3"
                  style={{ width: filterWidth, left: filterLeft }}
                />
              )}
            </FilterContext.Consumer>
          </div>
          <div className="bg-white text-black rounded-6 shadow-md p-7 md:p-10">
            <FilterCategory name="filtering" value="text" className="filtering__card">
              Text
            </FilterCategory>
            <FilterCategory name="filtering" value="form" className="filtering__card">
              Form
            </FilterCategory>
            <FilterCategory name="filtering" value="switches" className="filtering__card">
              Switches
            </FilterCategory>
            <FilterCategory name="filtering" value="file" className="filtering__card">
              File
            </FilterCategory>
          </div>
        </Filter>
      </div>
    </section>
  )
}
