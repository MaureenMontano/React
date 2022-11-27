import './App.css';
import Boton from './Componentes/Boton';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import './HojasStilo/Boton.css'
import Contador from './Componentes/Contador';
import { useState } from 'react';

function App() {
  const [numClicks, setnumbClicks] = useState(0);

  const manejarclick = () => {
    setnumbClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setnumbClicks(0);
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={ freeCodeCampLogo } />
      </div>

      <div className='contenedor-principal'>
        <Contador
          numClicks={numClicks}
        />
        <Boton
          texto='Clic'
          botonClick={true}
          manejarclick={ manejarclick }
        />

        <Boton
          texto='Reiniciar'
          botonClick={false}
          manejarclick={ reiniciarContador }
        />
      </div>
    </div>
  );
}

export default App;
