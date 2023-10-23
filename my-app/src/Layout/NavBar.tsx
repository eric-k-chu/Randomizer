import moonIcon from '../assets/moon-solid.svg';
import sunIcon from '../assets/sun-solid.svg';
import logo from '../assets/shuffle-solid.svg';

type NavBarProps = {
  isDarkMode: boolean;
  setDarkMode: Function;
}

function NavBar({ isDarkMode, setDarkMode }: NavBarProps) {
  return (
    <div className='bg-dark-gray-1 basis-1/12 w-full'>
      <div className='flex justify-between items-center h-full px-8 gap-x-2'>
        <div className='basis-1/2 flex gap-x-2 items-center'>
          <img src={logo}/>
          <h2 className='text-lg lg:text-3xl'>Randomizer</h2>
        </div>
        <div className='basis-1/2 flex gap-x-4 items-center justify-end'>
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