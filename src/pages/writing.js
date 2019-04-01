import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
// import styled from 'styled-components'

// const BodyContent = styled.div`
//   margin: 25px 0;
//   margin-right: 124px;
//   width: 1000px;
//   padding: 2rem 4rem;
//   background: white;
//   border-radius: 5px;
//   box-shadow:  0 2px 4px rgba(0, 0, 0, 0.12);
// `

const WritingsPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default WritingsPage