import { Dialog, Icon } from '@components'
import { DialogProps, TSXComponent } from '@utils'
import { twMerge } from 'tailwind-merge'

export const DialogDuty = ({ className, open, onClose }: DialogProps): TSXComponent => {
  const ratingLength: number[] = [...Array(5).keys()]
  const style: string = twMerge('max-w-96 card dark:bg-dark', className)

  return (
    <Dialog className={style} open={open} onClose={onClose}>
      <div className="px-4 py-7 sm:py-10 sm:px-6 card-content">
        <h2 className="mb-4 font-medium text-center text-lg/normal">
          Оценка производится <br /> по следующим требованиям
        </h2>
        <div className="flex flex-row-reverse items-center justify-center gap-4 mb-6">
          {ratingLength.map((_, index) => (
            <Icon className="text-4xl text-primary color-yellow" id="star" key={index} />
          ))}
        </div>
        <div className="text-base/normal opacity-80">
          <p className="mb-2">Если дежурный:</p>
          <ol className="flex flex-col gap-2" start={0}>
            <li>не выполнил ни одного из требования, перечисленных ниже;</li>
            <li>выносил мусор;</li>
            <li>следил за наличием воды в офисе;</li>
            <li>следил за чистотой в офисе;</li>
            <li>произвел уборку в санузле;</li>
            <li>произвел генеральную уборку.</li>
          </ol>
        </div>
      </div>
    </Dialog>
  )
}
