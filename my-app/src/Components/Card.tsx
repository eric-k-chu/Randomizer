import { List } from './index'

function Card({ title, listToDisplay }: { title: string, listToDisplay: string[]}) {
  return (
    <div className='basis-1/3 flex flex-col items-center bg-dark-gray-1 p-2 rounded-md max-w-[16rem]'>
      <div className='bg-dark-gray-2 p-2 rounded-md'>{title}</div>
      <List customList={listToDisplay} styles='text-center p-2 overflow-y-auto h-full w-full' />
    </div>
  )
}

export default Card