import { List } from './index';
import edit from '../assets/shuffle-solid.svg';
import plus from '../assets/circle-plus.svg';
import { ChangeEvent } from 'react';
import data from '../data'

type CurrentList = {
  name: string;
  list: string[];
}

type CardProps = {
  currentList: CurrentList;
  handleClick?: Function;
  setCurrentList: Function;
}

function Card({ currentList, handleClick, setCurrentList }: CardProps) {

  function handleClickCopy(): void {
    if (currentList.list.length > 0) {
      navigator.clipboard.writeText(currentList.list.join('\n'));
      alert('Copied to clipboard.');
    } else {
      alert('List is empty.');
    }
  }

  function handleClickRandomize(): void {
    if (currentList.list.length > 0) {
      const copyList = currentList.list.slice(0);
      const randomList: string[] = [];
      while (copyList.length > 0) {
        const randIndex = Math.floor(Math.random() * copyList.length);
        randomList.push(copyList[randIndex]);
        copyList.splice(randIndex, 1);
      }
      setCurrentList(currentList.name, randomList)
    } else {
      alert('List is empty.');
    }
  }

  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    setCurrentList(e.currentTarget.value, data[e.currentTarget.value]);
  }


  return (
    <div className='basis-4/5 flex-col items-center bg-white dark:bg-dark-gray-1 max-w-[16rem] shadow-lg dark:shadow-zinc-700'>
      <div className='bg-dark-gray-2 basis-1/12 flex items-center w-full justify-evenly text-white py-2'>
        {handleClick && <img src={plus} className='hover:cursor-pointer' onClick={() => handleClick?.()}/>}

        <select className='bg-dark-gray-2 hover:cursor-pointer' onChange={handleSelectChange} defaultValue={currentList.name}>
          {Object.keys(data).map(n => <option key={n}>{n}</option>)}
        </select>

        <img src={edit} className='hover:cursor-pointer' onClick={handleClickRandomize}/>
      </div>
      <div className="hover:cursor-pointer" onClick={handleClickCopy}>
        <List customList={currentList.list} styles='text-center p-2 overflow-y-auto basis-full w-full empty:hidden'/>
      </div>
    </div>
  )
}

export default Card