import { Button } from '@ui/Button'
import { Icon } from '@ui/Icon'
import { Waved } from '@components/Waved'

export const Footer = () => {
  const currentYear = (): number => {
    return new Date().getFullYear()
  }

  return (
    <footer className="container flex items-center justify-between gap-3 py-2 mt-auto bg-white border-t border-solid sm:py-4 dark:bg-black border-grey">
      <span className="text-base font-normal leading-4">
        © {currentYear()}
      </span>
      <div className="flex items-center">
        <span className="mr-3 text-base font-normal leading-4">
          Разработка:
        </span>
        <Button
          className="rounded"
          as="a"
          color="gray"
          size={null}
          variant={null}
          href="https://stdkit.ru/"
          target={true}
        >
          <Waved variant="dark" />
          <Icon
            className="w-20 text-black h-7 min-w-20 dark:text-white"
            id="logo"
          />
        </Button>
      </div>
    </footer>
  )
}
