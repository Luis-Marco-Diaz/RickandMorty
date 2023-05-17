import axios from "axios";
import { useState } from "react";

const Location = () => {

    const [ Id, setId ] = useState("")
    const handleSubmit = e => { e.preventDefault() }
    const searchById = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${Id}`)
             .then(res => setId(res.data))
             .catch(error => console.error(error))       
        };
    
    return (
        <div>
            <div>
              <div>
                <form onSubmit={ e => handleSubmit(e) } >
                <input 
                type="text" 
                placeholder="Type a location Id (1 to 126)" 
                value={Id} 
                onChange={(e) => setId(e.target.value)}
                />
                <button className="ButtonId" onClick={ searchById } >Buscar por Id</button>
                </form>
              </div>
            </div>
            
            <div className='Location-Data'>
             <div>
                <h3> Name: <br /> {Id.name} </h3>
              </div>
              <div>
                <h3> Type: <br /> {Id.type} </h3>
              </div>
              <div>
                <h3> Dimension: <br /> {Id.dimension} </h3>
             </div>
             <div>
                <h3> Population: <br /> {(Id.residents)?.length} </h3>
            </div>
             </div>
        </div>
    );
}

export default Location;