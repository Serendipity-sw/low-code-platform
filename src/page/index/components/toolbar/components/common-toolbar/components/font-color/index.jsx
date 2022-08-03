import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import ColorPickerDropDown from '../../../../../../../../components/color-picker-drop-down'


export default _ => {
  return (
    <ColorPickerDropDown>
      <div className={ style.column }>
        <IconFont className={ style.icon } name="#icon-beijingse"/>
        背景色
      </div>
    </ColorPickerDropDown>
  )
}