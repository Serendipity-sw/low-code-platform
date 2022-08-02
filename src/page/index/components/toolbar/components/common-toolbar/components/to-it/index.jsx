import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import DropDown from '../../../../../../../../components/drop-down'

export default _ => {
  const dropDownList = [
    {
      iconName: 'icon-zuoduiqi',
      name: '左对齐'
    },
    {
      iconName: 'icon-juzhongduiqi',
      name: '居中对齐'
    },
    {
      iconName: 'icon-youduiqi',
      name: '右对齐'
    }
  ]

  return (
    <DropDown data={ dropDownList }>
      <div className={ style.column }>
        <IconFont className={ style.icon } name="#icon-liangduanduiqi"/>
        排列
        <IconFont className={ style.dropDownIcon } name="#icon-xiala"/>
      </div>
    </DropDown>
  )
}