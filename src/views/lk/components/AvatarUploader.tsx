import { Button } from '@/ui/Button'
import { Icon } from '@/ui/Icon'
import { Picture } from '@/ui/Picture'
import { getImagePreview } from '@/utils/getImagePreview'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

type Props = {
  className?: string
  value?: string | File
  onChange?: (file: File) => void
  onRemove?: () => void
  maxSize?: number
}

export function AvatarUploader({
  className,
  value,
  onChange,
  onRemove,
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
      setSrc(value)
      return
    }

    getImagePreview(value).then((dataurl) => {
      setSrc(dataurl)
    })
  }, [value])

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setError('Только изображения!')
      return
    }

    if (file?.size > maxSize) {
      setError('Размер не более 2 мб!')
      return
    }

    setError(undefined)
    onChange?.(file)
  }

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
      </Button>
    </div>
  )
}
