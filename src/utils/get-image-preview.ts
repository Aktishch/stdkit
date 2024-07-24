export const getImagePreview = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject): void => {
    const reader = new FileReader() as FileReader
    reader.readAsDataURL(file)

    reader.addEventListener('load', ((): void => {
      reader.result
        ? resolve(reader.result.toString())
        : reject('Image upload error')
    }) as EventListener)

    reader.addEventListener('error', ((): void => {
      reject('Image upload error')
    }) as EventListener)
  })
}
