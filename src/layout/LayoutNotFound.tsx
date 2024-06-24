import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Theme } from '@providers/Theme'
import { Loaded } from '@layout/Loaded/Loaded'
import { SectionScreen } from '@ui/SectionScreen'
import { Gradient } from '@ui/Gradient'
import { Button } from '@ui/Button'

export const LayoutNotFound = () => {
  return (
    <Theme>
      <Suspense fallback={<Loaded />}>
        <SectionScreen>
          <Gradient />
          <div className="relative flex flex-col items-center justify-center text-center">
            <h1 className="font-bold text-primary text-9xl md:text-[14rem]">
              404
            </h1>
            <p className="text-sm font-normal leading-5 sm:text-base opacity-80 mb-9">
              Возможно, запрашиваемая Вами страница была перенесена или удалена.{' '}
              <br className="hidden md:block" />
              Либо Вы допустили небольшую опечатку при вводе адреса.
            </p>
            <Button as={Link} to="/lk-tutor">
              Вернуться на главную
            </Button>
          </div>
        </SectionScreen>
      </Suspense>
    </Theme>
  )
}
