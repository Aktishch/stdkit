import { useRef, useEffect } from 'react'
import { useToggle } from '@hooks/useToggle'

export const useDownloadImage = () => {
  const { value, on, off } = useToggle({ status: false })
  const inputFile = useRef<HTMLInputElement>(null)
  const image = useRef<HTMLImageElement>(null)
  const remove = useRef<HTMLButtonElement>(null)
  const error = useRef<HTMLSpanElement>(null)

  useEffect((): (() => void) | undefined => {
    const inputFileCurrent = inputFile.current as HTMLInputElement
    const imageCurrent = image.current as HTMLImageElement
    const removeCurrent = remove.current as HTMLButtonElement
    const errorCurrent = error.current as HTMLSpanElement

    const imageHandler = (): void => {
      const files = inputFileCurrent.files as FileList
      const file = files[0] as File
      const readFile = new FileReader() as FileReader

      file ? readFile.readAsDataURL(file) : (imageCurrent.src = '')

      readFile.addEventListener('loadend', ((): void => {
        if (!['image/jpeg', 'image/png'].includes(file.type)) {
          errorCurrent.classList.add('visible', 'opacity-100')
          errorCurrent.innerText = 'Только изображения!'
          return
        } else if (file.size > 2 * Math.pow(1024, 2)) {
          errorCurrent.classList.add('visible', 'opacity-100')
          errorCurrent.innerText = 'Размер не более 2 мб!'
          return
        } else {
          errorCurrent.classList.remove('visible', 'opacity-100')
          imageCurrent.src = String(readFile.result)

          if (files.length !== 0) on()
        }
      }) as EventListener)
    }

    const imageRemove = (): void => {
      inputFileCurrent.value = ''
      imageCurrent.src = ''

      const files = inputFileCurrent.files as FileList

      if (files.length === 0) off()
    }

    inputFileCurrent.addEventListener('change', imageHandler as EventListener)
    removeCurrent.addEventListener('click', imageRemove as EventListener)

    return (): void => {
      inputFileCurrent.removeEventListener(
        'change',
        imageHandler as EventListener
      )
      removeCurrent.removeEventListener('click', imageRemove as EventListener)
    }
  }, [value])

  return { inputFile, image, remove, error, value }
}
