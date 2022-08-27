import style from './icon-font.pcss'
import React from 'react'

require( './svgIcon/iconfont.js' )

export default React.forwardRef( ( props, ref ) => {

  const xlinkHrefProcess = name => {
    if ( name?.length > 0 && name?.indexOf( '#' ) !== 0 ) {
      return `#${ name }`
    } else {
      return name
    }
  }

  return (
    <svg className={ `${ style.iconFont } ${ props.className ?? '' }` } aria-hidden="true" ref={ ref }
         onClick={ props.onClick }>
      <use xlinkHref={ xlinkHrefProcess( props.name ) }></use>
    </svg>
  )
} )