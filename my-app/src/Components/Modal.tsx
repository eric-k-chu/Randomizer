import React from 'react'
import { Button } from '../Components/index'

function Popup({ popupText, isActive }: {popupText: string, isActive: Function}) {
  return (
    <div className='flex items-center justify-center absolute top-0 left-0 w-full h-full'>
      <div className="btn-modal animate-appear-out bg-dark-gray-1" onAnimationEnd={() => isActive(false)}>{popupText}</div>
    </div>
  )
}

function InsertModal({ isActive }: {isActive: Function }) {
  return (
    <div className='flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full'>
      <div className='w-72 h-[32rem] bg-dark-gray-1 p-2 rounded-md shadow-lg'>
        <div className='flex flex-col items-center justify-center h-[31rem] gap-y-4'>
          <h3>Type the names in your class.</h3>
          <textarea rows={15} className='resize-none bg-dark-gray-2'></textarea>
          <div className='flex justify-between text-xs w-64 px-3'>
            <Button text='Close' onCustomClick={() => isActive(false) }/>
            <Button text='Insert' />
          </div>
        </div>
      </div>
    </div>
  )
}

export {Popup, InsertModal}