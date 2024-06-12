<<<<<<< HEAD
import { Button } from '@/ui/Button'
import { Icon } from '@/ui/Icon'
import { Picture } from '@/ui/Picture'
import { getImagePreview } from '@/utils/getImagePreview'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

type Props = {
=======
import React, { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { getImagePreview } from '@utils/get-image-preview'
import { Error } from '@ui/Error'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Pack } from '@ui/Pack'
import { Picture } from '@ui/Picture'
import { Icon } from '@ui/Icon'

interface AvatarUploaderProps {
>>>>>>> 27b3cab9b863301a32b0f2db78f00eebdf1668df
  className?: string
  value?: string | File
  onChange?: (file: File) => void
  onRemove?: () => void
<<<<<<< HEAD
  maxSize?: number
}

export function AvatarUploader({
=======
}

export const AvatarUploader = ({
>>>>>>> 27b3cab9b863301a32b0f2db78f00eebdf1668df
  className,
  value,
  onChange,
  onRemove,
<<<<<<< HEAD
  maxSize = 2 * Math.pow(1024, 2),
}: Props) {
  const [src, setSrc] = useState<string>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (!value) {
      setSrc(undefined)
      return
    }

    if (typeof value === 'string') {
=======
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
>>>>>>> 27b3cab9b863301a32b0f2db78f00eebdf1668df
      setSrc(value)
      return
    }

    getImagePreview(value).then((dataurl) => {
      setSrc(dataurl)
    })
  }, [value])

<<<<<<< HEAD
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setError('Только изображения!')
      return
    }

    if (file?.size > maxSize) {
=======
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement
    const file = (input.files as FileList)[0] as File

    if (!file) {
      return
    } else if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setError('Только изображения!')
      return
    } else if (file?.size > 2 * Math.pow(1024, 2)) {
>>>>>>> 27b3cab9b863301a32b0f2db78f00eebdf1668df
      setError('Размер не более 2 мб!')
      return
    }

    setError(undefined)
    onChange?.(file)
  }

<<<<<<< HEAD
  function removeHandler() {
    onRemove?.()
  }

  return (
    <div
      className={classNames(
        'flex items-center justify-between xs:justify-start xs:gap-4 gap-2',
        className
      )}
    >
      <div className="bg-primary size-[52px] shrink-0 rounded-max flex overflow-hidden">
        {src ? (
          <Picture src={src} className="size-full object-cover" />
        ) : (
          <Icon className="text-white text-34 m-auto" id="user" />
        )}
      </div>
      <div className="relative">
        <Button
          as="label"
          className={`text-black text-14 sm:text-16 `}
          color="gray"
          variant="contur"
        >
          <input type="file" hidden onChange={changeHandler} />
          Загрузить новое
        </Button>
        {error && <div className="form-error visible opacity-100">{error}</div>}
      </div>
      <Button
        className="w-[52px] min-w-[52px] h-[52px] rounded-2"
        color="grey"
        size={null}
        onClick={removeHandler}
        disabled={!value}
      >
        <Icon className="text-red text-24" id="trash" />
=======
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
            className="hidden"
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
>>>>>>> 27b3cab9b863301a32b0f2db78f00eebdf1668df
      </Button>
    </div>
  )
}
