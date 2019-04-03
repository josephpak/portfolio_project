import React from 'react';
import styled from 'styled-components'

import gatsbylogo from "../../logos/gatsby.png";
import reactlogo from "../../logos/react.png";
import sclogo from "../../logos/styled-components.png"
import mac from "../../images/mac-transparent.png"

import back from "./back-arrow.png"
import forward from "./forward-arrow.png"

import {
    CardWrapper,
    DemoWrapper,
    CaptionWrapper,
    TechnologiesWrapper
} from "./ProjectStyles";

const carouselData = [
  {
    image: mac,
    title: "Retaino",
    description: "Your personal Pensieve for the Internet",
    technologies: [reactlogo, sclogo]
  },
  {
    image: mac,
    title: "joepak.dev",
    description: "My personal portfolio",
    technologies: [gatsbylogo, reactlogo, sclogo]
  },
  {
    image: mac,
    title: "tippr",
    description: "My first Lambda School Build Week project. A tipping app for waiters",
    technologies: []
  },
  {
    image: mac,
    title: "Lift Journal",
    description: "My second Lambda School Build Week project. A weightlifting journal app",
    technologies: [reactlogo, sclogo]
  }
]

const Front = styled.img`
  height: 75px;
  right: 5%;
  position: absolute;
`

const Back = styled.img`
  height: 75px;
  left: 5%;
  position: absolute;
  cursor: pointer;
`

const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

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
          <CaptionWrapper>
            <h1>{title}</h1>
            <p>{description}</p>
          </CaptionWrapper>
          <TechnologiesWrapper>
              {technologies.map((el, i) => (
                <img src={el} key={i} />
              ))}
          </TechnologiesWrapper>
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
