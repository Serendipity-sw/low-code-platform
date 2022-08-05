import React, { useState } from 'react'
import style from './index.pcss'

export default props => {
  const [ isOpened, setIsOpened ] = useState( true )

  const clickOpened = _ => {
    debugger
    setIsOpened( !isOpened )
  }

  return (
    <div className={ style.init } onClick={ clickOpened }>

    </div>
  )
}