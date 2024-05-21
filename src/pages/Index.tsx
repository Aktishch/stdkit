import React from 'react'
import { Pack } from '../components/Pack'
import { Loader } from '../components/Loader'
import { Picture } from '../components/Picture'
import { FormLabel, FormWrapper, FormIcon, FormError } from '../components/Form'
import { Cover } from '../components/Cover'
import { Input } from '../components/Input'
import { Placeholder } from '../components/Placeholder'
import { Button } from '../components/Button'
import { Waved } from '../components/Waved'

export const Index = (): React.JSX.Element => {
  return (
    <section className="container flex items-center justify-center min-h-screen relative">
      <div className="absolute inset-0">
        <Pack size={null} className="bg-grey h-full">
          <Loader />
          <Picture
            webp="img/pictures/authorization-bg.webp"
            src="img/pictures/authorization-bg.jpg"
            className="image"
            loading="lazy"
          />
        </Pack>
      </div>
      <div className="w-full max-w-[435px] bg-white rounded-6 pt-20 px-8 pb-10 relative">
        <Picture src="img/pictures/logo-practice.svg" className="block w-full max-w-24 mb-8 mx-auto" />
        <Picture src="img/pictures/logo-stdkit.svg" className="block w-full max-w-56 mb-24 mx-auto" />
        <form className="form" action="">
          <Input type="hidden" value="Авторизация" name="theme" />
          <FormLabel>
            <FormWrapper>
              <Cover>
                <Input type="text" name="login" />
              </Cover>
              <Placeholder>Логин</Placeholder>
              {/* <div className="input-text absolute top-0 bottom-0 left-4 flex items-center text-16 leading-1 text-black text-opacity-50">
                Логин
              </div> */}
            </FormWrapper>
          </FormLabel>
          <FormLabel>
            <FormWrapper>
              <Cover>
                <Input type="text" name="login" />
              </Cover>
              <Placeholder>Логин</Placeholder>
              {/* <div className="input-text absolute top-0 bottom-0 left-4 flex items-center text-16 leading-1 text-black text-opacity-50">
                Логин
              </div> */}
            </FormWrapper>
          </FormLabel>
          <br />
          <Button type="submit">
            <Waved />
            Вход
          </Button>
        </form>
      </div>
    </section>
  )
}
