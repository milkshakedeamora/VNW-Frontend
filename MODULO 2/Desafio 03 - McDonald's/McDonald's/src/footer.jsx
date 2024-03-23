import React from 'react';
import './footer.css'; // Importar o arquivo CSS
import logo from './img/logo.png';
import google from './img/google.png'
import apple from './img/apple.png'


function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <p>© McDonald’s 2024</p>
      </div>
      <div className="lojas">
        <img src={google} alt="" />
        <img src={apple} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
