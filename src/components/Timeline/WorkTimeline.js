import React from 'react'
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
          pending="My next adventure"
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
          >Lambda School <br /> Full Stack Web Development 2019</Timeline.Item>
      </Timeline>
    </TimelineWrapper>
  )
}
