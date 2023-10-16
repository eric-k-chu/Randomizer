import githubLogo from '../assets/github-mark-white.svg'

function Footer() {
  return (
    <div className="container mx-auto basis-1/12">
      <div className="flex items-center justify-center text-zinc-500 gap-x-4">
        <p>Created by Eric Chu</p>
        <div className='flex items-center justify-center'>
          <a href='https://github.com/eric-k-chu/Randomizer' target='_blank'>
            <img src={githubLogo} alt="github" className='w-6'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer