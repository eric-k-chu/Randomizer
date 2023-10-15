import { Button, List } from '../Components/index'
import { useState } from 'react';

let classList = [
  'Kaitlin',
  'Ross',
  'Tyler',
  'Thomas',
  'Cathy',
  'Omid',
  'Jeremy',
  'Julie',
  'Ethan',
  'Eric',
  'Andrew',
  'Bug',
  'Daniel'
];

const copyList = classList.map(n => n);

const completedList: string[] = [];

function Body() {
  const [list, setList] = useState<string[]>([]);
  const [isComplete, setComplete] = useState(false);

  function handleRandomAdd(): void {
    if (classList.length) {
      const randIndex = Math.floor(Math.random() * classList.length);
      completedList.push(classList[randIndex]);
      const newList = [...list, classList[randIndex]];
      classList.splice(randIndex, 1);
      setList(newList);
    } else {
      setComplete(true);
    }
  }

  function handleCopyList(): void {
    alert('yes');
  }

  function handleReset(): void {
    classList = copyList.map(n => n);
    setList([]);
  }

  return (
    <div className='container mx-auto basis-11/12'>

      <div className='flex flex-col items-center gap-y-4 p-4'>
        <List customList={list} styles='text-center h-[35rem]'/>
      </div>

      <div className='flex justify-around items-center'>
        { isComplete &&
          <Button text="Copy List" onCustomClick={handleCopyList} styles='rounded-3xl w-40 bg-dark-gray-1'/>
        }
        <Button text="Get Random" onCustomClick={handleRandomAdd} styles='rounded-3xl w-40 bg-dark-gray-1'/>
        { isComplete &&
          <Button text="Reset" onCustomClick={handleReset} styles='rounded-3xl w-40 bg-dark-gray-1'/>
        }
      </div>
    </div>
  )
}

export default Body