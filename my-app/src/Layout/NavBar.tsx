import moonIcon from '../assets/moon-solid.svg';
import sunIcon from '../assets/sun-solid.svg';

function NavBar({ isDarkMode, setDarkMode }: { isDarkMode: boolean, setDarkMode: Function }) {
  return (
    <div className='bg-dark-gray-1 basis-1/12 w-full'>
      <div className='container mx-auto p-4'>
        <div className='flex justify-between items-center'>
          <h1 className='basis-1/2'>Randomizer</h1>
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