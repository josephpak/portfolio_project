import React from 'react';

import gatsbylogo from "../../logos/gatsby.png";
import reactlogo from "../../logos/react.png";
import sclogo from "../../logos/styled-components.png"
import mac from "../../images/mac-transparent.png"

import {
    CardWrapper,
    DemoWrapper,
    CaptionWrapper,
    TechnologiesWrapper
} from "./ProjectStyles";

export default function ProjectCard() {
  return (
    <CardWrapper>
      <DemoWrapper>
        <img src={mac} alt="demo"/>
      </DemoWrapper>  
      <CaptionWrapper>
        <h1>Retaino</h1>
        <p>Your personal Pensieve for the Internet</p>
      </CaptionWrapper>
      <TechnologiesWrapper>
          <img src={gatsbylogo} alt="gatsby"/>
          <img src={reactlogo} alt="react"/>
          <img src={sclogo} alt="styled-components"/>
      </TechnologiesWrapper>
    </CardWrapper>
  )
}
