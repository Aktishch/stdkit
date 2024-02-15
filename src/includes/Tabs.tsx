import React from 'react'
import { FilterContext, Filter, FilterToggle, FilterCategory } from '../contexts/Filter'
import { Title } from '../components/Title'
import { Subtitle } from '../components/Subtitle'
// import { Button } from '../components/Button'
import { Cover } from '../components/Cover'
import { Input } from '../components/Input'
import { Pack } from '../components/Pack'
import { Loader } from '../components/Loader'
import { Picture } from '../components/Picture'
import { Movement } from '../components/Movement'

export const Tabs = (): React.JSX.Element => {
  return (
    <section className="container relative min-h-screen overflow-hidden text-white bg-white filtering dark:bg-black">
      <div className="absolute inset-0">
        <Pack size={null} className="h-full bg-grey dark:bg-dark">
          <Loader />
          <Picture
            webp="img/pictures/town-grey.webp"
            src="img/pictures/town-grey.jpg"
            className="image"
            loading="lazy"
          />
        </Pack>
      </div>
      <div className="relative flex flex-col items-center">
        <Movement variant="blend" className="mb-3">
          <Title>Tabs</Title>
        </Movement>
        <Movement variant="blend" className="mb-5 md:mb-10">
          <Subtitle>Paralax, form and other...</Subtitle>
        </Movement>
        <Filter name="filtering" value="form" className="relative w-full max-w-xl mx-auto">
          <div className="relative flex flex-col items-center justify-between gap-0 mb-5 overflow-hidden md:flex-row md:gap-4 bg-grey md:bg-opacity-0 text-second md:text-white rounded-4 md:rounded-none md:border-b md:border-solid md:border-white md:mb-10 md:pb-4">
            <FilterToggle
              name="filtering"
              value="text"
              className="flex-grow w-full p-4 text-center filtering__category text-20 md:p-0"
            >
              Text-style
            </FilterToggle>
            <FilterToggle
              name="filtering"
              value="form"
              className="flex-grow w-full p-4 text-center filtering__category text-20 md:p-0"
            >
              Form-validate
            </FilterToggle>
            <FilterToggle
              name="filtering"
              value="switches"
              className="flex-grow w-full p-4 text-center filtering__category text-20 md:p-0"
            >
              Switches
            </FilterToggle>
            <FilterToggle
              name="filtering"
              value="file"
              className="flex-grow w-full p-4 text-center filtering__category text-20 md:p-0"
            >
              File
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
          <div className="text-black bg-white shadow-md rounded-6 p-7 md:p-10">
            <FilterCategory name="filtering" value="text" className="filtering__card">
              <ul className="flex flex-col gap-4 list-disc list-inside text-primary">
                <li>
                  <div className="inline-block text-second text-36">
                    --text-<span>36</span>
                  </div>
                </li>
              </ul>
            </FilterCategory>
            <FilterCategory name="filtering" value="form" className="filtering__card">
              <Cover className="mb-5">
                <Input name="name" />
              </Cover>
              {/* <Cover className="mb-5">
                <Input tag="textarea" name="text" className="h-48" />
              </Cover>
              <Cover className="mb-5">
                <Input tag="select" name="select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Input>
              </Cover> */}
              <Input type="hidden" />
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
