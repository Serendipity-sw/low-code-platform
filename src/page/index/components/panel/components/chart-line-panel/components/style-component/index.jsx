import React from 'react'
import style from './index.pcss'
import BackgroundStyle from "../../../background-style"
import BorderStyle from "../../../border-style"
import ChartTitle from '../../../chart-style-component/chart-title'

export default props=>{
  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <BackgroundStyle/>
      <BorderStyle/>
      <ChartTitle/>
    </div>
  )
}
