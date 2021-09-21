import styled from 'styled-components';

/* $dark: #073636;
$secondary: #88F6DA;
$accent: #F4AC45;
$light: #F7FFFC; */

export const ContactContainer = styled.div`
  background: #88F6DA;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactSection = styled.div`
  background:#F7FFFC;
  width: 40vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 10%;

  @media screen and (max-width:768px){
    width: 70vw;
    height: 80vh;
  }
`;

export const ContactTitle = styled.h2`
  color: #073636;
  text-align: center;
`;

export const ContactInfo = styled.p`
  color: #073636;
`;

export const Email = styled.a`
  color: #073636;
  &:hover, &:focus{
    color: #F4AC45;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const SocialIconLink = styled.a`
  color: #073636;
  font-size: 30px;

  &:hover, &:focus {
    color: #F4AC45;
  }
`;