import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import {
  UnderConstruction
} from "../page-styles/UnderConstruction"

import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="Hi, I'm Joe Pak" />
    <div style={{
      border: '1px dashed black',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap'
      }}>
      <div style={{
        border: '1px dashed black',
        width: '100%',
        display: 'flex'
      }}>
        <div style={{
          border: '1px dotted green',
          width: '50%'
        }}>
          Work Experience
        </div>
        <div style={{
          border: '1px dotted green',
          width: '50%'
        }}>
          My Interests
        </div>
      </div>
      <div style={{
        border: '1px dashed black',
        width: '100%',
        display: 'flex'
      }}>
        <div style={{
          border: '1px dotted green',
          width: '50%'
        }}>
          Contact Me
        </div>
        <div style={{
          border: '1px dotted green',
          width: '50%'
        }}>
          Fun Images
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutMe
