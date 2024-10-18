import { SubmitHandler, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { DataForm } from '@utils'
import { useToggle } from '@hooks'
import { Dialog, DialogProps, Icon, ButtonSubmit } from '@components'

export interface DialogRecoverProps extends DialogProps {
  employee: string
}

export const DialogRecover = ({
  className,
  open,
  onClose,
  employee,
}: DialogRecoverProps) => {
  const { register, handleSubmit } = useForm<DataForm>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()
  const style: string = twMerge(
    'max-w-96 card dark:bg-dark overflow-visible',
    className
  )

  const submitHandler: SubmitHandler<DataForm> = async (data: DataForm) => {
    loadingOn()
    console.log(data)

    setTimeout(() => {
      loadingOff()
    }, 3000)
  }

  return (
    <Dialog className={style} open={open} onClose={onClose}>
      <div className="items-center justify-center px-4 py-7 card-content">
        <div className="flex items-center justify-center mb-6 size-28 bg-grey dark:bg-black/40 rounded-xl">
          <Icon className="text-6xl text-gray" id="user"></Icon>
        </div>
        <h2 className="mb-6 font-medium text-center text-lg/normal">
          Вы точно хотите восстановить <br /> этого сотрудника?
        </h2>
        <form
          className="flex flex-col w-full gap-6"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input type="hidden" value="Восстановить" {...register('form')} />
          <input type="hidden" value={employee} {...register('employee')} />
          <div className="grid w-full grid-cols-2 gap-4">
            <ButtonSubmit
              className="flex-grow btn btn-primary btn-fill btn-lg"
              load={loadingValue}
            >
              Восстановить
            </ButtonSubmit>
            <button
              className="flex-grow btn btn-primary btn-fade btn-lg"
              type="button"
              onClick={(): void => onClose(false)}
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  )
}
