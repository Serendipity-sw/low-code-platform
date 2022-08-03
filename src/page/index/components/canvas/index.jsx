import React, { useEffect, useRef, useState } from 'react'
import style from './index.pcss'
import MoveComponent from './components/move-component'
import Selecto from './components/selecto'

export default _ => {

  const domRef = useRef()
  const dom1Ref = useRef()
  const [ visible, setVisible ] = useState( false )

  useEffect( _ => {
    setVisible( !visible )
  }, [] )

  return (
    <>
      <div ref={ dom1Ref } className={ style.init }>
        <div ref={ domRef }>className</div>
        <MoveComponent target={ domRef.current } container={ dom1Ref.current } viewAble={ true }/>
      </div>
      <Selecto container={dom1Ref.current}/>
    </>
  )
}