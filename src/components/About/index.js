import React from 'react'
import pic from '../../images/profilePic.jpg';
import {
  AboutContainer,
  AboutColumn,
  AboutSection,
  AboutTitle,
  AboutText,
  SkillSection,
  SkillList,
  SkillTitle,
  ListSection,
  ListItem,
  ProfilePic,
} from './AboutStyling';

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutColumn>
          <AboutSection>
            <AboutTitle>About me</AboutTitle>
            <AboutText>
              My name is Amanda Heideman, I live in Stockholm, and I'm currently studying to become a
              full stack web developer. I first discovered programming when I was in
              high school, but after high school I decided to pursue my dream of
              becoming an archaeologist instead. Unfortunately that didn't work out
              for me, but I remembered how fun programming was, and so I chose this
              career path instead. And I'm really glad I did! What I really like
              about programming is all the problem solving. I love getting started
              on a new project, planning it out and trying to come up with the best
              solution. And nothing beats the feeling of finally solving a bug!
              <br></br>
              <br></br>
              When I'm not programming I like to knit, often while I watch a movie
              or tv show. I'm also a painter, mostly I use aquarelle or acrylics,
              but I also paint digitally sometimes.
            </AboutText>
          </AboutSection>
          <SkillSection>
            <SkillTitle SkillTitle="true">Skills</SkillTitle>
            <ListSection>
              <SkillList>
                <ListItem>JavaScript</ListItem>
                <ListItem>React</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>CSS/SCSS</ListItem>
              </SkillList>
              <SkillList>
                <ListItem>Node.js</ListItem>
                <ListItem>PHP</ListItem>
                <ListItem>MySQL</ListItem>
                <ListItem>MongoDB</ListItem>
              </SkillList>
            </ListSection>
          </SkillSection>
        </AboutColumn>
        <AboutColumn>
          <AboutSection>
            <ProfilePic src={pic} alt="Profile pic" />
          </AboutSection>
        </AboutColumn>
      </AboutContainer>
    </>
  )
}

export default About
