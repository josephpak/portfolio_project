import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import SEO from "../components/seo"
import styled from 'styled-components'

const BodyContent = styled.div`
  margin: 25px 0;
  margin-right: 124px;
  margin-top: 75px;
  margin-bottom: 112px;
  width: 1000px;
  padding: 2rem 4rem;
  background: white;
  border-radius: 5px;
  box-shadow:  0 2px 4px rgba(0, 0, 0, 0.12);
`

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BodyContent>
      <ProjectCard />
    </BodyContent>
  </Layout>
)

export default ProjectsPage
