import { List } from './index';
import edit from '../assets/shuffle-solid.svg';
import plus from '../assets/circle-plus.svg';
import { useState } from 'react';

type CardProps = {
  title: string;
  listToDisplay: string[];
  handleClick?: Function;
}

function Card({ title, listToDisplay, handleClick }: CardProps) {
  const [list, setList] = useState<string[]>([]);

  function handleClickCopy(): void {
    if (listToDisplay.length > 0) {
      navigator.clipboard.writeText(listToDisplay.join('\n'));
      alert('Copied to clipboard.');
    } else {
      alert('List is empty.');
    }
  }

  function handleClickRandomize(): void {
    if (listToDisplay.length > 0) {
      const copyList = listToDisplay.map(n => n);
      const randomList: string[] = [];
      while (copyList.length > 0) {
        const randIndex = Math.floor(Math.random() * copyList.length);
        randomList.push(copyList[randIndex]);
        copyList.splice(randIndex, 1);
      }
      setList(randomList);
    } else {
      alert('List is empty.');
    }
  }


  return (
    <div className='basis-4/5 flex-col items-center bg-white dark:bg-dark-gray-1 max-w-[16rem] shadow-lg dark:shadow-zinc-700'>
      <div className='bg-dark-gray-2 basis-1/12 flex items-center w-full justify-evenly text-white py-2'>
        {handleClick && <img src={plus} className='hover:cursor-pointer' onClick={() => handleClick?.()}/>}
        {title}
        <img src={edit} className='hover:cursor-pointer' onClick={handleClickRandomize}/>
      </div>
      <div className="hover:cursor-pointer" onClick={handleClickCopy}>
        <List customList={list.length === 0 ? listToDisplay : list} styles='text-center p-2 overflow-y-auto basis-full w-full empty:hidden'/>
      </div>
    </div>
  )
}

export default Card