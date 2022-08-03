import React from 'react'
import style from './index.pcss'

export default props => {
  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
    </div>
  )
}