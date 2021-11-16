import React from 'react'

const Bienvenida = (props) => {
    
    const {Nombre, Apellido} = props
    return (
        <div>
            <h1>Bienvenido {Nombre} {Apellido}</h1>
        </div>
    )
}

export default Bienvenida
