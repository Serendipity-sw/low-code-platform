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
        <div className={style.row}>
          <span className={style.columnLabel}>文字颜色</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>字体风格</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>字体粗体</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>字体</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>字体大小</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>字体行高</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>文本宽度</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>文本高度</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>文本描边色</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>描边宽度</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>描边线类型</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>描边偏移量</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>文本阴影色</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>阴影长度</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>阴影X偏移</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>阴影Y偏移</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>文字超出宽度</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>末尾显示</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>富文本样式</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>副标题</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>副标题超链接</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>超链接打开方式</span>
          <Input class={style.columnControl}/>
        </div>
        <div className={style.row}>
          <span className={style.columnLabel}>超链接打开方式</span>
          <Input class={style.columnControl}/>
        </div>
      </Collapse.Panel>
    </Collapse>
  )
}
