import React from 'react'
import { Button } from '.'

type InsertFormProps = {
  isActive: Function;
  onInsert: Function;
  onCustomClick: Function;
}

function InsertForm({ isActive, onInsert, onCustomClick }: InsertFormProps) {
    const textAreaID = React.useId();
  
    function handleSubmit(e: React.FormEvent<HTMLFormElement> & {target: HTMLFormElement}): void {
      e.preventDefault();
      const textArea = e.target[0] as HTMLTextAreaElement;
      const spacesOnly = /^[\s]*$/;
      const cleanInput = textArea.value.split('\n').filter(n => n.length > 0 && !spacesOnly.test(n)).map(n => n.trim());

      if (cleanInput.length < 1) {
        alert("You didn't add anything dummy.")
      } else {
        onInsert(cleanInput);
        isActive(false);
      }
    }
  
    return (
      <div className='flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full z-50'>
        <div className='w-72 h-[32rem] bg-white dark:bg-dark-gray-1 p-2 rounded-md shadow-lg'>
          <form method='post' onSubmit={handleSubmit} className='flex flex-col items-center justify-center h-[31rem] gap-y-4'>
            <label htmlFor={textAreaID} className='text-black dark:text-white'>Type the names in your class.</label>
            <textarea id={textAreaID} rows={15} className='resize-none bg-dark-gray-2' required></textarea>
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