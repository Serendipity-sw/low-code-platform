import React, { useEffect, useRef } from 'react'
import RichEdit from '../../../../../../components/rich-edit'

export default props => {

  const richEdit = useRef()

  useEffect( _ => {
    richEdit.current?.setData( props.data )
  }, [ props.data ] )

  return (
    <div id={ props.id } style={ props.style }>
      <RichEdit ref={ richEdit } readOnly={ true } data={ props.data }/>
    </div>
  )
}