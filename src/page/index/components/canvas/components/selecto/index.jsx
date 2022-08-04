import React from 'react'
import Selecto from 'react-selecto'
import { useDispatch, useSelector } from 'react-redux'
import { AddPageItemAndSelect, SelectControls } from '../../../../store/low-code-data'
import { v4 as uuidV4 } from 'uuid'

export default props => {
  const insertControlsSelected = useSelector( state => state.lowCodeData.insertControlsSelected )

  const dispatch = useDispatch()

  const handleMoveSelect = e => {
    if ( e.added.length ) {
      dispatch( SelectControls( e.added.map( item => item.id ) ) )
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

  return (
    <Selecto
      dragContainer={ props.container }
      selectableTargets={ [ `${ props.container } *` ] }
      selectByClick={ true }
      selectFromInside={ true }
      toggleContinueSelect={ 'shift' }
      hitRate={ 100 }
      ratio={ 0 }
      onSelectEnd={ e => {
        handleMoveSelect( e )
      } }
      onDragStart={ e => {
        const target = e.inputEvent.target
        if (
          props.moveDomRef?.current?.isMoveableElement?.( target )
          || props.moveTargets?.some?.( t => t === target || t.contains( target ) )
        ) {
          e.stop()
        }
      } }
    />
  )
}