import React from 'react'
import {Collapse} from "antd"

export default _ => {
  return (
    <Collapse defaultActiveKey={['chart-x-axis-style']}>
      <Collapse.Panel header="坐标轴样式" key="chart-x-axis-style">

      </Collapse.Panel>
    </Collapse>
  )
}