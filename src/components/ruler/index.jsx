import React, { useEffect, useRef } from 'react'
import style from './index.pcss'
import Guides from '@scena/guides'

export default props => {
  const parentDom = useRef(), horizontalDom = useRef(), verticalDom = useRef()

  useEffect( _ => {
    const horizontalGuides = new Guides( horizontalDom.current, {
        type: 'horizontal',
        displayDragPos: true
      } ),
      verticalGuides = new Guides( verticalDom.current, {
        type: 'vertical',
        displayDragPos: true
      } )

    const parentDomObserver = new ResizeObserver( _ => {
      horizontalGuides.resize()
      verticalGuides.resize()
    } )

    parentDomObserver.observe( parentDom.current )

    return _ => {
      parentDomObserver.disconnect()
      horizontalGuides.destroy()
      verticalGuides.destroy()
    }
  }, [] )

  return (
    <div ref={ parentDom } className={ [ style.init, props.className ].join( ' ' ) }>
      <i className={ style.box } />
      <div ref={ horizontalDom } className={ style.horizontal }></div>
      <div ref={ verticalDom } className={ style.vertical }></div>
      <div className={ style.content }>
        { props.children }
      </div>
    </div>
  )
}