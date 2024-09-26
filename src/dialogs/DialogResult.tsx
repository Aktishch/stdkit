import { twMerge } from 'tailwind-merge'
import { Dialog, DialogProps, Icon } from '@components'

export interface DialogResultProps extends DialogProps {
  result: boolean
}

export const DialogResult = ({
  className,
  open,
  onClose,
  result,
}: DialogResultProps) => {
  const style: string = twMerge('max-w-80 card dark:bg-dark', className)

  return (
    <Dialog className={style} open={open} onClose={onClose}>
      <div className="items-center justify-center px-4 py-7 card-content">
        <Icon
          className={`text-9xl mb-5 ${result ? 'text-green' : 'text-red'}`}
          id={result ? 'success' : 'error'}
        />
        <h2 className="font-medium text-center uppercase mb-7 text-lg/normal">
          {result ? 'Успешно отправлено!' : 'Произошла ошибка :('}
        </h2>
        <button
          className="btn btn-primary btn-lg btn-fill"
          onClick={(): void => onClose(false)}
        >
          Закрыть
        </button>
      </div>
    </Dialog>
  )
}
