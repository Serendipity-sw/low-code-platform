import React, { useEffect, useRef, useState } from 'react'
import style from './index.pcss'
import MoveComponent from './components/move-component'
import Selecto from './components/selecto'
import { useSelector } from 'react-redux'

export default _ => {

  const pageContentData = useSelector( state => state.lowCodeData.pageContentData )

  const container = useRef()

  const [ visible, setVisible ] = useState( false )

  useEffect( _ => {
    setVisible( !visible )
  }, [] )

  const domRender = list => {
    return list.map( item => {
      switch ( item.controls ) {
        case 'div':
          return <div id={ item.id } style={ item.style }></div>
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
        <MoveComponent container={ `.${ style.init }` } viewAble={ true }/>
      </div>
      <Selecto container={ `.${ style.init }` }/>
    </>
  )
}