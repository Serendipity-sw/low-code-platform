import React from 'react'
import style from './index.pcss'
import { Collapse, InputNumber, Select } from 'antd'
import IconFont from '../../../../../../components/icon-font'
import ColorPickerDropDown from '../../../../../../components/color-picker-drop-down'

export default _ => {

  const dropDownRender = _ => {
    return (
      <div className={ style.dropDownArea }>
        <span className={ style.rows }>
          <IconFont className={ style.rowsIcon } name="#icon-24gl-borderNone"/>
          无边框
        </span>
        <span className={ style.rows }>
          <IconFont className={ style.rowsIcon } name="#icon-24gl-borderTop"/>
          上边框
        </span>
        <span className={ style.rows }>
          <IconFont className={ style.rowsIcon } name="#icon-24gl-borderRight"/>
          右边框
        </span>
        <span className={ style.rows }>
          <IconFont className={ style.rowsIcon } name="#icon-24gl-borderBottom"/>
          下边框
        </span>
        <span className={ style.rows }>
          <IconFont className={ style.rowsIcon } name="#icon-24gl-borderLeft"/>
          左边框
        </span>
        <span className={ style.rows }>
          <IconFont className={ style.rowsIcon } name="#icon-24gl-borderOutside"/>
          全边框
        </span>
      </div>
    )
  }

  return (
    <Collapse defaultActiveKey={ [ 'border-style' ] }>
      <Collapse.Panel header="边框" key="border-style">
        <div className={ style.row }>
          <span className={ style.columnTitle }>边框线</span>
          <div className={ style.inputArea }>
            <Select dropdownRender={dropDownRender}>
            </Select>
          </div>
        </div>
        <div className={ style.row }>
          <span className={ style.columnTitle }>样式</span>
          <div className={ style.inputArea }>
            <Select>
            </Select>
          </div>
        </div>
        <div className={ style.row }>
          <span className={ style.columnTitle }>线宽</span>
          <div className={ style.inputArea }>
            <InputNumber min={ 0.1 } max={ 99 } />
          </div>
        </div>
        <div className={ style.row }>
          <span className={ style.columnTitle }>颜色</span>
          <div className={ style.inputArea }>
            <ColorPickerDropDown colorType={ 'borderColor' }>
              <IconFont className={ style.selectColor } name="#icon-youqitiaoseban"/>
            </ColorPickerDropDown>
          </div>
        </div>
      </Collapse.Panel>
    </Collapse>
  )
}