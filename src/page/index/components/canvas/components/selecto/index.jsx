import React from 'react'
import Selecto from 'react-selecto'
import { useDispatch, useSelector } from 'react-redux'
import { AddPageItem } from '../../../../store/low-code-data'
import { v4 as uuidV4 } from 'uuid'

export default props => {
  const insertControlsSelected = useSelector( state => state.lowCodeData.insertControlsSelected )

  const dispatch = useDispatch()

  const handleInsertControls = transformObj => {
    if ( insertControlsSelected ) {
      const canvasDomObj = document.querySelector( props.container ).getBoundingClientRect()
      dispatch( AddPageItem( {
        id: uuidV4(),
        controls: insertControlsSelected,
        style: {
          transform: `translate(${ transformObj.left - canvasDomObj.left }px, ${ transformObj.top - canvasDomObj.top }px)`,
          width: `${ transformObj.width }px`,
          height: `${ transformObj.height }px`,
          position: 'absolute'
        }
      } ) )
    }
  }

  return (
    <Selecto
      dragContainer={ props.container }
      selectByClick={ true }
      selectFromInside={ true }
      toggleContinueSelect={ 'shift' }
      hitRate={ 100 }
      ratio={ 0 }
      onSelectEnd={ e => {
        handleInsertControls( e.rect )
      } }
    />
  )
}