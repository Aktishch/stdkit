import { SubmitHandler, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { DataForm } from '@utils'
import { useToggle } from '@hooks'
import {
  Dialog,
  DialogProps,
  Icon,
  LabelName,
  InputCalendar,
  ButtonSubmit,
} from '@components'

export interface DialogDismissalProps extends DialogProps {
  employee: string
}

export const DialogDismissal = ({
  className,
  open,
  onClose,
  employee,
}: DialogDismissalProps) => {
  const { register, handleSubmit, formState, setValue } = useForm<DataForm>()
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
        <h2 className="mb-2 font-medium text-center text-lg/normal">
          Вы точно хотите уволить этого сотрудника?
        </h2>
        <p className="mb-6 font-normal text-center text-sm/normal opacity-60">
          (Вся информация о сотруднике <br /> останется в базе данных)
        </p>
        <form
          className="flex flex-col w-full gap-6"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input type="hidden" value="Увольнение" {...register('form')} />
          <input type="hidden" value={employee} {...register('employee')} />
          <div>
            <LabelName>Дата увольнения</LabelName>
            <div className="relative">
              <InputCalendar
                className={`input input-calendar input-primary input-lg dark:input-fade ${formState.errors.date?.message ? 'input-error' : null}`}
                setValue={setValue}
                {...register('date', {
                  required: 'Укажите дату',
                })}
              />
              {formState.errors.date?.message ? (
                <span className="error">
                  {String(formState.errors.date?.message)}
                </span>
              ) : null}
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-4">
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
          </div>
        </form>
      </div>
    </Dialog>
  )
}
