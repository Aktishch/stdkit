export function getImagePreview(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result.toString())
      } else {
        reject('reader.readAsDataURL Error')
      }
    }

    reader.onerror = () => {
      reject('reader.readAsDataURL Error')
    }
  })
}
