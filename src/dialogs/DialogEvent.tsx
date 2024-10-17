import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { DataForm } from '@utils'
import { useToggle } from '@hooks'
import {
  Dialog,
  DialogProps,
  Title,
  LabelName,
  Error,
  InputCalendar,
  AvatarUploader,
  ButtonSubmit,
} from '@components'

export interface DialogEventProps extends DialogProps {
  openResult?: () => void
}

export const DialogEvent = ({
  className,
  open,
  onClose,
  openResult,
}: DialogEventProps) => {
  const [image, setImage] = useState<string | File | undefined>()
  const { register, handleSubmit, formState, setValue, reset } =
    useForm<DataForm>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()
  const style: string = twMerge('max-w-md card dark:bg-dark', className)

  const submitHandler: SubmitHandler<DataForm> = async (data: DataForm) => {
    loadingOn()
    data.image = image
    console.log(data)

    setTimeout(() => {
      loadingOff()
      reset()
      onClose(false)
      openResult?.()
    }, 3000)
  }

  return (
    <Dialog className={style} open={open} onClose={onClose}>
      <div className="px-4 py-6 bg-grey dark:bg-black/40">
        <Title className="text-center">Создать мероприятие</Title>
      </div>
      <div className="px-4 pt-6 pb-10 sm:px-8 card-content">
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input
            type="hidden"
            value="Создать мероприятие"
            {...register('form')}
          />
          <AvatarUploader
            value={image}
            onChange={setImage}
            onClick={(): void => setImage(undefined)}
          />
          <div>
            <LabelName>Дата мероприятия</LabelName>
            <div className="relative">
              <InputCalendar
                className={`input input-calendar input-primary input-lg dark:input-fade ${formState.errors.date?.message ? 'input-error' : ''}`}
                setValue={setValue}
                {...register('date', {
                  required: 'Укажите дату',
                })}
              />
              {formState.errors.date?.message ? (
                <Error>{String(formState.errors.date?.message)}</Error>
              ) : null}
            </div>
          </div>
          <label>
            <LabelName>Мероприятие</LabelName>
            <div className="relative">
              <input
                className={`input input-primary input-lg dark:input-fade ${formState.errors.title?.message ? 'input-error' : ''}`}
                type="text"
                placeholder="Название мероприятия"
                {...register('title', { required: 'Введите название' })}
              />
              {formState.errors.title?.message ? (
                <Error>{String(formState.errors.title?.message)}</Error>
              ) : null}
            </div>
          </label>
          <label>
            <LabelName>Описание</LabelName>
            <div className="relative">
              <textarea
                className={`input input-primary input-lg dark:input-fade h-40 ${formState.errors.title?.message ? 'input-error' : ''}`}
                placeholder="Краткое описание мероприятия"
                {...register('text', {
                  required: 'Введите описание',
                  minLength: {
                    value: 40,
                    message: 'Минимальная длинна пароля 40 символов',
                  },
                })}
              />
              {formState.errors.text?.message ? (
                <Error>{String(formState.errors.text?.message)}</Error>
              ) : null}
            </div>
          </label>
          <ButtonSubmit
            className="btn btn-primary btn-lg btn-fill"
            load={loadingValue}
          >
            Создать
          </ButtonSubmit>
        </form>
      </div>
    </Dialog>
  )
}
