import React from "react"
// import { Link } from "gatsby"
import Timeline from "antd/lib/timeline"

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
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px'
        }}>
          <Timeline
            pending="My next adventure"
            reverse="true"
          >
            <Timeline.Item
              color="crimson"
            >Harvard College <br /> A.B. 2014</Timeline.Item>
            <Timeline.Item>Market Metrics, FactSet <br /> Data Product Analyst</Timeline.Item>
            <Timeline.Item
              color="purple"
            >FiscalNote <br /> Product Manager</Timeline.Item>
            <Timeline.Item
              color="red"
            >Lambda School <br /> Full Stack Web Development 2019</Timeline.Item>
          </Timeline>
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
