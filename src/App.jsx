import reactLogo from './assets/react.svg'
import LogoRick from '/logoRickandMorty.svg'
import './App.css'
import Location from './components/Location'

function App() {


  return (
      <div>

        <header>
        <a href="https://github.com/Luis-Marco-Diaz/RickandMorty" target="_blank">
          <img src={LogoRick} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h2>Rick and Morty World Search</h2>
        </header>
        <div className='Content' >
          <Location/>
        </div>

      </div>
  )
}

export default App
