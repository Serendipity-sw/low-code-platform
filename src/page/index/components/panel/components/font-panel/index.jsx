import React from 'react'
import { menuTypeMap } from '../../store/menu-type'
import StyleComponent from './components/style-component'
import FontDataSource from './components/font-data-source'
import { controlsType } from '../../../../utils/controls-type'

export default props => {
  return (
    <>
      <StyleComponent
        className={ menuTypeMap[controlsType.div.name].style.value === props.selectTab || props.className }/>
      <FontDataSource
        className={ menuTypeMap[controlsType.div.name].data.value === props.selectTab || props.className }/>
    </>
  )
}