import React, { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { Props, getImagePreview } from '@utils'
import { Icon, Picture, InputError } from '@components'

export interface AvatarUploaderProps extends Props {
  value?: string | File
  onChange?: (file: File) => void
  onClick?: () => void
}

export const AvatarUploader = ({
  className,
  value,
  onChange,
  onClick,
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

    getImagePreview(value).then((dataurl: string): void => setSrc(dataurl))
  }, [value])

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement
    const file = (input.files as FileList)[0] as File

    if (!file) {
      return
    } else if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setError('Только изображения (jpg, png)')
      return
    } else if (file?.size > 2 * Math.pow(1024, 2)) {
      setError('Размер не более 2 мб')
      return
    }

    setError(undefined)
    onChange?.(file)
  }

  return (
    <div className={style}>
      <div className="bg-primary w-[52px] shrink-0 rounded-full pack pack-xl">
        {src !== undefined ? (
          <Picture className="image" src={src} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="text-4xl text-white" id="user" />
          </div>
        )}
      </div>
      <div className="relative">
        <label
          className={`text-black dark:text-white text-sm sm:text-base btn btn-gray btn-contur btn-lg ${value ? 'pointer-events-none opacity-50' : null}`}
        >
          <input
            className="hidden"
            type="file"
            name="image"
            onChange={onChangeHandler}
          />
          {value ? 'Загружено' : 'Загрузить новое'}
        </label>
        {error !== undefined ? <InputError>{error}</InputError> : null}
      </div>
      <button
        className="w-[52px] shrink-0 px-0 btn btn-lg btn-grey btn-fill"
        disabled={!value}
        onClick={onClick}
      >
        <Icon className="text-2xl text-red" id="trash" />
      </button>
    </div>
  )
}
