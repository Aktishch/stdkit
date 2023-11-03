import React, { useRef } from 'react'
import { social } from '../data/social'
import { useToggle } from '../hooks/useToggle'
import { useDraggable } from '../hooks/useDraggable'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'

export const SocialToggle = (): React.JSX.Element => {
  const { value, toggle } = useToggle({ status: false })
  const { drag, position } = useDraggable('social')
  const lastTap = useRef<number>(0)

  const positionItemHandler = (id: number) => {
    return {
      top: (42 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / social.length) * id * Math.PI)).toFixed(4) + '%',
      left: (42 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / social.length) * id * Math.PI)).toFixed(4) + '%',
    }
  }

  const onDoubleTapHandler = (): void => {
    const timeSince: number = new Date().getTime() - lastTap.current

    if (timeSince < 300 && timeSince > 0) toggle()

    lastTap.current = new Date().getTime()
  }

  return (
    <div
      className="flex flex-col items-center justify-center fixed z-2 left-0 bottom-10 rounded-max pointer-events-none touch-none select-none w-48 h-48"
      style={{
        transform: `translate(${position.left}px, ${position.top}px)`,
      }}
    >
      <div
        className={`absolute inset-0 bg-primary bg-opacity-30 rounded-max ${
          value ? '' : 'opacity-0 scale-0 -rotate-180'
        } overflow-hidden pointer-events-auto ease-in-out duration-4`}
      >
        {social.map((item) => (
          <div className="absolute" key={item.id} style={positionItemHandler(item.id)}>
            <Button
              as="a"
              color="second"
              size={null}
              variant={null}
              className="text-30 rounded-max"
              href="/"
              target={true}
            >
              <Icon className="text-30" id={item.icon} />
            </Button>
          </div>
        ))}
      </div>
      <Button
        color="primary"
        variant="contur"
        size={null}
        className="rounded-max shadow-md overflow-hidden pointer-events-auto w-10 h-10 p-1 after:content-auto after:block after:bg-current after:rounded-inherit after:w-full after:h-full"
        onClick={onDoubleTapHandler}
        ref={drag}
      />
    </div>
  )
}
