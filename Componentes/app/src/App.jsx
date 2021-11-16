import React from 'react';
import Cards from './components/Cards';


function App() {
  return (
    <div >
      <h1> Propiedades de los Componentes</h1>

      <hr/>
      <div className="row ">
        <div className="col">
        <Cards imagen="" titulo="Carta 1" texto="texto"/>
        </div>
        <div className="col">
        <Cards imagen="" titulo="Carta 2" texto="texto"/>
        </div>
        <div className="col">
        <Cards
            imagen=""
            titulo="Carta 3"
             texto="texto"
              />
        </div>
      </div>
    </div>
  );
}

export default App;
