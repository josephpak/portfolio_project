import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import ProjectCarousel from "../components/ProjectCarousel/ProjectCarousel"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />  
    <ProjectCarousel />
  </Layout>
)

export default ProjectsPage
