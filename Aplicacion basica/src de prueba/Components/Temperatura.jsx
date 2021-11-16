import React, { useState } from "react";

const Temperatura = () =>{

    const [temperatura,setTemperatura] = useState(20)
    const Aumentar=()=>{
        setTemperatura(temperatura+1)
    }
    const Disminuir=()=>{
        setTemperatura(temperatura-1)
        
    }
    return(
        <div>
            <h2>La Temperatura es: {temperatura} </h2>
            <p>
                {temperatura > 20 ? 'Hace calor' : 'Ta fresco pa chomba'}
            </p>
            <button className="btn btn-secondary" onClick={Aumentar}> Aumentar</button>
            <button className="btn btn-secondary" onClick={Disminuir}> Disminuir</button>
        </div>
    )
}

export default Temperatura