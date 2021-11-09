import React, {useState} from "react";

const Formulario = () =>{
    const [Nombre, SetNombre] = useState('')
    const [Edad, SetEdad] = useState('')

    const Validar = (event) =>{
        event.preventDefault()

        if(!Nombre.trim()){
            alert("Campo Nombre vacio")
        }
        if(!Edad.trim()){
            alert("Campo edad vacio")
        }
    }

    return(
        <div className="container">
            <form onSubmit={Validar} className="form-group">
                <input
                    type="text"
                    placeholder="Introduzca su Nombre"
                    className="form-control mb-3"
                    onChange={ (e) => {SetNombre(e.target.value)}}
                />
                <input
                    type="number"
                    placeholder="Introduzca su Edad"
                    className="form-control mb-3"
                    onChange={ (e) => {SetEdad(e.target.value)}}
                />
                <input className="btn btn-info btn-block mb-3" type="submit" />
            </form>
        </div>
    )
}

export default Formulario


