import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import ColorPickerDropDown from '../../../../../../../../components/color-picker-drop-down'
import { useSelector } from 'react-redux'

export default _ => {

  const { selectControls } = useSelector( state => state.lowCodeData )

  return (
    <ColorPickerDropDown colorType={ 'backgroundColor' } disabled={ selectControls.length === 0 }>
      <div className={ [ style.column, selectControls.length || style.disabled ].join( ' ' ) }>
        <IconFont className={ style.icon } name="#icon-beijingse"/>
        背景色
      </div>
    </ColorPickerDropDown>
  )
}