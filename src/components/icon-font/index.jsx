import style from './icon-font.pcss'
import React from 'react'

require('./svgIcon/iconfont.js')

export default props => {
  return (
    <svg className={`${style.iconFont} ${props.className??''}`} aria-hidden="true">
      <use xlinkHref={props.name}></use>
    </svg>
  )
}