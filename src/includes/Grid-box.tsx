import React from 'react'
import { grid } from '../data/grid'
import { Title } from '../components/Title'
import { Subtitle } from '../components/Subtitle'
import { Pack } from '../components/Pack'
import { Loader } from '../components/Loader'
import { Picture } from '../components/Picture'

export const GridBox = (): React.JSX.Element => {
  return (
    <section className="container flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden">
      <Title className="mb-3">GridBox</Title>
      <Subtitle className="mb-5 md:mb-10">Columns and rows</Subtitle>
      <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8 w-full">
        {grid.map((item) => (
          <div className={item.row} key={item.id}>
            <Pack size="box" className="bg-grey dark:bg-dark rounded-3 shadow-md h-full">
              <Loader />
              <Picture
                webp="img/pictures/town.webp"
                src="img/pictures/town.jpg"
                className="image image-rise"
                loading="lazy"
              />
            </Pack>
          </div>
        ))}
      </div>
    </section>
  )
}
