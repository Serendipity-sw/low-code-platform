import React, { useRef } from 'react'
import style from './index.pcss'
import { useSelector } from 'react-redux'
import SelectMove from './components/select-move'
import { controlsType } from '../../utils/controls-type'

export default _ => {

  const pageContentData = useSelector( state => state.lowCodeData.pageContentData )

  const container = useRef()

  const domRender = list => {
    return list.map( item => {
      switch ( item.controls ) {
        case controlsType.div:
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
      <SelectMove container={ `.${ style.init }` }/>
    </>
  )
}