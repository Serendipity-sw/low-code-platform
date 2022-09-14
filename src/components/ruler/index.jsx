import React from 'react'
import style from './index.pcss'

export default props => {
  return <div className={ style.init }>
    <div className={ style.horizontal }></div>
    <div className={ style.vertical }></div>
    {
      props.children
    }
  </div>
}