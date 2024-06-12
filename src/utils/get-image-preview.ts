export const getImagePreview = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject): void => {
    const reader = new FileReader() as FileReader
    reader.readAsDataURL(file)

    reader.addEventListener('load', ((): void => {
      if (reader.result) {
        resolve(reader.result.toString())
      } else {
        reject('reader.readAsDataURL Error')
      }
    }) as EventListener)

    reader.addEventListener('error', ((): void => {
      reject('reader.readAsDataURL Error')
    }) as EventListener)
  })
}
