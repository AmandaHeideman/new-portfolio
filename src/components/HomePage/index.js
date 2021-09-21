import React from 'react'
import HelloPic from '../../images/hello.png';
import { HomePageContainer, HelloImg, HomeText } from './HomePageStyling';

const Home = () => {
  return (
    <>
      <HomePageContainer id="home">
        <HelloImg src={HelloPic} alt="hello"></HelloImg>
        <HomeText>My name is Amanda, and I'm a full stack web developer</HomeText>
      </HomePageContainer>
    </>
  )
}

export default Home
