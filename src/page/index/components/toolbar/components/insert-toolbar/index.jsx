import React from 'react'
import style from './index.pcss'
import InsertFont from './components/insert-font'

export default props => {
  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <InsertFont/>
    </div>
  )
}