import React from "react"
// import { Link } from "gatsby"
import WorkTimeline from "../components/Timeline/WorkTimeline"
import Layout from "../components/layout"
import climb from "../images/climb.jpg"

import SEO from "../components/seo"

import {
  BodyWrapper,
  MainContentWrapper,
  ContactContentWrapper,
  ContactContentCard,
  ContactCardLeft,
  ContactCardRight,
  Interests
} from "../page-styles/AboutMeStyles"

const AboutMe = () => (
  <Layout>
    <SEO title="Hi, I'm Joe Pak" />
    <BodyWrapper>
      <MainContentWrapper>
        <WorkTimeline />
        <Interests>
          My Interests
        </Interests>
      </MainContentWrapper>
      <ContactContentWrapper>
        <ContactContentCard>
          <ContactCardLeft>
            <h1>Contact me</h1>
            <h2>josephpak2014@gmail.com</h2>
            <hr />
            
          </ContactCardLeft>
          <ContactCardRight>
            <img src={climb}/>
          </ContactCardRight>
        </ContactContentCard>
      </ContactContentWrapper>
    </BodyWrapper>
  </Layout>
)

export default AboutMe
