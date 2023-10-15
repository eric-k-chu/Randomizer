import { Button, List } from '../Components/index'
import { useState } from 'react';

const classList = [
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

function Body() {
  const [list, setList] = useState<string[]>([]);

  function handleRandomAdd(): void {
    if (classList.length) {
      const randIndex = Math.floor(Math.random() * classList.length);
      const newList = [...list, classList[randIndex]];
      classList.splice(randIndex, 1);
      setList(newList);
    } else {
      alert('Empty');
    }
  }

  return (
    <div className='container mx-auto basis-11/12'>

      <div className='flex flex-col items-center gap-y-4 p-4'>
        <List customList={list} styles='text-center h-[35rem]'/>
      </div>

      <div className='flex justify-around items-center'>
        <Button text="Get Random" onCustomClick={handleRandomAdd} styles='rounded-3xl w-40 bg-dark-gray-1'/>
      </div>
    </div>
  )
}

export default Body