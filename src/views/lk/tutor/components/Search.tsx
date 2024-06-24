import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Input } from '@ui/Input'
import { Icon } from '@ui/Icon'
import { IconInput } from '@ui/IconInput'
import { Button } from '@ui/Button'

export const Search = ({ className }: Props) => {
  const style: string = twMerge(
    'flex items-center justify-between gap-2 mb-5',
    className
  )

  return (
    <div className={style}>
      <div className="flex-grow form-label">
        <div className="form-wrapper">
          <div className="input-cover">
            <Input
              className="pl-14"
              type="search"
              placeholder="Найти студента..."
            />
          </div>
          <IconInput
            className="pl-4 text-2xl text-primary"
            as="button"
            type="submit"
            pointer={true}
            id="search"
          />
        </div>
      </div>
      <Button className="w-[52px] px-0 shrink-0">
        <Icon className="text-2xl" id="filter" />
      </Button>
    </div>
  )
}
