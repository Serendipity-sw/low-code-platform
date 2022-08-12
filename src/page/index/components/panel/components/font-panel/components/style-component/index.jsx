import React from 'react'
import style from './index.pcss'
import TextStyle from './components/text-style'

export default props => {
  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <TextStyle/>
    </div>
  )
}