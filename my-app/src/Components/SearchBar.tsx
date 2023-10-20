import searchIcon from '../assets/magnifying-glass-solid.svg';
import { useState } from 'react';

type SearchBarProps = {
  placeText: string;
}

function SearchBar({ placeText }: SearchBarProps) {
  const [showList, setShowList] = useState(false);

  return (
    <div className='rounded-2xl focus-within:rounded-b-none bg-white w-full h-full flex justify-center items-center relative'>
      <img src={searchIcon} />
      <input 
        type='text' 
        placeholder={placeText} 
        className='text-black bg-transparent px-2' 
        onFocus={() => setShowList(true)}
        onBlur={() => setShowList(false)}/>

      {showList && 
        <div className='w-full z-index-50 absolute flex top-8 justify-center rounded-b-2xl shadow-lg'>
          <div className='w-full bg-black text-black rounded-b-2xl'>
            <p className='p-2'>HEllo</p>
            <p className='p-2'>HEllo</p>
            <p className='p-2'>HEllo</p>
            <p className='p-2'>HEllo</p>
          </div>
        </div>
      }
    </div>
  );
}

export default SearchBar;