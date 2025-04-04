import { Error, Icon, Preview } from '@components'
import { ImageUploaderProps, TSXComponent, uploadFile } from '@utils'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const ImageUploader = ({
  className,
  id = 'user',
  value,
  onChange,
  onClick,
}: ImageUploaderProps): TSXComponent => {
  const [src, setSrc] = useState<string | undefined>()
  const [error, setError] = useState<string | undefined>()
  const style: string = twMerge('flex items-center justify-between xs:justify-start xs:gap-4 gap-2', className)

  useEffect((): void => {
    if (!value) {
      setSrc(undefined)
      return
    } else if (typeof value === 'string') {
      setSrc(value)
      return
    }

    uploadFile(value).then(({ url }): void => setSrc(url))
  }, [value])

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement
    const file = (input.files as FileList)[0] as File

    if (!file) {
      return
    } else if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setError('Только (jpg, png)')
      return
    } else if (file?.size > 2 * Math.pow(1024, 2)) {
      setError('Размер не более 2мб')
      return
    }

    setError(undefined)
    onChange?.(file)
  }

  return (
    <div className={style}>
      <Preview src={src} id={id} />
      <div className="relative w-full max-w-36">
        <label
          className={`text-black dark:text-white text-base btn btn-gray btn-contur btn-lg ${value ? 'pointer-events-none opacity-50' : ''}`}
        >
          <input className="hidden" type="file" name="image" onChange={onChangeHandler} />
          {value ? 'Загружено' : 'Загрузить'}
        </label>
        {error !== undefined ? <Error>{error}</Error> : null}
      </div>
      <button className="size-[52px] shrink-0 btn rounded-md btn-grey btn-fill" disabled={!value} onClick={onClick}>
        <Icon className="text-2xl text-red" id="trash" />
      </button>
    </div>
  )
}
