import './App.css'
import Button from './Button'

function App() {
  const classList = [
    'Kaitlin',
    'Ross',
    'Tyler',
    'Thomas',
    'Cathy',
    'Omid',
    'Jeremy',
    'Julie',
    'Ethan',
    'Eric',
    'Andrew',
    'Bug',
    'Daniel'
  ];

  function handleRandomizer() {
    const randIndex = Math.floor(Math.random() * classList.length);
    classList.splice(randIndex, 1);
    console.log(classList[randIndex]);
  }

  return (
    <>
      <Button text="Get Random" onCustomClick={handleRandomizer}/>
    </>
  )
}

export default App
