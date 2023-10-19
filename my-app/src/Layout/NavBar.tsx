import moonIcon from '../assets/moon-solid.svg';
import sunIcon from '../assets/sun-solid.svg';
import logo from '../assets/circle-question-regular.svg';
import { SearchBar } from '../Components';

type NavBarProps = {
  isDarkMode: boolean;
  setDarkMode: Function;
}

function NavBar({ isDarkMode, setDarkMode }: NavBarProps) {
  return (
    <div className='bg-dark-gray-1 basis-1/12 w-full'>
      <div className='flex justify-between items-center h-full px-8 gap-x-2'>
        <div className='basis-1/3 flex gap-x-2 items-center'>
          <img src={logo}/>
          <h2 className='text-3xl'>Randomizer</h2>
        </div>
        <div className='basis-1/3 flex max-w-xs h-full p-6'>
          <SearchBar placeText='Search lists to Randomize'/>
        </div>
        <div className='basis-1/3 flex gap-x-2 items-center justify-end'>
          <img 
            src={isDarkMode ? moonIcon : sunIcon} 
            onClick={() => setDarkMode((bool: boolean) => !bool)}
            className='hover:cursor-pointer'
            />
        </div>
      </div>
    </div>
  );
}

export default NavBar