import { SearchList } from './index';
import searchIcon from '../assets/magnifying-glass-solid.svg';
import { useState, ChangeEvent } from 'react';
import data from '../data';

type SearchBarProps = {
  placeText: string;
  setCurrentList: Function;
}

function SearchBar({ placeText, setCurrentList }: SearchBarProps) {
  const [showList, setShowList] = useState(false);
  const [searchList, setSearchList] = useState<string[]>([]);

  function handleOnInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const displayList: string[] = [];

    for (const name in data) {
      const input = e.target.value;
      if (input.length > 0 && name.startsWith(input)) {
        displayList.push(name);
      }
      setSearchList(displayList);
    }
  }

  function handleOnBlur() {
    setShowList(false);
  }

  return (
    <div className='rounded-2xl bg-white basis-full h-full lg:flex justify-center items-center hidden'>
      <img src={searchIcon} />
      <input
        id="search-bar-main"
        type='text' 
        placeholder={placeText} 
        className='text-black bg-transparent px-2' 
        onFocus={() => setShowList(true)}
        onChange={handleOnInputChange}/>

      {showList && 
        <div className='z-index-50 fixed flex top-16 justify-center shadow-lg rounded-2xl'>
          <SearchList 
            customList={searchList} 
            styles='py-4 empty:hidden w-full bg-white text-black rounded-2xl' 
            maxSize='5'
            setCurrentList={setCurrentList}
            closeList={handleOnBlur}/>
        </div>
      }
    </div>
  );
}


export default SearchBar;