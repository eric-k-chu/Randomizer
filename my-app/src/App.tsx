import { NavBar, Body, Footer } from './Layout/index'
import { useState } from 'react'
import data from './data'

type CurrentList = {
  name: string;
  list: string[];
}

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [currentList, setCurrentList] = useState<CurrentList>({ name: Object.keys(data)[0], list: Object.values(data)[0]});

  return (
    <div className={isDarkMode ? 'dark' : 'light'} >
      <div className='bg-[#F5F5F5] dark:bg-dark-gray-2 h-screen w-screen flex flex-col items-center gap-y-4'>
        <NavBar isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
        <Body currentList={currentList} setCurrentList={setCurrentList}/>
        <Footer isDarkMode={isDarkMode}/>
      </div>
    </div>
  )
}

export default App
