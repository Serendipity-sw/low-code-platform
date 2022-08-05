import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import { useDispatch, useSelector } from 'react-redux'
import { cloneDeep } from 'lodash'
import { EditPageItemList } from '../../../../../../store/lowCodeDataReducers'

export default _ => {

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const handleGlideLine = _ => {
    const list = cloneDeep( pageContentData.filter( item => selectControls.includes( item.id ) ) )
    list.forEach( item => {
      item.style.textDecoration = 'underline'
    } )
    dispatch( EditPageItemList( list ) )
  }

  return (
    <div className={ [ style.column, selectControls.length || style.disabled ].join( ' ' ) }
         onClick={ handleGlideLine }>
      <IconFont className={ style.icon } name="#icon-xiahuaxian"/>
      下滑线
    </div>
  )
}