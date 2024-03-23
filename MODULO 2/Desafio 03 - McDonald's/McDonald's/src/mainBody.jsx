import React, { useState } from 'react';
import './main.css';

import batata from './img/batata.svg';
import hamburguer from './img/bigmac.svg';
import sorvete from './img/sorvete.svg';

function MainBody() {
  const [imgAtual, setImgAtual] = useState(hamburguer); // Defina a imagem inicial aqui

  const handleClick = (imagem) => {
    setImgAtual(imagem);
  };

  return (
    <section className="hamburguer">
      <div className="text-img">
        <img src={imgAtual} alt="" className="img-atual" />
        <h1>
          <span className="line">BATEU AQUELA</span>
          <span className="line"><span className="span">#FOME</span> DE <span className="span">#MÉQUI</span>?</span>
        </h1>
      </div>
      <div className="imagens">
        <img src={hamburguer} alt="" onClick={() => handleClick(hamburguer)} />
        <img src={batata} alt="" onClick={() => handleClick(batata)} />
        <img src={sorvete} alt="" onClick={() => handleClick(sorvete)} />
      </div>
    </section>
    
  );
}

export default MainBody;


