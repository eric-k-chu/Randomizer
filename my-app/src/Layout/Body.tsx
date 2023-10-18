import { Button, InsertForm, Card } from '../Components'
import { useState } from 'react';

function Body() {
  const [classList, setClassList] = useState<string[]>([]);
  const [list, setList] = useState<string[]>([]);
  const [classListCopy, setClassListCopy] = useState<string[]>([]);
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
      alert('You have no students in the class list.');
    }
  }

  function handleCopyList(): void {
    if (classList.length > 0) {
      const copiedText = classListCopy.join('\n');
      navigator.clipboard.writeText(copiedText);
      alert('Copied to clipboard.');
    } else {
      alert('You have no students in the class list.');
    }
  }

  function handleReset(): void {
    if (classList.length > 0) {
      setClassList([]);
      setList([]);
      setClassListCopy([]);
      setShowRandomName("");
    } else {
      alert('You have no students in the class list.');
    }
  }

  function handleInsertClassList(insertList: string[]) {
    setClassList(insertList.map(n => n));
    setList(insertList.map(n => n));
  }

  function handleGenerateRandom() {
    if (classList.length > 0) {
      const copyList = classList.map(n => n);
      const randomList: string[] = [];
      while (copyList.length > 0) {
        const randIndex = Math.floor(Math.random() * copyList.length);
        randomList.push(copyList[randIndex]);
        copyList.splice(randIndex, 1);
      }
      setClassListCopy(randomList);
    } else {
      alert('You have no students in the class list.');
    }
  }

  return (
    <div className='container mx-auto basis-10/12 flex flex-col items-center justify-center'>
      
      {showModal && <InsertForm isActive={setShowModal} onInsert={handleInsertClassList} />}

      <div className='flex justify-center basis-3/4 w-full'>
        <Card title='Class List' listToDisplay={classList}/>
        <div className='basis-1/3 flex flex-col items-center justify-center gap-y-4'>
          <p className=' w-full h-16 text-center'>{showRandomName}</p>
        </div>
        <Card title='Randomized' listToDisplay={classListCopy} />
      </div>

      <div className='flex justify-center p-4 gap-x-4 items-center basis-1/4'>
        <Button text="Add Class List" onCustomClick={() => setShowModal(true)} styles='rounded-3xl w-40 bg-dark-gray-1'/>
        <Button text="Randomize" onCustomClick={handleGenerateRandom} styles='rounded-3xl w-40 bg-dark-gray-1'/>
        <Button text="Get Random" onCustomClick={handleGetRandom} styles='rounded-3xl w-40 bg-dark-gray-1'/>
        <Button text="Reset" onCustomClick={handleReset} styles='rounded-3xl w-40 bg-dark-gray-1'/>
        <Button text="Copy List" onCustomClick={handleCopyList} styles='rounded-3xl w-40 bg-dark-gray-1'/>
      </div>
    </div>
  )
}

export default Body