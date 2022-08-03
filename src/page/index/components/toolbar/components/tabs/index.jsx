import React from 'react'
import style from './index.pcss'
import { useDispatch, useSelector } from 'react-redux'
import { editSelected } from '../../store'
import { Segmented } from 'antd'

export default _ => {
  const selected = useSelector( state => state.toolbarStore.selected )
  const dispatch = useDispatch()

  const handleSelected = select => {
    if ( select !== selected ) {
      dispatch( editSelected( select ) )
    }
  }

  return (
    <div className={ style.init }>
      <Segmented options={ [
        {
          label: '开始',
          value: 1
        },
        {
          label: '插入',
          value: 2
        }
      ] } value={ selected } onChange={ value => handleSelected( value ) }/>
    </div>
  )
}