import React, { useEffect, useRef, Suspense } from 'react'
import style from './index.pcss'
import { useDispatch, useSelector } from 'react-redux'
import SelectMove from './components/select-move'
import { controlsType } from '../../utils/controls-type'
import { SetContainerSize } from '../../store/lowCodeDataReducers'

const ChartLine = React.lazy( () => import('./components/chart-line') )

export default _ => {

  const pageContentData = useSelector( state => state.lowCodeData.pageContentData )

  const dispatch = useDispatch()

  const container = useRef()

  const domRender = list => {
    return list.map( item => {
      switch ( item.controls ) {
        case controlsType.div:
          return <div key={ item.id } id={ item.id } style={ item.style }>{ item.id }</div>
        case controlsType.img:
          return <img key={ item.id } id={ item.id }
                      src={ item.src || 'https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*aetpSLfcpFIAAAAAAAAAAABkARQnAQ' }
                      style={ item.style } alt={ item.id }/>
        case controlsType.chartLine:
          return <ChartLine key={ item.id } id={ item.id } style={ item.style }/>
        default:
          return
      }
    } )
  }

  useEffect( _ => {
    dispatch( SetContainerSize( { width: container.current.offsetWidth, height: container.current.offsetHeight } ) )
  }, [ container ] )

  return (
    <Suspense>
      <div className={ style.init }>
        <div ref={ container } className={ style.canvas }>
          {
            domRender( pageContentData )
          }
        </div>
        <SelectMove container={ `.${ style.canvas }` }/>
      </div>
    </Suspense>
  )
}