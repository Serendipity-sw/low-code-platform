import React, { useEffect } from 'react'
import style from './index.pcss'
import Tabs from './components/tabs'
import { useDispatch } from 'react-redux'
import { dataInit } from './store'

export default _ => {
  const dispatch = useDispatch()

  useEffect( _ => {
    return _ => dispatch( dataInit() )
  } )

  return (
    <div className={ style.init }>
      <Tabs/>
    </div>
  )
}