type TaskVariant = 'progress' | 'closed' | 'completed' | 'overdue'

type Task = {
  status: TaskVariant
  taskName: string
  sphere?: string
  dateStart: string
  dateEnd: string
  director: {
    webp: string
    src: string
    name: string
  }
  responsible?: {
    webp: string
    src: string
    name: string
  }
}
