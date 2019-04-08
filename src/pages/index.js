import React from "react"
// import { Link } from "gatsby"
import WorkTimeline from "../components/Timeline/WorkTimeline"
import Library from "../components/Library/Library"
import Layout from "../components/layout"
import rocks from "../images/rocks.jpg"

import SEO from "../components/seo"

import {
  BodyWrapper,
  MainContentWrapper,
  ContactContentWrapper,
  ContactContentCard,
  ContactCardRight,
  Interests
} from "../page-styles/AboutMeStyles"

import ContactCardLeft from "../components/ContactCards/ContactCardLeft"

const AboutMe = () => {
  return (
      <Layout>
      <SEO title="Joe Pak" />
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
              <img src={rocks} alt="Rock Climbing"/>
            </ContactCardRight>
          </ContactContentCard>
        </ContactContentWrapper>
      </BodyWrapper>
    </Layout>
  )
}

export default AboutMe
