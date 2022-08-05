import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import { useDispatch, useSelector } from 'react-redux'
import { cloneDeep } from 'lodash'
import { EditPageItemList } from '../../../../../../store/lowCodeDataReducers'

export default _ => {

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const handleDelLine = _ => {
    const list = cloneDeep( pageContentData.filter( item => selectControls.includes( item.id ) ) )
    list.forEach( item => {
      item.style.textDecoration = 'line-through'
    } )
    dispatch( EditPageItemList( list ) )
  }

  return (
    <div className={ [ style.column, selectControls.length || style.disabled ].join( ' ' ) } onClick={ handleDelLine }>
      <IconFont className={ style.icon } name="#icon-shanchuxian"/>
      删除线
    </div>
  )
}