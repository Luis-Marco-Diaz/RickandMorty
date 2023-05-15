import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Location from './components/Location'

function App() {


  return (
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Rick and Morty World Search</h1>
        <div>
    <Location/>
        </div>
      </div>
  )
}

export default App