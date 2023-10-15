import githubLogo from '../assets/github-mark-white.svg'

function NavItem({ link, imgSrc, alt }: { link: string, imgSrc: string, alt: string}) {
  return (
    <a href={link} target='_blank'>
      <img src={imgSrc} alt={alt} className='w-10'/>
    </a>
  );
}

function NavBar() {
  return (
    <div className='bg-dark-gray-1 basis-1/12'>
      <div className='container mx-auto p-4'>
        <div className='flex justify-around items-center'>
          <h1 className='basis-1/2'>Randomizer</h1>
          <div className='flex items-center justify-end basis-1/2'>
            <NavItem link="https://github.com/eric-k-chu/Randomizer" imgSrc={githubLogo} alt="github" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar