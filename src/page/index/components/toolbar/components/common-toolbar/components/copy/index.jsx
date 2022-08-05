import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import { useDispatch, useSelector } from 'react-redux'
import { throttle, cloneDeep } from 'lodash'
import { AddPageItemListAndSelect } from '../../../../../../store/lowCodeDataReducers'
import { v4 as uuidV4 } from 'uuid'

export default _ => {

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const handleCopyControls = _ => {
    if ( selectControls.length ) {
      dispatch( AddPageItemListAndSelect( cloneDeep( pageContentData.filter( item => selectControls.includes( item.id ) ) ).map( item => ( {
        ...item,
        id: uuidV4()
      } ) ) ) )
    }
  }

  return (
    <div className={ [ style.column, selectControls.length || style.disabled ].join( ' ' ) }
         onClick={ throttle( handleCopyControls, 200 ) }>
      <IconFont className={ style.icon } name="#icon-copy"/>
      复制
    </div>
  )
}