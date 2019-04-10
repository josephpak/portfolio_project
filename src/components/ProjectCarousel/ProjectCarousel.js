import React, {useState} from 'react';

import back from "../../images/icons/back-arrow.png"
import forward from "../../images/icons/forward-arrow.png"

import {
    BodyWrapper,
    CardWrapper,
    ProjectWrapper,
    ContentWrapper,
    Demo,
    Caption,
    Technologies,
    Front,
    Back,
} from "./ProjectStyles";

import {
  carouselData
} from "./projectdata"

import {
  useTheme
} from "../../hooks/darkMode"

const ProjectCarousel = () => {
  const themeState = useTheme()
  const [projects] = useState(carouselData)
  const [currentIndex, setCurrentIndex] = useState(0)

  const leftClick = () => {
    let lastIndex = projects.length - 1;
    if (currentIndex === 0){
      setCurrentIndex(lastIndex)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const rightClick = () => {
    let lastIndex = projects.length - 1;
    if (currentIndex === lastIndex){
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }
  
    const currentProject = projects[currentIndex]

    const {
      image,
      title,
      description,
      technologies
    } = currentProject

    return (
      <BodyWrapper dark={themeState.dark}>
        <CardWrapper dark={themeState.dark}>
          <Back 
          src={back}
          onClick={leftClick}
          />
          <ProjectWrapper>
            <Demo>
              <img src={image} alt="demo"/>
            </Demo>
            <ContentWrapper dark={themeState.dark}>
              <Caption>
                <h1>{title}</h1>
                <p>{description}</p>
              </Caption>
              <Technologies>
                {technologies.map((el, i) => (
                <img src={el} key={i} alt="Technologies Used"/>
                ))}
              </Technologies>
            </ContentWrapper>  
          </ProjectWrapper>
          <Front 
          src={forward}
          onClick={rightClick}
          />
        </CardWrapper>
      </BodyWrapper>
    )

}

export default ProjectCarousel
