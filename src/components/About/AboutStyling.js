import styled from 'styled-components';

/* $dark: #073636;
$secondary: #88F6DA;
$accent: #F4AC45;
$light: #F7FFFC; */

export const AboutContainer = styled.div`
  background: #88F6DA;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`;

export const AboutColumn = styled.div`
  margin: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutSection = styled.div`
  background:#F7FFFC;
  padding: 10%;
`;

export const AboutTitle = styled.h2`
  color: #073636;
  `;

export const AboutText = styled.p`
    color: #073636;
    `;

export const SkillSection = styled.div`
  background: #073636;
  padding: 0 30px;
  position: relative;
  top: -50px;
  right: -90px;
  padding-left: 10px;

  @media screen and (max-width: 480px){
    position: static;
    margin-top: 30px;
  }
  `;

export const SkillTitle = styled.h2`
  color: #F4AC45;
  text-align: center;
  margin-bottom: 0;
`;

export const ListSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SkillList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  color: #F4AC45;
`;

export const ProfilePic = styled.img`
  width: fit-content;
  max-width: 30vw;

  @media screen and (max-width: 768px){
    max-width: 80vw;
  }
`;
