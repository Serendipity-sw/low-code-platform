import React, { useEffect } from 'react'
import style from './index.pcss'
import Tabs from './components/tabs'
import { useDispatch, useSelector } from 'react-redux'
import { dataInit } from './store'
import CommonToolbar from './components/common-toolbar'
import InsertToolbar from './components/insert-toolbar'

export default _ => {
  const dispatch = useDispatch()
  const selected = useSelector( state => state.toolbarStore.selected )

  useEffect( _ => {
    return _ => dispatch( dataInit() )
  }, [] )

  const filterComponent = select => {
    switch ( select ) {
      case 1:
        return <CommonToolbar/>
      case 2:
        return <InsertToolbar/>
      default:
        return
    }
  }

  return (
    <div className={ style.init }>
      <Tabs/>
      <div className={ style.toolbar }>
        {
          filterComponent( selected )
        }
      </div>
    </div>
  )
}