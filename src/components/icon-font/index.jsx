import style from './icon-font.pcss'
import React from 'react'

require( './svgIcon/iconfont.js' )

export default React.forwardRef( ( props, ref ) => {
  return (
    <svg className={ `${ style.iconFont } ${ props.className ?? '' }` } aria-hidden="true" ref={ ref }
         onClick={ props.onClick }>
      <use xlinkHref={ props.name }></use>
    </svg>
  )
} )