import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import DropDown from '../../../../../../../../components/drop-down'

export default _ => {
  const dropDownList = [
    {
      iconName: 'icon-zhiding',
      name: '置顶'
    },
    {
      iconName: 'icon-shangyiyiceng',
      name: '上移一层'
    },
    {
      iconName: 'icon-xiayiyiceng',
      name: '下移一层'
    },
    {
      iconName: 'icon-zhidi',
      name: '置底'
    }
  ]

  return (
    <DropDown data={dropDownList}>
      <div className={ style.column }>
        <IconFont className={ style.icon } name="#icon-zhiding"/>
        置顶
        <IconFont className={ style.dropDownIcon } name="#icon-xiala"/>
      </div>
    </DropDown>
  )
}