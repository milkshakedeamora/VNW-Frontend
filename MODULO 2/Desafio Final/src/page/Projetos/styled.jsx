import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  margin: 10px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    display: none;
    color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);    
    padding: 10px;   
    text-align: center;
  }

  &:hover p {
    display: block;
  }
`;
