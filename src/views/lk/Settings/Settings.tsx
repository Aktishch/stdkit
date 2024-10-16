import { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DataForm } from '@utils'
import { useToggle } from '@hooks'
import {
  Title,
  LabelName,
  Error,
  InputText,
  InputTel,
  Select,
  SelectButton,
  AvatarUploader,
  ButtonSubmit,
} from '@components'
import { DialogResult } from '@dialogs'

export const Settings = () => {
  const [image, setImage] = useState<string | File | undefined>()
  const [work, setWork] = useState('Front-End')
  const [openDialogResult, setOpenDialogResult] = useState(false)
  const { register, handleSubmit, formState, setValue } = useForm<DataForm>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()

  const submitHandler: SubmitHandler<DataForm> = async (data: DataForm) => {
    loadingOn()
    data.image = image
    console.log(data)

    setTimeout(() => {
      loadingOff()
      setOpenDialogResult(true)
    }, 3000)
  }

  useEffect((): void => setValue('work', work), [work])

  return (
    <>
      <Title className="mb-6 sm:mb-10">Настройки</Title>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input type="hidden" value="Настройки" {...register('form')} />
        <AvatarUploader
          value={image}
          onChange={setImage}
          onClick={(): void => setImage(undefined)}
        />
        <label>
          <LabelName>Логин</LabelName>
          <div className="relative">
            <input
              className={`input input-primary input-lg dark:input-fade ${formState.errors.login?.message ? 'input-error' : ''}`}
              type="text"
              placeholder="Login"
              defaultValue="Login"
              {...register('login', { required: 'Введите логин' })}
            />
            {formState.errors.login?.message ? (
              <Error>{String(formState.errors.login?.message)}</Error>
            ) : null}
          </div>
        </label>
        <label>
          <LabelName>Фамилия</LabelName>
          <div className="relative">
            <InputText
              className={`input input-primary input-lg dark:input-fade ${formState.errors.surname?.message ? 'input-error' : ''}`}
              placeholder="Иванов"
              defaultValue="Актищев"
              {...register('surname', { required: 'Введите фамилию' })}
            />
            {formState.errors.surname?.message ? (
              <Error>{String(formState.errors.surname?.message)}</Error>
            ) : null}
          </div>
        </label>
        <label>
          <LabelName>Имя</LabelName>
          <div className="relative">
            <InputText
              className={`input input-primary input-lg dark:input-fade ${formState.errors.name?.message ? 'input-error' : ''}`}
              placeholder="Иван"
              defaultValue="Александр"
              {...register('name', { required: 'Введите имя' })}
            />
            {formState.errors.name?.message ? (
              <Error>{String(formState.errors.name?.message)}</Error>
            ) : null}
          </div>
        </label>
        <label>
          <LabelName>Отчество</LabelName>
          <div className="relative">
            <InputText
              className={`input input-primary input-lg dark:input-fade ${formState.errors.patronymic?.message ? 'input-error' : ''}`}
              placeholder="Иванович"
              defaultValue="Михайлович"
              {...register('patronymic', { required: 'Введите отчество' })}
            />
            {formState.errors.patronymic?.message ? (
              <Error>{String(formState.errors.patronymic?.message)}</Error>
            ) : null}
          </div>
        </label>
        <div>
          <LabelName>Должность</LabelName>
          <div className="relative">
            <Select
              className={`input input-primary input-lg dark:input-fade ${formState.errors.work?.message ? 'input-error' : ''}`}
              placeholder="Выберите должность"
              value={work}
              {...register('work', { required: 'Введите должность' })}
            >
              <SelectButton
                title="Директор"
                value={work}
                onClick={(): void => setWork('Директор')}
              >
                Директор
              </SelectButton>
              <SelectButton
                title="Project"
                value={work}
                onClick={(): void => setWork('Project')}
              >
                Project
              </SelectButton>
              <SelectButton
                title="Front-End"
                value={work}
                onClick={(): void => setWork('Front-End')}
              >
                Front-End
              </SelectButton>
              <SelectButton
                title="Back-end"
                value={work}
                onClick={(): void => setWork('Back-end')}
              >
                Back-end
              </SelectButton>
              <SelectButton
                title="Designer"
                value={work}
                onClick={(): void => setWork('Designer')}
              >
                Designer
              </SelectButton>
              <SelectButton
                title="SEO"
                value={work}
                onClick={(): void => setWork('SEO')}
              >
                SEO
              </SelectButton>
              <SelectButton
                title="Content"
                value={work}
                onClick={(): void => setWork('Content')}
              >
                Content
              </SelectButton>
            </Select>
            {formState.errors.work?.message ? (
              <Error>{String(formState.errors.work?.message)}</Error>
            ) : null}
          </div>
        </div>
        <label>
          <LabelName>Телефон</LabelName>
          <div className="relative">
            <InputTel
              className={`input input-primary input-lg dark:input-fade ${formState.errors.tel?.message ? 'input-error' : ''}`}
              defaultValue="+7 (988) 385-02-38"
              {...register('tel', {
                required: 'Введите номер телефона',
                minLength: {
                  value: 18,
                  message: 'Некорректный номер телефона',
                },
              })}
            />
            {formState.errors.tel?.message ? (
              <Error>{String(formState.errors.tel?.message)}</Error>
            ) : null}
          </div>
        </label>
        <label>
          <LabelName>E-Mail</LabelName>
          <div className="relative">
            <input
              className={`input input-primary input-lg dark:input-fade ${formState.errors.email?.message ? 'input-error' : ''}`}
              type="text"
              placeholder="email@.com"
              defaultValue="aktishch@gmail.com"
              {...register('email', {
                required: 'Введите e-mail',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Некорректный e-mail',
                },
              })}
            />
            {formState.errors.email?.message ? (
              <Error>{String(formState.errors.email?.message)}</Error>
            ) : null}
          </div>
        </label>
        <ButtonSubmit
          className="w-full btn btn-primary btn-lg btn-fill sm:max-w-60"
          load={loadingValue}
        >
          Сохранить изменения
        </ButtonSubmit>
      </form>
      <DialogResult
        open={openDialogResult}
        onClose={setOpenDialogResult}
        result={true}
      />
    </>
  )
}
