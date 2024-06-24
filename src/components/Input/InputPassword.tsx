import { useToggle } from '@hooks/useToggle'
import { FormIcon } from '@ui/Form/FormIcon'
import { InputDefault, InputDefaultProps } from '@components/Input/InputDefault'

export const InputPassword = ({ ...props }: InputDefaultProps) => {
  const [passwordValue, , , passwordToggle] = useToggle(true)

  return (
    <InputDefault
      type={passwordValue ? 'password' : 'text'}
      autoComplete="new-password"
      {...props}
    >
      <FormIcon
        className="pr-4 text-2xl text-black opacity-50"
        as="button"
        id={passwordValue ? 'eye-visible' : 'eye-hidden'}
        right={true}
        pointer={true}
        onClick={passwordToggle}
      />
    </InputDefault>
  )
}
