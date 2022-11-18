import React from 'react';
import '../Style/Testimonios.css';

const Testimonios = (props) => {
  return (
    <div> 
      <div className="contenedor-testimonios">
         <img className="imagen-testimonios" src={require(`../Img/testimonio-${props.imagen}.png`)} alt="Foto" />
         <div className="contenedor-texto-testimonios">
          
            <p className="nombre-testimonios"> <b>{props.nombre}</b> en {props.pais} </p>
            <p className="cargo-testimonios"> {props.cargo} en <b>{props.empresa} </b></p>
            <p className="texto-testimonios"> "{props.testimonio}"</p>
  
         </div>
      </div>
  </div>
  )
};

export default Testimonios