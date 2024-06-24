import { useToggle } from '@hooks/useToggle'
import { IconInput } from '@ui/IconInput'
import { InputDefault, InputDefaultProps } from '@components/InputDefault'

export const InputPassword = ({ ...props }: InputDefaultProps) => {
  const [passwordValue, , , passwordToggle] = useToggle(true)

  return (
    <InputDefault
      type={passwordValue ? 'password' : 'text'}
      autoComplete="new-password"
      {...props}
    >
      <IconInput
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
