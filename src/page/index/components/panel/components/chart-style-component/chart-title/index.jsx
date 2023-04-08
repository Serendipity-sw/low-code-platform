import React, {useState} from 'react'
import style from './index.pcss'
import {Collapse, Input, Switch} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {cloneDeep} from 'lodash'

export default _ => {

  const {selectControls, pageContentData} = useSelector(state => state.lowCodeData)

  const dispatch = useDispatch()

  const selectControlsList = _ => cloneDeep(pageContentData.filter(item => selectControls.includes(item.id)))

  return (
    <Collapse>
      <Collapse.Panel header="图表标题" key="chart-title-style">
        <div className={style.row}>
          <span className={style.columnLabel}>显示</span>
          <Switch class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>主题文本</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>主题超链接</span>
          <Input class={style.columnControl}/>
        </div>
      </Collapse.Panel>
    </Collapse>
  )
}
