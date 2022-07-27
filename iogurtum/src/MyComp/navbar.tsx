import '../styles/StartMenu.css';
import * as React from 'react';

export default function Navbar() {
  return (
    <div className='container_buttons'>
      <div className='inicio_div'>
        <div className='inicio'>Inicio</div>
      </div>
      <div className='inicio_div'>
        <div className='inicio'>Información</div>
      </div>
      <div className='inicio_div'>
        <div className='inicio'>Productos</div>
      </div>
      <div className='inicio_div'>
        <div className='contact'>Contacto</div>
      </div>

    </div>
  );
}
