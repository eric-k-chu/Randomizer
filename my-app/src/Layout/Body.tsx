import { Button, InsertForm, Card } from '../Components'
import { useState } from 'react';

const buttonStyle1 = 'rounded-3xl w-40 bg-dark-gray-1 transform transition duration-500 hover:scale-110 shadow-md dark:shadow-zinc-700';

type BodyProps = {
  currentList: string[];
  setCurrentList: Function;
}

function Body({ currentList, setCurrentList }: BodyProps) {
  const [copy, setCopy] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showRandomName, setShowRandomName] = useState("");

  function handleGetRandom(): void {
    if (copy.length > 0) {
      const randIndex = Math.floor(Math.random() * copy.length);
      setShowRandomName(copy[randIndex]);
      copy.splice(randIndex, 1);

      if (copy.length === 0) {
        setCopy(currentList.slice(0));
      }

    } else {
      alert('You have no items in the current list.');
    }
  }

  function handleInsertClassList(insertList: string[]): void {
    setCurrentList(insertList.slice(0));
    setCopy(insertList.slice(0));
  }

  return (
    <div className='container mx-auto basis-10/12 flex flex-col items-center justify-center'>
      
      {showModal && <InsertForm isActive={setShowModal} onAction={handleInsertClassList} />}

      <div className='flex-wrap flex-col lg:flex-row lg:flex-nowrap flex justify-center basis-3/4 w-full text-black dark:text-white'>
        <div className='basis-1/3 flex flex-col justify-center items-center text-white'>
          <Button text="Get Random" onCustomClick={handleGetRandom} styles={buttonStyle1}/>
        </div>
        <div className='basis-1/3 flex flex-col items-center justify-center'>
          <p className='w-full text-center text-black dark:text-white'>{showRandomName}</p>
        </div>
        <div className='basis-1/3 flex justify-center items-center h-full'>
          <Card title='List' listToDisplay={currentList} handleClick={() => setShowModal(true)}/>
        </div>
      </div>
    </div>
  )
}

export default Body