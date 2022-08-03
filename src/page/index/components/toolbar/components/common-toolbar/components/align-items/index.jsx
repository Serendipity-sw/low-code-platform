import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import DropDown from '../../../../../../../../components/drop-down'

export default _ => {
  const dropDownList = [
    {
      iconName: 'icon-zuoduiqi1',
      name: '左对齐'
    },
    {
      iconName: 'icon-zongxiangjuzhong',
      name: '水平居中'
    },
    {
      iconName: 'icon-youduiqi1',
      name: '右对齐'
    },
    {
      iconName: 'icon-shangduiqi',
      name: '上对齐'
    },
    {
      iconName: 'icon-hengxiangjuzhong',
      name: '垂直居中'
    },
    {
      iconName: 'icon-xiaduiqi',
      name: '下对齐'
    }
  ]

  return (
    <DropDown data={ dropDownList }>
      <div className={ style.column }>
        <IconFont className={ style.icon } name="#icon-jueduijuzhong"/>
        水平对齐
        <IconFont className={ style.dropDownIcon } name="#icon-xiala"/>
      </div>
    </DropDown>
  )
}