import React from 'react';
import styled from 'styled-components';

import gatsbylogo from "../../logos/gatsby.png";
import reactlogo from "../../logos/react.png";
import sclogo from "../../logos/styled-components.png"
import mac from "../../images/mac-transparent.png"

const CardWrapper = styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
`

const TechnologiesWrapper = styled.div`
    img {
        max-height: 40px;
    }
`

const DemoWrapper = styled.div`
    img {
        max-height: 250px;
        position: relative;
        top: -75px;
        align-self: flex-end;
    }    
`

const CaptionWrapper = styled.div`
    align-items: center;
    padding: 0 30px;
`

export default function ProjectCard() {
  return (
    <CardWrapper>
      <DemoWrapper>
        <img src={mac}/>
      </DemoWrapper>  
      <CaptionWrapper>
        <h1>Retaino</h1>
        <p>Your personal Pensieve for the Internet</p>
      </CaptionWrapper>
      <TechnologiesWrapper>
          <img src={gatsbylogo}/>
          <img src={reactlogo}/>
          <img src={sclogo}/>
      </TechnologiesWrapper>
    </CardWrapper>
  )
}
