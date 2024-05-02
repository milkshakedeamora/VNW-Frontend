/** @format */

import Header from "../../components/Header";
import * as S from "./styled";
import luffy from "../../assets/luffy-img.png"

export default function Inicio() {
  return (
    <S.Main>
      <Header />
      <S.Container>
        <S.BoxInicio>
          <div>
          <h2>Oi, eu sou Monkey D. Luffy, O Rei dos Piratas!</h2>
          <p>
          Jovem pirata conhecido por sua personalidade vibrante, determinação inabalável e sonhos grandiosos.
            </p>
            
            </div>
          <img src={luffy} alt="" />
        </S.BoxInicio>
      </S.Container>
    </S.Main>
  );
}
