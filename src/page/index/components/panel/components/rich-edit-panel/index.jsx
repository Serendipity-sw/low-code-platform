import React from 'react'
import {menuTypeMap} from '../../store/menu-type'
import FontDataSource from './components/font-data-source'
import {controlsType} from '../../../../utils/controls-type'
import StyleComponent from "./components/style-component"

export default props => {
  return (
    <>
      <StyleComponent
        className={menuTypeMap[controlsType.richEdit.name].style.value === props.selectTab || props.className}/>
      <FontDataSource
        className={menuTypeMap[controlsType.richEdit.name].data.value === props.selectTab || props.className}/>
    </>
  )
}