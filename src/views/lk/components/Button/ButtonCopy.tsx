import { twMerge } from 'tailwind-merge'
import { useToggle } from '@hooks/useToggle'
import { ButtonProps } from '@ui/Button'
import { ButtonGrey } from '@views/lk/components/Button/ButtonGrey'

export const ButtonCopy = ({ className, value, onClick }: ButtonProps) => {
  const [copyValue, copyOn, copyOff] = useToggle()
  const style: string = twMerge('relative w-[52px] shrink-0', className)

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    navigator.clipboard.writeText(String(value))
    copyOn()
    setTimeout((): void => copyOff(), 1000)
    onClick?.(event)
  }

  return (
    <div className={style}>
      <ButtonGrey id="copy" disabled={copyValue} onClick={onClickHandler} />
      <span
        className={`absolute right-0 p-1 text-sm duration-300 bg-white rounded-md shadow-md top-full text-primary ${copyValue ? '' : 'invisible opacity-0'}`}
      >
        Скопировано
      </span>
    </div>
  )
}
