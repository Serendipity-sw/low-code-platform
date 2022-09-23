import React from 'react'
import {menuTypeMap} from '../../store/menu-type'
import {controlsType} from '../../../../utils/controls-type'
import StyleComponent from "./components/style-component"
import ImgDataComponent from "./components/img-data-component"

export default props => {
  return (
    <>
      <StyleComponent
        className={menuTypeMap[controlsType.img.name].style.value === props.selectTab || props.className}/>
      <ImgDataComponent
        className={menuTypeMap[controlsType.img.name].data.value === props.selectTab || props.className}/>
    </>
  )
}