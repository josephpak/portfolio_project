import React from 'react';

import back from "../../images/back-arrow.png"
import forward from "../../images/forward-arrow.png"

import {
    CardWrapper,
    DemoWrapper,
    CaptionWrapper,
    TechnologiesWrapper,
    ContentWrapper,
    ProjectWrapper,
    Front,
    Back
} from "./ProjectStyles";

import {
  carouselData
} from "./projectdata"

class ProjectCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      projects: carouselData,
      currentIndex: 0,
    }
  }
  
  componentDidMount(){
    this.setState({
      projects: carouselData
    })
  }

  leftClick = () => {
    let lastIndex = this.state.projects.length - 1;
    if (this.state.currentIndex === 0){
      this.setState({
        currentIndex: lastIndex
      })
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1
      }))
    }
  }

  rightClick = () => {
    let lastIndex = this.state.projects.length - 1;
    if (this.state.currentIndex === lastIndex){
      this.setState({
        currentIndex: 0
      })
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }))
    }
  }
  
  render() {
    const currentProject = this.state.projects[this.state.currentIndex]

    const {
      image,
      title,
      description,
      technologies
    } = currentProject

    return (
      <ProjectWrapper>
        <Back 
        src={back}
        onClick={this.leftClick}
        />
        <CardWrapper>
          <DemoWrapper>
            <img src={image} alt="demo"/>
          </DemoWrapper>
          <ContentWrapper>
            <CaptionWrapper>
              <h1>{title}</h1>
              <p>{description}</p>
            </CaptionWrapper>
            <TechnologiesWrapper>
                {technologies.map((el, i) => (
                  <img src={el} key={i} alt="Technologies Used"/>
                ))}
            </TechnologiesWrapper>
          </ContentWrapper>  
        </CardWrapper>
        <Front 
        src={forward}
        onClick={this.rightClick}
        />
        </ProjectWrapper>
    )
  }
}

export default ProjectCard
