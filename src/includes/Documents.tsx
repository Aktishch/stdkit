import React from 'react'
import { documents } from '../data/documents'
import { AccordionContext, Accordion, AccordionToggle, AccordionContent } from '../contexts/Accordion'
import { Title } from '../components/Title'
import { Subtitle } from '../components/Subtitle'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { Movement } from '../components/Movement'
import { Waved } from '../components/Waved'

export const Documents = (): React.JSX.Element => {
  return (
    <section className="documents container container-distance flex flex-col items-center justify-center bg-grey dark:bg-dark">
      <Movement variant="blend" className="mb-3">
        <Title>Documents</Title>
      </Movement>
      <Movement variant="blend" className="mb-5 md:mb-10">
        <Subtitle>Drop-down list</Subtitle>
      </Movement>
      <div className="flex flex-col gap-5 w-full">
        {documents.map((item) => (
          <Accordion
            active={item.active}
            className="relative bg-second bg-opacity-10 rounded-4 shadow-md overflow-hidden py-4 md:py-6 px-4"
            key={item.id}
          >
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-alt font-semibold text-16 md:text-20">Documents - {item.elements.length}</h4>
              <Button as={AccordionToggle} color="primary" size={null} className="text-14 rounded-max w-9 h-9">
                <Waved />
                <AccordionContext.Consumer>
                  {({ accordionValue }) => (
                    <Icon className={`text-14 duration-3 ${accordionValue ? 'rotate-90' : ''}`} id="arrow-right" />
                  )}
                </AccordionContext.Consumer>
              </Button>
            </div>
            <AccordionContent>
              <div className="flex flex-col gap-3 pt-4">
                {item.elements.map((element, index) => (
                  <a
                    className="flex items-center gap-4 relative hover:underline underline-offset-4 bg-white dark:bg-black rounded-2 p-3"
                    href=""
                    key={index}
                  >
                    <Waved variant="dark" />
                    <div className="flex items-center justify-center bg-primary bg-opacity-10 text-primary text-24 rounded-2 w-12 min-w-[48px] h-12">
                      <Icon id="file" />
                    </div>
                    <p className="text-14 md:text-16">{element}</p>
                  </a>
                ))}
              </div>
            </AccordionContent>
          </Accordion>
        ))}
      </div>
    </section>
  )
}
