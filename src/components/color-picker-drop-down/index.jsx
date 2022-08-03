import React, { useRef } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/themes/light.css'
import style from './index.pcss'
import ColorPicker from './components/color-picker'

export default props => {

  const ref = useRef()

  const handleClose = _ => {
    ref.current._tippy.hide()
  }

  return (
    <Tippy content={ <ColorPicker/> } ref={ ref } interactive={ true }
           theme="light"
           arrow={ false }
           className={ `animate__animated animate__rubberBand ${ style.tranBg }` }>
      { props.children }
    </Tippy>
  )
}