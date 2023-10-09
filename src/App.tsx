import React, { useState } from 'react'
import { compositions } from './costants/compositions'
import { Composition } from './components/Composition/Composition'
import { Tabs } from './components/Tabs/Tabs'
// import { Button } from './components/Button/Button'
// import { ThemeContext } from './contexts/ThemeContext'
// import { Provider } from './customStore/components/Provider/Provider'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  // const [theme, setTheme] = useState('default')

  return (
    // <ThemeContext.Provider value={theme}>
    <Provider store={store}>
      <section className="container bg-white">
        {/* <Button
          color="primary"
          size="lg"
          variant="fill"
          classes="mb-10"
          disabled={false}
          onClick={() => setTheme(theme === 'default' ? 'dark' : 'default')}
        >
          Switch theme
        </Button> */}
        <div className="flex items-center gap-4 mb-10">
          <Tabs onClick={setActiveIndex} items={compositions} activeIndex={activeIndex} />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <Composition composition={compositions[activeIndex]} />
        </div>
      </section>
    </Provider>
    //{/* </ThemeContext.Provider> */}
  )
}

export { App }
