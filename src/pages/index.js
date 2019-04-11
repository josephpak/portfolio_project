import React from "react"
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

// import { Link } from "gatsby"
import WorkTimeline from "../components/Timeline/WorkTimeline"
import Library from "../components/Library/Library"
import Layout from "../components/layout"
// import rocks from "../images/rocks.jpg"

import SEO from "../components/seo"

import {
  BodyWrapper,
  MainContentWrapper,
  ContactContentWrapper,
  ContactContentCard,
  ContactCardRight,
  Interests,
  rockClimbStyle
} from "../page-styles/AboutMeStyles"

import ContactCardLeft from "../components/ContactCards/ContactCardLeft"

export const query = graphql`
    query {
        file(relativePath: { eq: "images/rocks.jpg" }) {
            childImageSharp {
                fixed(width: 550, height: 550) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }  
`

const AboutMe = ({data}) => {
  return (
      <Layout>
      <SEO title="About Me" />
      <BodyWrapper>
        <MainContentWrapper>
          <WorkTimeline />
          <Interests>
            <Library/>
          </Interests>
        </MainContentWrapper>
        <ContactContentWrapper>
          <ContactContentCard>
            <ContactCardLeft />
            <ContactCardRight>
              <Image 
                fixed={data.file.childImageSharp.fixed} 
                alt="Rock Climbing"
                style={rockClimbStyle}
              />
            </ContactCardRight>
          </ContactContentCard>
        </ContactContentWrapper>
      </BodyWrapper>
    </Layout>
  )
}

export default AboutMe
