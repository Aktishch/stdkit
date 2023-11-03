import React, { useState, useRef, useEffect, createElement } from 'react'
import { Picture } from '../components/Picture'
import { Title } from '../components/Title'
import { Button } from '../components/Button'

export const Main = (): React.JSX.Element => {
  const [snowflakes, setSnowflakes] = useState([])
  const block = useRef<HTMLDivElement>(null)
  // const array = useRef([])
  const flag = useRef<boolean>(true)

  const onMousemoveHandler = (event: MouseEvent): void => {
    if (!flag.current) return

    flag.current = false

    setTimeout((): boolean => (flag.current = true), 300)

    const size: number = Math.random() * 60
    const coordinates = {
      top: event.clientY,
      left: event.clientX,
    }

    const snowflake = {
      top: `${coordinates.top}px`,
      left: `${coordinates.left}px`,
      width: `${20 + size}px`,
      height: `${20 + size}px`,
    }

    // setSnowflakes(snowflakes.push(snowflake))

    console.log(snowflake)

    // const snowflake = createElement('span', {
    //   className: 'snowflake',
    //   style: {
    //     top: `${coordinates.top}px`,
    //     left: `${coordinates.left}px`,
    //     width: `${20 + size}px`,
    //     height: `${20 + size}px`,
    //   },
    // })

    // console.log(snowflake)

    // setSnowflakes(snowflakes.push(snowflake))

    // console.log(snowflakes)

    // setTimeout((): void => setSnowflakes(snowflakes.shift(snowflakes)), 3000)

    // console.log(snowflakes)

    // array.push(snowflake)

    // const snowflake = createElement('span', {
    //   className: 'snowflake',
    //   style: {
    //     top: `${coordinates.top}px`,
    //     left: `${coordinates.left}px`,
    //     width: `${20 + size}px`,
    //     height: `${20 + size}px`,
    //   },
    // })

    // setArray(array.push(snowflake))

    // console.log(array)

    // setTimeout((): void => setArray(array.shift(snowflake)), 3000)

    // console.log(array)

    // array.map((item) => console.log(item))

    // array.current.push(snowflake)

    // console.log(array.current)

    // setTimeout((): void => array.current.shift(), 3000)

    // console.log(array.current)

    // setArray([snowflake])
    // setArray(array.appendChild(snowflake))

    // console.log(array)

    // const snowflake = document.createElement('span') as HTMLSpanElement
    // const size: number = Math.random() * 60
    // const coordinates = {
    //   top: event.clientY,
    //   left: event.clientX,
    // }

    // snowflake.classList.add('snowflake')
    // snowflake.style.width = `${20 + size}px`
    // snowflake.style.height = `${20 + size}px`
    // snowflake.style.top = `${coordinates.top}px`
    // snowflake.style.left = `${coordinates.left}px`
    // block.current?.appendChild(snowflake)
    // setTimeout((): void => snowflake.remove(), 3000)
  }

  useEffect((): (() => void) | undefined => {
    document.addEventListener('mousemove', onMousemoveHandler as EventListener)

    return (): void => document.removeEventListener('mousemove', onMousemoveHandler as EventListener)
  }, [])

  return (
    <>
      <div className="fixed inset-0 z-5 pointer-events-none" ref={block}>
        {/* {snowflakes.map((snowflake) => (
          <span className="snowflake" style={snowflake}></span>
        ))} */}
      </div>
      <section className="container flex flex-col items-center justify-center bg-white dark:bg-black min-h-[500px] xl:min-h-[600px]">
        <Picture src="img/pictures/logo.svg" className="block mb-10" loading="eager" />
        <Title className="mb-5 md:mb-10">Main block</Title>
        <Button as="a" color="primary" effect="glow" className="w-full max-w-[200px] mx-auto" href="#block">
          Show more
        </Button>
      </section>
    </>
  )
}
