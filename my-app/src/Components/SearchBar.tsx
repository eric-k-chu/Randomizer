import { SearchList } from './index';
import searchIcon from '../assets/magnifying-glass-solid.svg';
import { useState } from 'react';
import data from '../data';

type SearchBarProps = {
  placeText: string;
}

function SearchBar({ placeText }: SearchBarProps) {
  const [showList, setShowList] = useState(false);
  const [searchList, setSearchList] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState('');

  function handleOnInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const displayList: string[] = [];

    for (const name in data.list) {
      const input = e.target.value;
      setInputVal(input);
      if (input.length > 0 && name.startsWith(input)) {
        displayList.push(name);
      }
      setSearchList(displayList);
    }
  }

  const focusStyle = 'rounded-2xl focus-within:rounded-b-none bg-white w-full h-full flex justify-center items-center relative';
  const noFocusStyle = 'rounded-2xl bg-white w-full h-full flex justify-center items-center relative';

  return (
    <div className={inputVal.length > 0 && searchList.length > 0 ? focusStyle : noFocusStyle}>
      <img src={searchIcon} />
      <input 
        type='text' 
        placeholder={placeText} 
        className='text-black bg-transparent px-2' 
        onFocus={() => setShowList(true)}
        onBlur={() => setShowList(false)}
        onChange={handleOnInputChange}/>

      {showList && 
        <div className='w-full z-index-50 absolute flex top-8 justify-center rounded-b-2xl shadow-lg'>
          <div className='w-full bg-white text-black rounded-b-2xl'>
            <SearchList customList={searchList} styles='py-2 empty:hidden' maxSize='5'/>
          </div>
        </div>
      }
    </div>
  );
}

export default SearchBar;