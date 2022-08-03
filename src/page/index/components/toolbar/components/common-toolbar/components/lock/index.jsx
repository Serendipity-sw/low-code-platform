import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'

export default _ => {
  return (
    <div className={ style.column }>
      <IconFont className={ style.icon } name="#icon-jurassic_enable"/>
      锁定
    </div>
  )
}