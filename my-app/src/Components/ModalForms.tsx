import React from 'react'
import { Button } from '../Components'

function InsertForm({ isActive, onInsert }: {isActive: Function, onInsert: Function }) {
    const textAreaID = React.useId();
  
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const textArea = document.querySelector('form')![0] as HTMLTextAreaElement;
      onInsert(textArea.value.split('\n'));
      isActive(false);
    }
  
    return (
      <div className='flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full z-50'>
        <div className='w-72 h-[32rem] bg-dark-gray-1 p-2 rounded-md shadow-lg'>
          <form method='post' onSubmit={handleSubmit} className='flex flex-col items-center justify-center h-[31rem] gap-y-4'>
            <label htmlFor={textAreaID}>Type the names in your class.</label>
            <textarea id={textAreaID} rows={15} className='resize-none bg-dark-gray-2'></textarea>
            <div className='flex justify-between text-xs w-64 px-3'>
              <Button text='Close' onCustomClick={() => isActive(false) } styles='bg-dark-gray-2'/>
              <Button text='Insert' styles='bg-dark-gray-2' type='submit' />
            </div>
          </form>
        </div>
      </div>
    )
  }

  export default InsertForm