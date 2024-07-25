import { Icon } from '@components'

export const Footer = () => {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="container flex items-center justify-between gap-3 py-2 mt-auto bg-white border-t border-solid sm:py-4 dark:bg-black border-grey print:hidden">
      <span className="text-base font-normal leading-none">
        © {currentYear}
      </span>
      <div className="flex items-center">
        <span className="mr-3 text-base font-normal leading-none">
          Разработка:
        </span>
        <a
          className="rounded btn btn-gray"
          draggable={false}
          href="https://stdkit.ru/"
          target="_blank"
        >
          <Icon className="w-20 text-black h-7 dark:text-white" id="logo" />
        </a>
      </div>
    </footer>
  )
}
