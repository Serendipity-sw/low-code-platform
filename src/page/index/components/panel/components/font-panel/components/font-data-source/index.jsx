import React, { startTransition } from 'react'
import style from './index.pcss'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { cloneDeep } from 'lodash'
import { EditPageItemList } from '../../../../../../store/lowCodeDataReducers'

export default props => {

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  const selectControlsList = _ => cloneDeep( pageContentData.filter( item => selectControls.includes( item.id ) ) )

  const changeSelectControlsItem = ( { target } ) => {
    startTransition( _ => {
      const list = selectControlsList()
      list.forEach( item => {
        item.data = target.value
      } )
      dispatch( EditPageItemList( list ) )
    } )
  }

  return (
    <div className={ [ style.init, props.className ].join( ' ' ) }>
      <div className={ style.row }>
        <span className={ style.rowTitle }>文本内容</span>
        <Input.TextArea rows={ 6 } className={ style.contentEdit }
                        defaultValue={ pageContentData.find( item => selectControls.includes( item.id ) )?.data }
                        onChange={ changeSelectControlsItem }/>
      </div>
    </div>
  )
}