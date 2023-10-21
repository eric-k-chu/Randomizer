import { Button, InsertForm, Card } from '../Components'
import { useState } from 'react';

const buttonStyle1 = 'rounded-3xl w-40 bg-dark-gray-1 transform transition duration-500 hover:scale-110 shadow-md dark:shadow-zinc-700';


function Body() {
  const [classList, setClassList] = useState<string[]>([]);
  const [list, setList] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showRandomName, setShowRandomName] = useState("");

  function handleGetRandom(): void {
    if (list.length > 0) {
      const randIndex = Math.floor(Math.random() * list.length);
      setShowRandomName(list[randIndex]);
      list.splice(randIndex, 1);
      
      if (list.length === 0) {
        setList(classList.map(n => n));
      }
    } else {
      alert('You have no items in the current list.');
    }
  }

  function handleInsertClassList(insertList: string[]): void {
    setClassList(insertList.map(n => n));
    setList(insertList.map(n => n));
  }

  return (
    <div className='container mx-auto basis-10/12 flex flex-col items-center justify-center'>
      
      {showModal && <InsertForm isActive={setShowModal} onInsert={handleInsertClassList} />}

      <div className='flex justify-center basis-3/4 w-full text-black dark:text-white'>
        <div className='flex flex-col justify-center gap-y-4 text-white'>
          <Button text="Get Random" onCustomClick={handleGetRandom} styles={buttonStyle1}/>
        </div>
        <div className='basis-1/3 flex flex-col items-center justify-center gap-y-4'>
          <p className=' w-full h-16 text-center text-black dark:text-white'>{showRandomName}</p>
        </div>
        <Card title='Class List' listToDisplay={classList} handleClick={() => setShowModal(true)}/>
      </div>
    </div>
  )
}

export default Body