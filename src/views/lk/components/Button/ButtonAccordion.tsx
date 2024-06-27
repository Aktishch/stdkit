import { twMerge } from 'tailwind-merge'
import { ButtonProps } from '@ui/Button'
import { Menu, MenuButton } from '@/ui/Menu/Menu'
import { MenuItems } from '@/ui/Menu/MenuItems'
import { ButtonToggle } from '@views/lk/components/Button/ButtonToggle'
import { ButtonSmall } from '@views/lk/components/Button/ButtonSmall'

export const ButtonAccordion = ({ className }: ButtonProps) => {
  const style: string = twMerge('relative w-[52px] shrink-0', className)

  return (
    <Menu className={style}>
      <ButtonToggle as={MenuButton} />
      <MenuItems className="absolute right-0 left-auto z-10 flex flex-col px-2 py-4 bg-white top-full w-44 rounded-2xl">
        <ButtonSmall id="pen">Редактировать</ButtonSmall>
        <ButtonSmall color="red" id="trash">
          Удалить
        </ButtonSmall>
      </MenuItems>
    </Menu>
  )
}
