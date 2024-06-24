import { Button } from '@ui/Button'
import { Icon } from '@ui/Icon'

export const Footer = () => {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="container flex items-center justify-between gap-3 py-2 mt-auto bg-white border-t border-solid sm:py-4 dark:bg-black border-grey">
      <span className="text-base font-normal leading-none">
        © {currentYear}
      </span>
      <div className="flex items-center">
        <span className="mr-3 text-base font-normal leading-none">
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
          waved="dark"
        >
          <Icon
            className="w-20 text-black h-7 shrink-0 dark:text-white"
            id="logo"
          />
        </Button>
      </div>
    </footer>
  )
}
