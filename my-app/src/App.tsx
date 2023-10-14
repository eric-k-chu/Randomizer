import './App.css'
import Button from './Button'
import List from './List'
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
    <>
      <h1 className='underline'>Hello</h1>
      <List customList={list}/>
      <Button text="Get Random" onCustomClick={handleRandomAdd}/>
    </>
  )
}

export default App
