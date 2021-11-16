import React, {useState} from 'react'
import uniqid from 'uniqid'

const Formulario = () => {
    
    const [Nombre,setNombre] = useState('')
    const [Edad,setEdad] = useState('')
    const [ListaFormularios, setListaFormularios]= useState([])

    const AgragarFormulario = (e)=>{
        e.preventDefault()
        const nuevoFormulario = {
            id: uniqid(),
            Nombre: Nombre,
            Edad: Edad,
        }
        setListaFormularios([...ListaFormularios,nuevoFormulario])
    }

    return (
        <div>
            <h2 >Aplicacion CRUD Basica</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de Formularios</h2>
                </div>
                <div className="col">
                    <h2>Formulario </h2>
                    <form onSubmit={(e)=>AgragarFormulario(e)} className="form-group">
                        <input 
                            onChange={(e)=>{setNombre(e.target.value)}} 
                            className="form-control mt-3" 
                            type="text" 
                            placeholder="Introduzca su nombre" 
                        />
                        <input 
                            onChange={(e)=>{setEdad(e.target.value)}} 
                            className="form-control" 
                            type="number" 
                            placeholder="Introduzca su edad" 
                        />
                        <input className="btn btn-info btn-block mt-3" type="submit" value="Registrar "
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario
