import React, { useEffect, useRef, useState } from 'react'
import style from './index.pcss'
import MoveComponent from './components/move-component'
import Selecto from './components/selecto'
import { useSelector } from 'react-redux'

export default _ => {

  const [ moveTargets, setMoveTargets ] = React.useState()

  const pageContentData = useSelector( state => state.lowCodeData.pageContentData )

  const [ container, moveDomRef, selectoDomRef ] = new Array( 3 ).map( _ => useRef() )

  const domRender = list => {
    return list.map( item => {
      switch ( item.controls ) {
        case 'div':
          return <div key={ item.id } id={ item.id } style={ item.style }></div>
        default:
          return
      }
    } )
  }

  return (
    <>
      <div ref={ container } className={ style.init }>
        {
          domRender( pageContentData )
        }
      </div>
      <MoveComponent moveTargets={moveTargets} setMoveTargets={setMoveTargets} ref={ moveDomRef } selectoDomRef={ selectoDomRef } container={ `.${ style.init }` }
                     viewAble={ true }/>
      <Selecto ref={ selectoDomRef } moveTargets={moveTargets} moveDomRef={ moveDomRef } container={ `.${ style.init }` }/>
    </>
  )
}