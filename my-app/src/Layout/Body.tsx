import { Button, List, Popup } from '../Components'
import { useState } from 'react';

let classList: string[] = [];

const copyList = classList.map(n => n);

const completedList: string[] = [];

let popupText = "";

function setClassList(list: string[]): void {
  classList = list.map(n => n);
}

function Body() {
  const [list, setList] = useState<string[]>([]);
  const [isComplete, setComplete] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
    const copiedText = completedList.join('\n');
    navigator.clipboard.writeText(copiedText);
    popupText = 'Copied to Clipboard.';
    setShowPopup(true);
  }

  function handleReset(): void {
    classList = copyList.map(n => n);
    setList([]);
    setComplete(false);

  }

  return (
    <div className='container mx-auto basis-10/12'>
      
      {showPopup && <Popup popupText={popupText} isActive={setShowPopup}/>}

      <div className='flex flex-col items-center gap-y-4 p-4 h-[35rem]'>
        <span>Class List:</span>
        {list.length === 0 && <h3>No students in this list.</h3>}
        <List customList={list} styles='text-center'/>
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

export {
  Body,
  setClassList
}