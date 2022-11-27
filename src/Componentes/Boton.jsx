import React from 'react';

function Boton ({ texto, botonClick, manejarclick }) {
    return (
        <button className={ botonClick ? 'boton-clic' : 'boton-reiniciar' } onClick={ manejarclick } >
            { texto }
        </button>
    );
}

export default Boton;

