import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { useDownloadImage } from '@hooks/useDownloadImage'
import { Error } from '@ui/Error'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Pack } from '@ui/Pack'
import { Picture } from '@ui/Picture'
import { Icon } from '@ui/Icon'
import { Waved } from '@components/Waved'

const DownloadImageComponent = (
  { className }: React.HtmlHTMLAttributes<HTMLDivElement>,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const { inputFile, image, remove, error, value } = useDownloadImage()

  const classNames: string = twMerge(
    'flex',
    'items-center',
    'justify-between',
    'xs:justify-start',
    'xs:gap-4',
    'gap-2',
    className
  )

  return (
    <div className={classNames} ref={ref}>
      <Pack
        className="bg-primary w-[52px] min-w-[52px] rounded-full"
        size="box"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="text-4xl text-white" id="user" />
        </div>
        <Picture className="image" src="" ref={image} />
      </Pack>
      <div className="relative">
        <Button
          as="label"
          className={`text-black dark:text-white text-sm sm:text-base ${value ? 'pointer-events-none opacity-50' : ''}`}
          color="gray"
          variant="contur"
        >
          <Waved variant="dark" />
          <Input
            className="hidden"
            size={null}
            type="file"
            name="image"
            ref={inputFile}
          />
          {value ? 'Загружено' : 'Загрузить новое'}
        </Button>
        <Error ref={error}>Только изображения!</Error>
      </div>
      <Button
        className="w-[52px] min-w-[52px] h-[52px] rounded-lg"
        color="grey"
        disabled={!value}
        size={null}
        ref={remove}
      >
        <Waved variant="dark" />
        <Icon className="text-2xl text-red" id="trash" />
      </Button>
    </div>
  )
}

export const DownloadImage = forwardRef(
  DownloadImageComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>
