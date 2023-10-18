import githubWhite from '../assets/github-mark-white.svg'
import githubBlack from '../assets/github-mark-black.svg'

function Footer({ isDarkMode }: { isDarkMode: boolean}) {
  return (
    <div className='bg-white dark:bg-dark-gray-2 basis-1/12 flex items-center'>
      <div className="container mx-auto">
        <div className="flex items-center justify-center text-black dark:text-zinc-500 gap-x-4">
          <p>Created by Eric Chu</p>
          <div className='flex items-center justify-center'>
            <a href='https://github.com/eric-k-chu/Randomizer' target='_blank'>
              <img src={isDarkMode ? githubWhite : githubBlack} alt="github" className='w-6'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer