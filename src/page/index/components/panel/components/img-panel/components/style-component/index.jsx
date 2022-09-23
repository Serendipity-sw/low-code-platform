import React from 'react'
import style from './index.pcss'
import BackgroundStyle from "../../../background-style"
import BorderStyle from "../../../border-style"

export default props=>{
  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <BackgroundStyle/>
      <BorderStyle/>
    </div>
  )
}