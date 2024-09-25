import { SubmitHandler, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { useToggle } from '@hooks'
import { Dialog, DialogProps, Icon, ButtonSubmit } from '@components'

type DialogDismissal = {
  form: string
  employee: string
  date: string
}

interface DialogDismissalProps extends DialogProps {
  employee: string
}

export const DialogDismissal = ({
  className,
  open,
  onClose,
  employee,
}: DialogDismissalProps) => {
  const { register, handleSubmit } = useForm<DialogDismissal>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()
  const style: string = twMerge('max-w-80 card dark:bg-dark', className)

  const submitHandler: SubmitHandler<DialogDismissal> = async (
    data: DialogDismissal
  ) => {
    loadingOn()
    console.log(data)

    setTimeout(() => {
      loadingOff()
    }, 3000)
  }

  return (
    <Dialog className={style} open={open} onClose={onClose}>
      <div className="items-center justify-center px-4 text-center py-7 card-content">
        <div className="flex items-center justify-center mb-6 size-28 bg-grey dark:bg-black/40 rounded-xl">
          <Icon className="text-6xl text-gray" id="user"></Icon>
        </div>
        <h2 className="mb-2 font-medium text-lg/normal">
          Вы точно хотите уволить сотрудника?
        </h2>
        <p className="mb-6 font-normal text-sm/normal opacity-60">
          (Вся информация о сотруднике останется в базе данных)
        </p>
        <form
          className="grid w-full grid-cols-2 gap-4"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input type="hidden" value="Увольнение" {...register('form')} />
          <input type="hidden" value={employee} {...register('employee')} />
          <input
            type="hidden"
            value={new Date().toLocaleDateString()}
            {...register('date')}
          />
          <ButtonSubmit
            className="flex-grow btn btn-red btn-fill btn-lg"
            load={loadingValue}
          >
            Уволить
          </ButtonSubmit>
          <button
            className="flex-grow btn btn-primary btn-fade btn-lg"
            type="button"
            onClick={(): void => onClose(false)}
          >
            Отмена
          </button>
        </form>
      </div>
    </Dialog>
  )
}
