import React, { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import Selecto from 'react-selecto'
import Moveable from 'react-moveable'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidV4 } from 'uuid'
import { AddPageItemAndSelect, EditPageItemGroup, SelectControls } from '../../../../store/lowCodeDataReducers'

export default React.forwardRef( props => {
  const insertControlsSelected = useSelector( state => state.lowCodeData.insertControlsSelected )

  const selectControls = useSelector( state => state.lowCodeData.selectControls )

  const dispatch = useDispatch()

  const moveableRef = React.useRef( null )
  const selectoRef = React.useRef( null )

  const [ moveTargets, setMoveTargets ] = useState( [] )

  useEffect( _ => {
    if ( selectControls?.length ) {
      setMoveTargets( selectControls.map( item => document.getElementById( item ) ) )
    } else {
      setMoveTargets( [] )
    }
  }, [ selectControls ] )

  const handleMoveSelect = e => {
    if ( e.selected.length ) {
      dispatch( SelectControls( e.selected.map( item => item.id ) ) )
    } else {
      if ( insertControlsSelected ) {
        handleInsertControls( e.rect )
      }
    }
  }

  const handleInsertControls = transformObj => {
    const canvasDomObj = document.querySelector( props.container ).getBoundingClientRect()
    dispatch( AddPageItemAndSelect( {
      id: uuidV4(),
      controls: insertControlsSelected,
      style: {
        transform: `translate(${ transformObj.left - canvasDomObj.left }px, ${ transformObj.top - canvasDomObj.top }px)`,
        width: `${ transformObj.width < 20 ? 20 : transformObj.width }px`,
        height: `${ transformObj.height < 20 ? 20 : transformObj.height }px`,
        position: 'absolute'
      }
    } ) )
  }

  const handleMoveableEnd = events => {
    dispatch( EditPageItemGroup( events ) )
  }

  return (
    <>
      <Moveable
        ref={ moveableRef }
        flushSync={ flushSync }
        target={ moveTargets }
        ables={ [ DimensionViewable ] }
        props={ {
          dimensionViewable: true
        } }
        preventClickEventOnDrag={ false }
        draggable={ true }
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
        throttleDrag={ 0 }
        startDragRotate={ 0 }
        throttleDragRotate={ 0 }
        zoom={ 1 }
        origin={ true }
        rotatable={ true }
        throttleRotate={ 0 }
        rotationPosition={ 'top' }
        padding={ { 'left': 0, 'top': 0, 'right': 0, 'bottom': 0 } }
        onClickGroup={ e => {
          selectoRef.current.clickTarget( e.inputEvent, e.inputTarget )
        } }
        onDragGroup={ e => {
          e.events.forEach( ev => {
            ev.target.style.transform = ev.transform
          } )
        } }
        onDragGroupEnd={ e => {
          handleMoveableEnd( e.events )
        } }
        onDrag={ e => {
          e.target.style.transform = e.transform
        } }
        onDragEnd={ e => {
          handleMoveableEnd( [ e ] )
        } }
        onResize={ e => {
          e.target.style.width = `${ e.width }px`
          e.target.style.height = `${ e.height }px`
        } }
        onResizeEnd={ e => {
          handleMoveableEnd( [ e ] )
        } }
        onResizeGroup={ e => {
          e.events.forEach( ev => {
            ev.target.style.width = `${ ev.width }px`
            ev.target.style.height = `${ ev.height }px`
          } )
        } }
        onResizeGroupEnd={ e => {
          handleMoveableEnd( e.events )
        } }
        onRotate={ e => {
          e.target.style.transform = e.transform
        } }
        onRotateEnd={ e => {
          handleMoveableEnd( [ e ] )
        } }
        onRotateGroup={ e => {
          e.events.forEach( ev => {
            ev.target.style.transform = ev.transform
          } )
        } }
        onRotateGroupEnd={ e => {
          handleMoveableEnd( e.events )
        } }
      />
      <Selecto
        ref={ selectoRef }
        dragContainer={ props.container }
        selectableTargets={ [ `${ props.container } *` ] }
        selectByClick={ true }
        selectFromInside={ true }
        toggleContinueSelect={ 'shift' }
        hitRate={ 100 }
        ratio={ 0 }
        onSelectEnd={ e => {
          if ( e.isDragStart ) {
            e.inputEvent.preventDefault()

            setTimeout( _ => {
              moveableRef.current?.dragStart?.( e.inputEvent )
            } )
          } else {
            handleMoveSelect( e )
          }
        } }
        onDragStart={ e => {
          const moveable = moveableRef.current
          const target = e.inputEvent.target
          if (
            moveable.isMoveableElement( target )
            || moveTargets.some( t => t === target || t.contains( target ) )
          ) {
            e.stop()
          }
        } }
      />
    </>
  )
} )

const DimensionViewable = {
  name: 'dimensionViewable',
  props: {},
  events: {},
  render( moveable, React ) {
    const rect = moveable.getRect()

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