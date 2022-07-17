import * as React from 'react';
import '../styles/StartMenu.css';
import logo from '../assets/logo.png';
import yogur from '../assets/yogur.png';
import coffee from '../assets/coffee.png';
import yogur2 from '../assets/yogur2.png';


export default function StartMenu() {
  return (
    <div>
      <div className='start_menu'>
      </div>
      <div className='container'>
        <div className='logo_div'>
          <img src={logo} className="Logo"/>
        </div>
        <div className='separation'/>
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
        <div className='coffee_div'>
          <img src={coffee} className="coffee"/>
        </div>
        <div className='yogur_div'>
          <img src={yogur} className="Yogur"/>


        </div>
      </div>
      <div className='banner' >
        <div className='yogur2_div'>
          <img src={yogur2} className="yogur2"/>
        </div>
        <div className='banner_text'>
          Yogur helado
        </div>
      </div>
    </div>
  );
}
