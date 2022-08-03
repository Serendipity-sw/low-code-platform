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

  return (
    <>
      <div ref={ container } className={ style.init }>
        {
          pageContentData.map( item =>
            <div id={ item.id } style={ item.style }>{ item.id }</div>
          )
        }
        {/*{ pageContentData.length &&*/}
        {/*  <MoveComponent target={ `#${ pageContentData[0].id }` } container={ `.${ style.init }` } viewAble={ true }/> }*/}
      </div>
      <Selecto container={ `.${ style.init }` }/>
    </>
  )
}