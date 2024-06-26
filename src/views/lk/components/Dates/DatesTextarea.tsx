import { twMerge } from 'tailwind-merge'

export const DatesTextarea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const style: string = twMerge('form-label', className)

  return (
    <label className={style}>
      <div className="form-wrapper">
        <div className="input-cover">
          <textarea className="h-24 input input-lg sm:h-36" {...props} />
        </div>
      </div>
    </label>
  )
}
