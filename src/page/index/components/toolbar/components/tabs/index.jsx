import React from 'react'
import style from './index.pcss'

export default props=>{
  return (
    <div className={style.init}>
      <span className={style.tab}>开始</span>
      <span className={[style.tab,style.selected].join(' ')}>插入</span>
    </div>
  )
}