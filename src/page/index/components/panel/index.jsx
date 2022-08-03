import React from 'react'
import style from './index.pcss'
import { Drawer, Segmented } from 'antd'
import Style from './components/style'

export default _ => {
  return (
    <Drawer
      title="操作面板"
      placement="right"
      closable={ false }
      visible={ true }
      mask={ false }
      getContainer={ false }
      className={ style.init }
    >
      <div className={ style.segmented }>
        <Segmented options={ [
          {
            label: '样式',
            value: 1
          },
          {
            label: '数据',
            value: 2
          },
          {
            label: '事件',
            value: 3
          }
        ] }/>
      </div>
      <Style/>
    </Drawer>
  )
}