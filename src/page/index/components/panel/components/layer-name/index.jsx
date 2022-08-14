import React from 'react'
import style from './index.pcss'
import { Input } from 'antd'

export default _ => {
  return (
    <div className={ style.row }>
      <span className={ style.rowTitle }>图层名称</span>
      <div className={ style.rowContent }>
        <Input/>
      </div>
    </div>
  )
}