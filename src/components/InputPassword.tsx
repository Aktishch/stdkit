import { useToggle } from '@hooks/useToggle'
import { InputIcon } from '@ui/InputIcon'
import { InputDefault, InputDefaultProps } from '@components/InputDefault'

export const InputPassword = ({ ...props }: InputDefaultProps) => {
  const [passwordValue, , , passwordToggle] = useToggle(true)

  return (
    <InputDefault
      type={passwordValue ? 'password' : 'text'}
      autoComplete="new-password"
      {...props}
    >
      <InputIcon
        className="pr-4 text-2xl text-black opacity-50"
        id={passwordValue ? 'eye-visible' : 'eye-hidden'}
        right={true}
        pointer={true}
        onClick={passwordToggle}
      />
    </InputDefault>
  )
}
