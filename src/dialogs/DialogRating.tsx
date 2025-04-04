import { ButtonRating, ButtonSubmit, Dialog, Icon } from '@components'
import { useToggle } from '@hooks'
import { DataForm, DialogRatingProps, TSXComponent } from '@utils'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

export const DialogRating = ({ className, open, onClose, item }: DialogRatingProps): TSXComponent => {
  const [rating, setRating] = useState(0)
  const { register, handleSubmit, setValue } = useForm<DataForm>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()
  const { name, period } = item
  const style: string = twMerge('max-w-80 card dark:bg-dark', className)

  const submitHandler: SubmitHandler<DataForm> = async (data: DataForm): Promise<void> => {
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
          Оцените работу сотрудника <br /> за данный период
        </h2>
        <form className="flex flex-col w-full gap-6" onSubmit={handleSubmit(submitHandler)}>
          <input type="hidden" value="Рейтинг" {...register('form')} />
          <input type="hidden" value={name} {...register('name')} />
          <input type="hidden" value={period} {...register('period')} />
          <input type="hidden" value={rating} {...register('rating')} />
          <div className="flex flex-row-reverse items-center justify-center gap-4">
            <ButtonRating value={5} rating={rating} onClick={(): void => setRating(5)} />
            <ButtonRating value={4} rating={rating} onClick={(): void => setRating(4)} />
            <ButtonRating value={3} rating={rating} onClick={(): void => setRating(3)} />
            <ButtonRating value={2} rating={rating} onClick={(): void => setRating(2)} />
            <ButtonRating value={1} rating={rating} onClick={(): void => setRating(1)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ButtonSubmit className="grow btn btn-primary btn-fill btn-lg" load={loadingValue}>
              Сохранить
            </ButtonSubmit>
            <button className="grow btn btn-primary btn-fade btn-lg" type="button" onClick={(): void => onClose(false)}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  )
}
