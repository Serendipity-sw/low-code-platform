import React, { useEffect, useRef, useState } from 'react'
import style from './index.pcss'

export default props => {

  const collapseDom = useRef()

  const [ collapseSize, setCollapseSize ] = useState( 0 )

  useEffect( _ => {
    if ( collapseSize === 0 ) {
      setCollapseSize( collapseDom.current?.offsetWidth )
    }
    collapseDom.current?.addEventListener?.( 'transitionend', handleTransitionEnd )
    return _ => collapseDom.current?.removeEventListener?.( 'transitionend', handleTransitionEnd )
  }, [] )

  useEffect( _ => {
    if ( collapseSize ) {
      switch ( props.direction?.toLowerCase?.() ) {
        case 'width':
          collapseDom.current.style.width = props.isOpened ? collapseSize : 0
          break
        case 'height':
          collapseDom.current.style.height = props.isOpened ? collapseSize : 0
          break
      }
    }
  }, [ props.isOpened, collapseSize ] )

  const handleTransitionEnd = _ => {
    props?.onRest?.()
  }

  const directionClassProcess = direction => {
    switch ( direction?.toLowerCase?.() ) {
      case 'width':
        return style.collapseWidth
      case 'height':
        return style.collapseHeight
    }
  }

  return (
    <div ref={ collapseDom } className={ [ directionClassProcess( props.direction ), props.className ].join( ' ' ) }>
      {
        props.children
      }
    </div>
  )
}