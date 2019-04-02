import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import {
  UnderConstruction
} from "../page-styles/UnderConstruction"
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
    <SEO title="Writing" keywords={[`gatsby`, `application`, `react`]} />
    <UnderConstruction>
      <h1>Under Construction!</h1>
    </UnderConstruction>
  </Layout>
)

export default WritingsPage