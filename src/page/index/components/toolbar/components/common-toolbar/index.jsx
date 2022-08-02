import React from 'react'
import style from './index.pcss'
import Copy from './components/copy'
import Hide from './components/hide'
import Combination from './components/combination'
import Top from './components/top'

export default props => {
  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <Copy/>
      <Hide/>
      <Combination/>
      <Top/>
    </div>
  )
}