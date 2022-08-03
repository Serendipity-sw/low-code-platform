import React, { useState } from 'react'
import { SketchPicker } from 'react-color'

export default props => {
  const [ color, setColor ] = useState( props.color )

  return (
    <SketchPicker color={ color } onChange={ setColor }/>
  )
}