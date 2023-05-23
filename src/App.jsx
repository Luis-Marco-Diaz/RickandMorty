import reactLogo from './assets/react.svg'
import LogoRick from '/logoRickandMorty.svg'
import './App.css'
import axios from "axios";
import { useState, useEffect } from "react";
import ResidentsInfo from './components/ResidentsInfo'

function App() {
    // Este estado trea la información de los Residentes de la locación
    const [residents, setResidents] = useState([])
    // Este estado trae la locación por búsqueda de ID
    const [ Id, setId ] = useState({})
    // Esta variable recibe el evento al hacer Submit
    const handleSubmit = e => { e.preventDefault() }
    
    useEffect(() => {
      axios
      .get(`https://rickandmortyapi.com/api/location/${Id}`)
      .then((resp) => {
        console.log(resp.data);
        setId(resp.data);
        //setResidents( resp.data.residents )
        getResidentsData(resp.data.residents);
        })
      .catch((error) => console.error(error));
  }, [Id])
    
    // Función que recibe el arreglo de los residentes de cada locación
    const getResidentsData = (residentsArray) => {  
       const idArray = residentsArray.map( url => url.split("/")[5])
             axios
            .get(`https://rickandmortyapi.com/api/character/${idArray}`)
            .then((resp) => { setResidents(resp.data); })
            .catch((error) => console.error(error));
      }
    
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
        
    <div className='Bby'>
            <div>
              <form onSubmit={ e => handleSubmit(e) } >
                <input 
                type="text" 
                placeholder="Type a location Id (1 to 126)" 
                value={Id} 
                onChange={(e) => setId(e.target.value)}
                />
                <button 
                className="ButtonId" 
                >Find By Id</button>
              </form>
            </div>
          </div>
            
            <div className='Location-Data'>
             <div> <h3> Name: <br /> {Id.name} </h3> </div>
              <div> <h3> Type: <br /> {Id.type} </h3> </div>
              <div> <h3> Dimension: <br /> {Id.dimension} </h3> </div>
              <div>  <h3> Population: <br /> {(Id.residents)?.length} </h3> </div>
            </div>
             
             <div className="ResidentsList" >
                {
                  residents.map( resident => (
                    <ResidentsInfo
                    key = {resident.id}
                    residentData = {resident}
                    />
                  ))
                }
             </div> 
  </div>
  )
};
export default App;