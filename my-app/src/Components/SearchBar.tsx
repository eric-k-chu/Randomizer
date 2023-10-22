import { SearchList } from './index';
import searchIcon from '../assets/magnifying-glass-solid.svg';
import { useState, ChangeEvent } from 'react';
import data from '../data';

type SearchBarProps = {
  placeText: string;
}

function SearchBar({ placeText }: SearchBarProps) {
  const [showList, setShowList] = useState(false);
  const [searchList, setSearchList] = useState<string[]>([]);

  function handleOnInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const displayList: string[] = [];

    for (const name in data.list) {
      const input = e.target.value;
      if (input.length > 0 && name.startsWith(input)) {
        displayList.push(name);
      }
      setSearchList(displayList);
    }
  }

  return (
    <div className='rounded-2xl bg-white w-full h-full lg:flex justify-center items-center relative hidden'>
      <img src={searchIcon} />
      <input 
        type='text' 
        placeholder={placeText} 
        className='text-black bg-transparent px-2' 
        onFocus={() => setShowList(true)}
        onBlur={() => setShowList(false)}
        onChange={handleOnInputChange}/>

      {showList && 
        <div className='w-full z-index-50 absolute flex top-10 justify-center shadow-lg rounded-2xl'>
          <SearchList customList={searchList} styles='py-4 empty:hidden w-full bg-white text-black rounded-2xl' maxSize='5'/>
        </div>
      }
    </div>
  );
}


export default SearchBar;