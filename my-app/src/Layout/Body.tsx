import { Button, List, Popup, InsertForm } from '../Components'
import { useState } from 'react';
import questionIcon from '../assets/circle-question-regular.svg'

function Body() {
  const [classList, setClassList] = useState<string[]>([]);
  const [list, setList] = useState<string[]>([]);
  const [classListCopy, setClassListCopy] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
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
    } 
  }

  function handleCopyList(): void {
    const copiedText = classListCopy.join('\n');
    navigator.clipboard.writeText(copiedText);
    setShowPopup(true);
  }

  function handleReset(): void {
    setClassList([]);
    setList([]);
    setClassListCopy([]);
    setShowRandomName("");
  }

  function handleInsertClassList(insertList: string[]) {
    handleReset();
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
    }
  }

  return (
    <div className='container mx-auto basis-10/12'>
      
      {showPopup && <Popup popupText="Copied to clipboard." isActive={setShowPopup}/>}
      {showModal && <InsertForm isActive={setShowModal} onInsert={handleInsertClassList}/>}

      <div className='flex justify-around p-4 h-[35rem]'>
        <div className='w-60 flex flex-col items-center bg-dark-gray-1 p-2 rounded-md gap-y-4'>
          <div className='flex justify-between items-center w-full'>
            <div className='bg-dark-gray-2 p-2 rounded-md'>Class List</div>
            <Button text="+" onCustomClick={() => setShowModal(true)} styles='rounded-md bg-dark-gray-2 p-2 px-3' />
          </div>
          <List customList={classList} styles='text-center p-2 overflow-y-auto h-full w-full' />
        </div>
        <div className='w-60 flex flex-col items-center justify-center w-56'>
          <img src={questionIcon} alt="Question Mark Icon" className='animate-pulse'/>
          <p className='animate-appear-in'>{showRandomName}</p>
        </div>
        <div className='w-60 flex flex-col items-center bg-dark-gray-1 p-2 rounded-md gap-y-4'>
          <div className='bg-dark-gray-2 p-2 rounded-md'>Randomized</div>
          <List customList={classListCopy} styles='text-center p-2' />
        </div>
      </div>

      <div className='flex justify-center p-4 gap-x-4 items-center'>
        <Button text="Get Random" onCustomClick={handleGetRandom} styles='rounded-3xl w-40 bg-dark-gray-1'/>
        <Button text="Randomize" onCustomClick={handleGenerateRandom} styles='rounded-3xl w-40 bg-dark-gray-1'/>
        <Button text="Reset" onCustomClick={handleReset} styles='rounded-3xl w-40 bg-dark-gray-1'/>
        <Button text="Copy List" onCustomClick={handleCopyList} styles='rounded-3xl w-40 bg-dark-gray-1'/>
      </div>
    </div>
  )
}

export default Body