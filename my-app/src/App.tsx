import { Button, List } from './Components/index'
import { useState } from 'react';
import './App.css'

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

function App() {
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
    <div className='flex flex-col font-serif h-screen'>
      <div className='container mx-auto basis-1/5'>
        <div className='flex justify-center align-center'>
          <h1>Randomizer</h1>
          <Button text="About"/>
        </div>
      </div>
      <div className='container mx-auto basis-3/5'>
        <List customList={list}/>
      </div>
      <div className='container mx-auto basis-1/5'>
        <div className='flex flex-col items-center justify-center'>
          <Button text="Get Random" onCustomClick={handleRandomAdd} styles="rounded-3xl w-40"/>
        </div>
      </div>
    </div>
  )
}

export default App
