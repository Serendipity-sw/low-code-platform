import React from 'react'
import {menuTypeMap} from '../../store/menu-type'
import StyleComponent from './components/style-component'
import {controlsType} from '../../../../utils/controls-type'

export default props => {
  return (
    <>
      <StyleComponent
        className={menuTypeMap[controlsType.chartLine.name].style.value === props.selectTab || props.className}/>
    </>
  )
}