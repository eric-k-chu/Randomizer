import { NavBar, Body, Footer } from './Layout/index'
import { useState } from 'react'

function App() {
  const [isDarkMode, setDarkMode] = useState(true);

  return (
    <div className={isDarkMode ? 'dark' : 'light'} >
      <div className='bg-[#F5F5F5] dark:bg-dark-gray-2 h-screen w-screen flex flex-col items-center gap-y-4'>
        <NavBar isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
        <Body />
        <Footer isDarkMode={isDarkMode}/>
      </div>
    </div>
  )
}

export default App
