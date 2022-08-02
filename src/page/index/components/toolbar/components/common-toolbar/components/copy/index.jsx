import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'

export default _ => {
  return (
    <div className={ style.column }>
      <IconFont className={ style.icon } name='#icon-copy'/>
      复制
    </div>
  )
}