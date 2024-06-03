import { Coordinates } from '@utils/coordinates'

export const scrolledPage = (): Coordinates => {
  const coordinates: Coordinates = {
    top:
      (window && window.scrollY && window.self.pageYOffset) ||
      (document.documentElement && document.documentElement.scrollTop),
    left:
      (window && window.scrollX && window.self.pageXOffset) ||
      (document.documentElement && document.documentElement.scrollLeft),
  }

  return coordinates
}
