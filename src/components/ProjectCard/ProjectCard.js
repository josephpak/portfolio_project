import React from 'react';
import styled from 'styled-components';

import gatsbylogo from "../../logos/gatsby.png";
import reactlogo from "../../logos/react.png";
import sclogo from "../../logos/styled-components.png"

const CardWrapper = styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
`

const TechnologiesWrapper = styled.div`
    img {
        max-height: 50px;
    }
`

export default function ProjectCard() {
  return (
    <CardWrapper>
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
      <TechnologiesWrapper>
          <img src={gatsbylogo}/>
          <img src={reactlogo}/>
          <img src={sclogo}/>
      </TechnologiesWrapper>
    </CardWrapper>
  )
}
