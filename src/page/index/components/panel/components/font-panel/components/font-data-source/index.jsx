import React from 'react'
import style from './index.pcss'

export default props => {
  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <div className={ style.row }>
        <span className={ style.rowTitle }>文本内容</span>
        <div className={ style.content }></div>
      </div>
    </div>
  )
}