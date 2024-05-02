import React from 'react';
import Header from '../../components/Header';
import * as S from "./styled";


const Card = ({ imgSrc, altText }) => {
  return (
    <S.CardContainer>
      <img src={imgSrc} alt={altText} />
      <p>{altText}</p>
    </S.CardContainer>
  );
};

const App = () => {
  const cards = [
    { imgSrc: 'caminho/para/imagem.jpg', altText: 'Projeto 1' },
    { imgSrc: 'caminho/para/imagem.jpg', altText: 'Projeto 2' },
    { imgSrc: 'caminho/para/imagem.jpg', altText: 'Projeto 3' },
    { imgSrc: 'caminho/para/imagem.jpg', altText: 'Projeto 4' },
   
  ].map((card, i) => (
    <Card key={i} imgSrc={card.imgSrc} altText={card.altText} />
  ));

  return (
    <div className="container">
      {cards}
    </div>
  );
};

export default function Projetos() {
  return (
    <S.Main>
      <Header/>
      <section>
        <App />
      </section>
    </S.Main>
  )
}


