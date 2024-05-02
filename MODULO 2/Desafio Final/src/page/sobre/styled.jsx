import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: flex;
  background-color:#f04949;
  @media (max-width: 500px){
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  margin: 20px;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin-right: 20px;
`;

export const ProfileInfo = styled.div`
  text-align: left;
`;

export const Name = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
`;

export const Title = styled.p`
  font-size: 18px;
  color: #666;
`;

export const SkillsSection = styled.div`
  width: 80%;
  margin: 15px auto;
`;

export const SkillsTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SkillItem = styled.li`
  padding: 5px;
  border-bottom: 1px solid #ccc;
`;
