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
          color="coral"
          ><span>Harvard College</span> <br /> A.B. 2014</Timeline.Item>
          <Timeline.Item
          color="teal"
          >Market Metrics, FactSet <br /> Data Product Analyst</Timeline.Item>
          <Timeline.Item
          color="coral"
          >FiscalNote <br />Product Manager</Timeline.Item>
          <Timeline.Item
          color="teal"
          >Samsara <br /> Product Manager</Timeline.Item>
          <Timeline.Item
          color="coral"
          >Point72 Ventures <br /> Product Manager</Timeline.Item>
      </Timeline>
    </TimelineWrapper>
  )
}
