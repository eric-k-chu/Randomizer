import githubLogo from '../assets/github-mark-white.svg'

function NavBar() {
  return (
    <div className='container mx-auto basis-1/5'>
      <div className='flex justify-center align-center'>
        <h1>Randomizer</h1>
        <a href='https://github.com/eric-k-chu/Randomizer' target='_blank'>
          <img src={githubLogo} width={100}/>
        </a>
      </div>
    </div>
  );
}

export default NavBar