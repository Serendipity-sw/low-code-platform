import React from 'react'
import { menuTypeMap } from '../../store/menu-type'
import FontDataSource from './components/font-data-source'
import { controlsType } from '../../../../utils/controls-type'

export default props => {
  return (
    <>
      <FontDataSource
        className={ menuTypeMap[controlsType.richEdit.name].data.value === props.selectTab || props.className }/>
    </>
  )
}