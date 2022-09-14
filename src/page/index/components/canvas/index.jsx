import React, { useEffect, useRef, Suspense } from 'react'
import style from './index.pcss'
import { useDispatch, useSelector } from 'react-redux'
import SelectMove from './components/select-move'
import { controlsType } from '../../utils/controls-type'
import { SetContainerSize } from '../../store/lowCodeDataReducers'
import Ruler from '../../../../components/ruler'

const ChartLine = React.lazy( () => import('./components/chart-line') )
const ChartColumn = React.lazy( () => import('./components/chart-column') )
const ChartBar = React.lazy( () => import('./components/chart-bar') )
const ChartPie = React.lazy( () => import('./components/chart-pie') )
const MapControls = React.lazy( () => import('./components/map-controls') )
const FontControls = React.lazy( () => import('./components/font-controls') )
const RichEditControls = React.lazy( () => import('./components/rich-edit-controls') )

export default _ => {

  const pageContentData = useSelector( state => state.lowCodeData.pageContentData )

  const dispatch = useDispatch()

  const container = useRef()

  const domRender = list => {
    return list.map( item => {
      switch ( item.controls ) {
        case controlsType.div.name:
          return <FontControls key={ item.id } { ...item } />
        case controlsType.richEdit.name:
          return <RichEditControls key={ item.id } { ...item } />
        case controlsType.img.name:
          return <img key={ item.id } id={ item.id }
                      src={ item.src }
                      style={ item.style } alt={ item.id } />
        case controlsType.chartLine.name:
          return <ChartLine key={ item.id } { ...item } />
        case controlsType.chartColumn.name:
          return <ChartColumn key={ item.id } { ...item } />
        case controlsType.chartBar.name:
          return <ChartBar key={ item.id } { ...item } />
        case controlsType.chartPie.name:
          return <ChartPie key={ item.id } { ...item } />
        case controlsType.map.name:
          return <MapControls key={ item.id } { ...item } />
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
      <Ruler>
        <div className={ style.init }>
          <div ref={ container } className={ style.canvas }>
            {
              domRender( pageContentData )
            }
          </div>
          <SelectMove container={ `.${ style.canvas }` } />
        </div>
      </Ruler>
    </Suspense>
  )
}