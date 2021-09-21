import styled from "styled-components";

/* $dark: #073636;
$secondary: #88F6DA;
$accent: #F4AC45;
$light: #F7FFFC; */

export const ProjectsContainer = styled.div`
  background: #073636;
  height: 130vh;

  @media screen and (max-width: 800px){
    height: auto;
  }
`;

export const ProjectTitle = styled.h2`
  color: ${({dark}) => (dark ? '#073636' : '#F7FFFC')};
  text-align: center;
  margin: 0;
  padding-bottom: 0;
  padding-top: 20px;
`;

export const ProjectsText = styled.div`
  background: #F4AC45;
  color: #073636;
  width: 40%;
  height: 15%;
  position: relative;
  top: 50px;
  left: 50px;
  padding: 15px 15px 0 15px;
  text-align: left;

  @media screen and (max-width: 800px){
    position: static;
    margin: 20px auto;
    width: 70%;
    height: auto;
    padding: 15px;
  }
`;

export const Slideshow = styled.div`
  margin: auto;
  overflow: hidden;
  width: 70vw;
  z-index: 1;

  @media screen and (max-width: 800px){
    width: 80%;
  }
`;

export const SlideshowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;

export const Slide = styled.div`
  display: inline-block;
  height: 500px;
  width: 100%;
  background: #f7fffc;
  color: #073636;

  @media screen and (max-width: 800px){
    height: 850px;
  }
  
`;

export const ProjectWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 450px;

  @media screen and (max-width: 800px){
    height: auto;
  }
`;

export const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: ${({img}) => (img ? "1fr 1fr" : "1fr")};

  @media screen and (max-width: 800px){
    display: flex;
    flex-direction: column;
  }
`;

export const Text = styled.p`
  white-space: normal;
`;

export const ProjectImg = styled.img`
  max-height: 300px;
  padding: 10px;
  max-width: 100%;
`;

export const ProjectLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 800px){
    grid-template-columns: 1fr;
  }
`;

export const ProjectLink = styled.a`
  display: ${({href}) => (href ? "static" : "none")};
  text-decoration: none;
  color: #073636;
  font-size: 0.9rem;
  white-space: normal;

  &:hover, &:focus {
    color: #F4AC45;
  }

  @media screen and (max-width: 800px){
    font-size: 0.8rem;
  }
`;

export const SlideshowDots = styled.div`
  text-align: center;
  padding-bottom: 20px;
`;

export const SlideshowDot = styled.div`
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 50%;

  cursor: pointer;
  margin: 15px 7px 0px;

  background-color: #f7fffc;
  &.active {
    background-color: #88F6DA;
  }
`;
