import { Button, InsertForm } from '../Components';
import { useState } from 'react'

function NavBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='bg-dark-gray-1 basis-1/12'>
      <div className='container mx-auto p-4'>
        <div className='flex justify-around items-center'>
          <h1 className='basis-1/2'>Randomizer</h1>
          <div className='flex items-center justify-end basis-1/2'>
            <Button text="Insert Class List" onCustomClick={() => setShowModal(true)} styles='bg-dark-gray-2'/>
            {showModal && <InsertForm isActive={setShowModal}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar