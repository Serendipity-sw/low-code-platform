import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import { useDispatch, useSelector } from 'react-redux'
import { cloneDeep, throttle } from 'lodash'
import { EditPageItemList } from '../../../../../../store/lowCodeDataReducers'

export default _ => {

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const handleHideControls = _ => {
    const list = cloneDeep( pageContentData.filter( item => selectControls.includes( item.id ) ) )
    list.forEach( item => {
      item.style.display = 'none'
    } )
    dispatch( EditPageItemList( list ) )
  }

  return (
    <div className={ [ style.column, selectControls.length || style.disabled ].join( ' ' ) }
         onClick={ throttle( handleHideControls, 200 ) }>
      <IconFont className={ style.icon } name="#icon-yincang"/>
      隐藏
    </div>
  )
}