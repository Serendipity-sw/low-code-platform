import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import { useDispatch, useSelector } from 'react-redux'
import { throttle } from 'lodash'
import { DeleteControls } from '../../../../../../store/lowCodeDataReducers'

export default _ => {

  const { selectControls } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const handleDelete = _ => {
    dispatch( DeleteControls() )
  }

  return (
    <div className={ [ style.column, selectControls.length || style.disabled ].join( ' ' ) }
         onClick={ throttle( handleDelete, 200 ) }>
      <IconFont className={ style.icon } name="#icon-shanchu"/>
      删除
    </div>
  )
}