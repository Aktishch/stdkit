export const onInputName = (event: React.FormEvent<HTMLInputElement>): void => {
  const input = event.target as HTMLInputElement
  const regExp = /[0-9.,!@#$%^&*()-=_+`~{}/?<>|'"]/

  if (input.value.match(regExp)) input.value = input.value.replace(regExp, '')
}

export const onInputNumber = (event: React.FormEvent<HTMLInputElement>): void => {
  const input = event.target as HTMLInputElement

  input.value = input.value.replace(/^\.|[^\d.]|\.(?=.*\.)|^0+(?=\d)/g, '')
}
