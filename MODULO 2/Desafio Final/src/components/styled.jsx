import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
`

export const Header = styled.header`

background-color:#ffff00;
width: 15vw;
display: flex;
align-items: center;
flex-direction: column;
   @media(max-width: 700px) {
      width: 20vw;
   }
    @media(max-width: 500px) {
      width: 100%;
      height: 33vh;
   }
`;
export const BoxLogo = styled.div`

width: 100%;
height: 35vh;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
img{
    width: 11vw;
    border-radius:100px;
}
 @media(max-width: 500px) {
      width: 100%;
      flex-direction: row;
      height: 9vh;
   }
`;
export const Title = styled.h2`

   width: 100%;
   text-align: center;
   color: red;
`;
export const Text = styled.p`

width: 100%;
text-align: center;
color: red;
@media (max-width: 500px) {
  
}
`;

export const BoxMenu = styled.nav`

height: 35vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
ul{
   
    width: 100%;
}
`;
export const Lista = styled.li`

 height: 11.5vh;
 display: flex;
align-items: center;
justify-content: center;
border-bottom: solid 1px white;
border-top:${props => props.linha};

a{
    color: white;
}
 @media(max-width: 500px) {
      height: 8vh;
   }
`

export const BoxIcon = styled.div`

height: 29vh;
width: 100%;
 display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
border-radius: 21px;

@media (max-width: 500px) {
    display: none;
}
`