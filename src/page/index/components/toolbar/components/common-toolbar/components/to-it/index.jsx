import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import DropDown from '../../../../../../../../components/drop-down'
import { useDispatch, useSelector } from 'react-redux'
import { cloneDeep } from 'lodash'
import { EditPageItemList } from '../../../../../../store/lowCodeDataReducers'

export default _ => {

  const cloneDeepProcessList = textAlign => {
    const list = cloneDeep( pageContentData.filter( item => selectControls.includes( item.id ) ) )
    list.forEach( item => {
      item.style.textAlign = textAlign
    } )
    dispatch( EditPageItemList( list ) )
  }

  const handleAlignLeft = _ => {
    cloneDeepProcessList( 'left' )
  }

  const handleAlignCenter = _ => {
    cloneDeepProcessList( 'center' )
  }

  const handleAlignRight = _ => {
    cloneDeepProcessList( 'right' )
  }

  const dropDownList = [
    {
      iconName: 'icon-zuoduiqi',
      name: '左对齐',
      onClick: handleAlignLeft
    },
    {
      iconName: 'icon-juzhongduiqi',
      name: '居中对齐',
      onClick: handleAlignCenter
    },
    {
      iconName: 'icon-youduiqi',
      name: '右对齐',
      onClick: handleAlignRight
    }
  ]

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  return (
    <DropDown data={ dropDownList } disabled={ selectControls.length === 0 }>
      <div className={ [ style.column, selectControls.length || style.disabled ].join( ' ' ) }>
        <IconFont className={ style.icon } name="#icon-liangduanduiqi"/>
        排列
        <IconFont className={ style.dropDownIcon } name="#icon-xiala"/>
      </div>
    </DropDown>
  )
}