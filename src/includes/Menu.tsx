import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { media } from '../functions/media'
import { scrollbarShow, scrollbarHidden } from '../functions/scrollbar'
import { ThemeContext } from '../components/Theme'
import { Accordion, AccordionToggle, AccordionContent } from '../components/Accordion'
import { SidebarContext } from '../components/Sidebar'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { Picture } from '../components/Picture'
import { Switch } from '../components/Switch'
import { nav } from '../data/nav'
import { social } from '../data/social'

export const Menu = (): React.JSX.Element => {
  const { sidebarValue, sidebarOff } = useContext(SidebarContext)
  const { themeValue, themeToggle } = useContext(ThemeContext)

  const windowResize = (): void => {
    if (sidebarOff && (document.documentElement as HTMLElement).clientWidth > media.lg) sidebarOff()
  }

  useEffect((): void => {
    sidebarValue ? scrollbarHidden() : scrollbarShow()
  }, [sidebarValue])

  useEffect((): (() => void) | undefined => {
    if (!sidebarValue) return

    window.addEventListener('resize', windowResize as EventListener)

    return () => window.removeEventListener('resize', windowResize as EventListener)
  }, [sidebarValue])

  return (
    <div
      className={`fixed inset-0 z-6 bg-black bg-opacity-50 ${sidebarValue ? '' : 'invisible opacity-0'} duration-1`}
      onClick={sidebarOff}
    >
      <div
        className={`flex flex-col bg-black bg-opacity-90 ${
          sidebarValue ? '' : 'invisible opacity-0 -translate-x-full'
        } overflow-auto backdrop-blur-sm w-full max-w-[375px] h-full duration-3`}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className={`flex items-center justify-between gap-2 bg-black ${
            sidebarValue ? '' : '-translate-y-full'
          } p-4 duration-5 delay-3`}
        >
          <Link className="btn btn-white w-36" to="/">
            <Picture webp="img/pictures/logo.webp" src="img/pictures/logo.png" className="w-full" />
          </Link>
          <Switch variant="toggle" type="checkbox" defaultChecked={themeValue} onChange={themeToggle} />
          <Button color="second" size={null} variant={null} className="text-white text-24 p-1" onClick={sidebarOff}>
            <Icon id="close" />
          </Button>
        </div>
        <div
          className={`flex flex-col items-start gap-4 text-white ${
            sidebarValue ? '' : 'invisible opacity-0 -translate-x-56'
          } pt-4 pb-10 px-4 duration-9 delay-5`}
        >
          {nav.pages.map((item) => (
            <Link className="hover:underline underline-offset-4 text-20" to={item.to} key={item.id}>
              {item.text}
            </Link>
          ))}
          <Accordion scroll={true}>
            <AccordionToggle className="flex items-center hover:underline underline-offset-4 text-20">
              Navigation
              <Icon className="text-14 opacity-60 ml-2 ease-linear duration-3" id="arrow-right" />
            </AccordionToggle>
            <AccordionContent>
              <div className="flex flex-col items-start gap-2 mt-2 pl-5">
                {nav.blocks.map((item) => (
                  <a
                    className="hover:underline underline-offset-4 text-18"
                    href={item.href}
                    onClick={sidebarOff}
                    key={item.id}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </AccordionContent>
          </Accordion>
        </div>
        <div
          className={`${
            sidebarValue ? '' : 'invisible opacity-0 -translate-y-12'
          } mt-auto px-4 pt-4 pb-10 duration-5 delay-9`}
        >
          <div className="flex items-center justify-center gap-4">
            {social.map((item) => (
              <Button
                Tag="a"
                color="second"
                size={null}
                variant={null}
                className="text-30 rounded-max"
                href="/"
                target={true}
                key={item.id}
              >
                <Icon className="text-30" id={item.icon} />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
