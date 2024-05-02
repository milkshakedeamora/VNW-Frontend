/** @format */

import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.png";
import git from "../assets/github.png";
import * as S from "./styled";

export default function Header() {
  return (
    <S.Header>
      <S.BoxLogo>
        <img src="https://i.pinimg.com/originals/b8/f6/e5/b8f6e52db9e51a9bcad0a4905f38aecf.jpg" alt="" />
        <S.Title>Monkey D. Luffy</S.Title>
        <S.Text>Rei dos Piratas</S.Text>
      </S.BoxLogo>
      <S.BoxMenu>
        <ul>
          <S.Lista linha="1px solid white">
            <Link to="/">Inicio</Link>
          </S.Lista>
          <S.Lista>
            <Link to="/sobre">Sobre mim</Link>
          </S.Lista>
          <S.Lista>
            <Link to="/projetos">Projetos</Link>
          </S.Lista>
        </ul>
      </S.BoxMenu>
      <S.BoxIcon>
        <a href="">
          <img  src={linkedin} alt="" />
        </a>
        <a href="">        
          <img  src={git} alt="" />
        </a>
       
       
      </S.BoxIcon>
    </S.Header>
  );
}
