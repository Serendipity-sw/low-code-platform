import React from 'react'
import { flushSync } from 'react-dom'
import Moveable from 'react-moveable'

export default props => {

  return (
    <Moveable
      flushSync={ flushSync }
      target={ props.target }
      container={ props.container }
      ables={ [ DimensionViewable ] }
      props={ {
        dimensionViewable: props.viewAble
      } }
      snappable={ true }
      keepRatio={ false }
      resizable={ true }
      verticalGuidelines={ [ 0, 200, 400 ] }
      horizontalGuidelines={ [ 0, 200, 400 ] }
      snapThreshold={ 5 }
      isDisplaySnapDigit={ true }
      snapGap={ true }
      snapDirections={ { 'top': true, 'right': true, 'bottom': true, 'left': true } }
      elementSnapDirections={ { 'top': true, 'right': true, 'bottom': true, 'left': true } }
      snapDigit={ 0 }
      draggable={ true }
      throttleDrag={ 0 }
      startDragRotate={ 0 }
      throttleDragRotate={ 0 }
      zoom={ 1 }
      origin={ true }
      rotatable={ true }
      throttleRotate={ 0 }
      rotationPosition={ 'top' }
      padding={ { 'left': 0, 'top': 0, 'right': 0, 'bottom': 0 } }
      onDragStart={ e => {
      } }
      onDrag={ e => {
        e.target.style.transform = e.transform
      } }
      onResizeStart={ e => {

      } }
      onResize={ e => {
        e.target.style.width = `${ e.width }px`
        e.target.style.height = `${ e.height }px`
      } }
      onRotateStart={ e => {
      } }
      onRotate={ e => {
        e.target.style.transform = e.transform
      } }
    />
  )
}

const DimensionViewable = {
  name: 'dimensionViewable',
  props: {},
  events: {},
  render( moveable, React ) {
    const rect = moveable.getRect()

    // Add key (required)
    // Add class prefix moveable-(required)
    return <div key={ 'dimension-viewer' } className={ 'moveable-dimension' } style={ {
      position: 'absolute',
      left: `${ rect.width / 2 }px`,
      top: `${ rect.height + 20 }px`,
      background: '#4af',
      borderRadius: '2px',
      padding: '2px 4px',
      color: 'white',
      fontSize: '13px',
      whiteSpace: 'nowrap',
      fontWeight: 'bold',
      willChange: 'transform',
      transform: 'translate(-50%, 0px)'
    } }>
      { Math.round( rect.offsetWidth ) } x { Math.round( rect.offsetHeight ) }
    </div>
  }
}