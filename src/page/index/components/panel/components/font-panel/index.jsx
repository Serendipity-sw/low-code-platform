import React from 'react'
import { menuTypeMap } from '../../store/menu-type'
import StyleComponent from './components/style-component'
import FontDataSource from './components/font-data-source'

export default props => {
  return (
    <>
      <StyleComponent className={ menuTypeMap.style.value === props.selectTab || props.className }/>
      <FontDataSource className={ menuTypeMap.data.value === props.selectTab || props.className }/>
    </>
  )
}