import { List } from './index'

function Card({ title, listToDisplay }: { title: string, listToDisplay: string[]}) {
  return (
    <div className='basis-1/3 flex flex-col items-center bg-white dark:bg-dark-gray-1 max-w-[16rem] shadow-lg'>
      <div className='bg-dark-gray-2 basis-1/12 flex items-center w-full justify-around text-white'>{title}</div>
      <List customList={listToDisplay} styles='text-center p-2 overflow-y-auto basis-11/12 w-full' />
    </div>
  )
}

export default Card