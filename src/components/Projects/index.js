import React, { useState } from "react";
import { Backend1, Backend2, Database, Frontend1, Frontend2, Frontend3, Other } from "./data";
import {
  ProjectsContainer,
  ProjectTitle,
  ProjectsText,
  ProjectWrapper,
  ProjectContent,
  Text,
  ProjectImg,
  ProjectLinkWrapper,
  ProjectLink,
  Slideshow,
  SlideshowSlider,
  Slide,
  SlideshowDots,
  SlideshowDot,
} from "./ProjectStyling";

const Projects = () => {
  const data = [Frontend1, Frontend2, Frontend3, Database, Backend1, Backend2, Other];

  const [index, setIndex] = useState(0);

  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectTitle>Projects</ProjectTitle>
        <ProjectsText>
          Since I'm still in school, I have mostly done school projects.
          Here I talk about each course and what I've learned.
        </ProjectsText>
        <Slideshow>
          <SlideshowSlider
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {data.map((index) => (
              <Slide key={index}>
                <ProjectWrapper>
                  <div>
                <ProjectTitle dark="true">{index.title}</ProjectTitle>
                <ProjectContent img={index.img}>
                  <Text>{index.text}</Text>
                  <ProjectImg src={index.img} alt={index.alt} />
                </ProjectContent>
                </div>
                <div>
                <ProjectLinkWrapper>
                  <ProjectLink href={index.github1} target="_blank">{'>'} Link to Github project for {index.desc1}</ProjectLink>
                  <ProjectLink href={index.link1} target="_blank">{'>'} Link to {index.desc1}</ProjectLink>
                </ProjectLinkWrapper>
                <ProjectLinkWrapper>
                  <ProjectLink href={index.github2} target="_blank">{'>'} Link to Github project for {index.desc2}</ProjectLink>
                  <ProjectLink href={index.link2} target="_blank">{'>'} Link to {index.desc2}</ProjectLink>
                </ProjectLinkWrapper>
                <ProjectLinkWrapper>
                  <ProjectLink href={index.github3} target="_blank">{'>'} Link to Github project for {index.desc3}</ProjectLink>
                  <ProjectLink href={index.link3} target="_blank">{'>'} Link to {index.desc3}</ProjectLink>
                </ProjectLinkWrapper>
                </div>
                </ProjectWrapper>
              </Slide>
            ))}
          </SlideshowSlider>

          <SlideshowDots>
            {data.map((_, idx) => (
              <SlideshowDot
                key={idx}
                className={`${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></SlideshowDot>
            ))}
          </SlideshowDots>
        </Slideshow>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
