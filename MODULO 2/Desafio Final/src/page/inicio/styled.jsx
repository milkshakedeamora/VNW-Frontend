/** @format */

import styled from "styled-components";

export const Main = styled.main`
 
  height: 100vh;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Container = styled.section`
 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 background-color: #15b1ba;
 
`;
export const BoxInicio = styled.div`

width: 80%;
display: flex;
align-items: center;
color: white;
h2{
  font-size: 3rem;
}
img{
  width: 20vw;
}
`


