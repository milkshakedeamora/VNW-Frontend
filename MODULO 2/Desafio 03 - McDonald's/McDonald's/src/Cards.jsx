import React from 'react';
import sofa from './img/MequiSofa.svg';
import restaurante from './img/Restaurantes.svg';
import estamosJuntos from './img/EstamosJuntos.svg';
import './Cards.css'
const Card = ({ imagem, texto }) => {
  return (
    <div className="card">
      <img src={imagem} alt="" className="card-img-top" />      
        <p className="card-text">{texto}</p>
        <button className="btn btn-primary">Clique aqui</button>
      
    </div>
  );
};

const Cards = () => {
  const cards = [
    { imagem: sofa, texto: 'Que tal um #MéquiNoSofá' },
    { imagem: restaurante, texto: 'Venha conhecer nossa nova loja' },
    { imagem: estamosJuntos, texto: 'Confira as medidas que o Méqui adotou!' },
  ];

  return (
    
    <section className="promocoes">
        <h1>Promoção</h1>
        <section className="cards">
        
      {cards.map((card, index) => (
        <Card key={index} imagem={card.imagem} texto={card.texto} />
      ))}
    </section>
    </section>
  );
};

export default Cards;
