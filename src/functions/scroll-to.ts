import { scrolledPage } from '../functions/scrolled-page'
import { media } from '../functions/media'

export const scrollTo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
  event.preventDefault()

  const link = event.target as HTMLAnchorElement
  const id = String(link.getAttribute('href'))
  const block = document.querySelector(id) as HTMLElement
  const header = document.querySelector('header') as HTMLElement
  const offsetTop: number =
    (document.documentElement as HTMLElement).clientWidth < media.lg
      ? block.getBoundingClientRect().top + scrolledPage().top - header.offsetHeight
      : block.getBoundingClientRect().top + scrolledPage().top

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth',
  })
}
