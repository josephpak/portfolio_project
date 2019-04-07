import React from 'react'
import Timeline from "antd/lib/timeline"

import {
  TimelineWrapper
} from "./TimelineStyles"

export default function WorkTimeline() {
  return (
    <TimelineWrapper>
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
