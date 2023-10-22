import moonIcon from '../assets/moon-solid.svg';
import sunIcon from '../assets/sun-solid.svg';
import searchIcon from '../assets/magnifying-glass-search.svg';
import logo from '../assets/shuffle-solid.svg';
import { SearchBar, MobileSearchInput } from '../Components';
import { useState } from 'react';

type NavBarProps = {
  isDarkMode: boolean;
  setDarkMode: Function;
}

function NavBar({ isDarkMode, setDarkMode }: NavBarProps) {
  const [showSearchMobile, setShowSearchMobile] = useState(false);

  return showSearchMobile ? (
    <MobileSearchInput isActive={() => setShowSearchMobile(false)} />
  ) : (
    <div className='bg-dark-gray-1 basis-1/12 w-full'>
      <div className='flex justify-between items-center h-full px-8 gap-x-2'>
        <div className='basis-1/3 flex gap-x-2 items-center'>
          <img src={logo}/>
          <h2 className='text-lg lg:text-3xl'>Randomizer</h2>
        </div>
        <div className='basis-1/3 flex max-w-xs h-full px-6 max-h-8'>
          <SearchBar placeText='Search lists to Randomize'/>
        </div>
        <div className='basis-1/3 flex gap-x-4 items-center justify-end'>
          <img 
            src={searchIcon}
            onClick={() => setShowSearchMobile(true)}
            className='lg:hidden hover:cursor-pointer'
          />
          <img 
            src={isDarkMode ? moonIcon : sunIcon} 
            onClick={() => setDarkMode((bool: boolean) => !bool)}
            className='hover:cursor-pointer'
            />
        </div>
      </div>
    </div>
  )
}

export default NavBar