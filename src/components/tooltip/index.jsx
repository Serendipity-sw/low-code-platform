import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import './index.pcss'

export default props => {
  return (
    <Tippy content={ props.content } delay={ 200 } arrow={false} theme="forest" className={ 'animate__animated animate__rubberBand' }>
      { props.children }
    </Tippy>
  )
}