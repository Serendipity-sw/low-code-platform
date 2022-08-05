import React, { useRef } from 'react'
import style from './index.pcss'
import { throttle } from 'lodash'

export default props => {

  const collapseDom = useRef()

  const handleCollapse = _ => {
    switch ( props?.direction?.toLowerCase?.() ){
      case 'width':
        break
      case 'height':
        break
      default:
        break
    }
  }

  return (
    <div ref={collapseDom} className={ [ style.init, props.className ].join( ' ' ) } onClick={ throttle( handleCollapse, 200 ) }>
      {
        props.children
      }
    </div>
  )
}