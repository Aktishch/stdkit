import { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { useToggle } from '@hooks'
import {
  Dialog,
  DialogProps,
  Icon,
  ButtonSubmit,
  ButtonRating,
} from '@components'

type DialogRating = {
  form: string
  rating: number
}

interface DialogRemoveProps extends DialogProps {
  // employee: string
}

export const DialogRating = ({
  className,
  open,
  onClose,
}: DialogRemoveProps) => {
  const [rating, setRating] = useState(0)
  const { register, handleSubmit, setValue } = useForm<DialogRating>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()
  const style: string = twMerge('max-w-80 card dark:bg-dark', className)

  const submitHandler: SubmitHandler<DialogRating> = async (
    data: DialogRating
  ) => {
    loadingOn()
    console.log(data)

    setTimeout(() => {
      loadingOff()
    }, 3000)
  }

  useEffect((): void => {
    setValue('rating', rating)
  }, [rating])

  return (
    <Dialog className={style} open={open} onClose={onClose}>
      <div className="items-center justify-center px-4 py-7 card-content">
        <div className="flex items-center justify-center mb-6 size-28 bg-grey dark:bg-primary rounded-xl">
          <Icon className="text-6xl text-primary color-yellow" id="star"></Icon>
        </div>
        <h2 className="mb-6 font-medium text-center text-lg/normal">
          Оцените работу сотрудника за данный период
        </h2>
        <form
          className="flex flex-col w-full gap-6"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input type="hidden" value="Рейтинг" {...register('form')} />
          <input type="hidden" value={rating} {...register('rating')} />
          <div className="flex flex-row-reverse items-center justify-center gap-4">
            <ButtonRating
              value={5}
              rating={rating}
              onClick={(): void => setRating(5)}
            />
            <ButtonRating
              value={4}
              rating={rating}
              onClick={(): void => setRating(4)}
            />
            <ButtonRating
              value={3}
              rating={rating}
              onClick={(): void => setRating(3)}
            />
            <ButtonRating
              value={2}
              rating={rating}
              onClick={(): void => setRating(2)}
            />
            <ButtonRating
              value={1}
              rating={rating}
              onClick={(): void => setRating(1)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ButtonSubmit
              className="flex-grow btn btn-primary btn-fill btn-lg"
              load={loadingValue}
            >
              Сохранить
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
