import moonIcon from '../assets/moon-solid.svg';
import sunIcon from '../assets/sun-solid.svg';
import logo from '../assets/circle-question-regular.svg';

function NavBar({ isDarkMode, setDarkMode }: { isDarkMode: boolean, setDarkMode: Function }) {
  return (
    <div className='bg-dark-gray-1 basis-1/12 w-full'>
      <div className='container mx-auto p-4 h-full'>
        <div className='flex justify-between items-center h-full'>
          <div className='basis-1/2 flex gap-x-2 items-center'>
            <img src={logo}/>
            <h2 className='text-3xl'>Randomizer</h2>
          </div>
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