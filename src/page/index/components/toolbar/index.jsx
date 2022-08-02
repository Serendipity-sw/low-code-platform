import React, { useEffect } from 'react'
import style from './index.pcss'
import Tabs from './components/tabs'
import { useDispatch, useSelector } from 'react-redux'
import { dataInit } from './store'
import CommonToolbar from './components/common-toolbar'

export default _ => {
  const dispatch = useDispatch()
  const selected = useSelector( state => state.toolbarStore.selected )

  useEffect( _ => {
    return _ => dispatch( dataInit() )
  }, [] )

  return (
    <div className={ style.init }>
      <Tabs/>
      <div className={ style.toolbar }>
        <CommonToolbar className={ selected === 1 ? '' : style.none }/>
      </div>
    </div>
  )
}