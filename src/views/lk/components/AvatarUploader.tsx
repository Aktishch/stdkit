import React, { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { getImagePreview } from '@utils/get-image-preview'
import { Pack } from '@ui/Pack'
import { Picture } from '@ui/Picture'
import { Icon } from '@ui/Icon'
import { Input } from '@ui/Input'
import { Error } from '@ui/Error'
import { Button } from '@ui/Button'

interface AvatarUploaderProps {
  className?: string
  value?: string | File
  onChange?: (file: File) => void
  onRemove?: () => void
}

export const AvatarUploader = ({
  className,
  value,
  onChange,
  onRemove,
}: AvatarUploaderProps) => {
  const [src, setSrc] = useState<string | undefined>()
  const [error, setError] = useState<string | undefined>()
  const style: string = twMerge(
    'flex items-center justify-between xs:justify-start xs:gap-4 gap-2',
    className
  )

  useEffect((): void => {
    if (!value) {
      setSrc(undefined)
      return
    } else if (typeof value === 'string') {
      setSrc(value)
      return
    }

    getImagePreview(value).then((dataurl) => {
      setSrc(dataurl)
    })
  }, [value])

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement
    const file = (input.files as FileList)[0] as File

    if (!file) {
      return
    } else if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setError('Только изображения!')
      return
    } else if (file?.size > 2 * Math.pow(1024, 2)) {
      setError('Размер не более 2 мб!')
      return
    }

    setError(undefined)
    onChange?.(file)
  }

  return (
    <div className={style}>
      <Pack className="bg-primary w-[52px] shrink-0 rounded-full" size="box">
        {src !== undefined ? (
          <Picture className="image" src={src} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="text-4xl text-white" id="user" />
          </div>
        )}
      </Pack>
      <div className="relative">
        <Button
          as="label"
          className={`text-black dark:text-white text-sm sm:text-base ${value ? 'pointer-events-none opacity-50' : ''}`}
          color="gray"
          variant="contur"
          waved="dark"
        >
          <Input
            size={null}
            type="file"
            name="image"
            onChange={onChangeHandler}
          />
          {value ? 'Загружено' : 'Загрузить новое'}
        </Button>
        {error !== undefined ? <Error>{error}</Error> : ''}
      </div>
      <Button
        className="w-[52px] shrink-0 h-[52px] rounded-lg"
        color="grey"
        disabled={!value}
        size={null}
        onClick={onRemove}
        waved="dark"
      >
        <Icon className="text-2xl text-red" id="trash" />
      </Button>
    </div>
  )
}
