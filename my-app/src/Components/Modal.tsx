import React from 'react'
import { Button } from '.'

function InsertForm({ isActive, onInsert, onCustomClick }: {isActive: Function, onInsert: Function, onCustomClick?: Function }) {
    const textAreaID = React.useId();
  
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const formData = e.target as HTMLFormElement;
      const textArea = formData[0] as HTMLTextAreaElement;
      const val = textArea.value;
      onInsert(val.split('\n'));
      isActive(false);
    }
  
    return (
      <div className='flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full z-50'>
        <div className='w-72 h-[32rem] bg-dark-gray-1 p-2 rounded-md shadow-lg'>
          <form method='post' onSubmit={e => handleSubmit(e)} className='flex flex-col items-center justify-center h-[31rem] gap-y-4'>
            <label htmlFor={textAreaID}>Type the names in your class.</label>
            <textarea id={textAreaID} rows={15} className='resize-none bg-dark-gray-2'></textarea>
            <div className='flex justify-between text-xs w-64 px-3'>
              <Button text='Close' onCustomClick={() => isActive(false) } styles='bg-dark-gray-2'/>
              <Button text='Insert' styles='bg-dark-gray-2' type='submit' onCustomClick={onCustomClick}/>
            </div>
          </form>
        </div>
      </div>
    )
  }

  export default InsertForm