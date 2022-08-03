import React, { useEffect, useRef, useState } from 'react'
import style from './index.pcss'
import MoveComponent from './components/move-component'

export default _ => {

  const domRef = useRef()
  const dom1Ref = useRef()
  const [ visible, setVisible ] = useState( false )

  useEffect( _ => {
    debugger
    console.log(domRef)
    setVisible( !visible )
  }, [] )

  return (
    <div ref={ dom1Ref } className={ style.init }>
      <div ref={ domRef }>className</div>
      <MoveComponent target={ domRef.current } container={ dom1Ref.current } viewAble={ true }/>
    </div>
  )
}