import { SubmitHandler, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { useToggle } from '@hooks'
import { Dialog, DialogProps, Icon, ButtonSubmit } from '@components'

type DialogRemove = {
  form: string
  employee: string
}

interface DialogRemoveProps extends DialogProps {
  employee: string
}

export const DialogRemove = ({
  className,
  open,
  onClose,
  employee,
}: DialogRemoveProps) => {
  const { register, handleSubmit } = useForm<DialogRemove>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()
  const style: string = twMerge('max-w-80 card dark:bg-dark', className)

  const submitHandler: SubmitHandler<DialogRemove> = async (
    data: DialogRemove
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
        <div className="flex items-center justify-center mb-6 size-28 bg-red/40 rounded-xl">
          <Icon className="text-6xl text-red" id="trash"></Icon>
        </div>
        <h2 className="mb-2 font-medium text-lg/normal">
          Вы точно хотите удалить сотрудника?
        </h2>
        <p className="mb-6 font-normal text-sm/normal opacity-60">
          (Вся информация о сотруднике будет удалена)
        </p>
        <form
          className="grid w-full grid-cols-2 gap-4"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input type="hidden" value="Удаление" {...register('form')} />
          <input type="hidden" value={employee} {...register('employee')} />
          <ButtonSubmit
            className="flex-grow btn btn-red btn-fill btn-lg"
            load={loadingValue}
          >
            Удалить
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
