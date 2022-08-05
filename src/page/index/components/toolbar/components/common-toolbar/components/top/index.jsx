import React from 'react'
import style from '../index.pcss'
import IconFont from '../../../../../../../../components/icon-font'
import DropDown from '../../../../../../../../components/drop-down'
import { useDispatch, useSelector } from 'react-redux'
import { cloneDeep } from 'lodash'
import { EditPageItemList } from '../../../../../../store/lowCodeDataReducers'

export default _ => {
  const cloneDeepFilterList = _ => {
    return cloneDeep( pageContentData.filter( item => selectControls.includes( item.id ) ) )
  }

  const handleSetTop = _ => {
    if ( selectControls.length ) {
      const zIndexMax = Math.max( ...pageContentData.map( item => item.style.zIndex ) )
      const list = cloneDeepFilterList()
      list.forEach( item => {
        item.style.zIndex = zIndexMax + 1
      } )
      dispatch( EditPageItemList( list ) )
    }
  }

  const handleSetMoveUp = _ => {
    if ( selectControls.length ) {
      const zIndexMax = Math.max( ...pageContentData.map( item => item.style.zIndex ) )
      const list = cloneDeepFilterList()
      list.forEach( item => {
        item.style.zIndex < zIndexMax && ( item.style.zIndex += 1 )
      } )
      dispatch( EditPageItemList( list ) )
    }
  }

  const handleSetMoveDown = _ => {
    if ( selectControls.length ) {
      const list = cloneDeepFilterList()
      list.forEach( item => {
        item.style.zIndex > 1 && ( item.style.zIndex -= 1 )
      } )
      dispatch( EditPageItemList( list ) )
    }
  }

  const handleSetDown = _ => {
    if ( selectControls.length ) {
      const zIndexMin = Math.min( ...pageContentData.map( item => item.style.zIndex ) )
      const list = cloneDeep( pageContentData ),
        minZIndexList = list.filter( item => item.style.zIndex === zIndexMin )
      if ( minZIndexList.filter( item => selectControls.includes( item.id ) ).length !== selectControls.length ) {
        list.forEach( item => {
          if ( selectControls.includes( item.id ) ) {
            item.style.zIndex = 1
          } else {
            item.style.zIndex += 1
          }
        } )
        dispatch( EditPageItemList( list ) )
      }
    }
  }

  const dropDownList = [
    {
      iconName: 'icon-zhiding',
      name: '置顶',
      onClick: handleSetTop
    },
    {
      iconName: 'icon-shangyiyiceng',
      name: '上移一层',
      onClick: handleSetMoveUp
    },
    {
      iconName: 'icon-xiayiyiceng',
      name: '下移一层',
      onClick: handleSetMoveDown
    },
    {
      iconName: 'icon-zhidi',
      name: '置底',
      onClick: handleSetDown
    }
  ]

  const { selectControls, pageContentData } = useSelector( state => state.lowCodeData )

  const dispatch = useDispatch()

  return (
    <DropDown data={ dropDownList } disabled={ selectControls.length === 0 }>
      <div className={ [ style.column, selectControls.length || style.disabled ].join( ' ' ) }>
        <IconFont className={ style.icon } name="#icon-zhiding"/>
        置顶
        <IconFont className={ style.dropDownIcon } name="#icon-xiala"/>
      </div>
    </DropDown>
  )
}