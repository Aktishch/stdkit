export function apiUrl(url: string) {
  return import.meta.env.VITE_API_ROOT_URL + url
}
