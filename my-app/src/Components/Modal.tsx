import { useState, FormEvent, useId, ChangeEvent } from 'react'
import { Button, SearchList } from '.'
import data from '../data'
import backBlackIcon from '../assets/chevron-left-black.svg'
import mic from '../assets/mic.svg'

type ModalProps = {
  isActive: Function;
  onAction?: Function;
  onCustomClick?: Function;
}

function InsertForm({ isActive, onAction, onCustomClick }: ModalProps) {
    const inputID = useId();
    const textAreaID = useId();
  
    function handleSubmit(e: FormEvent<HTMLFormElement> & {target: HTMLFormElement}): void {
      e.preventDefault();
      const textArea = e.target[0] as HTMLTextAreaElement;
      const spacesOnly = /^[\s]*$/;
      const cleanInput = textArea.value.split('\n').filter(n => n.length > 0 && !spacesOnly.test(n)).map(n => n.trim());

      if (cleanInput.length < 1) {
        alert("You didn't add anything dummy.")
      } else {
        onAction?.(cleanInput);
        isActive(false);
      }
    }
  
    return (
      <div className='flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full z-50'>
        <div className='w-72 basis-1/2 bg-white dark:bg-dark-gray-1 p-2 rounded-md shadow-lg'>
          <form method='post' onSubmit={handleSubmit} className='flex flex-col items-center justify-center h-full w-full gap-y-4 p-4 text-black dark:text-white'>
            <label htmlFor={inputID}>
              Name of list:
              <input 
                id={inputID} 
                className='bg-white dark:bg-dark-gray-2 border-2 border-solid border-black dark:border-white w-full'>                 
              </input>
            </label>
            <label htmlFor={textAreaID}>
              List items:
              <textarea 
                id={textAreaID} 
                rows={15} 
                className='resize-none bg-white dark:bg-dark-gray-2 border-2 border-solid border-black dark:border-white w-full' 
                required>                 
              </textarea>
            </label>
            <div className='flex justify-between text-xs w-full px-3 text-white'>
              <Button text='Close' onCustomClick={() => isActive(false) } styles='bg-dark-gray-2'/>
              <Button text='Insert' styles='bg-dark-gray-2' type='submit' onCustomClick={onCustomClick}/>
            </div>
          </form>
        </div>
      </div>
    )
}

function MobileSearchInput({ isActive }: ModalProps) {
  const [searchList, setSearchList] = useState<string[]>([]);

  function handleOnInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const displayList: string[] = [];

    for (const name in data) {
      const input = e.target.value;
      if (input.length > 0 && name.startsWith(input)) {
        displayList.push(name);
      }
      setSearchList(displayList);
    }
  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full absolute z-50 bg-white dark:bg-dark-gray-2'>
      <div className='flex items-center justify-around basis-1/12 w-full bg-white dark:bg-dark-gray-2 px-4 border-b'>
        <img src={backBlackIcon} onClick={() => isActive(false)} className='hover:cursor-pointer'/>
        <div className='flex w-72 h-12 bg-white dark:bg-dark-gray-2 rounded-2xl px-2'>
          <input 
            type='text' 
            placeholder="Search for lists to use"
            className='text-black dark:text-white bg-transparent px-2' 
            onChange={handleOnInputChange}/>
        </div>
        <img src={mic} />
      </div>
      <div className='w-full basis-11/12 flex justify-center'>
        <SearchList customList={searchList} styles='py-4 empty:hidden w-full text-black flex flex-col items-center' maxSize='5'/>
      </div>
    </div>
  )
}

export {InsertForm, MobileSearchInput}