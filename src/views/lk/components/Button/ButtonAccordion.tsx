import { twMerge } from 'tailwind-merge'
import { ButtonProps } from '@ui/Button'
import {
  Accordion,
  AccordionToggle,
  AccordionContent,
} from '@providers/Accordion'
import { ButtonToggle } from '@views/lk/components/Button/ButtonToggle'

export const ButtonAccordion = ({ className }: ButtonProps) => {
  const style: string = twMerge('relative w-[52px] shrink-0', className)

  return (
    <Accordion className={style}>
      <AccordionToggle as={ButtonToggle} />
      <AccordionContent className="absolute right-0 top-full">
        <div className="px-2 py-4 bg-white rounded-2xl">dsdsdsds</div>
      </AccordionContent>
    </Accordion>
  )
}
