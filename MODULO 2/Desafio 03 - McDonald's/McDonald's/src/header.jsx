import React from 'react';
import './header.css'; // Importar o arquivo CSS
import logo from './img/logo.png';
import celular from './img/app (1).svg'
import celular2 from './img/app.svg'


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="buttons">
        <button className='buttonBaixar'> <img src={celular} alt="" />Baixe o App </button>
        <button className='buttonPedir'>Peça seu Mequi <img src={celular2} alt="" /></button>
      </div>
    </header>
  );
}

export default Header;
