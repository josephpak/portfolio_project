import React from 'react'
import 'antd/dist/antd.css';
import Timeline from "antd/lib/timeline"

import {
  TimelineWrapper
} from "./TimelineStyles"

import {
  useTheme
} from "../../hooks/darkMode"

export default function WorkTimeline() {
  const themeState = useTheme()

  return (
    <TimelineWrapper dark={themeState.dark}>
      <Timeline
          reverse="true"
      >
          <Timeline.Item
          color="crimson"
          ><span>Harvard College</span> <br /> A.B. 2014</Timeline.Item>
          <Timeline.Item>Market Metrics, FactSet <br /> Data Product Analyst</Timeline.Item>
          <Timeline.Item
          color="purple"
          >FiscalNote <br /> Product Manager</Timeline.Item>
          <Timeline.Item
          color="red"
          >Lambda School <br /> Full Stack Web Development</Timeline.Item>
          <Timeline.Item
          color="blue"
          >Samsara <br /> Product Manager</Timeline.Item>
      </Timeline>
    </TimelineWrapper>
  )
}
