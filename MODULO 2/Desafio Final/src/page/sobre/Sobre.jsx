import React from 'react';
import Header from '../../components/Header';
import * as S from "./styled"; // Certifique-se de importar os estilos corretamente

const App = () => {
  return (
    <S.Container> 
      <S.HeaderSection> 
        <S.ProfileImage src="https://pbs.twimg.com/media/EbkEMzwWkAAy04i.png" alt="Luffy" />
        <S.ProfileInfo> 
          <S.Name>Monkey D. Luffy</S.Name> 
          <S.Title>Rei dos Piratas</S.Title> 
        </S.ProfileInfo>
      </S.HeaderSection>
      <S.SkillsSection> 
        <S.SkillsTitle>Habilidades</S.SkillsTitle> 
        <S.SkillsList> 
          <S.SkillItem>Navegação</S.SkillItem> 
          <S.SkillItem>Haki</S.SkillItem> 
          <S.SkillItem>Akuma no Mi</S.SkillItem> 
          
        </S.SkillsList>
      </S.SkillsSection>
      <S.SkillsSection> 

        <S.SkillsTitle>Experiências</S.SkillsTitle> 
        <S.SkillsList> 
          <S.SkillItem>East Blue</S.SkillItem> 
          <S.SkillItem>Grand Line</S.SkillItem> 
          
          
        </S.SkillsList>
      </S.SkillsSection>
    </S.Container>
  );
};

export default function Sobre() {
  return (
    <S.Main>
      <Header/>
      <section>
        <App />
      </section>
    </S.Main>
  );
}
