import React from 'react'
import {menuTypeMap} from '../../store/menu-type'
import {controlsType} from '../../../../utils/controls-type'
import StyleComponent from "./components/style-component"

export default props => {
  return (
    <>
      <StyleComponent
        className={menuTypeMap[controlsType.map.name].style.value === props.selectTab || props.className}/>
    </>
  )
}