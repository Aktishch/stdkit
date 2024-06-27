import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { Button, toast } from '@/ui'
import { InputDefault, InputPassword } from '@/components'
import { useAuth } from '@/service/auth/AuthContext'
import { useToggle } from '@/hooks'
import { Logo } from '@views/auth/components/Logo'
import { BorderButton } from '@views/auth/components/BorderButton'
import { Toggle } from './Login.Toggle'

export const Login = () => {
  const { mode } = useParams()
  const [loading, loadingStart, loadingEnd] = useToggle()
  const [errors, setErrors] = useState<LoginError['errors']>()
  const { register, handleSubmit, formState } = useForm<LoginPayload>()
  const { login } = useAuth()

  const submitHandler: SubmitHandler<LoginPayload> = async (data) => {
    loadingStart()
    setErrors(undefined)
    try {
      await login(data)
    } catch (error) {
      if (axios.isAxiosError<LoginError>(error)) {
        setErrors(error.response?.data.errors)
        toast.error(error.response?.data.message)
      }
    }
    loadingEnd()
  }

  return (
    <>
      <Logo />
      <form
        className="gap-6 flex flex-col"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex items-center border border-gray border-solid rounded-lg h-[52px] overflow-hidden">
          <Toggle mode="student">Студент</Toggle>
          <Toggle mode="mentor">Куратор</Toggle>
        </div>

        {/* Логин */}
        <InputDefault
          placeholder="Логин"
          error={formState.errors.login?.message || errors?.login?.toString()}
          {...register('login', { required: 'Введите логин' })}
        />

        {/* Пароль */}
        <InputPassword
          placeholder="Пароль"
          error={
            formState.errors.password?.message || errors?.password?.toString()
          }
          {...register('password', {
            required: 'Введите пароль',
            minLength: {
              value: 8,
              message: 'Минимальная длинна пароля 8 символов',
            },
          })}
        />

        <div className="flex">
          <BorderButton to="/recovery">
            Забыл пароль? А голову свою не забыл?
          </BorderButton>
        </div>
        <Button type="submit" disabled={loading}>
          Вход
        </Button>
      </form>
      {mode === 'student' && (
        <div className="flex items-center justify-center mt-8">
          <span className="mr-2 text-sm font-normal sm:text-base">
            Нет аккаунта?
          </span>
          <BorderButton to="/registration">Зарегистрируйтесь</BorderButton>
        </div>
      )}
    </>
  )
}
