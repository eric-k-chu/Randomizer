import searchIcon from '../assets/magnifying-glass-solid.svg';
import { useState } from 'react';

type SearchBarProps = {
  placeText: string;
}

function SearchBar({ placeText }: SearchBarProps) {
  const [showList, setShowList] = useState(false);

  return (
    <div className='rounded-2xl bg-[#F5F5F5] w-full h-full flex justify-center items-center'>
      <img src={searchIcon} />
      <input 
        type='text' 
        placeholder={placeText} 
        className='text-black bg-transparent px-2'/>
      <div className='w-full z-index-50 absolute flex justify-center'>
        <div className='bg-black'>
          <p className='p-2'>HEllo</p>
          <p className='p-2'>HEllo</p>
          <p className='p-2'>HEllo</p>
          <p className='p-2'>HEllo</p>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;